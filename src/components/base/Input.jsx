import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Input = ({ value, setValue }) => {
  return (
    <div>
      <div className="flex items-center justify-center w-20 md:w-full">
        <AiOutlineMinus
          size={24}
          className="h-full"
          onClick={() => setValue(value > 2 ? value - 1 : 1)}
        />
        <input
          type="text"
          className="w-10 px-2 border-b text-xl"
          value={value}
        />
        <AiOutlinePlus
          size={24}
          className="hover:bg-slate-400"
          onClick={() => setValue(value < 1 ? 1 : value + 1)}
        />
      </div>
    </div>
  );
};

export default Input;
