import { CreatePropgressDto } from './dto/create-propgress.dto';
import { UpdatePropgressDto } from './dto/update-propgress.dto';
export declare class PropgressService {
    create(createPropgressDto: CreatePropgressDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePropgressDto: UpdatePropgressDto): string;
    remove(id: number): string;
}
