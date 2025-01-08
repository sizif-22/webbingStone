import React from "react";
import ImgOptimizer from "../components/ImgOptimizer";

const Section3Cards = ({ title, imgUrl, link }) => {
  return (
    <div className="h-[300px] w-[300px] relative">
      <ImgOptimizer
        imgSrc={imgUrl}
        customCSSClasses="rounded-2xl"
        parentClasses="rounded-2xl h-[300px]"
      />
      <div className="absolute bg-[#0000009c] text-white opacity-0 rounded-2xl top-0 h-full w-full z-10 flex items-center justify-center flex-col transition-all duration-300 ease-in-out hover:opacity-100">
        <p>{title}</p>
        <a href={link}>link</a>
      </div>
    </div>
  );
};

export default Section3Cards;
