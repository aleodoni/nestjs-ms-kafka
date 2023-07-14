import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/config';
import { VotingModule } from './voting/voting.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, validate }), VotingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
