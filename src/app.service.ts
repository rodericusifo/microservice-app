import { Injectable } from '@nestjs/common';
import { AccumulateDTO } from './dto/accumulate.dto';

@Injectable()
export class AppService {
  async accumulate(accumulateDTO: AccumulateDTO) {
    return (accumulateDTO.data || []).reduce((a, b) => Number(a) + Number(b));
  }
}
