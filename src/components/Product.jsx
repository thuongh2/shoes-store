import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Card from "./Card";
import Disscount from "./Disscount";
import Suggestions from "./Suggestions";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({});
  let params = useParams();

  useEffect(() => {
    axios
      .get(`https://business-springboot.herokuapp.com/api/product/${params.id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="lg:mx-[10%] flex justify-center">
        <div className="grid md:grid-cols-2">
          <div className="grid grid-cols-2">
            {/* <div className="col-span-2">
              <img src={product.slice(0, 1).map((item) => item)} alt="" />
            </div> */}
            {product.image?.map((item) => (
              <div className="first:col-span-2" key={item.id}>
                <img src={item.thumbnail} alt="" />
              </div>
            ))}
          </div>
          <div className="">
            <div className="m-4 py-5 border-b">
              <h1 className="text-3xl font-semibold leading-normal mt-0 mb-2">
                {product.name}
              </h1>
              <p className="mt-0 mb-2 text-base text-gray-500">
                Sneakers Atom California White
              </p>
              <p className="mt-0 mb-2 text-4xl font-bold">
                {product.price} VNĐ
              </p>
            </div>
            <div className="w-full">
              <ul className="flex justify-center">
                {product.image?.map((item) => (
                  <li>
                    <img className="w-40" src={item.thumbnail} alt="" />
                  </li>
                ))}
              </ul>
            </div>

            {/* size */}
            <div className="h-fit my-4">
              <ul className="flex flex-wrap gap-4 justify-center">
                {product.sizes?.map((item) => (
                  <li className="relative">
                    <input
                      type="radio"
                      name="radio-2"
                      class="w-5 h-5 absolute opacity-0s"
                      title="31"
                    />
                    <span className="relative inline-block px-3 py-2 bg-black text-center border text-white">
                      {item.size}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Add */}
            <div className="flex justify-between my-6">
              <div className="flex items-center justify-center w-20 mx-2 md:w-32">
                <AiOutlineMinus size={24} className="h-full" />
                <input
                  type="text"
                  className="w-8 px-2 border-b text-2xl"
                  value={1}
                />
                <AiOutlinePlus size={24} className="hover:bg-slate-400" />
              </div>
              <div className="flex-1">
                <input
                  className="w-[90%] h-10 bg-black text-white hover:cursor-pointer"
                  type="submit"
                  value="Proceed to checkout"
                />
              </div>
            </div>
            {/* des */}
            <div className="collapse border-t border-b">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-bold text-lg">
                Descriptions
              </div>
              <div className="collapse-content peer-checked:bg-white peer-checked:text-gray-600">
                <p>{product.description}</p>
              </div>
            </div>
            {/* review */}
            <div className="collapse border-b">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-bold text-lg">Reviews</div>
              <div className="collapse-content peer-checked:bg-white peer-checked:text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  veniam temporibus fugit beatae! Eius repudiandae totam dolorum
                  voluptatem repellendus, quaerat tempora quos reiciendis id
                  aliquid inventore dignissimos blanditiis error commodi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* suggestions */}
      {/* <div className="">
        <Suggestions title={"Customers who bought this product also bought:"}>
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
      </div> */}
      {/* <div className="">
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
      </div> */}
      <Disscount />
    </>
  );
};

export default Product;
