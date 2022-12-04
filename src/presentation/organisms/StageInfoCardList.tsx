import StageInfoCard from "../molecules/StageInfoCard";
import { StageInfo } from "../../entity/StageInfo";
import { AiFillPlusCircle as PlusIcon } from "react-icons/ai";

export type StageInfoCardListProps = {
  stages: StageInfo[];
  title: string;
};

function StageInfoCardList(props: StageInfoCardListProps) {
  const { stages, title } = props;
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
        {stages.map((stage) => (
          <StageInfoCard stage={stage} key={stage.name} />
        ))}
      </div>
    </div>
  );
}

export default StageInfoCardList;
