import { Injectable } from '@nestjs/common';
import { CreatePropgressDto } from './dto/create-propgress.dto';
import { UpdatePropgressDto } from './dto/update-propgress.dto';

@Injectable()
export class PropgressService {
  create(createPropgressDto: CreatePropgressDto) {
    return 'This action adds a new propgress';
  }

  findAll() {
    return `This action returns all propgress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propgress`;
  }

  update(id: number, updatePropgressDto: UpdatePropgressDto) {
    return `This action updates a #${id} propgress`;
  }

  remove(id: number) {
    return `This action removes a #${id} propgress`;
  }
}
