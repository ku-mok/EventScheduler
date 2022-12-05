export class EventInfo {
  constructor(
    readonly name: string,
    readonly place: string,
    readonly actor: string[],
    readonly date: { start: Date; end: Date },
    readonly status: "preSell" | "selling" | "bought" | "playing",
    readonly sellDate?: Date,
    readonly goDate?: Date[]
  ) {}
}
