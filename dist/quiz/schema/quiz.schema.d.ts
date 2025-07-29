import mongoose, { Document } from "mongoose";
export declare class Quiz extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    slug: string;
    description: string;
    categories: mongoose.Types.ObjectId[];
    questions: {
        question_text: string;
        options: string[];
        answer: string;
    }[];
    is_active: boolean;
    is_deleted: boolean;
}
export declare const QuizSchema: mongoose.Schema<Quiz, mongoose.Model<Quiz, any, any, any, mongoose.Document<unknown, any, Quiz, any> & Quiz & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Quiz, mongoose.Document<unknown, {}, mongoose.FlatRecord<Quiz>, {}> & mongoose.FlatRecord<Quiz> & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
