import { FaArrowRight } from "react-icons/fa";
import { animationFunction } from "../animationFunction/animationFunction";
import { useRef, useEffect } from "react";

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply animation to the container
    animationFunction(heroRef.current);
  }, []);
  return (
    <section id="contact">

        <div className="bg-[#1A0000] w-full">
      <div
        className="relative w-full h-auto overflow-hidden flex flex-col justify-center pl-4 sm:pl-16 md:pl-60 text-[#EEDCBC] space-y-4 p-4 sm:p-5 pt-8 sm:pt-30"
        ref={heroRef}
      >
        {/* Animated circles */}
        <div className="circle1 absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[450px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] bg-[#B36666]/15 rounded-full blur-3xl"></div>
        <div className="circle2 absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[450px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] bg-[#B36666]/15 rounded-full blur-3xl"></div>
    
        {/* Grid container */}
        <div className="w-full bg-[#1A0000] text-white grid grid-cols-1 md:grid-cols-2 gap-8 font-comforta h-auto md:h-280 lg:h-280">
          {/* Left text */}
          <div className="flex flex-col justify-center items-center md:items-start gap-6">
            <h1
              className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl max-w-full sm:max-w-max pb-6 border-b font-light text-center sm:text-left"
              style={{
                borderImage: "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
                color: "#EEDCBC",
              }}
            >
              LET'S COLLABORATE
            </h1>
            <p className="text-sm sm:text-sm md:text-xl lg:text-2xl font-light text-center md:text-left">
              Have a project in mind? Fill out the form below and I’ll get back to you soon.
            </p>
          </div>
    
          {/* Right form */}
          <div className="flex justify-center">
            <form className="w-full max-w-md flex flex-col gap-4 px-2 sm:px-4 md:px-0">
              <label>Name</label>
              <input
                type="text"
                className="w-full md:w-120 lg:w-120 h-12 md:h-17 p-3 rounded-md text-[#EEDCBC] placeholder:text-[#EEDCBC80]"
                placeholder="Your Full Name"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)",
                  backdropFilter: "blur(50px)",
                  boxShadow: `-6px -3px 6px -4px #F7EBDD inset, 8px 3px 6px -5px #F7EBDD inset, 7px 7px 1px -8px #EEDCBC80 inset`,
                }}
              />
    
              <label>Email</label>
              <input
                type="email"
                className="w-full md:w-120 lg:w-120 h-12 md:h-17 p-3 rounded-md text-[#EEDCBC] placeholder:text-[#EEDCBC80]"
                placeholder="Your example@gmail.com"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)",
                  backdropFilter: "blur(50px)",
                  boxShadow: `-6px -3px 6px -4px #F7EBDD inset, 8px 3px 6px -5px #F7EBDD inset, 7px 7px 1px -8px #EEDCBC80 inset`,
                }}
              />
    
              <label>Project Type</label>
              <select
                className="w-full md:w-auto lg:w-auto h-12 md:h-17 p-3 rounded-md text-[#EEDCBC] bg-[#340000]"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)",
                  backdropFilter: "blur(50px)",
                  boxShadow: `-6px -3px 6px -4px #F7EBDD inset, 8px 3px 6px -5px #F7EBDD inset, 7px 7px 1px -8px #EEDCBC80 inset`,
                }}
              >
                <option>Graphic Design</option>
                <option>Video Editing</option>
                <option>Branding</option>
              </select>
    
              <label>Message</label>
              <textarea
                className="w-full md:w-120 lg:w-120 h-32 md:h-90 p-3 rounded-md text-[#EEDCBC] placeholder:text-[#EEDCBC80] resize-none"
                placeholder="Tell me about your project"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.08), rgba(238,220,188,0.1) 100%)",
                  backdropFilter: "blur(50px)",
                  boxShadow: `-6px -3px 6px -4px #F7EBDD inset, 6px 3px 6px -4px #F7EBDD inset, 4px 4px 2px -6px #EEDCBC80 inset`,
                }}
              />
    
              <button
                type="submit"
                className="w-full md:w-120 lg:w-120 h-12 md:h-17 rounded-full flex items-center justify-center gap-2 mt-2 text-[#EEDCBC]"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)",
                  backdropFilter: "blur(50px)",
                  boxShadow: `-6px -3px 6px -4px #F7EBDD inset, 8px 3px 6px -5px #F7EBDD inset, 7px 7px 1px -8px #EEDCBC80 inset`,
                }}
              >
                <FaArrowRight className="w-5 h-5" />
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    </section>    

  );
}
