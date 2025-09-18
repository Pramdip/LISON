import { FaArrowRight } from "react-icons/fa";
import jamal from "../../../img/Jamal.png";



export default function ProfileCard({
  name,
  description,
  position,
}: {
  name: string;
  description: string;
  position: string;
}) {
  return (
    <>
      <div className="w-full border border-[#EEDCBC22] flex justify-center items-center h-140  md:h-120  rounded-md sm:gap-5">
        {/* Top-right box */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8  rounded-2xl w-40 sm:w-52 md:w-40 h-32 sm:h-36 md:h-40 bg-[#330000]"></div>

        {/* Bottom-left box */}
        <div className="absolute bottom-4 sm:bottom-9  sm:ml-20  rounded-2xl w-72 sm:w-90 md:w-80 h-32 sm:h-36 md:h-40 mb-5 bg-[#330000]"></div>
        <div>
          <button
            className="flex items-center justify-center rounded-full w-13 h-13 cursor-pointer 
               text-[white] font-light text-2xl  overflow-hidden
               absolute md:bottom-10 sm:bottom-5 bottom-5 right-10" // position button in bottom-right
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)",
              backdropFilter: "blur(50.1px)",
              boxShadow: `
                        -6px -3px 6px -4px #F7EBDD inset,
                        8px 3px 6px -5px #F7EBDD inset,
                        7.03px 7.03px 1.17px -8.2px #EEDCBC80 inset
                      `,
            }}
          >
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full h-100 md:h-auto flex justify-center items-center pl-5 sm:pl-0">
          <div className="border-2 border-black p-3 sm:p-5 flex flex-col sm:flex-row items-center justify-start rounded-md absolute w-60 lg:w-170 md:w-170 md:h-70 sm:h-75 sm:w-130  bg-[#050505]">
            {/* Decorative circles */}
            <div className="backdrop-blur-sm md:w-27 md:h-20 sm:w-24 sm:h-14 rounded-2xl absolute bottom-[-40px] md:bottom-[-50px] sm:bottom-[-50px] left-1/2 -translate-x-[100%] sm:-translate-x-[80%] flex items-end justify-start shadow-[-4px_-2px_4px_-4px_#F7EBDD_inset,4px_3px_4px_-4px_#F7EBDD_inset,7.03px_7.03px_1.17px_-8.2px_#EEDCBC80_inset]"></div>
            <div className="backdrop-blur-sm md:w-37 md:h-22 sm:w-34 sm:h-20 rounded-2xl absolute top-[-40px] md:top-[-60px] sm:top-[-65px] left-1/2 -translate-x-[100%] flex items-end justify-start shadow-[-4px_-2px_4px_-4px_#F7EBDD_inset,4px_3px_4px_-4px_#F7EBDD_inset,7.03px_7.03px_1.17px_-8.2px_#EEDCBC80_inset]"></div>
            <div className="backdrop-blur-sm md:w-22 md:h-20 sm:w-19 sm:h-17 rounded-2xl absolute top-0 sm:top-[-40px] right-0 sm:right-[-12px] sm:flex items-end justify-start shadow-[-4px_-2px_4px_-4px_#F7EBDD_inset,4px_3px_4px_-4px_#F7EBDD_inset,7.03px_7.03px_1.17px_-8.2px_#EEDCBC80_inset]"></div>

            <img
              src={jamal}
              alt=""
              className="h-28 sm:h-85 w-auto mb-4 sm:mb-0 sm:ml-[0px] mr-3"
            />

            <div className="flex flex-col text-center sm:text-left">
              <h1 className="text-sm sm:text-sm md:text-sm text-white pb-2 sm:pb-7">
                ⭐️⭐️ ⭐️ ⭐️ ⭐️ 5.0 Rating
              </h1>
              <p
                className="font-light text-xs sm:text-base md:text-sm pb-2 sm:pb-7"
                style={{ color: "#EEDCBC" }}
              >
                {description}
              </p>
              <p className="text-sm sm:text-sm font-light text-[#EEDCBC]">
                {name}
              </p>
              <p className="text-sm sm:text-sm font-light text-[#EEDCBC]">
                {position}
              </p>
            </div>
          </div>
        </div>

        {/* Main testimonial */}
      </div>
    </>
  );
}
