import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class ResetPasswordDTO {
    @IsString({ message: 'Mật khẩu mới không được để trống' })
    @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự'})
    @ApiProperty({ description: 'Mật khẩu mới của người dùng', example: 'newpassword123' })
    newPassword: string;
}
