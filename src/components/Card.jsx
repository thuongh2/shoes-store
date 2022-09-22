import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const Card = ({ product }) => {
  return (
    <div className="z-10">
      <div className="sm:min-w-[260px] w-[300px] h-fit rounded-lg mx-5 px-5 py-2 hover:cursor-pointer hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <div className="bg-[#c20000] p-10px text-lg text-slate-100 font-bold">
            <span>-50%</span>
          </div>
          <div className="">
            <AiOutlineHeart size={30} />
          </div>
        </div>
        <div className="h-44 w-full my-2">
          <div className="h-full w-full group relative overflow-hidden">
            <img
              className="absolute top-0 h-full w-full object-cover z-20 group-hover:opacity-0"
              src={product.image[0].thumbnail}
              alt=""
            />
            <img
              className="absolute top-0 h-full w-full object-cover transition-all opacity-0 group-hover:opacity-100"
              src={
                product.image[1] !== undefined
                  ? product.image[1].thumbnail
                  : product.image[0].thumbnail
              }
              alt=""
            />
          </div>
        </div>
        <div className="my-4">
          <ul className="flex justify-center flex-wrap w-full">
            {product?.image.map((item) => {
              <li>
                <img className="w-14 h-16 object-contain" src={item} alt="" />
              </li>;
            })}
          </ul>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-lg font-bold">
            <p className="text-[#c20000] break-all">{product.name}</p>
            <p>{product.price}</p>
          </div>
          <div className="bg-black w-10 h-10 flex justify-center items-center">
            <FaShoppingCart size={25} color={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
