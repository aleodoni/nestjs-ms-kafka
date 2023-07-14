import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { UserKafkaService } from './user-kafka.service';
import { CreateVoteDto } from 'shared-libs';

@Injectable()
export class VoteService implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly clientAuth: ClientKafka,
    @Inject('VOTING_SERVICE')
    private readonly clientVote: ClientKafka,
  ) {}

  async vote(createVoteDto: CreateVoteDto): Promise<any> {
    const voteService = new UserKafkaService(this.clientAuth);
    console.log('--1');

    const response = await voteService.getUser(createVoteDto.userId);

    if (!response) {
      console.log('--1.5');
    }

    console.log('--2');
    console.log(response);

    console.log('--3');
    return this.clientVote.send('vote_created', createVoteDto);
  }

  async onModuleInit() {
    this.clientAuth.subscribeToResponseOf('get_user');
    this.clientVote.subscribeToResponseOf('vote_created');
    await this.clientVote.connect();
    await this.clientAuth.connect();
  }
}
