import React from "react";
import Button from "../components/Button";
import ImgOptimizer from "../components/ImgOptimizer";
import { easeInOut, motion } from "framer-motion";
const Section1 = () => {
  return (
    <div className="md:grid grid-cols-2 py-32">
      {/* Left Section */}
      <div className="flex p-4 justify-center flex-col gap-10">
        <motion.h1 className="font-bold text-4xl"
          initial={{translateY:-30}}
          animate={{ translateY: 0 }}
          transition={{duration:0.7, ease:easeInOut}}
        >
          Accelerate Your Growth: Unleash the Power of Digital Marketing
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ lineHeight: 1.7, translateY: -50 }}
          animate={{ lineHeight: 1.5, translateY: 0 }}
          transition={{duration:0.7, ease:easeInOut}}
          
        >
          WebbingStone is a digital marketing agency founded in 2015 and based
          in Cairo, Egypt, with international reach extending to the USA, UAE,
          Canada, and beyond. We offer a wide range of services, including
          social media marketing, web development, mobile app development,
          graphic design, SEO, and branding solutions. The company has worked
          with notable clients, such as Fujifilm and the Ministry of Tourism in
          Egypt, showcasing our ability to handle diverse industries.
        </motion.p>
        <div className="flex justify-center">
          <Button
            name={"Our Services"}
            link={"https://webbingstone.com/services-webbingstone/"}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="items-center md:flex justify-center flex-col gap-4 hidden">
        <ImgOptimizer
          imgSrc="https://firebasestorage.googleapis.com/v0/b/m4-tazkarti.appspot.com/o/profileImgs%2Fai-generated-8411649.png?alt=media&token=026104f4-5942-45bf-be34-1e26fc2c5cd8"
          imgAlt="webbingStone video"
          customCSSClasses={""}
          parentClasses={"w-[500px] h-[300px]"}
        />
      </div>
    </div>
  );
};
export default Section1;
