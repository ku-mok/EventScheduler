import { StageInfo } from "features/stageInfo/types";
import StageInfoCardList from "features/stageInfo/StageInfoCardList";
import TwoColumns from "commons/templates/TwoColumns";

function Top() {
  const interested: StageInfo[] = [];
  const Left = () => (
    <>
      <StageInfoCardList stages={interested} title="興味あり" />
    </>
  );
  const Right = () => (
    <>
      <StageInfoCardList stages={[]} title="参加予定(購入済み)" />
    </>
  );
  return (
    <>
      <TwoColumns left={<Left />} right={<Right />} />
    </>
  );
}
export default Top;
