import EventInfoCardList from "features/eventInfo/components/EventCardList";
import TwoColumns from "commons/templates/TwoColumns";
import { useFetchEvents } from "features/eventInfo/useFetchIntrestedEvents";

function Top() {
  const Left = () => {
    const { data: interested, error: interestedError } =
      useFetchEvents("interested");
    return interested ? (
      <EventInfoCardList events={interested} title="興味あり" />
    ) : (
      <div>Loading...</div>
    );
  };
  const Right = () => {
    const { data: interested, error: interestedError } =
      useFetchEvents("going");
    return interested ? (
      <EventInfoCardList events={interested} title="参加予定" />
    ) : (
      <div>Loading...</div>
    );
  };
  return (
    <>
      <TwoColumns left={<Left />} right={<Right />} />
    </>
  );
}
export default Top;
