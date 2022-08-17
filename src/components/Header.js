import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleToggle = () => setNav(!nav);
  return (
    <>
      <div className="bg-[#92E3A9] p-6 lg:mb-10 flex justify-between items-center">
        <div className="sm:text-[20px] md:text-[24px] pl-10 font-monto font-bold">
          QR Code Generator
        </div>

        <div className="lg:flex xs:hidden">
          <ul className="flex gap-20 font-monto">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="lg:flex xs:hidden mr-8 gap-5">
          <BiSearch className="text-[28px]" />
          <MdOutlineShoppingCart className="text-[28px]" />
        </div>
        <div onClick={handleToggle} className="xs:flex lg:hidden">
          {!nav ? (
            <FaBars className="text-[20px]" />
          ) : (
            <FaTimes className="text-[20px]" />
          )}
        </div>
      </div>
      <div
        className={
          !nav ? "hidden" : "bg-[#92E3A9] p-52 xs:my-0 md:my-0 lg:hidden"
        }
      >
        <ul className="my-7 flex-col space-y-16 text-center font-monto">
          <li onClick={handleToggle}>Home</li>
          <li onClick={handleToggle}>About</li>
          <li onClick={handleToggle}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
