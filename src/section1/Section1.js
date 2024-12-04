import Body from "./Body";
import Header from "./Header";
import PreHeader from "./PreHeader";
const Section1 = ()=>{
    return(
        <div>
            <PreHeader/>
            <hr className="border-primary"/>
            <Header/>
            <hr className=" border-[#00000025]"/>
            <Body/>
        </div>
    );

}
export default Section1;