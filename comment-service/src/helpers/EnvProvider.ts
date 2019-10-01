import { isNullOrUndefined } from "util";

export class EnvProvider {
    static DbUser: string = process.env['DB_USER'];
    static DbPassword: string = process.env['DB_PASS'];
    static JWTSecret: string = process.env['JWT_SECRET'];
    static USER_SERVICE_ADDRESS: string = EnvProvider.getUserServiceAddress();

    private static getUserServiceAddress(): string {
        const address: string = process.env['USER_SERVICE'];
        return isNullOrUndefined(address) ? '0.0.0.0' : address;
    }
}
