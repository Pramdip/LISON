import { useRef, useEffect } from "react";
import { animationFunction } from "../animationFunction/animationFunction";
import circles from "../../img/circles.png";
import paint from "../../img/paint.png";
import layout from "../../img/layout.png";
import users from "../../img/Group.png";

export default function Fontpage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply animation to the container
    animationFunction(containerRef.current);
  }, []);

  return (
    <section id="home">
        
    <div
      className="grid grid-cols-[60fr_40fr] h-full"
      style={{ backgroundColor: "#1A0000" }}
    >
      {/* First column (animated) */}
      <div
        className="relative w-full overflow-hidden flex flex-col pl-4 sm:pl-10 md:pl-15 lg:pl-30 text-[#EEDCBC] space-y-4 p-5 pt-40 md:pt-70"
        ref={containerRef}
      >
        {/* Animated circles */}
        <div className="circle1 absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[450px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] bg-[#B36666]/15 rounded-full blur-3xl"></div>
        <div className="circle2 absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[450px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] bg-[#B36666]/15 rounded-full blur-3xl"></div>

        {/* Text content */}
        <div className="px-2 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10">
          <p
            className="text-xl sm:text-xl md:text-2xl lg:text-4xl max-w-max pb-2 font-light border-b"
            style={{
              borderImage:
                "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
            }}
          >
            I'M LISON KARMACHARYA
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mt-4">
            <span>A DESIGNER WHO EDIT, OR</span>
            <span className="ml-1 sm:ml-2 md:ml-4 lg:ml-6">
              AN EDIT WHO DESIGNS
            </span>
          </h1>

          <p className="sm:text-sm md:text-xl lg:text-2xl text-sm font-light mt-2 md:mt-4">
            Helping your brand shine with bold design and smooth video edits
          </p>
        </div>

        {/* Button */}
        <button
          className="flex items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-5 md:py-7 lg:py-7 rounded-full w-fit cursor-pointer text-[#EEDCBC] font-light text-sm sm:text-sm md:text-xl lg:text-2xl relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)",
            backdropFilter: "blur(50px)",
            boxShadow: `
              -6px -3px 6px -4px #F7EBDD inset,
              8px 3px 6px -5px #F7EBDD inset,
              7.03px 7.03px 1.17px -8.2px #EEDCBC80 inset
            `,
          }}
        >
          <img
            src={users}
            alt="icon"
            className="w-4 sm:w-5 md:w-6 lg:w-6 h-4 sm:h-5 md:h-6 lg:h-6"
          />
          <p>Let's Collaborate</p>
        </button>

        {/* Bottom images */}
        <div className="flex flex-row sm:flex-row justify-between mb-0 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <img
            src={paint}
            alt=""
            className="w-[60px] sm:w-[120px] md:w-[180px] lg:w-[240px] sm:h-[50px] md:h-[150px] lg:h-[200px] h-[50px]"
          />
          <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8">
            <img
              src={circles}
              alt=""
              className="w-[40px] sm:w-[80px] md:w-[150px] lg:w-[220px]"
            />
          </div>
        </div>
      </div>

      {/* Second column (image) */}
      <div className="flex justify-center md:justify-end items-center">
        <img
          src={layout}
          alt=""
          className="h-full w-full md:w-auto object-cover"
        />
      </div>
    </div>
    </section>
  );
}
