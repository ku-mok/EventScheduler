import EventInfoCard from "./EventCard";
import { EventInfo } from "../model";

export type EventInfoCardListProps = {
  events: EventInfo[];
  title: string;
};

function EventInfoCardList(props: EventInfoCardListProps) {
  const { events, title } = props;
  return (
    <div className="card bg-base-200 shadow-xl pb-4">
      <div className="card-body">
        <div className="card-title">{title}</div>
        {events.map((event) => (
          <EventInfoCard event={event} key={event.name} />
        ))}
      </div>
    </div>
  );
}

export default EventInfoCardList;
