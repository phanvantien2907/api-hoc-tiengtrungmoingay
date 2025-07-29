import { CreateQuestionDto } from "src/quiz/dto/create-question.dto";
export declare class CreateQuizDto {
    title: string;
    description?: string;
    categories: string;
    questions: CreateQuestionDto[];
}
