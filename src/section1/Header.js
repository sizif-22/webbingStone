import { IoSearch } from "react-icons/io5";
import logo from "../assets/webbing-stone-logo.png";
import './header.css'; 
const Header = ()=>{
    return(
        <div className="flex px-10 py-2 items-center justify-between sticky top-0 bg-[#eee]">
         <img height={48} width={150} src={logo} alt="webbingStone" loading="lazy"/>
         <div className="flex items-center gap-7 text-primary font-bold">
            <p className="text-secondary"><a href="#">Home</a></p>
            <a href="#" className="header-btns">About Us</a>
            <a href="#" className="header-btns">Services</a>
            <a href="#" className="header-btns">Portfolio</a>
            <a href="#" className="header-btns">Careers</a>
            <a href="#" className="header-btns">Blog</a>
            <a href="#" className="header-btns">Contact Us</a>
            <a href="#" className="header-btns">FAQ</a>
            <IoSearch className="text-2xl text-secondary hover:text-primary"/>
         </div>
         
        </div>
    );
}
export default Header;