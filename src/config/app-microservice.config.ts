import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export class AppMicroserviceConfig {
  static getOptions(): MicroserviceOptions {
    return {
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    };
  }
}
