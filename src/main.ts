import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppMicroserviceConfig } from './config/app-microservice.config';

const logger = new Logger('AppMicroservice');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    AppMicroserviceConfig.getOptions(),
  );
  await app.listen();
  logger.log('App Microservice is listening ...');
}

bootstrap();
