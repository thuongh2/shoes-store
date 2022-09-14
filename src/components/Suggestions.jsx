import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//https://www.npmjs.com/package/react-multi-carousel

const Suggestions = ({ title, children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="lg:px-16 my-5">
      <div className="">
        <h1 className="font-bold text-xl p-3 my-6">{title}</h1>
      </div>
      <div className="">
        <Carousel responsive={responsive}>{children}</Carousel>;
      </div>
    </div>
  );
};

export default Suggestions;
