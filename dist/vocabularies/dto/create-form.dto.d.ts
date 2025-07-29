import { TranscriptionsDto } from "src/vocabularies/dto/create-transcriptions.dto";
export declare class CreateFormDto {
    traditional: string;
    transcriptions: TranscriptionsDto;
    meanings: string[];
    classifiers: string[];
}
