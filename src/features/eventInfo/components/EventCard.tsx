import { format } from "date-fns";
import ActionButton from "./EventCardActionButton";
import { EventInfo } from "../model";
import {
  AiFillDelete as DeleteIcon,
  AiFillEdit as EditIcon,
  AiOutlineDoubleRight as RightIcon,
} from "react-icons/ai";
import StatusBadge from "./StatusBadge";

export type EventInfoCardProps = {
  event: EventInfo;
  maxActorCount?: number;
};
function EventInfoCard({ maxActorCount = 3, event }: EventInfoCardProps) {
  const { name, place, actor, date, url } = event;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="lg:flex items-center justify-between gap-4">
          <h2 className="lg:w-9/12 card-title text-3l underline underline-offset-4">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h2>
          <StatusBadge className="flex-1" event={event} />
        </div>
        <dl>
          <dt className="ml-4">出演者 </dt>
          <dd className="ml-8"> {actor.slice(0, maxActorCount) + "..."} </dd>
        </dl>
        <dl>
          <dt className="ml-4">場所 </dt>
          <dd className="ml-8"> {place} </dd>
        </dl>
        <dl>
          <dt className="ml-4">日程 </dt>
          <dd className="ml-8">
            {date
              ? `${format(date.start, "yy/MM/dd")}-${format(
                  date.end,
                  "yy/MM/dd"
                )}`
              : "日程未定"}
          </dd>
        </dl>
      </div>
      <div className="card-actions justify-end mr-6 mb-3">
        <ActionButton icon={<EditIcon />}>編集</ActionButton>
        <ActionButton icon={<DeleteIcon />}>削除</ActionButton>
        <ActionButton icon={<RightIcon />}>参加 </ActionButton>
      </div>
    </div>
  );
}

export default EventInfoCard;
