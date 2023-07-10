import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { VoteRequest } from './vote-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  vote(@Body() voteRequest: VoteRequest) {
    this.appService.vote(voteRequest);
  }
}
