import { UsersAPIClient } from "../../../api/grpc-ts/users_grpc_pb";
import { isNullOrUndefined } from "util";
import { Metadata, credentials, ServiceError } from "grpc";
import { VerifyTokenRequest, VerifyTokenReply } from "../../../api/grpc-ts/users_pb";
import { EnvProvider } from "./EnvProvider";


class AuthChecker {

    private usersAPIClient: UsersAPIClient;

    constructor() {
        this.usersAPIClient = new UsersAPIClient(`${EnvProvider.USER_SERVICE_ADDRESS}:9092`, credentials.createInsecure(), null);
    }

    public async CheckMetadataForJWT(metadata: Metadata): Promise<boolean | Error> {

        const success: boolean | void | Error = await this.CheckUserPrivileges(metadata).catch(reason => {
            console.error(`[AuthChecker] Error while calling UserAPIClinet.verifyToken(): `, reason);
            return new Error('Error while verifying user credentials.');
        });
        if (isNullOrUndefined(success) || !success) {
            return new Error('UNAUTHORIZED!');
        }

        return success;
    }

    /**
     * Checks if the JWT in the methadata of the client's call is valid
     *  by calling the users API service.
     * @param metadata the metadata of the call from the web client.
     */
    private async CheckUserPrivileges(metadata: Metadata): Promise<boolean | void> {

        return new Promise<boolean>((resolve, reject) => {

            const request: VerifyTokenRequest = new VerifyTokenRequest();
            this.usersAPIClient.verifyToken(request, metadata, (error: ServiceError, response: VerifyTokenReply) => {

                if (error || isNullOrUndefined(response)) {
                    console.error(`[AuthChecker] Checking user privileges not successful. Response: ${response}`, error);
                    reject(error);
                    return;
                }
                resolve(response.getValid());
            });
        }).catch(reason => console.error(`[AuthChecker] Error from usersAPIClient.verifyToken() call: `, reason));
    }
}

export { AuthChecker };