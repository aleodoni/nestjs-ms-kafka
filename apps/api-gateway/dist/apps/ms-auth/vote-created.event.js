"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteCreatedEvent = void 0;
class VoteCreatedEvent {
    constructor(userId, votingId, vote) {
        this.userId = userId;
        this.votingId = votingId;
        this.vote = vote;
    }
    toString() {
        return JSON.stringify({
            userId: this.userId,
            votingId: this.votingId,
            vote: this.vote,
        });
    }
}
exports.VoteCreatedEvent = VoteCreatedEvent;
//# sourceMappingURL=vote-created.event.js.map