import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { VOTE_CREATED, CreateVoteDto } from 'shared-libs';
import { VotingService } from './voting.service';

@Controller()
export class VotingController {
  constructor(private readonly votingService: VotingService) {}

  @MessagePattern(VOTE_CREATED)
  async handleVoteCreated(@Payload() voteDto: CreateVoteDto) {
    return await this.votingService.vote(voteDto);
  }
}
