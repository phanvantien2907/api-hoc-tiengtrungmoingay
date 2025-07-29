import { CreateFormDto } from "src/vocabularies/dto/create-form.dto";
export declare class CreateVocabularyDto {
    simplified: string;
    radical: string;
    frequency: number;
    pos: string[];
    forms: CreateFormDto[];
    categories: string;
}
