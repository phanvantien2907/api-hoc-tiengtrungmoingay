import { Types } from "mongoose";
import { Document } from "mongoose";
export declare class Categories extends Document {
    _id: Types.ObjectId;
    name: string;
    slug?: string;
    description: string;
    vocabulary_count: number;
    order: number;
    is_active: boolean;
    is_deleted: boolean;
}
export declare const CategoriesSchema: import("mongoose").Schema<Categories, import("mongoose").Model<Categories, any, any, any, Document<unknown, any, Categories, any> & Categories & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Categories, Document<unknown, {}, import("mongoose").FlatRecord<Categories>, {}> & import("mongoose").FlatRecord<Categories> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
