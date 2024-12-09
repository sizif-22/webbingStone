// import { IoSearch } from "react-icons/io5";
// import logo from "../assets/webbing-stone-logo.png";
// import './header.css';

// const Header = () => {
//   return (
//     <div className="flex px-10 py-2 items-center justify-between sticky top-0 bg-[#eee]">
//       <img height={48} width={150} src={logo} alt="webbingStone" loading="lazy" />
//       <div className="flex items-center gap-7 text-primary font-bold">
//         <p className="text-secondary">
//           <button className="header-btns" onClick={() => window.location.href = '/home'}>Home</button>
//         </p>
//         <button className="header-btns" onClick={() => window.location.href = '/about'}>About Us</button>
//         <button className="header-btns" onClick={() => window.location.href = '/services'}>Services</button>
//         <button className="header-btns" onClick={() => window.location.href = '/portfolio'}>Portfolio</button>
//         <button className="header-btns" onClick={() => window.location.href = '/careers'}>Careers</button>
//         <button className="header-btns" onClick={() => window.location.href = '/blog'}>Blog</button>
//         <button className="header-btns" onClick={() => window.location.href = '/contact'}>Contact Us</button>
//         <button className="header-btns" onClick={() => window.location.href = '/faq'}>FAQ</button>
//         <IoSearch className="text-2xl text-secondary hover:text-primary" />
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { IoSearch, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "../assets/webbing-stone-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'FAQ', path: '/faq' }
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navigateTo = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };
  
  return (
    <div className="sticky top-0 border-b border-[#00000025]">
      
      <div className="flex px-4 py-2 items-center justify-between  bg-[#eee]">

        <img height={48} width={150} src={logo} alt="webbingStone"/>
        
        <div className="flex items-center gap-4 ">
          <IoSearch className="text-2xl text-secondary hover:text-primary md:hidden block" />
        <div className="hidden md:flex items-center gap-7 text-primary font-bold px-10 py-2">
            {menuItems.map((item, index) => (
            index == 0 ? 
            <button 
            key={index} 
            className="text-secondary" 
            onClick={() => navigateTo(item.path)}
            >
            {item.label}
            </button> : <button 
            key={index} 
            className="header-btns" 
            onClick={() => navigateTo(item.path)}
            >
            {item.label}
            </button>
          ))}
          <IoSearch className="text-2xl text-secondary hover:text-primary" />
        </div>
          <button 
            onClick={toggleMenu} 
            className="md:hidden block"
            >
            {isMenuOpen ? <IoCloseOutline className="text-3xl" /> : <IoMenuOutline className="text-3xl" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute z-50 top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <button 
              key={index} 
              className="w-full text-left px-4 py-3 border-b hover:bg-gray-100"
              onClick={() => navigateTo(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    
    </div>
  );
}

export default Header;