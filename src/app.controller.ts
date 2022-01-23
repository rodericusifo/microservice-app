import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AccumulatePayload } from './payload/accumulate.payload';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @MessagePattern('add')
  async accumulate(payload: AccumulatePayload) {
    this.logger.log(`Adding ${payload.data.toString()}`);
    return this.appService.accumulate({ ...payload });
  }
}
