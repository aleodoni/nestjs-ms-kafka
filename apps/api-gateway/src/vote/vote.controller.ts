import { Body, Controller, Post } from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from 'shared-libs';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  create(
    @Body()
    createVoteDto: CreateVoteDto,
  ) {
    return this.voteService.vote(createVoteDto);
  }
}
