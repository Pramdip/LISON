import { IoPlayCircleSharp } from "react-icons/io5";
import type { img } from "../../types/dashboard";

type Testomonialsimg = {
  imgs: img[];
};

export default function Testomonials({ imgs }: Testomonialsimg) {
  return (
    <section id="testimonials">

        <div className=" w-full md:h-280 lg:200 bg-[#1A0000] text-white font-comforta">
          <div className="flex justify-center h-auto  ">
            <h1
              className="text-2xl lg:text-6xl sm:text-2xl  md:text-4xl max-w-full sm:max-w-max pb-10 sm:pt-10 pt-10 border-b-1 font-light text-center sm:text-left"
              style={{
                borderImage:
                  "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
                color: "#EEDCBC",
              }}
            >
              WHEN EVERTHING COME TOGETHER
            </h1>
          </div>
          <div className="lg:mt-30 md:mt-30 sm:mt-0 mt-10">
            <div className="flex justify-start lg:ml-80 md:ml-80 sm:ml-25 ml-10 pt-7">
              <h1
                className="text-2xl lg:text-6xl sm:text-2xl  md:text-4xl   max-w-full sm:max-w-max pb-6 border-b-1 font-light text-center sm:text-left"
                style={{
                  borderImage:
                    "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
                  color: "#EEDCBC",
                }}
              >
                MY BEST CUTS
              </h1>
            </div>
  
            <div className="w-full overflow-x-auto no-scrollbar">
              <div className="flex gap-16 px-16 lg:ml-60 md:ml-60 sm:ml-10 sm: mr-50  ">
                {imgs.map((data, index) => (
                  <div
                    key={index}
                    className="mt-10 relative cursor-pointer group flex-shrink-0 lg:w-141 md:w-141 sm:w-70"
                  >
                    {/* 🔹 Image + Hover Overlay */}
                    <div className="relative">
                      <img
                        src={data.image}
                        alt=""
                        className="lg:w-140 lg:h-140 md:w-140 md:h-140 sm:w-79 sm:h-75 w-70 h-65 bg-black/50 shadow-lg"
                      />
  
                      <div className="absolute inset-0 flex flex-col items-center justify-center hover:border-12 hover:border-purple-400 transition-all duration-100">
                        <IoPlayCircleSharp className="text-white text-6xl mb-2 transform lg:w-50 lg:h-50 md:w-50 md:h-50 sm:w-30 sm:h-30  w-30 h-30transition-transform duration-500 group-hover:-translate-y-6" />
                        <span className="text-white lg:text-6xl sm:text-2xl md:text-4xl text-2xl font-semibold opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2 font-exo">
                          PLAY VIDEO
                        </span>
                      </div>
                    </div>
  
                    {/* 🔹 Name stays below, no hover effect */}
                    <div className="flex justify-center mt-5">
                      <p className="md:text-3xl lg:text-3xl text-sm sm:text-xl">
                        {data.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <div className=" w-full md:h-200 lg:200 bg-[#1A0000] text-white font-comforta">
          <div className="flex justify-start lg:ml-80 md:ml-80 sm:ml-25 ml-10 pt-7">
            <h1
              className="text-2xl lg:text-6xl sm:text-2xl  md:text-4xl   max-w-full sm:max-w-max pb-6 border-b-1 font-light text-center sm:text-left"
              style={{
                borderImage:
                  "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
                color: "#EEDCBC",
              }}
            >
              MY BEST CUTS
            </h1>
          </div>
  
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex gap-16 px-16 lg:ml-60 md:ml-60 sm:ml-10 sm: mr-50 ">
              {imgs.map((data, index) => (
                <div
                  key={index}
                  className="mt-10 relative cursor-pointer group flex-shrink-0 lg:w-141 md:w-141 sm:w-70"
                >
                  {/* 🔹 Image + Hover Overlay */}
                  <div className="relative ">
                    <img
                      src={data.image}
                      alt=""
                      className="lg:w-140 lg:h-140 md:w-140 md:h-140 sm:w-79 sm:h-75 w-70 h-65 bg-black/50 shadow-lg"
                    />
  
                    <div className="absolute inset-0 flex flex-col items-center justify-center hover:border-12 hover:border-purple-400 transition-all duration-100">
                      <IoPlayCircleSharp className="text-white text-6xl mb-2 transform lg:w-50 lg:h-50 md:w-50 md:h-50 sm:w-30 sm:h-30  w-30 h-30transition-transform duration-500 group-hover:-translate-y-6" />
                      <span className="text-white lg:text-6xl sm:text-2xl md:text-4xl text-2xl font-semibold opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2 font-exo">
                        PLAY VIDEO
                      </span>
                    </div>
                  </div>
  
                  {/* 🔹 Name stays below, no hover effect */}
                  <div className="flex justify-center mt-5">
                    <p className="md:text-3xl lg:text-3xl sm:text-xl mb-10">
                      {data.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    </section>
    
  );
}
