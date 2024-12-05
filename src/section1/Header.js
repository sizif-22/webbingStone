import { IoSearch } from "react-icons/io5";
import logo from "../assets/webbing-stone-logo.png";
import './header.css';

const Header = () => {
  return (
    <div className="flex px-10 py-2 items-center justify-between sticky top-0 bg-[#eee]">
      <img height={48} width={150} src={logo} alt="webbingStone" loading="lazy" />
      <div className="flex items-center gap-7 text-primary font-bold">
        <p className="text-secondary">
          <button className="header-btns" onClick={() => window.location.href = '/home'}>Home</button>
        </p>
        <button className="header-btns" onClick={() => window.location.href = '/about'}>About Us</button>
        <button className="header-btns" onClick={() => window.location.href = '/services'}>Services</button>
        <button className="header-btns" onClick={() => window.location.href = '/portfolio'}>Portfolio</button>
        <button className="header-btns" onClick={() => window.location.href = '/careers'}>Careers</button>
        <button className="header-btns" onClick={() => window.location.href = '/blog'}>Blog</button>
        <button className="header-btns" onClick={() => window.location.href = '/contact'}>Contact Us</button>
        <button className="header-btns" onClick={() => window.location.href = '/faq'}>FAQ</button>
        <IoSearch className="text-2xl text-secondary hover:text-primary" />
      </div>
    </div>
  );
}

export default Header;
