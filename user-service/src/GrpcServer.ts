import { DatabaseAccess } from "./DatabaseAccess";
import { IDbUser } from "./models/User";

import { DbGrpcMapper } from "./DbToGrpcMapper";
import { EnvProvider } from "../../common/EnvProvider";

import { isNull, isNullOrUndefined } from "util";
import { sign, verify, VerifyErrors } from "jsonwebtoken";
import { ServerUnaryCall, sendUnaryData, MetadataValue } from "grpc";
import { IUsersAPIServer, UsersAPIService } from "../../api/grpc-ts/users_grpc_pb";
import {
    CreateNewUserRequest, CreateNewUserReply,
    LogInRequest, LogInReply,
    VerifyTokenRequest, VerifyTokenReply
} from "../../api/grpc-ts/users_pb";

class UsersAPI implements IUsersAPIServer {

    /**
     * Initializes a new instance of the UsersAPI.
     */
    constructor(
        private databaseAccess: DatabaseAccess,
        private dbToGrpcMapper: DbGrpcMapper) {
            if (isNullOrUndefined(EnvProvider.JWTSecret)) {
                throw new Error(`Environment variable 'JWT_SECRET' required!.`);
            }
         }

    /**
     * Create a new user.
     */
    public async createNewUser(call: ServerUnaryCall<CreateNewUserRequest>, callback: sendUnaryData<CreateNewUserReply>) {

        console.log('[GrpcServer] UsersAPI.createNewUser()');

        const dbUser: IDbUser = this.dbToGrpcMapper.Convert(call.request.getUser());
        const ok: boolean = await this.databaseAccess.CreateNewUser(dbUser);

        const err = ok ? null : new Error('Error: Could not save new user. Probably some data missing in the request or another user with the same email already exists.')
        callback(err, new CreateNewUserReply());
    }

    /**
     * Log in with an existing user.
     */
    public async logIn(call: ServerUnaryCall<LogInRequest>, callback: sendUnaryData<LogInReply>) {

        console.log('[GrpcServer] UsersAPI.logIn()');

        const email: string = call.request.getEmail();
        const password: string = call.request.getPassword();
        const user: IDbUser = await this.databaseAccess.GetUserByEmail(email);

        if (isNull(user)) {
            console.log(`[GrpcServer] Log in failed. Can't find user with email '${email}'`);
            callback(new Error('Log in failed: User does not exist.'), null);
            return;
        }
        const isMatch: boolean = await user.comparePassword(password);
        console.log(`[GrpcServer] Passowrds match: ${isMatch}`);
        const err: Error = isMatch ? null : new Error('Log in failed: Wrong password.');
        const reply: LogInReply = new LogInReply();

        if (isMatch) {
            const jwtPayload = {
                user: user._id,
                name: user.user_name,
                isBlogger: user.is_blogger
            };
            const token = sign(jwtPayload, EnvProvider.JWTSecret);
            console.log(`[GrpcServer] JWT: ${token}`);
            reply.setJwt(token);
        }

        callback(err, reply);
    }

    /**
     * Verify a jwt token.
     */
    public async verifyToken(call: ServerUnaryCall<VerifyTokenRequest>, callback: sendUnaryData<VerifyTokenReply>) {

        console.log('[GrpcServer] UsersAPI.verifyToken()');

        const reply: VerifyTokenReply = new VerifyTokenReply();
        const authMetadata: MetadataValue[] = call.metadata.get('authorization');
        console.log(`[GrpcServer] Received 'authorization' metadata: ${authMetadata}`);
        if (isNullOrUndefined(authMetadata)) {
            console.log(`[GrpcServer] Expected metadata.authorization to exist, but it doesn't.`);
            callback(new Error(`Expected metadata 'authorization' but it doesn't exist.`), reply);
            return;
        }
        if (authMetadata.length != 1) {
            console.log(`[GrpcServer] Expected authMetadata.values to have 1 entry but it has ${authMetadata.length}.`);
            callback(new Error(`Expected metadata 'authorization' to have exactly one value but got ${authMetadata.length}.`), reply);
            return;
        }
        const token: string = <string>authMetadata[0];
        console.log(`[GrpcServer] Received token: ${token}`);
        verify(token, EnvProvider.JWTSecret, (err: VerifyErrors, decoded: string | object) => {

            if (err) {
                console.error(`[GrpcServer] Validation error while validating token: ${token}.\n Reason: ${err.message}`);
                reply.setValid(false);
            } else {
                reply.setValid(true);
            }
            callback(null, reply);
        });
    }
}

export {
    UsersAPI,
    UsersAPIService
}