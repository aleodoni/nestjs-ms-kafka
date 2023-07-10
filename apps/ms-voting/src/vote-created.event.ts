export class VoteCreatedEvent {
  constructor(
    public readonly userId: string,
    public readonly votingId: string,
    public readonly vote: string,
  ) {}
}
