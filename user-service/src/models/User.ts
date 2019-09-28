import { Document, Schema, model, HookNextFunction } from "mongoose";
import { hash, compare } from "bcrypt";

/*
 * The interface defines the document type. Used in the code.
 */
export interface IDbUser extends Document {
    user_name: string,
    email: string,
    password_hash: string,
    is_blogger: boolean,
}

/*
 * The schema defines how the data is saved in the database.
 * Required fields must be set when the model.save() method is called.
 *  Otherwise en exception is thrown.
 */
export var UserSchema = new Schema({
    user_name: { type: String, required: true },
    email: { type: String, required: true },
    password_hash: { type: String, required: true },
    is_blogger: { type: Boolean, required: true },
});

/*
 * Passwords should never be saved in the database!
 * Instead hash them before saving.
 *
 * Can't use arrow function for callback because otherwise
 *  'this' won't work.
 */
UserSchema.pre<IDbUser>('save', function(next) {
    let user: IDbUser = this;
    hash(user.password_hash, 10).then((hashedPassword) => {
        user.password_hash = hashedPassword;
        next();
    }, (err: Error) => {
        next(err);
    });
});

/*
 * Check if a password if valid.
 */
UserSchema.methods.comparePassword = (candidatePassword: String, next: any): void => {
    compare(candidatePassword, this.password_hash, function(err, isMatch) {
        if(err) return next(err);
        next(null, isMatch)
    });
}

/*
 * The mongoose model for a User.
 */
export const DbUser = model<IDbUser>('User', UserSchema);