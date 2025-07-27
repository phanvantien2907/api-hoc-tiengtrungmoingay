import { VocabulariesService } from './vocabularies.service';
import { CreateVocabularyDto } from './dto/create-vocabulary.dto';
import { UpdateVocabularyDto } from './dto/update-vocabulary.dto';
export declare class VocabulariesController {
    private readonly vocabulariesService;
    constructor(vocabulariesService: VocabulariesService);
    create(createVocabularyDto: CreateVocabularyDto): string;
    findAll(page?: number, limit?: number): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/vocabulary.schema").Vocabularies, {}> & import("./schema/vocabulary.schema").Vocabularies & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/vocabulary.schema").Vocabularies, {}> & import("./schema/vocabulary.schema").Vocabularies & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    update(id: string, updateVocabularyDto: UpdateVocabularyDto): Promise<string>;
    remove(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
