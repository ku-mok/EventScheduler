export class StageInfo {
  constructor(
    readonly name: string,
    readonly place: string,
    readonly actor: string[],
    readonly date: { start: Date; end: Date }
  ) {}
}
