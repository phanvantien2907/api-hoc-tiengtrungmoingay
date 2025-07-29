import { HttpStatus } from '@nestjs/common';
import { CreateVocabularyDto } from './dto/create-vocabulary.dto';
import { UpdateVocabularyDto } from './dto/update-vocabulary.dto';
import { Vocabularies } from 'src/vocabularies/schema/vocabulary.schema';
import { Model } from 'mongoose';
import { Categories } from 'src/categories/schema/category.schema';
export declare class VocabulariesService {
    private vocabularyModel;
    private categoryModel;
    constructor(vocabularyModel: Model<Vocabularies>, categoryModel: Model<Categories>);
    create(createVocabularyDto: CreateVocabularyDto): Promise<{
        msg: string;
        status: HttpStatus;
        data: import("mongoose").Document<unknown, {}, Vocabularies, {}> & Vocabularies & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    findAll(page: number, limit: number): Promise<{
        status: HttpStatus;
        msg: string;
        data: (import("mongoose").Document<unknown, {}, Vocabularies, {}> & Vocabularies & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        status: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, Vocabularies, {}> & Vocabularies & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    update(id: string, updateVocabularyDto: UpdateVocabularyDto): Promise<{
        msg: string;
        status: HttpStatus;
        data: any;
    }>;
    remove(id: string): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    findVocabularyById(id: string): Promise<void>;
}
