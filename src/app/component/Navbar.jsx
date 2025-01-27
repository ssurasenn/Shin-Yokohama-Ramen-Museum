import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-white font-semibold hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white font-semibold hover:text-blue-500"
          >
            About
          </Link>
          <Link
            href="/gettinghere"
            className="text-white font-semibold hover:text-blue-500"
          >
            GettingHere
          </Link>
          <Link
            href="/ramenshop"
            className="text-white font-semibold hover:text-blue-500"
          >
            RamenShop
          </Link>
        </div>
        <div className="text-white ">
          <a
            href="tel:+123456789"
            className=" font-semibold hover:text-blue-500 flex gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#FFFFFF"
            >
              <path d="M264-48q-29.7 0-50.85-21.15Q192-90.3 192-120v-720q0-29.7 21.15-50.85Q234.3-912 264-912h432q29.7 0 50.85 21.15Q768-869.7 768-840v720q0 29.7-21.15 50.85Q725.7-48 696-48H264Zm0-216v144h432v-144H264Zm215.79 108q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM264-336h432v-384H264v384Zm0-456h432v-48H264v48Zm0 528v144-144Zm0-528v-48 48Z" />
            </svg>
            <p>(+66) 123-45678</p>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
