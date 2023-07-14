import { Injectable } from '@nestjs/common';
import { delay, CreateVoteDto } from 'shared-libs';

@Injectable()
export class VotingService {
  constructor() {}

  async vote(createVoteDto: CreateVoteDto): Promise<any> {
    await delay(2000);
    return {
      message: 'vote saved',
      data: createVoteDto,
    };
  }
}
