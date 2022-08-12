import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";


// import { Link } from 'react-router-dom';

export default function Footer() {  
  return (
    <footer className="w-full h-full inset-x-0 bottom-0 ">
        <div className="border-t border-gray-400">
        <h2 className="px-[50px] text-green-500  font-bold text-[25px]">StatCrawler</h2>
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2 text-green-500">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase text-green-500 pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase text-green-500 pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase text-green-500 pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Get in touch</p>
          <p className="py-4">
            Reach out to here from us and how you can use our services.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 border-green-500 border rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 border rounded-md px-2 py-2 bg-green-500 text-white font-semibold mb-4 hover:bg-green-700">connect</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 StatCrawler All rights reserved</p>
        <div className="flex justify-between text-green-500 sm:w-[300px] text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
      </div>
    </footer>
  );
}
