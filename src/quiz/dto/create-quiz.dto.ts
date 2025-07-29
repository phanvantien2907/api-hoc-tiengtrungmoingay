import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateQuestionDto } from "src/quiz/dto/create-question.dto";

export class CreateQuizDto {
    @IsString({ message: 'Tên quiz phải là một chuỗi' })
    @IsNotEmpty({message: 'Tên quiz không được để trống'})
    @MinLength(3, {message: 'Tên quiz phải có ít nhất 3 ký tự'})
    @ApiProperty({description: 'Tên danh mục', example: 'Bài kiểm tra từ vựng HSK1'})
    title: string;

    @IsOptional()
    @ApiPropertyOptional({description: 'Đây là mô tả ngắn gọn cho danh mục', example: 'mô tả về quiz nhé'})
    description?: string;

    @IsNotEmpty({message: 'Danh mục không được để trống'})
    @IsString({message: 'Danh mục phải là một chuỗi'})
    @MinLength(3, {message: 'Danh mục phải có ít nhất 3 ký tự'})
    @ApiProperty({description: 'Tên danh mục', example: 'HSK1'})
    categories: string;

    @ApiProperty({description: 'Danh sách câu hỏi', type: [CreateQuestionDto]})
    @ValidateNested({ each: true })
    @ArrayMinSize(1, { message: 'Phải có ít nhất một câu hỏi' })
    @IsArray({ message: 'Câu hỏi phải là một mảng' })
    @Type(() => CreateQuestionDto)
    questions: CreateQuestionDto[];
}
