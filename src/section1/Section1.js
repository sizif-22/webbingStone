import Body from "./Body";
import Header from "./Header";
import PreHeader from "./PreHeader";
const Section1 = ()=>{
    return(
        <div>
            <PreHeader/>
            <hr className="border-primary"/>
            <Header/>
            <Body/>
        </div>
    );

}
export default Section1;