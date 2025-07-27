import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { ResetToken } from 'src/auth/schema/resert-token.schema';
import { SendMailService } from 'src/services/send-mail.services';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
export declare class UsersService {
    private userModel;
    private resetModel;
    private readonly mailerService;
    constructor(userModel: Model<User>, resetModel: Model<ResetToken>, mailerService: SendMailService);
    profile(userId: string): Promise<{
        success: HttpStatus;
        msg: string;
        data: import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    changePassword(userId: any, oldPassword: string, newPassword: string): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    updateProfile(userId: string, body: UpdateUserDto): Promise<{
        success: HttpStatus;
        msg: string;
    }>;
}
