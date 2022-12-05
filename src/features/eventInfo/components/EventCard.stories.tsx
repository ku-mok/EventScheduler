import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import EventInfoCard from "./EventCard";

export default {
  component: EventInfoCard,
} as ComponentMeta<typeof EventInfoCard>;

const defaultArgs = {
  event: {
    name: "Event 1",
    place: "Place 1",
    actor: ["Actor 1", "Actor 2", "Actor 3", "Actor 4"],
    sellDate: new Date("2022-11-30"),
    date: { start: new Date("2021-01-01"), end: new Date("2021-01-01") },
  },
};
export const PreSell: ComponentStoryObj<typeof EventInfoCard> = {
  args: {
    ...defaultArgs,
    event: {
      status: "preSell",
      ...defaultArgs.event,
    },
  },
};

export const Selling: ComponentStoryObj<typeof EventInfoCard> = {
  args: {
    ...defaultArgs,
    event: {
      status: "selling",
      ...defaultArgs.event,
    },
  },
};

export const bought: ComponentStoryObj<typeof EventInfoCard> = {
  args: {
    ...defaultArgs,
    event: {
      status: "bought",
      goDate: [new Date("2021-01-01"), new Date("2021-01-02")],
      ...defaultArgs.event,
    },
  },
};

export const playingNotBought: ComponentStoryObj<typeof EventInfoCard> = {
  args: {
    ...defaultArgs,
    event: {
      status: "playing",
      ...defaultArgs.event,
    },
  },
};
export const playing: ComponentStoryObj<typeof EventInfoCard> = {
  args: {
    ...defaultArgs,
    event: {
      status: "playing",
      goDate: [new Date("2021-01-01")],
      ...defaultArgs.event,
    },
  },
};
