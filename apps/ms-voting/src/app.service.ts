import { Inject, Injectable } from '@nestjs/common';
import { VoteCreatedEvent } from './vote-created.event';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  handleVoteCreated(voteCreatedEvent: VoteCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserRequest(voteCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `User ${user.name} voted ${voteCreatedEvent.vote} for the voting ${voteCreatedEvent.votingId}`,
        );
      });
  }
}
