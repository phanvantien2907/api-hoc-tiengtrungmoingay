import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
        data: import("mongoose").Document<unknown, {}, import("./schema/category.schema").Categories, {}> & import("./schema/category.schema").Categories & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
        data: (import("mongoose").Document<unknown, {}, import("./schema/category.schema").Categories, {}> & import("./schema/category.schema").Categories & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
        data: (import("mongoose").Document<unknown, {}, import("./schema/category.schema").Categories, {}> & import("./schema/category.schema").Categories & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    remove(id: string): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
