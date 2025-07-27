import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ForgetPasswordDTO {
   @IsString({message: 'Email không được để trống'})
   @IsEmail({}, {message: 'Email không hợp lệ'})
  @ApiProperty({description: 'Nhập email của bạn', example: 'tiendeptrai@gmail.com'})
  email: string;

}