import { Document, Types } from "mongoose";
export declare class User extends Document {
    _id: Types.ObjectId;
    username: string;
    email: string;
    fullname: string;
    password: string;
    is_active: boolean;
    birthday: Date;
    is_deleted: boolean;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any> & User & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}> & import("mongoose").FlatRecord<User> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
