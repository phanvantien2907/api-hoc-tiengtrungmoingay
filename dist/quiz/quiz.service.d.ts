import { HttpStatus } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Model } from 'mongoose';
import { Categories } from 'src/categories/schema/category.schema';
import { Quiz } from 'src/quiz/schema/quiz.schema';
export declare class QuizService {
    private categoryModel;
    private quizModel;
    constructor(categoryModel: Model<Categories>, quizModel: Model<Quiz>);
    create(createQuizDto: CreateQuizDto): Promise<{
        msg: string;
        status: HttpStatus;
        data: import("mongoose").Document<unknown, {}, Quiz, {}> & Quiz & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        msg: string;
        status: HttpStatus;
        data: (import("mongoose").Document<unknown, {}, Quiz, {}> & Quiz & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        msg: string;
        status: HttpStatus;
        data: import("mongoose").Document<unknown, {}, Quiz, {}> & Quiz & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    update(id: string, updateQuizDto: UpdateQuizDto): Promise<{
        msg: string;
        status: HttpStatus;
        data: any;
    }>;
    remove(id: string): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    findQuizByID(categoryId: string): Promise<import("mongoose").Document<unknown, {}, Quiz, {}> & Quiz & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
