import React from "react";
import {
  CircleDollarSign,
  Clock8,
  Soup,
  ChefHat,
  ShieldCheck,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/shin_medium_ramenmuse.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container flex flex-col items-center  relative  py-5 my-4 mx-auto px-4 sm:px-6 md:px-8">
        <h1 className=" text-white text-4xl  font-bold text-center">
          |Shin-Yokohama Ramen Museum
        </h1>
        <img
          src="/museum.webp"
          alt="Museum"
          className="w-full sm:w-[700px] h-auto mt-4 rounded-md shadow-md hover:scale-105 duration-300"
        />
        <div className="bg-gray-800 p-6 mt-5 rounded-md shadow-md w-full sm:w-[800px]">
          <p className="text-white  text-md w-full sm:w-[700px]">
            Shin-Yokohama Ramen Museum was founded on March 6th, 1994 as the
            world's first Ramen-themed amusement park. Our concept has been to
            be the one-stop place to enjoy the flavors of this national dish
            from renowned shops across Japan without stepping on a plane. An
            exhibition area where visitors can learn about the history and
            culture of ramen is also located on the first floor. In the "Ramen
            Making Experience class" visitors can make noodles using the
            traditional Chinese method of "green bamboo beating," and enjoy
            learning how flour is transformed into ramen. (Charge / Reservations
            required).
            <br />
            Our seven ramen shops are showcased in a street-scape replication
            from the year 1958, Japan. It was in this year that the world's
            first instant ramen was invented.
          </p>
        </div>
      </div>

      <div className="container flex flex-col items-center  relative  py-5 my-2 mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-white text-2xl w-[500 px] font-bold flex text-center">
          <CircleDollarSign size={34} /> |Admission Fee
        </h1>
        <div className="bg-gray-800 p-6 mt-5 rounded-md shadow-md w-full sm:w-[800px]">
          <div className="text-white  text-md w-full sm:w-[700px] ">
            <li>Adults (19 and above) 450yen (Group of 15 or more 400yen)</li>

            <li>
              Child (6 to 18) & seniors(65 over) 100yen (Group of 15 or more
              50yen)
            </li>

            <li>Free for children younger than 6 years old</li>
            <div className="font-bold text-xl my-2 px-5 flex text-center gap-3">
              <Clock8 size={25} /> | Business Hours
            </div>
            <li> Weekday 11:00～21:00</li>

            <li> Holiday 10:30～21:00</li>
            <li> Holidays : Dec/31, Jan/1</li>
            <span className="flex  gap-2 px-3">
              {" "}
              <Soup size={20} />
              Ramen shops take orders until 30 minutes before closing time.
            </span>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center  relative  py-5 my-2 mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-white text-2xl  w-[500 px] font-bold flex text-center">
          <ChefHat size={34} /> |Ramen Noodle Making Class
        </h1>
        <img
          src="/ramenmaking_1.png"
          alt=""
          className="w-full sm:w-[700px] h-auto mt-4 rounded-md shadow-md hover:scale-105 duration-300"
        />
        <div className="bg-gray-800 p-6 mt-5 rounded-md shadow-md w-full sm:w-[800px]">
          <div className="text-white  text-md w-full sm:w-[700px] ">
            <p>
              Fee/ Reservation required
              <br />
              We offer a “Ramen Noodle Making Class” for all ramen lovers. This
              class is a hands-on experience where you can try making ramen
              noodles using the traditional Chinese method called Aodake-uchi
              and have fun learning how to turn flour into ramen noodles.{" "}
            </p>

            <a
              href="https://www.raumen.co.jp/makingnoodle_en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 underline"
            >
              Readmore
            </a>
          </div>
        </div>
        <div className="container flex flex-col items-center  relative  py-5 my-2 mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-white text-2xl  w-[500 px] font-bold flex text-center">
            <ShieldCheck size={34} /> | Rules
          </h1>
          <div className="bg-gray-800 p-6 mt-5 rounded-md shadow-md w-full sm:w-[800px]">
            <section className="text-white  text-md w-full sm:w-[700px] ">
              <ul className="list-disc">
                <li>
                  For those who are junior high school students or above, it is
                  necessary to order at least one bowl of ramen when you go to a
                  ramen shop.
                </li>
                <li>
                  Please wait in line when the ramen shop is crowded. Because
                  the ramen shop does not accept reservations.
                </li>
                <li>
                  Food and drinks are not allowed in the museum or ramen shop.
                </li>
                <li>
                  Pets, including dogs and cats, are not allowed in the museum,
                  except for guide dogs.
                </li>
                <li>
                  Visitors are allowed to take photos provided that they take
                  into account the copyright infringement of the exhibits signs
                  and other visitors' photos We will not be responsible for any
                  infringement
                </li>
                <li>
                  For commercial photography or video, prior permission from the
                  museum is required.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
