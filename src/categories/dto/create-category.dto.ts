import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @ApiProperty({description: 'Tên danh mục', example: 'Hsk1'})
    @MinLength(3, {message: 'Tên danh mục phải có ít nhất 3 ký tự'})
    name: string;

    @ApiPropertyOptional({description: 'Đây là mô tả ngắn gọn cho danh mục', example: 'mô tả về hsk nhé'})
    description?: string;

    @ApiProperty({description: 'Số lượng từ vựng', example: 100})
    @IsNumber()
    vocabulary_count: number;

    @ApiProperty({description: 'Thứ tự hiển thị', example: 1})
    @IsNumber()
    order: number;
}
