import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { CreateQuestionDto } from "src/quiz/dto/create-question.dto";

const QuestionSchema = SchemaFactory.createForClass(CreateQuestionDto);


@Schema({ versionKey: false, timestamps: true })
export class Quiz extends Document {
 declare _id: mongoose.Types.ObjectId;

@Prop({ type: String, required: true, index: true })
title: string;

@Prop({type: String, required: true})
slug: string;

@Prop({ type: String, required: false })
description: string;


@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' })
categories: mongoose.Types.ObjectId[];

@Prop([
    {
      question_text: String,
      options: [String],
      answer: String,
    },
  ])
  questions: {
    question_text: string;
    options: string[];
    answer: string;
  }[];

@Prop({ type: Boolean, default: true })
is_active: boolean;
@Prop({ type: Boolean, default: false })
is_deleted: boolean;


}
export const QuizSchema = SchemaFactory.createForClass(Quiz);
