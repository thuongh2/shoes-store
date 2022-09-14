import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  return (
    <div className="h-[60px] w-full bg-white z-40 drop-shadow-lg">
      <div className="flex items-center min-w-full justify-between h-full ">
        {/* logo end category */}
        <div className="flex w-full gap-2 justify-between">
          {/* image logo */}

          {/* image logo */}
          <div className="px-5 py-1 hover:cursor-pointer">
            <Link to="/">
              <img
                src="https://eu.muroexe.com/img/logo-16394270912.jpg"
                alt="logo"
              />
            </Link>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default HeaderAuth;
