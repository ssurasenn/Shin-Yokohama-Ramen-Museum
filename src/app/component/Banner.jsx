import Link from "next/link";
import React from "react";
const Banner = () => {
  return (
    <div
      className=" relative overflow-hidden bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/yogohama-museum.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto mt-[300px] relative z-10 p-8">
        <h1 className="text-white text-6xl w-[600px] font-bold">
          Shin-Yokohama Ramen Museum
        </h1>
        <p className="text-white my-3 text-md w-[500px]">
          Hello friends, before we enter the month of love and the cold season
          in Japan, let's talk about a hot bowl of ramen! Ramen is a famous
          Japanese food for a long time and is popular all over the world. Even
          Thai people love this menu very much. So today, I'm writing a blog to
          take my friends to see the ramen museum in Yokohama, along with
          various travel details!{" "}
        </p>
        <Link
          href="/about"
          className="bg-yellow-400 text-white font-semibold rounded-md px-2 py-1 hover:bg-transparent hover:border-2 "
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Banner;
