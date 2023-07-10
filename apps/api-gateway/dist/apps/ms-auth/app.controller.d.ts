import { AppService } from './app.service';
import { VoteRequest } from './vote-request.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    vote(voteRequest: VoteRequest): void;
}
//# sourceMappingURL=app.controller.d.ts.map