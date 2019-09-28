import { DatabaseAccess } from "./DatabaseAccess";
import { IDbUser } from "./models/User";

import { DbGrpcMapper } from "./DbToGrpcMapper";

import { ServerUnaryCall, sendUnaryData } from "grpc";
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
        private dbToGrpcMapper: DbGrpcMapper) { }

    /**
     * Create a new user.
     */
    public async createNewUser(call: ServerUnaryCall<CreateNewUserRequest>, callback: sendUnaryData<CreateNewUserReply>) {

        console.log('[GrpcServer] CommentsAPI.createNewUser()');

        const dbUser: IDbUser = this.dbToGrpcMapper.Convert(call.request.getUser());
        const ok: boolean = await this.databaseAccess.CreateNewUser(dbUser);

        const err = ok ? null : new Error('Error: Could not save new user. Probably some data missing in the request or another user with the same email already exists.')
        callback(err, new CreateNewUserReply());
    }

    /**
     * Log in with an existing user.
     */
    public async logIn(call: ServerUnaryCall<LogInRequest>, callback: sendUnaryData<LogInReply>) {

        const username: string = call.request.getUserName();
        const password: string = call.request.getPassword();

        callback(new Error('NOT IMPLEMENTED'), null);
    }

    /**
     * Verify a jwt token.
     */
    public async verifyToken(call: ServerUnaryCall<VerifyTokenRequest>, callback: sendUnaryData<VerifyTokenReply>) {

        const jwt: string = call.request.getJwt();

        callback(new Error('NOT IMPLEMENTED'), null);
    }
}

export {
    UsersAPI,
    UsersAPIService
}