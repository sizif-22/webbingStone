import { IoSearch } from "react-icons/io5";
import logo from "../assets/webbing-stone-logo.png";
import './header.css'; 
const Header = ()=>{
    return(
        <div className="flex px-10 py-2 items-center justify-between">
         <img height={48} width={150} src={logo} alt="webbingStone" loading="lazy"/>
         <div className="flex items-center gap-7 text-primary font-bold">
            {/* <p className="text-secondary"><a href="#">Home</a></p>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a> */}
            <IoSearch className=" text-2xl"/>
         </div>
         
        </div>
    );
}
export default Header;