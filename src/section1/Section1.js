import React from "react";
import Button from "../components/Button";
import ImgOptimizer from "../components/ImgOptimizer";
const Section1 = () => {
  return (
    <div className="md:grid grid-cols-2 py-32">
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
      <div className="items-center md:flex p-4 justify-center flex-col gap-4 hidden">
        <div className="w-[500px] h-[200]">
          <ImgOptimizer
            imgSrc="https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&"
            imgAlt="webbingStone video"
          />
        </div>
      </div>
    </div>
  );
};
export default Section1;
