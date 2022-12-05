import Header from "commons/uiParts/Header";
import { AiFillPlusCircle as PlusIcon } from "react-icons/ai";
import EventInfoCardList from "features/eventInfo/components/EventCardList";
import { useFetchEvents } from "features/eventInfo/useFetchIntrestedEvents";
import { getUnixTime } from "date-fns";

function Top() {
  const { data } = useFetchEvents();
  const Left = () =>
    data ? (
      <EventInfoCardList
        events={[
          ...data?.filter((d) => d.status === "selling"),
          ...data
            ?.filter((d) => d.status === "preSell")
            .sort((a, b) =>
              a.sellDate && b.sellDate
                ? getUnixTime(a.sellDate) - getUnixTime(b.sellDate)
                : a.sellDate
                ? 1
                : -1
            ),
        ]}
        title={"販売前"}
      />
    ) : (
      <>Loading</>
    );
  const Right = () =>
    data ? (
      <EventInfoCardList
        events={data?.filter((d) => d.status === "bought")}
        title={"購入済み"}
      />
    ) : (
      <>Loading</>
    );
  return (
    <>
      <Header />
      <div className="lg:flex mt-0 gap-x-2 w-full justify-center px-3">
        <div className="w-full lg:w-6/12 p-2">
          <Left />
        </div>
        <div className="w-full lg:w-6/12 p-2">
          <Right />
        </div>
      </div>
    </>
  );
}
export default Top;
