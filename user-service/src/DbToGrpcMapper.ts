import { User } from "../../api/grpc-ts/users_pb";
import { IDbUser, DbUser } from "./models/User";
import { isNullOrUndefined } from "util";

/**
 * Helper class to simplify the work with gRPC and database objects.
 */
export class DbGrpcMapper {

    Convert(grpcUser: User): IDbUser;

    /**
     * Convert db objects to gRPC objects and vice versa.
     *
     * Supported conversions:
     *
     * gRPC to DB
     * - User to IDbUser
     */
    Convert(input: User) : IDbUser {

        if (input instanceof User) {

            console.log('[DbGrpcMapper] Convert User to IDbUser');
            return this.ConvertGrpcUserToDbUser(input as User);

        } else {

            console.error('[DbGrpcMapper] Can not convert: ', input);
            return null;
        }
    }

    /**
     * Takes a gRPC user object and converts it into a database user object.
     */
    private ConvertGrpcUserToDbUser(grpcComment: User): IDbUser {

        const dbUser: IDbUser = new DbUser();

        dbUser.user_name = grpcComment.getUserName();
        dbUser.email = grpcComment.getEmail();
        dbUser.password_hash = grpcComment.getPassword();
        dbUser.is_blogger = grpcComment.getIsBlogger();

        return dbUser;
    }
}