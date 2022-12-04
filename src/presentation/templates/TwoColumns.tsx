import Header from "presentation/organisms/Header";

function TwoColumns(props: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex mt-4 gap-x-2 w-full justify-center">
        <div className="w-full lg:w-5/12 p-4">{props.left}</div>
        <div className="w-full lg:w-5/12 p-4">{props.right}</div>
      </div>
    </>
  );
}

export default TwoColumns;
