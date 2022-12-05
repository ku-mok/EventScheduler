import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import StageInfoCard from "./StageInfoCard";

export default {
  component: StageInfoCard,
} as ComponentMeta<typeof StageInfoCard>;

const defaultArgs = {
  stage: {
    name: "Stage 1",
    place: "Place 1",
    actor: ["Actor 1", "Actor 2", "Actor 3", "Actor 4"],
    sellDate: new Date("2022-11-30"),
    date: { start: new Date("2021-01-01"), end: new Date("2021-01-01") },
  },
};
export const PreSell: ComponentStoryObj<typeof StageInfoCard> = {
  args: {
    stage: {
      status: "preSell",
      ...defaultArgs.stage,
    },
  },
};

export const Selling: ComponentStoryObj<typeof StageInfoCard> = {
  args: {
    stage: {
      status: "selling",
      ...defaultArgs.stage,
    },
  },
};

export const bought: ComponentStoryObj<typeof StageInfoCard> = {
  args: {
    stage: {
      status: "bought",
      goDate: [new Date("2021-01-01"), new Date("2021-01-02")],
      ...defaultArgs.stage,
    },
  },
};

export const playingNotBought: ComponentStoryObj<typeof StageInfoCard> = {
  args: {
    stage: {
      status: "playing",
      ...defaultArgs.stage,
    },
  },
};
export const playing: ComponentStoryObj<typeof StageInfoCard> = {
  args: {
    stage: {
      status: "playing",
      goDate: [new Date("2021-01-01")],
      ...defaultArgs.stage,
    },
  },
};
