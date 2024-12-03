import Header from "./Header";
import PreHeader from "./PreHeader";
const Section1 = ()=>{
    return(
        <div>
            <PreHeader/>
            <hr className="border-primary"/>
            <Header/>
            <hr className=" border-[#00000025]"/>
            <div className="grid grid-cols-2">
                <div>
                    <h1>Accelerate Your Growth: Unleash the Power of Digital Marketing</h1>
                    <p>WebbingStone is a digital marketing agency founded in 2015 and based in Cairo, Egypt, with international reach extending to the USA, UAE, Canada, and beyond. We offer a wide range of services, including social media marketing, web development, mobile app development, graphic design, SEO, and branding solutions. The company has worked with notable clients, such as Fujifilm and the Ministry of Tourism in Egypt, showcasing our ability to handle diverse industries.</p>
                </div>
                <div></div>
            </div>
        </div>
    );

}
export default Section1;