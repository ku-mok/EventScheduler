import { EventInfo } from "./types";
import { Event, EventApi } from "commons/generated/api";
import { Configuration } from "commons/generated/configuration";

export interface EventInfoRepository {
  getEventInfo(id: number): Promise<EventInfo>;
  getEventInfoList(query?: { before?: Date }): Promise<EventInfo[]>;
  updateEventInfo(eventInfo: EventInfo): Promise<void>;
  createEventInfo(eventInfo: EventInfo): Promise<void>;
  deleteEventInfo(eventInfo: EventInfo): Promise<void>;
}

const config = new Configuration({
  basePath: "http://localhost:4010",
});

export const eventApi = new EventApi(config);

export class EventInfoRepositoryImpl implements EventInfoRepository {
  getEventInfoList(query?: { before?: Date }): Promise<EventInfo[]> {
    function toJsDate(event: Event): EventInfo {
      var returnValue: EventInfo = Object.assign(
        {},
        JSON.parse(JSON.stringify(event))
      );
      if (returnValue.date) {
        returnValue.date.start = new Date(returnValue.date.start);
        returnValue.date.end = new Date(returnValue.date.end);
      }
      if (returnValue.sellDate) {
        returnValue.sellDate = new Date(returnValue.sellDate);
      }
      if (returnValue.goDate) {
        returnValue.goDate = returnValue.goDate.map((date) => new Date(date));
      }
      return returnValue;
    }
    return eventApi
      .fetchEventsList(query?.before?.toISOString())
      .then((res) => res.data.map((event) => toJsDate(event)));
  }
  getEventInfo(id: number): Promise<EventInfo> {
    throw new Error("Method not implemented.");
  }
  updateEventInfo(eventInfo: EventInfo): Promise<void> {
    throw new Error("Method not implemented.");
  }
  createEventInfo(eventInfo: EventInfo): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteEventInfo(eventInfo: EventInfo): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
