import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString, MinLength, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuestionDto {
    @IsString({ message: 'Câu hỏi phải là một chuỗi' })
    @IsNotEmpty({ message: 'Câu hỏi không được để trống' })
    @MinLength(3, { message: 'Câu hỏi phải có ít nhất 3 ký tự' })
    @ApiProperty({ example: 'Bạn ăn cơm chưa?' })
    question_text: string;

    @IsArray({ message: 'Các lựa chọn phải là một mảng' })
    @ArrayMinSize(2, { message: 'Phải có ít nhất 2 lựa chọn' })
    @ApiProperty({ example: ['爸爸', '妈妈', '哥哥'] })
    options: string[];

    @IsString({ message: 'Đáp án đúng phải là một chuỗi' })
    @IsNotEmpty({ message: 'Đáp án không được để trống' })
    @ApiProperty({ example: 'Tôi ăn rồi' })
    answer: string;
}
