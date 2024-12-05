const Body = () => {
    return (
      <div className="grid grid-cols-2">
        <div className="flex p-4 justify-center flex-col h-[80vh] gap-10">
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
          <button className="px-5 py-2 bg-red-900 self-center text-white">
            Our Services
          </button>
        </div>
        <div className="items-center flex p-4 justify-center flex-col h-screen gap-4">
          <img
            src="https://webbingstone.com/wp-content/uploads/2024/05/optimized_image.webp"
            alt="webbingStone video"
            height="270"
            width="480"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    );
  };
  
  export default Body;
  