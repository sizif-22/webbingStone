import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section3Cards from "./Section3Cards";

let sections = [
  {
    title: "web",
    cards: [
      { title: "Web 1", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
      { title: "Web 2", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
      { title: "Web 3", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
    ],
  },
  {
    title: "digital",
    cards: [
      { title: "Digital 1", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
      { title: "Digital 2", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
      { title: "Digital 3", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
    ],
  },
  {
    title: "mobile",
    cards: [
      { title: "Mobile 1", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
      { title: "Mobile 2", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
      { title: "Mobile 3", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
    ],
  },
  {
    title: "motion",
    cards: [
      { title: "Motion 1", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
      { title: "Motion 2", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
      { title: "Motion 3", imgUrl: "https://cdn.discordapp.com/attachments/1326598267860947025/1326599144898429000/milky-way-5295160.jpg?ex=6780033b&is=677eb1bb&hm=da3de511bcc7c9ea708f95e74b1d254b17e42c1fd8392646941318b259e9555f&", link: "#" },
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
      <div className="p-10 flex justify-center gap-10 items-center">
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
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Section3;
