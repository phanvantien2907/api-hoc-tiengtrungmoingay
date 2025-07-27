import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RefreshTokenDTO {
    @ApiProperty({description: 'Refresh token của người dùng', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'})
    @IsString({ message: 'Refresh token không được để trống' })
    token: string;
}