import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    create(createQuizDto: CreateQuizDto): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
        data: import("mongoose").Document<unknown, {}, import("./schema/quiz.schema").Quiz, {}> & import("./schema/quiz.schema").Quiz & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
        data: (import("mongoose").Document<unknown, {}, import("./schema/quiz.schema").Quiz, {}> & import("./schema/quiz.schema").Quiz & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
        data: import("mongoose").Document<unknown, {}, import("./schema/quiz.schema").Quiz, {}> & import("./schema/quiz.schema").Quiz & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    update(id: string, updateQuizDto: UpdateQuizDto): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
        data: any;
    }>;
    remove(id: string): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
