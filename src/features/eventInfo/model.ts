export type EventInfo = {
  id: number;
  name: string;
  place: string;
  actor: string[];
  date?: { start: Date; end: Date };
  sellDate?: Date;
  goDate?: Date[];
  status: "preSell" | "selling" | "bought" | "playing";
  url?: string;
};
