import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { VoteRequest } from './vote-request.dto';
import { VoteCreatedEvent } from './vote-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('VOTING_SERVICE') private readonly votingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  vote({ userId, vote, votingId }: VoteRequest) {
    this.votingClient.emit(
      'vote_created',
      new VoteCreatedEvent(userId, votingId, vote),
    );
  }
}
