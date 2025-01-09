import React, { useEffect, useRef } from "react";
const ImgOptimizer = ({ imgSrc, imgAlt, customCSSClasses, parentClasses }) => {
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
    <div ref={blurRef} className={`blur-load ${parentClasses}`}>
      <img
        ref={imgRef}
        src={imgSrc}
        alt={imgAlt}
        loading="lazy"
        className={`object-cover lazy-loaded-img h-full w-full ${customCSSClasses}`}
      />
    </div>
  );
};
export default ImgOptimizer;
