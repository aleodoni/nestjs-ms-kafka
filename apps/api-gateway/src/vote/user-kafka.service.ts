import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { GET_USER } from 'shared-libs';

export class UserKafkaService {
  constructor(private readonly userClient: ClientKafka) {}

  public async getUser(userId: string): Promise<any> {
    return await firstValueFrom(this.userClient.send(GET_USER, userId));
  }
}
