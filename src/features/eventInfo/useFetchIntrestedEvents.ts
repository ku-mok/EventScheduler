import useSWR from "swr";
import {
  EventInfoRepositoryImpl,
  EventInfoRepositoryMock,
} from "./repositories";

const repository =
  process.env.NODE_ENV === "development"
    ? new EventInfoRepositoryMock()
    : new EventInfoRepositoryImpl();

export function useFetchEvents(query?: { before?: Date }) {
  const { data, error, mutate } = useSWR(["/api/events", query], (_, query) =>
    repository.getEventInfoList(query)
  );
  return { data, error, mutate };
}
