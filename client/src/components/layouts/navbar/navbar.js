import React from "react";
import { Link } from "react-router-dom";
//import Login from "../../pages/login";

export default function Navbar() {
  return (
    <div>
      <header className="h-[85px] fixed w-full z-10 shadow-lg backdrop-blur-[100px]">
        <nav className="flex justify-between items-center w-full h-full px-[40px]">
          <p className="font-bold text-[26px] px-[40px]">StatCrawler</p>
          <ul className="flex justify-center font-semibold">
            <li className="ml-[60px] hover:text-green-500 cursor-pointer">Pricing</li>
            <li className="ml-[60px] hover:text-green-500 cursor-pointer">Services</li>
            <li className="ml-[60px] hover:text-green-500 cursor-pointer">Support</li>
          </ul>
          <Link to='/login'>
            <p className="cursor-pointer border mr-2 px-3 py-2 rounded-md bg-green-500 text-white">login
            </p>
          </Link>
        </nav>
      </header>
    </div>
  );
}
