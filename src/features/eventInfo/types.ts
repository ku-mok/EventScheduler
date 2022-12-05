export type EventInfo = {
  name: string;
  place: string;
  actor: string[];
  status: "preSell" | "selling" | "bought" | "playing";
  date?: { start: Date; end: Date };
  sellDate?: Date;
  goDate?: Date[];
  url?: string;
};
