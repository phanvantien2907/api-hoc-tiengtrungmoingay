import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateFormDto } from "src/vocabularies/dto/create-form.dto";

export class CreateVocabularyDto {
    @IsString({ message: 'Chữ Hán thể phải là một chuỗi' })
    @IsNotEmpty({ message: 'Chữ Hán không được để trống' })
    @MinLength(1, { message: 'Chữ phải có ít nhất 1 ký tự' })
    @ApiProperty({ example: '爱', description: 'Chữ Hán thể của từ vựng' })
    simplified: string;

    @IsString({ message: 'Bộ thủ thể phải là một chuỗi' })
    @MinLength(1, { message: 'Bộ thủ phải có ít nhất 1 ký tự' })
    @ApiProperty({ example: '爫', description: 'Bộ thủ của từ vựng' })
    radical: string;

    @ApiProperty({ example: 150, description: 'Tần suất sử dụng từ vựng' })
    frequency: number;

    @ApiProperty({ example: ['n', 'v'], description: 'Các loại từ của từ vựng' })
    @IsArray({ message: 'Các lựa chọn phải là một mảng' })
    @ArrayMinSize(2, { message: 'Phải có ít nhất 2 loại từ' })
    pos: string[];

    @ApiProperty({ type: [CreateFormDto], description: 'Các hình thức của từ vựng' })
    @IsArray({ message: 'Các hình thức phải là một mảng' })
    @ArrayMinSize(1, { message: 'Phải có ít nhất 1 hình thức' })
    @ValidateNested({ each: true })
    @Type(() => CreateFormDto)
    forms: CreateFormDto[];

    @IsString({ message: 'Danh mục thể phải là một chuỗi' })
    @IsNotEmpty({ message: 'Danh mục không được để trống' })
    @ApiProperty({ example: 'HSK1', description: 'Danh mục của từ vựng' })
    categories: string;

}
