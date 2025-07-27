import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
export declare class Vocabularies extends Document {
    _id: mongoose.Types.ObjectId;
    simplified: string;
    radical: string;
    frequency: number;
    pos: string[];
    categories: Types.ObjectId;
    is_deleted: boolean;
    is_active: boolean;
}
export declare const VocabulariesSchema: mongoose.Schema<Vocabularies, mongoose.Model<Vocabularies, any, any, any, mongoose.Document<unknown, any, Vocabularies, any> & Vocabularies & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Vocabularies, mongoose.Document<unknown, {}, mongoose.FlatRecord<Vocabularies>, {}> & mongoose.FlatRecord<Vocabularies> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
