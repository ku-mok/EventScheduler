import { EventInfo } from "features/eventInfo/types";
import EventInfoCardList from "features/eventInfo/components/EventCardList";
import TwoColumns from "commons/templates/TwoColumns";

function Top() {
  const interested: EventInfo[] = [];
  const Left = () => (
    <>
      <EventInfoCardList events={interested} title="興味あり" />
    </>
  );
  const Right = () => (
    <>
      <EventInfoCardList events={[]} title="参加予定(購入済み)" />
    </>
  );
  return (
    <>
      <TwoColumns left={<Left />} right={<Right />} />
    </>
  );
}
export default Top;
