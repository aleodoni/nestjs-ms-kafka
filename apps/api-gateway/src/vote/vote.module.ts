import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { KafkaAuthModule } from '../shared/modules/kafka-auth.module';
import { KafkaVotingModule } from '../shared/modules/kafka-voting.module';

@Module({
  imports: [KafkaAuthModule, KafkaVotingModule],
  controllers: [VoteController],
  providers: [VoteService],
})
export class VoteModule {}
