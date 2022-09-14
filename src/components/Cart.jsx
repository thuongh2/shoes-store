import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Breadcumber from "./base/Breadcumber";
import Input from "./base/Input";
import Card from "./Card";
import Suggestions from "./Suggestions";

const Cart = () => {
  const [value, setValues] = useState(1);

  return (
    <div className="cart">
      <div className="">
        <div className="font-bold text-2xl md:text-4xl mx-3 md:mx-10 my-6">
          <Breadcumber />
          <h1>Shopping Cart</h1>
        </div>
        {/* main */}
        <div className="">
          <div className="flex flex-col md:flex-row justify-center">
            {/* list item */}
            <div className="md:w-[60%]">
              <table class="w-[100%] md:w-[90%] text-center border-t border-b">
                <thead className="text-base">
                  <tr className="">
                    <th className="py-4">Product</th>
                    <th className="py-4">Price</th>
                    <th className="py-4">Q.ty</th>
                    <th className="py-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-b m-2">
                    <td className="py-5 ">
                      <Link to="/product" className="flex gap-4 justify-start">
                        <div className="">
                          <img
                            className="w-20 h-16 object-cover"
                            src="https://eu.muroexe.com/66308-cart_default/california-brown.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text-left">
                          <p className="text-blue-600 text-lg font-medium">
                            Atom California Green
                          </p>
                          <p className="text-gray-400 text-sm">Size: 42</p>
                        </div>
                      </Link>
                    </td>
                    <td className="py-5">119</td>
                    <td className="py-5">
                      <Input value={value} setValue={setValues} />
                    </td>
                    <td className="py-5 font-semibold">119</td>
                    <td className="py-5 font-semibold">
                      <AiFillDelete color="gray" size={25} />
                    </td>
                  </tr>
                  <tr className="border-t border-b m-2">
                    <td className="py-5 flex gap-4 justify-start">
                      <div className="">
                        <img
                          className="w-20 h-16 object-cover"
                          src="https://eu.muroexe.com/66308-cart_default/california-brown.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text-left">
                        <p className="text-blue-600 text-lg font-medium">
                          Atom California Green
                        </p>
                        <p className="text-gray-400 text-sm">Size: 42</p>
                      </div>
                    </td>
                    <td className="py-5">119</td>
                    <td className="py-5">
                      <Input value={value} setValue={setValues} />
                    </td>
                    <td className="py-5 font-semibold">119</td>
                    <td className="py-5 font-semibold hover:cursor-pointer">
                      <AiFillDelete color="gray" size={25} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* check out */}
            <div className="md:w-[30%] lg:w-[25%] border h-fit font-semibold text-base ">
              {/* price details */}
              <div className="border-b p-4 text-gray-600">
                <div className="flex justify-between mb-1">
                  <p>1 item</p>
                  <p>119</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
              </div>
              {/* total */}
              <div className="p-4">
                <div className="flex justify-between text-xl">
                  <p>Total</p>
                  <p>119</p>
                </div>
              </div>
              <div className="">
                <input
                  className="w-full h-10 bg-black text-white hover:cursor-pointer"
                  type="submit"
                  value="Proceed to checkout"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
      <div className="">
        <Suggestions title={"other products in the same category"}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Suggestions>
      </div>
    </div>
  );
};

export default Cart;
