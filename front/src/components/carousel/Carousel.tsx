"use client";

import { Carousel } from "flowbite-react";

const Cimages = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        slideInterval={3000}
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        <img
          className="h-full w-full"
          src="https://i.pinimg.com/564x/52/c5/1b/52c51bbe0ea48c66858a00816549edac.jpg"
          alt="iphone 15"
        />
        <img
          className="h-full w-full"
          src="https://i.pinimg.com/564x/51/0f/68/510f680e2a60cf4d1be32b45f1493db5.jpg"
          alt="iphone 13"
        />
        <img
          className="h-full w-full"
          src="https://i.pinimg.com/564x/4a/34/15/4a341593cbee29ca5462d73a80ea7a05.jpg"
          alt="watch"
        />
      </Carousel>
    </div>
  );
};

export default Cimages;
