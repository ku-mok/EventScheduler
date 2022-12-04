import { format } from "date-fns";
import { useState } from "react";
import ActionButton from "./ActionButton";
import { StageInfo } from "../../entity/StageInfo";
import {
  AiFillDelete as DeleteIcon,
  AiFillEdit as EditIcon,
  AiOutlineDoubleRight as RightIcon,
} from "react-icons/ai";

export type StageInfoCardProps = {
  stage: StageInfo;
};
function StageInfoCard(props: StageInfoCardProps) {
  const { stage } = props;
  const { name, place, actor, date } = stage;
  const [hoveredIcon, setHoveredIcon] = useState<
    "Delete" | "Edit" | "Join" | null
  >(null);
  return (
    <div className="card  w-10/12 mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <a
            href="http://battleballs.softboiled.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </h2>
        <p>出演者:{actor.slice(0, 2) + "..."}</p>
        <p>場所:{place}</p>
        <p>
          日程:
          {`${format(date.start, "yy/MM/dd")}-${format(date.end, "yy/MM/dd")}`}
        </p>
      </div>
      <div className="card-actions justify-end mr-6 mb-6">
        <ActionButton icon={<EditIcon />}>編集</ActionButton>
        <ActionButton icon={<DeleteIcon />}>削除</ActionButton>
        <ActionButton icon={<RightIcon />}>参加 </ActionButton>
      </div>
    </div>
  );
}

export default StageInfoCard;
