import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";
import { TranscriptionsDto } from "src/vocabularies/dto/create-transcriptions.dto";

export class CreateFormDto {
 @IsString()
 @ApiProperty({ example: '東西', description: 'Chữ Hán thể của từ vựng' })
  traditional: string;

  @ValidateNested()
  @Type(() => TranscriptionsDto)
  @ApiProperty({ type: TranscriptionsDto })
  transcriptions: TranscriptionsDto;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  meanings: string[];

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  classifiers: string[];
}