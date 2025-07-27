import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { LoginDTO } from 'src/auth/dto/login.dto';
import { RefreshToken } from 'src/auth/schema/refresh-token.schema';
import { ResetToken } from 'src/auth/schema/resert-token.schema';
import { JwtService } from '@nestjs/jwt';
import { SendMailService } from 'src/services/send-mail.services';
import { User } from 'src/users/schema/user.schema';
export declare class AuthService {
    private readonly userModel;
    private refreshModel;
    private resetModel;
    private readonly mailerService;
    private jwtService;
    constructor(userModel: Model<User>, refreshModel: Model<RefreshToken>, resetModel: Model<ResetToken>, mailerService: SendMailService, jwtService: JwtService);
    register(registerData: RegisterDTO): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    login(loginData: LoginDTO): Promise<{
        status: HttpStatus;
        access_token: string;
        refresh_token: string;
        msg: string;
    }>;
    logout(userId: string): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    changePassword(userId: any, oldPassword: string, newPassword: string): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    forgetPassword(email: string): Promise<{
        msg: string;
        link: string;
        status: HttpStatus;
    }>;
    resetPassword(newPassword: string, token: string): Promise<{
        msg: string;
        status: HttpStatus;
    }>;
    generatortoken(userId: string): Promise<{
        access_token: string;
        refresh_token: string;
        status: HttpStatus;
    }>;
    refreshtoken(rftoken: string): Promise<{
        access_token: string;
        status: HttpStatus;
    }>;
}
