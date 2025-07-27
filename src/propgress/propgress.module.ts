import { Module } from '@nestjs/common';
import { PropgressService } from './propgress.service';
import { PropgressController } from './propgress.controller';

@Module({
  controllers: [PropgressController],
  providers: [PropgressService],
})
export class PropgressModule {}
