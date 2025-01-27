import React from "react";

const RamenShopPage = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center min-h-screen "
      style={{ backgroundImage: "url('/ramenmuseum_naikan.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container flex flex-col items-center  relative  py-8 my-4 mx-auto px-4 sm:px-6 md:px-8">
        <h1 className=" text-white text-4xl w-full font-bold text-center">
          | Shop List
        </h1>
        <p className=" text-white text-md w-full  font-semibold mt-5 text-center">
          *Adult visitors who are junior high school students and older are
          expected to order at least one bowl of ramen when they visit a ramen
          restaurant.
        </p>
        <div className=" h-auto w-full max-w-4xl bg-gray-800 p-6 mt-5 rounded-md shadow-md">
          <div className="bg-gray-200 h-auto w-full p-3 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between p-2">
              <div className="md:w-2/3">
                <p className="text-xl font-semibold py-2 text-black ml-3">
                  Ryu Shanghai Honten
                </p>
                <div className="flex gap-3">
                  <button className="bg-[rgb(250,190,0)] p-2 rounded-md w-auto  flex items-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#FFFFFF"
                    >
                      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
                    </svg>
                    Thick wrinkled
                  </button>
                  <button className="bg-[rgb(135,95,52)] p-2 rounded-md w-auto  flex items-center justify-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M238-432q8-13 11.5-26.5T253-487q0-31-18.5-69.5T216-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 17-3.5 29.5T285-432h-47Zm228 0q8-12 11.5-24.5T481-487q0-32-18.5-70T444-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T513-432h-47Zm-114 0q8-13 11.5-25.5T367-487q0-32-18.5-70T330-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T399-432h-47Zm51 336q-103 0-173-63.5T144-335q-2-10 5.5-17.5T168-360h423l45-408q5-42 35.5-69t72.5-27q45 0 76.5 31.5T852-756q0 15-.5 30t-2.5 30l-71-10q1-11 1.5-25t.5-25q0-15-10.5-25.5T744-792q-14 0-24 9t-12 23l-48 429q-11 103-84 169T403-96Zm0-72q56 0 104-32t70-88H228q23 58 70 89t105 31Zm5-120Z" />
                    </svg>
                    Miso
                  </button>
                </div>
                <p className="mt-2 w-full">
                  One-of-a-kind spicy hot miso ramen
                  <br />
                  <br />
                  Enjoy the red spicy hot miso in the center of the bowl as it
                  melts gradually into the soup. That is how an expert savors
                  this ramen. An abundant quantity of dried small sardines are
                  blended into a pork and chicken broth to make a soup. The
                  voluminous homemade extremely thick kneaded noodles are super
                  springy.
                </p>
              </div>
              <img
                className="w-full md:w-[200px] sm:w-[200px] h-[200px] rounded-md shadow-md hover:scale-105 duration-300 mt-4 md:mt-0 "
                src="/img_top_r_ryushanhai.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h-auto w-full max-w-4xl bg-gray-800 p-6 mt-5 rounded-md shadow-md">
          <div className="bg-gray-200 h-auto w-full p-3 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between p-2">
              <div className="md:w-2/3">
                <p className="text-xl font-semibold py-2 text-black ml-3">
                  Rishiri Ramen Miraku
                </p>
                <div className="flex gap-3">
                  <button className="bg-[rgb(250,190,0)] p-2 rounded-md w-auto flex items-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#FFFFFF"
                    >
                      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
                    </svg>
                    Thick wrinkled
                  </button>
                  <button className="bg-[rgb(135,95,52)] p-2 rounded-md w-auto flex items-center justify-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M238-432q8-13 11.5-26.5T253-487q0-31-18.5-69.5T216-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 17-3.5 29.5T285-432h-47Zm228 0q8-12 11.5-24.5T481-487q0-32-18.5-70T444-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T513-432h-47Zm-114 0q8-13 11.5-25.5T367-487q0-32-18.5-70T330-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T399-432h-47Zm51 336q-103 0-173-63.5T144-335q-2-10 5.5-17.5T168-360h423l45-408q5-42 35.5-69t72.5-27q45 0 76.5 31.5T852-756q0 15-.5 30t-2.5 30l-71-10q1-11 1.5-25t.5-25q0-15-10.5-25.5T744-792q-14 0-24 9t-12 23l-48 429q-11 103-84 169T403-96Zm0-72q56 0 104-32t70-88H228q23 58 70 89t105 31Zm5-120Z" />
                    </svg>
                    Soy sauce
                  </button>
                </div>
                <p className="mt-2 w-full">
                  Ramen from the Rishiri Island of Hokkaido landed on Ra-haku
                  <br />
                  <br />
                  The yaki-shoyu ( rich, scorched soy sauce base ) ramen is an
                  exclusive dish made using large amounts of Rishiri kelp, which
                  is a bounty and a specialty of the sea in the north, an
                  unforgettable soup packed with plenty of savory flavor
                  complemented by aged, medium-thick chijiremen ( wavy )
                  noodles. The main restaurant on Rishiri Island was even
                  designated as a "Bib Gourmand" restaurant in the Michelin
                  Guide Hokkaido 2017 Special Edition.
                </p>
              </div>
              <img
                className="w-full md:w-[200px] sm:w-[200px] h-[200px] rounded-md shadow-md hover:scale-105 duration-300 mt-4 md:mt-0"
                src="/Rishiri Ramen Miraku.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h-auto w-full max-w-4xl bg-gray-800 p-6 mt-5 rounded-md shadow-md">
          <div className="bg-gray-200 h-auto w-full p-3 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between p-2">
              <div className="md:w-2/3">
                <p className="text-xl font-semibold py-2 text-black ml-3">
                  Asakusa Rairaiken
                </p>
                <div className="flex gap-3">
                  <button className="bg-[rgb(250,190,0)] p-2 rounded-md w-auto flex items-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#FFFFFF"
                    >
                      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
                    </svg>
                    Straight
                  </button>
                  <button className="bg-[rgb(135,95,52)] p-2 rounded-md w-auto flex items-center justify-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M238-432q8-13 11.5-26.5T253-487q0-31-18.5-69.5T216-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 17-3.5 29.5T285-432h-47Zm228 0q8-12 11.5-24.5T481-487q0-32-18.5-70T444-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T513-432h-47Zm-114 0q8-13 11.5-25.5T367-487q0-32-18.5-70T330-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T399-432h-47Zm51 336q-103 0-173-63.5T144-335q-2-10 5.5-17.5T168-360h423l45-408q5-42 35.5-69t72.5-27q45 0 76.5 31.5T852-756q0 15-.5 30t-2.5 30l-71-10q1-11 1.5-25t.5-25q0-15-10.5-25.5T744-792q-14 0-24 9t-12 23l-48 429q-11 103-84 169T403-96Zm0-72q56 0 104-32t70-88H228q23 58 70 89t105 31Zm5-120Z" />
                    </svg>
                    Soy sauce
                  </button>
                </div>
                <p className="mt-2 w-full">
                  Legendary ramen revived after 100 years
                  <br />
                  <br />
                  The popular ramen shop has been revived in cooperation of the
                  successor of Rairaiken, which caused Japan's first ramen boom
                  after its foundation in 1910. Three parties were involved in
                  the project. The museum did research and collected supporting
                  information, Shinasobaya reproduced the ramen and operates the
                  shop, and the successor gave a stamp of approval. The noodles
                  are made by Aodake Teuchi using Satonosora, Japanese wheat of
                  the same variety at the original recipe (100 servings to be
                  offered per day). The soup is the result of the condensation
                  of umami from the domestically produced ingredients.Taste more
                  umami from the grilled pork as you chew it. The ramen is sold
                  for a limited three-year period.
                </p>
              </div>
              <img
                className="w-full md:w-[200px] sm:w-[200px] h-[200px] rounded-md shadow-md hover:scale-105 duration-300 mt-4 md:mt-0"
                src="/Asakusa_Rairaiken.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h-auto w-full max-w-4xl bg-gray-800 p-6 mt-5 rounded-md shadow-md">
          <div className="bg-gray-200 h-auto w-full p-3 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between p-2">
              <div className="md:w-2/3">
                <p className="text-xl font-semibold py-2 text-black ml-3">
                  Ryukyu　Shinmen Tondou
                </p>
                <div className="flex gap-3">
                  <button className="bg-[rgb(250,190,0)] p-2 rounded-md w-auto flex items-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#FFFFFF"
                    >
                      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
                    </svg>
                    Thin straight
                  </button>
                  <button className="bg-[rgb(135,95,52)] p-2 rounded-md w-auto flex items-center justify-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M238-432q8-13 11.5-26.5T253-487q0-31-18.5-69.5T216-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 17-3.5 29.5T285-432h-47Zm228 0q8-12 11.5-24.5T481-487q0-32-18.5-70T444-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T513-432h-47Zm-114 0q8-13 11.5-25.5T367-487q0-32-18.5-70T330-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T399-432h-47Zm51 336q-103 0-173-63.5T144-335q-2-10 5.5-17.5T168-360h423l45-408q5-42 35.5-69t72.5-27q45 0 76.5 31.5T852-756q0 15-.5 30t-2.5 30l-71-10q1-11 1.5-25t.5-25q0-15-10.5-25.5T744-792q-14 0-24 9t-12 23l-48 429q-11 103-84 169T403-96Zm0-72q56 0 104-32t70-88H228q23 58 70 89t105 31Zm5-120Z" />
                    </svg>
                    Salt
                  </button>
                </div>
                <p className="mt-2 w-full">
                  Exquisite salt flavored ramen.Condensed with the blessing from
                  Okinawa's nature, it shines in golden color.
                  <br />
                  <br />
                  Year 2021 marks the 20th anniversary of Ryukyu Shinmen Tondou.
                  To commemorate its anniversary, the shop took a new challenge
                  to renew its signboard menu 'Onna Aji'. After a year of
                  development period, the salt flavored ramen 'Shin Onna Aji'
                  was born. Ajikuta (rich and deep taste dashi soup in Okinawa
                  dialect) is made from Okinawa's long time popular ingredients
                  such as pork, dried bonito, kelp, and dried sardines called
                  'sururu~' in Okinawa dialect. Please experience the flavor of
                  the delicious soup.
                </p>
              </div>
              <img
                className="w-full md:w-[200px] sm:w-[200px] h-[200px] rounded-md shadow-md hover:scale-105 duration-300 mt-4 md:mt-0"
                src="/Ryukyu_Shinmen_Tondou.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h-auto w-full max-w-4xl bg-gray-800 p-6 mt-5 rounded-md shadow-md">
          <div className="bg-gray-200 h-auto w-full p-3 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between p-2">
              <div className="md:w-2/3">
                <p className="text-xl font-semibold py-2 text-black ml-3">
                  Komurasaki
                </p>
                <div className="flex gap-3">
                  <button className="bg-[rgb(250,190,0)] p-2 rounded-md w-auto flex items-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#FFFFFF"
                    >
                      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
                    </svg>
                    Thin straight
                  </button>
                  <button className="bg-[rgb(135,95,52)] p-2 rounded-md w-auto flex items-center justify-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M238-432q8-13 11.5-26.5T253-487q0-31-18.5-69.5T216-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 17-3.5 29.5T285-432h-47Zm228 0q8-12 11.5-24.5T481-487q0-32-18.5-70T444-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T513-432h-47Zm-114 0q8-13 11.5-25.5T367-487q0-32-18.5-70T330-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T399-432h-47Zm51 336q-103 0-173-63.5T144-335q-2-10 5.5-17.5T168-360h423l45-408q5-42 35.5-69t72.5-27q45 0 76.5 31.5T852-756q0 15-.5 30t-2.5 30l-71-10q1-11 1.5-25t.5-25q0-15-10.5-25.5T744-792q-14 0-24 9t-12 23l-48 429q-11 103-84 169T403-96Zm0-72q56 0 104-32t70-88H228q23 58 70 89t105 31Zm5-120Z" />
                    </svg>
                    Tonkotsu
                  </button>
                </div>
                <p className="mt-2 w-full">
                  The cradle of Kumamoto tonkotsu(pork bone)-based ramen
                  <br />
                  <br />
                  Komurasaki, well established ramen shop in Kumamoto, was
                  founded in 1954. It is the only ramen shop that has been open
                  since the opening of the Shin-Yokohama Ramen Museum and the
                  reason why it has been loved for many years is because of its
                  elaborate soup.
                </p>
              </div>
              <img
                className="w-full md:w-[200px] sm:w-[200px] h-[200px] rounded-md shadow-md hover:scale-105 duration-300 mt-4 md:mt-0"
                src="/Komurasaki.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h-auto w-full max-w-4xl bg-gray-800 p-6 mt-5 rounded-md shadow-md">
          <div className="bg-gray-200 h-auto w-full p-3 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between p-2">
              <div className="md:w-2/3">
                <p className="text-xl font-semibold py-2 text-black ml-3">
                  Rokkakuya 1994+
                </p>
                <div className="flex gap-3">
                  <button className="bg-[rgb(250,190,0)] p-2 rounded-md w-auto flex items-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#FFFFFF"
                    >
                      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
                    </svg>
                    Thick straight
                  </button>
                  <button className="bg-[rgb(135,95,52)] p-2 rounded-md w-auto flex items-center justify-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M238-432q8-13 11.5-26.5T253-487q0-31-18.5-69.5T216-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 17-3.5 29.5T285-432h-47Zm228 0q8-12 11.5-24.5T481-487q0-32-18.5-70T444-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T513-432h-47Zm-114 0q8-13 11.5-25.5T367-487q0-32-18.5-70T330-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T399-432h-47Zm51 336q-103 0-173-63.5T144-335q-2-10 5.5-17.5T168-360h423l45-408q5-42 35.5-69t72.5-27q45 0 76.5 31.5T852-756q0 15-.5 30t-2.5 30l-71-10q1-11 1.5-25t.5-25q0-15-10.5-25.5T744-792q-14 0-24 9t-12 23l-48 429q-11 103-84 169T403-96Zm0-72q56 0 104-32t70-88H228q23 58 70 89t105 31Zm5-120Z" />
                    </svg>
                    Pork bone soy sauce
                  </button>
                </div>
                <p className="mt-2 w-full">
                  Rokkakuya, one of the three major Iekei ramen restaurant
                  chains, makes a comeback at the Shin-Yokohama Ramen Museum!
                  <br />
                  <br />
                  Rokkakuya was widely known as one of the three major Iekei
                  ramen restaurant chains. The chain's main restaurant closed in
                  2017 and its founder passed away in 2022. The chain's comeback
                  at the Shin-Yokohama Ramen Museum is a project that began
                  while the founder was still alive. Now, it is becoming a
                  reality in cooperation with Rokkakuya Totsuka and Kuramaeya in
                  Hamamatsu. The former is the only Rokkakuya restaurant
                  operating today and the latter was chosen by Rokkakuya founder
                  Takashi Jindo. The concept behind the revival is the
                  reproduction of the ideal soup that the founder endeavored to
                  create. The reproduction involves using almost the same
                  ingredients. They have carefully selected chicken oil of high
                  quality while taking the balance of the different bones that
                  they use and their cooking methods to the next level in
                  pursuit of the sweet soup their founder envisioned. The
                  noodles are obtained from Sakai Seimen, a purveyor of Iekei
                  ramen noodles. This the the return of a classic Iekei ramen
                  which is rarely available today.
                </p>
              </div>
              <img
                className="w-full md:w-[200px] sm:w-[200px] h-[200px] rounded-md shadow-md hover:scale-105 duration-300 mt-4 md:mt-0"
                src="/img_top_r_ryushanhai.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h-auto w-full max-w-4xl bg-gray-800 p-6 mt-5 rounded-md shadow-md">
          <div className="bg-gray-200 h-auto w-full p-3 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between p-2">
              <div className="md:w-2/3">
                <p className="text-xl font-semibold py-2 text-black ml-3">
                  ISSOU
                </p>
                <div className="flex gap-3">
                  <button className="bg-[rgb(250,190,0)] p-2 rounded-md w-auto flex items-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#FFFFFF"
                    >
                      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
                    </svg>
                    Thin straight
                  </button>
                  <button className="bg-[rgb(135,95,52)] p-2 rounded-md w-auto flex items-center justify-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M238-432q8-13 11.5-26.5T253-487q0-31-18.5-69.5T216-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 17-3.5 29.5T285-432h-47Zm228 0q8-12 11.5-24.5T481-487q0-32-18.5-70T444-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T513-432h-47Zm-114 0q8-13 11.5-25.5T367-487q0-32-18.5-70T330-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T399-432h-47Zm51 336q-103 0-173-63.5T144-335q-2-10 5.5-17.5T168-360h423l45-408q5-42 35.5-69t72.5-27q45 0 76.5 31.5T852-756q0 15-.5 30t-2.5 30l-71-10q1-11 1.5-25t.5-25q0-15-10.5-25.5T744-792q-14 0-24 9t-12 23l-48 429q-11 103-84 169T403-96Zm0-72q56 0 104-32t70-88H228q23 58 70 89t105 31Zm5-120Z" />
                    </svg>
                    Tonkotsu
                  </button>
                </div>
                <p className="mt-2 w-full">
                  Tonkotsu Cappuccino" is taking Hakata ramen by storm.
                  <br />
                  <br />
                  The restaurant is renowned for its "tonkotsu (pork bone broth)
                  cappuccino" that has created a sensation in the Hakata ramen
                  world. The restaurant in Fukuoka, the holy land of tonkotsu
                  ramen, produces conspicuous long lines of customers. At its
                  busiest, the lines can run to more than 200 customers long,
                  consisting not only Hakata locals but diners from across Japan
                  and overseas who have heard of its reputation. What makes the
                  long wait all worth it is the rich soup, made by slowly
                  cooking pork bones over a long period and extracting maximum
                  umami from the bone marrow. Another feature is the fine foamed
                  layer of fat which covers the top of the bowl. The way it
                  looks has given rise to a term unique to Hakata Isso -
                  "tonkotsu cappuccino." The thin, flat noodles, of which 80% of
                  customers order second servings, boast a smooth and supple
                  texture. This is the first branch of Hakata Isso to open
                  outside Fukuoka Prefecture.
                </p>
              </div>
              <img
                className="w-full md:w-[200px] sm:w-[200px] h-[200px] rounded-md shadow-md hover:scale-105 duration-300 mt-4 md:mt-0"
                src="/ISSOU.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h-auto w-full max-w-4xl bg-gray-800 p-6 mt-5 rounded-md shadow-md">
          <div className="bg-gray-200 h-auto w-full p-3 rounded-md ">
            <div className="flex flex-col md:flex-row justify-between p-2">
              <div className="md:w-2/3">
                <p className="text-xl font-semibold py-2 text-black ml-3">
                Miso Ramen Shop Hakata Bunpuku
                </p>
                <div className="flex gap-3">
                  <button className="bg-[rgb(250,190,0)] p-2 rounded-md w-auto flex items-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#FFFFFF"
                    >
                      <path d="M400-160h160v-44l50-20q65-26 110.5-72.5T786-400H174q20 57 65 103.5T350-224l50 20v44Zm-80 80v-70q-107-42-173.5-130T80-480h80v-320l720-80v60l-460 52v68h460v60H420v160h460q0 112-66.5 200T640-150v70H320Zm0-620h40v-62l-40 5v57Zm-100 0h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm-100 0h40v-160h-40v160Zm260 80Z" />
                    </svg>
                    Thick wrinkled
                  </button>
                  <button className="bg-[rgb(135,95,52)] p-2 rounded-md w-auto flex items-center justify-center gap-1 text-white hover:scale-105 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M238-432q8-13 11.5-26.5T253-487q0-31-18.5-69.5T216-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 17-3.5 29.5T285-432h-47Zm228 0q8-12 11.5-24.5T481-487q0-32-18.5-70T444-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T513-432h-47Zm-114 0q8-13 11.5-25.5T367-487q0-32-18.5-70T330-621q0-16 3.5-28t11.5-23h47q-8 11-11.5 23t-3.5 28q0 28 18.5 65t18.5 69q0 18-3.5 30.5T399-432h-47Zm51 336q-103 0-173-63.5T144-335q-2-10 5.5-17.5T168-360h423l45-408q5-42 35.5-69t72.5-27q45 0 76.5 31.5T852-756q0 15-.5 30t-2.5 30l-71-10q1-11 1.5-25t.5-25q0-15-10.5-25.5T744-792q-14 0-24 9t-12 23l-48 429q-11 103-84 169T403-96Zm0-72q56 0 104-32t70-88H228q23 58 70 89t105 31Zm5-120Z" />
                    </svg>
                    Miso
                  </button>
                </div>
                <p className="mt-2 w-full">
                Mixed noodles that allow you to savor both thick noodles and thin noodles.
                  <br />
                  <br />
                  This restaurant in Fukuoka, the holy land of tonkotsu (pork
                  bone) ramen, serves up its specialty: miso ramen. It attracts
                  men and women of all ages. The owner of the restaurant, a miso
                  sommelier, prepares the soup by blending five types of raw
                  miso. The hot soup changes the rice malt, allowing you to eat
                  every single one without getting tired of them. The soup is
                  prepared by blending cloudy soup made from chicken, pork and
                  aromatic vegetables with Japanese stock made from bonito,
                  dried sardines and kelp. The noodles are made from only
                  Minaminokaori flour and the mixed noodles consisting of thick
                  flat noodles and thin wavy noodles. You can try the thick
                  noodles first and then order thin noodles as a second portion,
                  or vice versa. The flavor is further enhanced by Koya-dofu
                  deep fried in garlic oil to resemble croutons.
                </p>
              </div>
              <img
                className="w-full md:w-[200px] sm:w-[200px] h-[200px] rounded-md shadow-md hover:scale-105 duration-300 mt-4 md:mt-0"
                src="/Miso_Ramen_Shop_Hakata_Bunpuku.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="text-white mt-3">Source of the https://www.raumen.co.jp/thailand/ </p>
      </div>
      
    </div>
  );
};
export default RamenShopPage;
