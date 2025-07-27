import { Test, TestingModule } from '@nestjs/testing';
import { PropgressService } from './propgress.service';

describe('PropgressService', () => {
  let service: PropgressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropgressService],
    }).compile();

    service = module.get<PropgressService>(PropgressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
