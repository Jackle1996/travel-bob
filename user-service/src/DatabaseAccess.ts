import * as mongoose from 'mongoose';
import { EnvProvider } from './helpers/EnvProvider';
import { IDbUser, DbUser } from './models/User';
import { isNullOrUndefined } from 'util';

/**
 * Provides functionallity to access the database.
 */
export class DatabaseAccess {

    /**
     * Connect to the MongoDb instance.
     * The connection has to be opened before any other method is called.
     */
    public async Connect(): Promise<Boolean> {

        console.log('[DatabaseAccess] Connecting to db..');

        let connected = false;
        const dbName = 'user-microservice';
        const connectionUri = `mongodb+srv://${EnvProvider.DbUser}:${EnvProvider.DbPassword}@travelbobcluster-on2qn.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`;

        await mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err: Error) => {

            err ? console.error(`[DatabaseAccess] Error while connecting to mongoDb with user "${EnvProvider.DbUser}": `, err)
                : console.log(`[DatabaseAccess] Connected to db "${dbName}" with user "${EnvProvider.DbUser}".`);
            connected = !err;
        }).catch(err =>
            console.error(`[DatabaseAccess] Mongoose Error: `, err));

        mongoose.connection.on('error', err => {
            console.error('[DatabaseAccess] Mongoose connection error: ', err);
        });

        return connected;
    }

    /**
     * Disconnect from the MongoDB.
     * This method should be called when the app is shut down.
     */
    public Disconnect(): void {

        console.log('[DatabaseAccess] Disconnecting..');
        mongoose.disconnect((err) => {
            err ? console.error(`[DatabaseAccess] Error while disconnecting: `, err)
                : console.log('[DatabaseAccess] Disconnected.');
        });
    }

    /**
     * Save new comment to database.
     * Returns a boolean indicating whether the operation was successful or not.
     */
    public async CreateNewUser(newUser: IDbUser): Promise<boolean> {

        console.log(`[DatabaseAccess] Creating new user "${newUser.user_name}".`);

        if (await this.OtherUserHasSameEmail(newUser)) {
            console.error(`[DatabaseAccess] Error: There is already a user with the same email!`);
            return false;
        }

        const dbUser: void | IDbUser = await newUser.save().catch((reason: any) => {
            console.error(`[DatabaseAccess] Error while saving new user: `, reason);
        });

        if (isNullOrUndefined(dbUser)) {
            return false;
        } else {
            console.log(`[DatabaseAccess] User "${(<IDbUser>dbUser).user_name}" saved successfully.`);
            return true;
        }
    }

    /**
     * Gets an user from the database by email.
     * If there is no user with the specified email,
     * the method returns 'null'.
     */
    public async GetUserByEmail(email: String): Promise<IDbUser> {

        console.log(`[DatabaseAccess] Get user by email: "${email}".`);

        const dbUser: void | IDbUser = await DbUser.findOne({ email: email })
            .exec()
            .catch((reason: any) => {
                console.error(
                    `[DatabaseAccess] Error while searching user with email '${email}': `,
                    reason);
        });

        return isNullOrUndefined(dbUser) ? null : <IDbUser>dbUser;
    }

    /**
     * Check if there is already a user in the database with the same email.
     * Returns true if the email is unique, otherwise false.
     */
    private async OtherUserHasSameEmail(newUser: IDbUser): Promise<boolean> {

        const userWithSameEmail: void | IDbUser = await DbUser.findOne({ email: newUser.email })
            .exec()
            .catch((reason: any) => {
                console.log(`[DatabaseAccess] Can't find any user in database. That's ok.`);
            });
        if (isNullOrUndefined(userWithSameEmail)) {
            return false;
        } else {
            return true;
        }
    }
}
