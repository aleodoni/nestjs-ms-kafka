import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { validate } from '../config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ validate }),
    ClientsModule.register([
      {
        name: 'VOTING_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'voting',
            brokers: process.env.KAFKA_BROKERS.split(' '),
          },
          consumer: {
            groupId: process.env.KAFKA_VOTING_GROUP_ID,
          },
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class KafkaVotingModule {}
