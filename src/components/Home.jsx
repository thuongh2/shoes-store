import React, { useEffect, useState } from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import Disscount from "./Disscount";
import Service from "./Service";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://business-springboot.herokuapp.com/api/s/products/`)
      .then((res) => {
        const data = res.data;
        setProducts(data);
        console.log(products);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Carousel />
      <div className="">
        <div className="">
          <h1 className="font-bold text-3xl m-6">Featured Products</h1>
          <div className="w-screen flex flex-wrap justify-evenly gap-4 my-6">
            {products?.slice(0, 4).map((product) => (
              <Link key={product.id} to={"/product/" + product.id}>
                <Card product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Service />
      <Disscount />
    </div>
  );
};

export default Home;
