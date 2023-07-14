import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { validate } from '../config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ validate }),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: process.env.KAFKA_BROKERS.split(' '),
          },
          consumer: {
            groupId: process.env.KAFKA_AUTH_GROUP_ID,
          },
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class KafkaAuthModule {}
