import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { KafkaAuthModule } from '../shared/modules/kafka-auth.module';

@Module({
  imports: [KafkaAuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
