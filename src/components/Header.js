import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#92E3A9] p-6 mb-10 flex justify-between items-center">
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
      <div className="xs:flex lg:hidden">
        <FaBars className="text-[20px]" />
      </div>
    </div>
  );
};

export default Header;
