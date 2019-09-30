export class EnvProvider {
    static DbUser: string = process.env['DB_USER'];
    static DbPassword: string = process.env['DB_PASS'];
    static JWTSecret: string = process.env['JWT_SECRET'];
}

