import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class TranscriptionsDto {
 @IsString()
  @ApiProperty({ example: 'dōng xi', description: 'Phiên âm của từ vựng' })
  pinyin: string;

  @IsString()
  @ApiProperty({ example: 'dong1 xi5', description: 'Phiên âm số của từ vựng' })
  numeric: string;

  @IsString()
  @ApiProperty({ example: 'tung¹ xi', description: 'Phiên âm có dấu của từ vựng' })
  wadegiles: string;

  @IsString()
  @ApiProperty({ example: 'ㄉㄨㄥ xi', description: 'Phiên âm Bopomofo của từ vựng' })
  bopomofo: string;

  @IsString()
  @ApiProperty({ example: 'dong xi', description: 'Phiên âm Romatzyh của từ vựng' })
  romatzyh: string;
}