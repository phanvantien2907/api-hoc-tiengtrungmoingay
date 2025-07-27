import { AuthService } from './auth.service';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { LoginDTO } from 'src/auth/dto/login.dto';
import { RefreshTokenDTO } from 'src/auth/dto/refresh-token.dto';
import { ResetPasswordDTO } from 'src/auth/dto/resert-password.dto';
import { ForgetPasswordDTO } from 'src/auth/dto/forget-password.dto';
import { ChangePasswordDTO } from 'src/auth/dto/chage-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerData: RegisterDTO): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    login(loginData: LoginDTO): Promise<{
        status: import("@nestjs/common").HttpStatus;
        access_token: string;
        refresh_token: string;
        msg: string;
    }>;
    refreshtoken(rftokenDTO: RefreshTokenDTO): Promise<{
        access_token: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    logout(req: Request): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    changePassword(changeData: ChangePasswordDTO, req: Request): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    forgetPassword(body: ForgetPasswordDTO): Promise<{
        msg: string;
        link: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    resetPassword(token: string, resetPasswordDTO: ResetPasswordDTO): Promise<{
        msg: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
