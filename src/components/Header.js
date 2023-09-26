import React from "react";
import { HEADER_IMG } from "../utils/constants";

const Header = () => {
  return (
  <div className="w-48 absolute  p-2 bg-gradient-to-tr from-black z-10">
        <img src={HEADER_IMG} alt="logo_head" />
      </div>
  );
};

export default Header;
