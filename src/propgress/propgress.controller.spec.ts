import { Test, TestingModule } from '@nestjs/testing';
import { PropgressController } from './propgress.controller';
import { PropgressService } from './propgress.service';

describe('PropgressController', () => {
  let controller: PropgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropgressController],
      providers: [PropgressService],
    }).compile();

    controller = module.get<PropgressController>(PropgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
