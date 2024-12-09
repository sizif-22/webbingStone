import React, { useRef, useEffect } from "react";
import Button from "../components/Button";
const Section1 = () => {
  const blurRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    const imgElement = imgRef.current;
    function handleImageLoad() {
      blurRef.current.classList.add("loaded");
    }
    if (imgElement.complete) {
      blurRef.current.classList.add("loaded");
    } else {
      imgElement.addEventListener("load", handleImageLoad);
      return () => {
        imgElement.removeEventListener("load", handleImageLoad);
      };
    }
  }, []);
  return (
    <div className="md:grid grid-cols-2 h-fit">
      {/* Left Section */}
      <div className="flex p-4 justify-center flex-col gap-10">
        <h1 className="font-bold text-4xl">
          Accelerate Your Growth: Unleash the Power of Digital Marketing
        </h1>
        <p className="text-xl">
          WebbingStone is a digital marketing agency founded in 2015 and based
          in Cairo, Egypt, with international reach extending to the USA, UAE,
          Canada, and beyond. We offer a wide range of services, including
          social media marketing, web development, mobile app development,
          graphic design, SEO, and branding solutions. The company has worked
          with notable clients, such as Fujifilm and the Ministry of Tourism in
          Egypt, showcasing our ability to handle diverse industries.
        </p>
        <div className="flex justify-center">
          <Button
            name={"Our Services"}
            link={"https://webbingstone.com/services-webbingstone/"}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="items-center md:flex p-4 justify-center flex-col h-screen gap-4 hidden">
        <div ref={blurRef} className="blur-load h-[270px] w-[480px]">
          <img
            ref={imgRef}
            src="https://webbingstone.com/wp-content/uploads/2024/05/webbingstone_video_May24-C2.webp "
            alt="webbingStone video"
            loading="lazy"
            className="object-contain lazy-loaded-img h-[270px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Section1;