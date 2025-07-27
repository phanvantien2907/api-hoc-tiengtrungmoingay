import { UsersService } from './users.service';
import { ChangePasswordDTO } from 'src/auth/dto/chage-password.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    profile(req: Request): Promise<{
        success: import("@nestjs/common").HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}> & import("./schema/user.schema").User & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    changePassword(req: Request, body: ChangePasswordDTO): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    updateProfile(req: Request, body: UpdateUserDto): Promise<{
        success: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
