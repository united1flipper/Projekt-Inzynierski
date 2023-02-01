import React,{useState,FC} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom'

const NavBarItems = () => (
  <>
   <li className={`mx-4 cursor-pointer hover:underline`}><Link to="/">Strona główna</Link></li>
   <li className={`mx-4 cursor-pointer hover:underline`}><Link to="/market">Market</Link></li>
   <li className={`mx-4 cursor-pointer hover:underline`}><Link to="/transactions">Ostatnie transakcje</Link></li>
  </>
);

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      </div>
      <ul className="text-lg text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ">   
          <NavBarItems />
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar