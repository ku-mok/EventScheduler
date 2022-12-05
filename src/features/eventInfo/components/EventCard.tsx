import { format } from "date-fns";
import ActionButton from "./EventCardActionButton";
import { EventInfo } from "../types";
import {
  AiFillDelete as DeleteIcon,
  AiFillEdit as EditIcon,
  AiOutlineDoubleRight as RightIcon,
} from "react-icons/ai";

export type EventInfoCardProps = {
  event: EventInfo;
  maxActorCount?: number;
};
function EventInfoCard({ maxActorCount = 3, event }: EventInfoCardProps) {
  const { name, place, actor, date, url } = event;
  const StatusBadge = () => {
    const goDate = event.goDate
      ? event.goDate.map((date) => format(date, "M/d")).join(",")
      : [];
    const sellDate = event.sellDate ? format(event.sellDate, "M/d") : "";
    switch (event.status) {
      case "preSell":
        return <div className="badge badge-lg ">{`販売前 (${sellDate})`}</div>;
      case "selling":
        return <div className="badge badge-lg badge-primary">販売中</div>;
      case "bought":
        return (
          <div className="badge badge-lg badge-success">{`購入済 (${goDate})`}</div>
        );
      case "playing":
        return (
          <div className="badge badge-lg badge-info">{`公演中 ${
            goDate.length > 0 ? `(${goDate})` : ""
          }`}</div>
        );
      default:
        return <></>;
    }
  };
  return (
    <div className="card  w-10/12 mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-3l underline underline-offset-4">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h2>
          <StatusBadge />
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
      <div className="card-actions justify-end mr-6 mb-6">
        <ActionButton icon={<EditIcon />}>編集</ActionButton>
        <ActionButton icon={<DeleteIcon />}>削除</ActionButton>
        <ActionButton icon={<RightIcon />}>参加 </ActionButton>
      </div>
    </div>
  );
}

export default EventInfoCard;
