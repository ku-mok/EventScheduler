import useSWR from "swr";
import { EventInfoRepositoryImpl } from "./repositories";
const repository = new EventInfoRepositoryImpl();

export function useFetchEvents(status: "interested" | "going") {
  const { data, error, mutate } = useSWR(["/api/events", status], (_, status) =>
    repository.getEventInfoList(status)
  );
  return { data, error, mutate };
}
