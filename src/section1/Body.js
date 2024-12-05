import React , {useRef, useEffect} from "react";
const Body = () => {
    const blurRef = useRef();
    const imgRef = useRef();
    useEffect(() => {
        function loaded() {
          // Add className "loaded" for the element blurRef
          blurRef.current.classList.add("loaded");
        }
    
        if (imgRef.current.complete) {
          // If image is already loaded, add the loaded class immediately
          blurRef.current.classList.add("loaded");
        } else {
          // Add event listener for load event if image is not yet complete
          imgRef.current.addEventListener("load", loaded);
    
          // Cleanup function to remove event listener
          return () => {
            imgRef.current.removeEventListener("load", loaded);
          };
        }
      }, []);
    return (
      <div className="grid grid-cols-2">
        {/* Left Section */}
        <div className="flex p-4 justify-center flex-col h-[80vh] gap-10">
          <h1 className="font-bold text-4xl">
            Accelerate Your Growth: Unleash the Power of Digital Marketing
          </h1>
          <p className="text-xl">
            WebbingStone is a digital marketing agency founded in 2015 and based in Cairo, Egypt, with international reach
            extending to the USA, UAE, Canada, and beyond. We offer a wide range of services, including social media
            marketing, web development, mobile app development, graphic design, SEO, and branding solutions. The company
            has worked with notable clients, such as Fujifilm and the Ministry of Tourism in Egypt, showcasing our
            ability to handle diverse industries.
          </p>
          <button className="px-5 py-2 bg-red-900 self-center text-white">Our Services</button>
        </div>
  
        {/* Right Section */}
        <div className="items-center flex p-4 justify-center flex-col h-screen gap-4">
          <div ref={blurRef} className="blur-load h-[270px] w-[480px]">
            <img
            ref={imgRef}
            src="https://webbingstone.com/wp-content/uploads/2024/05/webbingstone_video_May24-C2.webp"
            loading="lazy"
            alt="webbingStone video"
            height={270}
            width={480}
            className="object-contain the-gif h-[270px]"
          />
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Body;
  
  