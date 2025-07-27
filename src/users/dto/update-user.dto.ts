import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'Tên đăng nhập', example: 'phanvantien' })
  @IsOptional()
  @IsString()
  @MinLength(4, { message: 'Tên đăng nhập tối thiểu 4 ký tự' })
  username?: string;

  @ApiPropertyOptional({ description: 'Email', example: 'phanvantien@gmail.com' })
  @IsOptional()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email?: string;

  @ApiPropertyOptional({ description: 'Họ tên', example: 'Phan Van Tien' })
  @IsOptional()
  @IsString()
  fullname?: string;

  @ApiPropertyOptional({ description: 'Ngày sinh', example: '1990-01-01' })
  @IsOptional()
  @IsDateString({}, { message: 'Ngày sinh không hợp lệ' })
  birthday?: Date;
}
