import React from "react";

const Disscount = () => {
  return (
    <div className="h-fit lg:h-36 grid md:grid-cols-2 lg:px-16 bg-blue-700 p-2">
      <div className="p-5 text-center md:text-justify">
        <p className="font-bold text-xl text-white">
          Want to get 10% off discount?
        </p>
        <p className="font-bold text-xl text-white">
          Subscribe to our newsletter and get it
        </p>
      </div>
      <div className="py-5 lg:px-5">
        <input
          className="w-[70%] px-7 py-3 border focus:outline-none"
          type="text"
          placeholder="YOU EMAILR ADDRESS"
        />
        <input
          className="hover:cursor-pointer w-[30%] lg:px-7 py-[13px] bg-slate-300 text-blue-700 font-semibold"
          type="button"
          value="SUBSRIBE"
        />
      </div>
    </div>
  );
};

export default Disscount;
