import React from "react";
import { Link } from "react-router-dom";
import Breadcumber from "./base/Breadcumber";
import Card from "./Card";
import Disscount from "./Disscount";
import Service from "./Service";

const Search = () => {
  return (
    <>
      <div className="lg:px-16 m-5">
        <div className="">
          <Breadcumber item={[1, 2]} />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl my-4">Sneakers</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem vitae, corrupti fuga vel mollitia. Quo, corrupti? Veritatis
            rerum iusto impedit perferendis. Quo, unde? Doloremque iure
            veritatis esse molestias recusandae?
          </p>
        </div>
        {/* filter */}
        <div className="h-20 border-t border-b flex justify-between  items-center my-6">
          <div className="w-28 h-11 bg-slate-900 text-white">
            <span className="flex w-full h-full font-semibold text-xl justify-center items-center">
              Filter
            </span>
          </div>
          <div className="flex items-center">
            <span className="m-3">28 Product</span>
            <span className="border border-black">
              <select
                id="small"
                class="block 6 w-28 md:w-full text-base md:text-lg  p-2 focus:outline-none"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </span>
          </div>
        </div>
        {/* product list */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link to="/product">
            <Card />
          </Link>

          <Link to="/product">
            <Card />
          </Link>

          <Link to="/product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>
          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>
          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>

          <Link to="product">
            <Card />
          </Link>
        </div>
        {/* end */}
      </div>
      <Disscount />
    </>
  );
};

export default Search;
