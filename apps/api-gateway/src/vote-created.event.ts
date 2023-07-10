export class VoteCreatedEvent {
  constructor(
    public readonly userId: string,
    public readonly votingId: string,
    public readonly vote: string,
  ) {}

  toString() {
    return JSON.stringify({
      userId: this.userId,
      votingId: this.votingId,
      vote: this.vote,
    });
  }
}
