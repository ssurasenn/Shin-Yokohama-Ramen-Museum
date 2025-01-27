"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const MapLandmark = dynamic(() => import("../component/MapLandmark"), {
  ssr: false,
});

const GettingHerePage = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center min-h-screen "
      style={{ backgroundImage: "url('/yogohama-museum2.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container flex flex-col items-center relative py-5 my-4 mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-white text-4xl w-full sm:w-[800px] md:w-[1000px] font-bold text-center">| ACCESS</h1>
        <img
          src="/b2ap3_medium_Ramenmap.png"
          alt=""
          className="w-full sm:w-[700px] md:w-[800px] h-auto mt-4 rounded-md shadow-md hover:scale-105 duration-300"
        />
        <div className="bg-gray-800 p-6 mt-5 rounded-md shadow-md  w-full sm:w-[800px]">
          <div className="text-white text-md w-full sm:w-[750px]">
            <ul className="list-disc">
              <li>
                There are actually several ways to get to the Ramen Museum. Here
                are some easy ways to get there:
              </li>
              <li>
                From Haneda Airport : Time required : 45 minutes Directions :
                Haneda Airport→Shinyokohama Bus Terminal (Take the Rinko or Keikyu
                bus)→Shinyokohama Ramen Museum (on foot)
              </li>
              <li>
                From Yokohama : Time required : 15 minutes Directions :
                Yokohama→Shin-yokohama (Yokohama City Subway)→Shinyokohama Ramen
                Museum(Exit 10 one minutes)
              </li>
              <li>
                From Shinjuku : Time required : 50 minutes Directions :
                Shinjuku→Shibuya (JR Yamanote Line)→Kikuna（Tokyu Toyoko
                Line）→Shin-yokohama (JR Yokohama Line)→Shinyokohama Ramen Museum
                (on foot)
              </li>
              <li>
                From Shinagawa : Time required : 11 minutes Directions :
                Shinagawa→Shin-yokohama (JR Tokaido Shinkansen Line)→Shinyokohama
                Ramen Museum (on foot)
              </li>
              <li>From Tokyo : Time required : 18 minutes</li>
            </ul>
          </div>
        </div>

        <h1 className="text-white text-4xl sm:w-[800px] md:w-[1000px] font-bold mt-5 text-center">
          | Address
        </h1>

        <div className="bg-gray-800 p-6 mt-5 rounded-md shadow-md w-full sm:w-[800px]">
          <div className="text-white text-md w-full sm:w-[750px]">
            <ul>
              <li>
                2-14-21 Shinyokohama, Kohoku-ku, Yokohama-City, 222-0033, Japan
              </li>
              <li>TEL:045(471)0503</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-5 mx-auto">
        <MapLandmark />
      </div>
    </div>
  );
};

export default GettingHerePage;
