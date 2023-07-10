import { ClientKafka } from '@nestjs/microservices';
import { VoteRequest } from './vote-request.dto';
export declare class AppService {
    private readonly votingClient;
    constructor(votingClient: ClientKafka);
    getHello(): string;
    vote({ userId, vote, votingId }: VoteRequest): void;
}
//# sourceMappingURL=app.service.d.ts.map