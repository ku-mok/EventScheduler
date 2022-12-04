import { StageInfo } from "entity/StageInfo";
import StageInfoCardList from "presentation/organisms/StageInfoCardList";
import TwoColumns from "presentation/templates/TwoColumns";

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
