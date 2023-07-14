import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { VoteModule } from './vote/vote.module';
import { validate } from './shared/config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    UserModule,
    VoteModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
