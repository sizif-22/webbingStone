import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section3Cards from "./Section3Cards";

let sections = [
  {
    title: "web",
    cards: [
      { title: "Web 1", imgUrl: "", link: "", color: "red" },
      { title: "Web 2", imgUrl: "", link: "", color: "blue" },
      { title: "Web 3", imgUrl: "", link: "", color: "green" },
    ],
  },
  {
    title: "digital",
    cards: [
      { title: "Digital 1", imgUrl: "", link: "", color: "orange" },
      { title: "Digital 2", imgUrl: "", link: "", color: "purple" },
      { title: "Digital 3", imgUrl: "", link: "", color: "pink" },
    ],
  },
  {
    title: "mobile",
    cards: [
      { title: "Mobile 1", imgUrl: "", link: "", color: "yellow" },
      { title: "Mobile 2", imgUrl: "", link: "", color: "teal" },
      { title: "Mobile 3", imgUrl: "", link: "", color: "brown" },
    ],
  },
  {
    title: "motion",
    cards: [
      { title: "Motion 1", imgUrl: "", link: "", color: "cyan" },
      { title: "Motion 2", imgUrl: "", link: "", color: "magenta" },
      { title: "Motion 3", imgUrl: "", link: "", color: "lime" },
    ],
  },
];

const Section3 = () => {
  const [activeBTN, setActiveBTN] = useState("web");
  const [animationKey, setAnimationKey] = useState(0);

  const handleButtonClick = (section) => {
    setActiveBTN(section); // Update the active button
    setAnimationKey((prevKey) => prevKey + 1); // Force re-render to replay animations
  };

  return (
    <div>
      <h1 className="flex justify-center py-0 font-bold text-2xl">Our Works</h1>
      <h3 className="flex justify-center pb-5">The Digital Wizards!</h3>
      <div className="section3Btns flex gap-2 justify-center items-center">
        <button
          onClick={() => handleButtonClick("web")}
          className={activeBTN === "web" ? "activated" : ""}
        >
          WEB DEVELOPMENT
        </button>
        <button
          onClick={() => handleButtonClick("digital")}
          className={activeBTN === "digital" ? "activated" : ""}
        >
          DIGITAL MARKETING
        </button>
        <button
          onClick={() => handleButtonClick("mobile")}
          className={activeBTN === "mobile" ? "activated" : ""}
        >
          MOBILE APPS
        </button>
        <button
          onClick={() => handleButtonClick("motion")}
          className={activeBTN === "motion" ? "activated" : ""}
        >
          MOTION GRAPHICS
        </button>
      </div>
      <div className="p-5 flex justify-center gap-6 items-center">
        <AnimatePresence key={animationKey}>
          {sections
            .find((section) => section.title === activeBTN)
            ?.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.6, translateX: -70 }}
                animate={{ opacity: 1, scale: 1, translateX: 0 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.5 }}
              >
                <Section3Cards
                  title={card.title}
                  imgUrl={card.imgUrl}
                  link={card.link}
                  color={card.color}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Section3;
