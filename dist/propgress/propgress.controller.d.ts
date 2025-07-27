import { PropgressService } from './propgress.service';
import { CreatePropgressDto } from './dto/create-propgress.dto';
import { UpdatePropgressDto } from './dto/update-propgress.dto';
export declare class PropgressController {
    private readonly propgressService;
    constructor(propgressService: PropgressService);
    create(createPropgressDto: CreatePropgressDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePropgressDto: UpdatePropgressDto): string;
    remove(id: string): string;
}
