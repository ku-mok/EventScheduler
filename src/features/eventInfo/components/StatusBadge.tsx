import { format } from "date-fns";
import { EventInfo } from "../model";

type StatusBadgeProps = {
  event: EventInfo;
} & React.HTMLAttributes<HTMLDivElement>;

const StatusBadge = (props: StatusBadgeProps) => {
  const { event } = props;
  const goDate = event.goDate
    ? event.goDate.map((date) => format(date, "M/d")).join(",")
    : [];
  const sellDate = event.sellDate ? format(event.sellDate, "M/d") : "";
  switch (event.status) {
    case "preSell":
      return (
        <div
          className={"badge badge-secondary badge-lg " + props.className}
        >{`${sellDate}〜発売`}</div>
      );
    case "selling":
      return (
        <div className={"badge badge-lg badge-primary " + props.className}>
          販売中
        </div>
      );
    case "bought":
      return (
        <div
          className={"badge badge-lg badge-success " + props.className}
        >{`${goDate}`}</div>
      );
    default:
      return <></>;
  }
};

export default StatusBadge;
