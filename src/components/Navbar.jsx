import { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="flex justify-between sticky w-full top-0 h-[10vh] items-center">
          <Link to="/">
            <div>Logo</div>
          </Link>

          <SearchInput />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
