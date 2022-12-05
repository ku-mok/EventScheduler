import EventInfoCard from "./EventCard";
import { EventInfo } from "../types";
import { AiFillPlusCircle as PlusIcon } from "react-icons/ai";

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
        <div className="flex gap-4 items-center w-10/12 m-auto">
          <div className="btn gap-4 btn-md w-full bg-base-200 border-0">
            <PlusIcon />
            <div>追加する</div>
          </div>
        </div>
        {events.map((event) => (
          <EventInfoCard event={event} key={event.name} />
        ))}
      </div>
    </div>
  );
}

export default EventInfoCardList;
