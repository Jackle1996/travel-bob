import { isNullOrUndefined } from "util";

export class EnvProvider {
    static DbUser: string = process.env['DB_USER'];
    static DbPassword: string = process.env['DB_PASS'];
    static JWTSecret: string = process.env['JWT_SECRET'];
    static USER_SERVICE_ADDRESS: string = EnvProvider.getUserServiceAddress();
    static COMMENT_SERVICE_ADDRESS: string = EnvProvider.getCommentServiceAddress();

    private static getUserServiceAddress(): string {
        const userServiceAddress: string = process.env['USER_SERVICE'];
        console.log(`[EnvProvider] USER_SERVICE=${userServiceAddress}`);
        return isNullOrUndefined(userServiceAddress) ? '0.0.0.0' : userServiceAddress;
    }

    private static getCommentServiceAddress(): string {
        const commentServiceAddress: string = process.env['COMMENT_SERVICE'];
        console.log(`[EnvProvider] COMMENT_SERVICE=${commentServiceAddress}`);
        return isNullOrUndefined(commentServiceAddress) ? '0.0.0.0' : commentServiceAddress;
    }
}
