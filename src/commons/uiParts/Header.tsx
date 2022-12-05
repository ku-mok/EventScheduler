import { RxHamburgerMenu as HamburgerIcon } from "react-icons/rx";
import { AiFillPlusCircle as PlusIcon } from "react-icons/ai";

function Header() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <HamburgerIcon />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Go to Theater Scheduler
        </a>
      </div>
      <div className="flex-none">
        <div className="btn btn-ghost">
          <PlusIcon />
          <div>追加する</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
