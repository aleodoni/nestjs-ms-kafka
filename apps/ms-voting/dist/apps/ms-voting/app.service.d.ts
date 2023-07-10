import { VoteCreatedEvent } from './vote-created.event';
import { ClientKafka } from '@nestjs/microservices';
export declare class AppService {
    private readonly authClient;
    constructor(authClient: ClientKafka);
    getHello(): string;
    handleVoteCreated(voteCreatedEvent: VoteCreatedEvent): void;
}
//# sourceMappingURL=app.service.d.ts.map