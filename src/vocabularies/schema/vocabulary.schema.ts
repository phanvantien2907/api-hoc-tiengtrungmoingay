import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Vocabularies extends Document {
    declare _id: mongoose.Types.ObjectId;
    @Prop({ type: String, required: true, index: true })
     simplified: string;

     @Prop({ type: String })
     radical: string;

    @Prop({ type: Number, index: true })
     frequency: number;

    @Prop({ type: [String] })
     pos: string[];

   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' })
    categories: Types.ObjectId;

    @Prop({default: false, type: Boolean})
    is_deleted: boolean;

    @Prop({default: true, type: Boolean})
    is_active: boolean;
}
export const VocabulariesSchema = SchemaFactory.createForClass(Vocabularies);