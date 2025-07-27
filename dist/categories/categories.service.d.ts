import { HttpStatus } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Categories } from 'src/categories/schema/category.schema';
import { Model } from 'mongoose';
export declare class CategoriesService {
    private categoryModel;
    constructor(categoryModel: Model<Categories>);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        msg: string;
        status: HttpStatus;
        data: import("mongoose").Document<unknown, {}, Categories, {}> & Categories & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        msg: string;
        status: HttpStatus;
        data: (import("mongoose").Document<unknown, {}, Categories, {}> & Categories & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string): Promise<{
        msg: string;
        status: HttpStatus;
        data: (import("mongoose").Document<unknown, {}, Categories, {}> & Categories & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    remove(id: string): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    findCategoryById(id: string): Promise<import("mongoose").Document<unknown, {}, Categories, {}> & Categories & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
