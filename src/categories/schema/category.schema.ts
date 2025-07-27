import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false, timestamps: true })
export class Categories extends Document {
    declare _id: Types.ObjectId;

    @Prop({ required: true, unique: true })
    name: string;

     @Prop({ required: true, unique: true })
     slug?: string;

    @Prop({ default: null })
    description: string;

    @Prop({ default: 0 })
    vocabulary_count: number;

    @Prop({ default: 0 })
    order: number;

    @Prop({ default: true })
    is_active: boolean;

    @Prop({ default: false })
    is_deleted: boolean;
}
export const CategoriesSchema = SchemaFactory.createForClass(Categories);