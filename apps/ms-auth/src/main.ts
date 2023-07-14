import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { validateEnv } from './config/config';

async function bootstrap() {
  const env = validateEnv();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'auth',
          brokers: env.KAFKA_BROKERS.split(' '),
        },
        consumer: {
          groupId: env.KAFKA_GROUP_ID,
        },
      },
    },
  );

  await app.listen();
}

bootstrap();
