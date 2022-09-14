import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import Disscount from "./Disscount";
import Footer from "./Footer";
import Header from "./Header";
import Drawer from "./mobile/Drawer";
import HeaderMobile from "./mobile/HeaderMobile";
import Service from "./Service";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="">
        <div className="">
          <h1 className="font-bold text-3xl m-6">Featured Products</h1>
          <div className="w-screen flex flex-wrap justify-evenly gap-4 my-6">
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
          </div>
        </div>
      </div>
      <Service />
      <Disscount />
    </div>
  );
};

export default Home;
