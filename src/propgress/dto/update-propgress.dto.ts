import { PartialType } from '@nestjs/swagger';
import { CreatePropgressDto } from './create-propgress.dto';

export class UpdatePropgressDto extends PartialType(CreatePropgressDto) {}
