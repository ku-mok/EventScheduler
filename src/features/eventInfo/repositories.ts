import { EventInfo } from "./model";
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
    return eventApi.fetchEventsList(query?.before?.toISOString()).then((res) =>
      res.data.map((event) => ({
        id: event.id,
        name: event.name,
        place: event.place,
        actor: event.actor,
        status: event.status as any,
        date:
          event.date && event.date?.end && event.date?.start
            ? {
                start: new Date(event.date.start),
                end: new Date(event.date.end),
              }
            : undefined,
        sellDate: event.sellDate ? new Date(event.sellDate) : undefined,
        goDate: event.goDate
          ? event.goDate.map((date: string) => new Date(date))
          : [],
        url: event.url,
      }))
    );
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

export class EventInfoRepositoryMock implements EventInfoRepository {
  getEventInfoList(query?: { before?: Date }): Promise<EventInfo[]> {
    return new Promise((resolve) => {
      resolve([
        {
          id: 0,
          name: "バトルボールズ 冬の陣",
          place: "シアター1010",
          status: "preSell",
          actor: ["前田隆太郎", "西本りみ", "長野陵大"],
          date: {
            start: new Date("2023-03-29"),
            end: new Date("2023-04-30"),
          },
          sellDate: new Date("2023-01-15"),
          url: "http://battleballs.softboiled.net/",
        },
        {
          id: 0,
          name: "西園寺家の儀典",
          place: "BIG TREE THEATER",
          status: "selling",
          actor: ["美月まりも", "石森虹花", "堤雪菜"],
          date: {
            start: new Date("2022-12-7"),
            end: new Date("2022-12-11"),
          },
          sellDate: new Date("2023-01-15"),
          url: "https://pastelcarat.web.fc2.com/index-next.html",
        },
        {
          id: 0,
          name: "スクールアイドルミュージカル",
          place: "BIG TREE THEATER",
          status: "bought",
          actor: ["堀内まり菜", "浅井七海", "杏ジュリア"],
          date: {
            start: new Date("2022-12-10"),
            end: new Date("2022-12-15"),
          },
          goDate: [new Date("2022-12-14"), new Date("2022-12-15")],
          url: "https://pastelcarat.web.fc2.com/index-next.html",
        },
        {
          id: 0,
          name: "アサルトリリィ・御台場女学校-The Battle to Overcome-",
          place: "スペース・ゼロ",
          status: "preSell",
          actor: [
            "石井陽菜",
            "西葉瑞希",
            "野元空",
            "長谷川里桃",
            "吉宮瑠織",
            "春咲暖",
            "田崎礼奈",
            "柴田茉莉",
            "有沢澪風",
            "矢野妃菜喜",
            "あわつまい",
            "林田真尋",
            "安藤千伽奈",
            "河内美里",
            "花奈澪",
            "栞菜",
            "白石まゆみ",
            "山本栞",
            "石原美沙紀",
            "梅原サエリ",
            "中村裕香里",
          ],
          date: {
            start: new Date("2023-2-3"),
            end: new Date("2023-2-12"),
          },
          sellDate: new Date("2022-12-25"),
          goDate: [new Date("2022-12-14"), new Date("2022-12-15")],
          url: "https://pastelcarat.web.fc2.com/index-next.html",
        },
      ]);
    });
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
