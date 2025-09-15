import image from "../img/logo.png";
import layout from "../img/layout.png";
import users from "../img/Group.png";
import jamal from "../img/Jamal.png";
import adam from "../img/Adam.png";
import steve from "../img/Steve.png";
import family from "../img/Family.png";
import { FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import circles from "../img/circles.png";
import paint from "../img/paint.png";
import dot from "../img/dot.png";
import gg from "../img/gg.png";
import powercraft from "../img/powercraft.png";
import massdesign from "../img/massadesigns.png";
import maqar from "../img/maqar.png";
import foster from "../img/foster.png";
import starbeauty from "../img/starbeauty.png";
import { IoPlayCircleSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import vlog from "../img/vlog.png";
import cashcow from "../img/cashcow.png";
import reel from "../img/Reel.png";
import squarrel from "../img/squarrel.png";
import singer from "../img/singer.png";
import button from "../img/button.png";
import { useEffect, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";

type Card = {
  name: string;
  statement: string;
};
type describe = {
  img: string;
  description: string;
  name: string;
  position: string;
};
type icons = {
  icon: string;
};
type img = {
  image: string;
  name: string;
};
const imgs: img[] = [
  { image: cashcow, name: "CASH COW" },
  { image: reel, name: "REEL" },
  { image: vlog, name: "VLOG" },
  { image: button, name: "CASH COW" },
  { image: squarrel, name: "CASH COW" },
  { image: singer, name: "PODCAST" },
];
const icon: icons[] = [
  { icon: gg },
  { icon: foster },
  { icon: powercraft },
  { icon: massdesign },
  { icon: starbeauty },
  { icon: maqar },
];

const cards: Card[] = [
  {
    name: "100+",
    statement: "Completed Projects",
  },
  {
    name: "50+",
    statement: "Happy Clients",
  },
  {
    name: "10+",
    statement: "Years Experience",
  },
  {
    name: "24/7",
    statement: "Support",
  },
];

const describes: describe[] = [
  {
    img: jamal,
    description:
      "“Great work as always! Lison got the job done quickly and effectively! Communication on point and I will continue to work with him for all of my graphic design projects! ⭐️⭐️ ⭐️ ⭐️ ⭐️”",
    name: "Kameron Coleman",
    position: "Star Beauty Plus",
  },
  {
    img: adam,
    description:
      "“Lison was an absolute pleasure to work with! He is professional, creative, and has a great work ethic. Lison was always open to feedback and promptly made revisions based on our comments so we could get the final product close to what we originally envisioned. I highly recommend Lison for anyone looking for high-quality video content creation”",
    name: "Ivor Cirwan",
    position: "L4 Studios",
  },
  {
    img: steve,
    description:
      "“Working with Lison has been great. Attention to detail, communication, and punctuality are all on point, I've worked in different styles of editing, and Lison has been able to perform, definitely hire him!”",
    name: "Coach V",
    position: "Power craft Training",
  },
  {
    img: family,
    description:
      "“Working with Lison on a farewell video for my brother was an absolute pleasure. Not only did he understand our requirements promptly, but he also delivered beyond expectations. His creativity and expertise were evident in every frame, and he went above and beyond to ensure our satisfaction. Lison's professionalism shone through in his prompt responses and timely delivery. If you're looking for someone who will exceed your expectations, look no further than Lison.”",
    name: "Manshi Shah Mehta",
    position: "",
  },
];

export default function Dashboard() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const speed = 0.1; // increase → faster, decrease → slower

    const startBounce = (container: HTMLDivElement | null) => {
      if (!container) return;

      const circles = Array.from(
        container.querySelectorAll(".circle1, .circle2")
      ) as HTMLElement[];
      if (!circles.length) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const positions = circles.map(() => ({
        x: Math.random() * (containerWidth - 0),
        y: Math.random() * (containerHeight - 1),
      }));

      const velocities = circles.map(() => ({
        x: (Math.random() * speed + 1) * (Math.random() > 0.5 ? 1 : -1),
        y: (Math.random() * speed + 1) * (Math.random() > 0.5 ? 1 : -1),
      }));

      const animate = () => {
        circles.forEach((circle, i) => {
          positions[i].x += velocities[i].x;
          positions[i].y += velocities[i].y;

          // Bounce off walls
          if (positions[i].x <= 0) {
            positions[i].x = 0;
            velocities[i].x *= -1;
          } else if (positions[i].x + circle.offsetWidth >= containerWidth) {
            positions[i].x = containerWidth - circle.offsetWidth;
            velocities[i].x *= -1;
          }

          if (positions[i].y <= 0) {
            positions[i].y = 0;
            velocities[i].y *= -1;
          } else if (positions[i].y + circle.offsetHeight >= containerHeight) {
            positions[i].y = containerHeight - circle.offsetHeight;
            velocities[i].y *= -1;
          }

          circle.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
        });

        requestAnimationFrame(animate);
      };

      animate();
    };

    // Call it for both heroRef and containerRef
    startBounce(heroRef.current);
    startBounce(containerRef.current);
  }, []);

  return (
    <>
      <div className="font-comforta">
        <div
          className="
              grid md:grid-cols-[20fr_60fr_20fr] sm:grid-cols-3 grid-cols-2 items-center
              sm:gap-2 md:gap-4 lg:gap-6  
              p-5
              bg-[#340000]
            "
        >
          {/* Logo */}
          <div className="lg:h-30 lg:w-30 md:h-20 md:w-20 sm:h-10 sm:w-10 w-10 h-10 md:ml-30 sm:ml-20">
            <img
              src={image}
              alt="logo"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="hidden sm:flex justify-center">
            <ul className="flex sm:text-sm md:text-xl lg:text-2xl gap-2 sm:gap-4 md:gap-6 lg:gap-8 list-none font-light text-[#EEDCBC]">
              <li className="cursor-pointer">HOME</li>
              <li className="cursor-pointer">PORTFOLIO</li>
              <li className="cursor-pointer">TESTIMONIALS</li>
              <li className="cursor-pointer">CONTACT</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div
            className="
              flex sm:justify-end justify-end gap-3
              sm:gap-4 md:gap-6 lg:gap-8      /* start tiny, grow gradually */
              text-xl sm:text-2xl md:text-3xl lg:text-4xl  /* icon font-size scales */
              text-white
            "
          >
            <FaLinkedin className="cursor-pointer hover:text-blue-600" />
            <FaDiscord className="cursor-pointer hover:text-indigo-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        {/* 🔹 Hero Section */}
        <div
          className="grid grid-cols-[60fr_40fr] h-auto"
          style={{ backgroundColor: "#1A0000" }}
        >
          {/* First column (60fr) */}
          <div
            className="relative w-full  overflow-hidden flex flex-col pl-4 sm:pl-10 md:pl-15 lg:pl-30 text-[#EEDCBC] space-y-4 p-5 pt-8 sm:pt-30"
            ref={containerRef}
          >
            {/* Circle animation inside this column */}
            {/* First Circle */}
            {/* First Circle */}
            <div
              className="
                  circle1
                  absolute top-0 left-0
                  w-[200px] sm:w-[300px] md:w-[450px] lg:w-[600px]
                  h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px]
                  bg-[#B36666]/15
                  rounded-full
                  blur-3xl
                "
            ></div>

            {/* Second Circle */}
            <div
              className="
                  circle2
                  absolute bottom-0 right-0
                  w-[200px] sm:w-[300px] md:w-[450px] lg:w-[600px]
                  h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px]
                  bg-[#B36666]/15
                  rounded-full
                  blur-3xl
                "
            ></div>

            <div className="px-2 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10">
              {/* Name with gradient underline */}
              <p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-max pb-2 font-light border-b"
                style={{
                  borderImage:
                    "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
                }}
              >
                I'M LISON KARMACHARYA
              </p>

              {/* Main heading */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mt-4">
                <span>A DESIGNER WHO EDIT, OR</span>
                {/* <br /> */}
                <span className="ml-1 sm:ml-2 md:ml-4 lg:ml-6">
                  AN EDIT WHO DESIGNS
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-2 md:mt-4">
                Helping your brand shine with bold design and smooth video edits
              </p>
            </div>

            <button
              className="flex items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-7 lg:py-7 rounded-full w-fit cursor-pointer text-[#EEDCBC] font-light text-base sm:text-lg md:text-xl lg:text-2xl relative overflow-hidden"
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
              Let's Collaborate
            </button>

            <div className="flex flex-row sm:flex-row justify-between mb-0 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {/* Left image */}
              <img
                src={paint}
                alt=""
                className="w-[60px] sm:w-[120px] md:w-[180px] lg:w-[240px] sm:h-[50px] md:h-[150px] lg:h-[200px] h-[50px]"
              />

              {/* Right image */}
              <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8">
                <img
                  src={circles}
                  alt=""
                  className="w-[40px] sm:w-[80px] md:w-[150px] lg:w-[220px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <img
              src={layout}
              alt=""
              className="h-full w-full md:w-auto object-cover"
            />
          </div>
        </div>

        {/* 🔹 Services Nav */}
        <nav
          className=""
          style={{ backgroundColor: "#1A0000", color: "#F2E5E5" }}
        >
          <ul className="flex list-none overflow-x-auto gap-4 sm:gap-40 sm:text-sm md:text-xl lg:text-3xl font-light items-center pl-4 sm:pl-80 whitespace-nowrap no-scrollbar sm:h-20 h-20 md:h-30 lg:h-40">
            <li className="flex flex-nowrap">Reels editing</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Vlog Editing</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Social Media Post</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Flat Design</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Isometric Design</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Brand identity design</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Thumbnail design</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Logo animation</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Poster and Banner design</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Product mockups</li>
            <img src={dot} alt="" className="w-4 h-4" />
            <li>Intrography design</li>
          </ul>
        </nav>

        {/* 🔹 Scrollable Section */}
        <div className=" w-full h-auto md:h-250 lg:220 sm:h-screen bg-[#1A0000] text-white overflow-hidden">
          <div className="flex justify-center pt-10 sm:pt-20 px-4 sm:px-0">
            <h1
              className=" text-2xl lg:text-6xl sm:text-2xl  md:text-4xl max-w-full sm:max-w-max pb-10 border-b-1 font-light text-center"
              style={{
                borderImage:
                  "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
                color: "#EEDCBC",
              }}
            >
              HERE WHAT I BRING TO THE TABLE
            </h1>
          </div>

          <div className="mt-20 sm:mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  sm:gap-10 sm:px-10 md:px-35">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
              {cards.map((data, index) => (
                <div
                  key={index}
                  className="
                              w-full
                              flex flex-col justify-center items-center
                              rounded-md hover:border
                              text-[#EEDCBC]
                              bg-[#330000]
                              /* Heights */
                              h-40 sm:h-56 md:h-60 lg:h-60
                              /* Padding */
                              p-4 sm:p-6 md:p-8 lg:p-10
                            "
                >
                  <p
                    className="
                                  font-semibold
                                  text-2xl sm:text-4xl md:text-5xl lg:text-5xl
                                "
                  >
                    {data.name}
                  </p>
                  <p
                    className="
          font-light
          text-lg sm:text-xl md:text-2xl lg:text-2xl
        "
                  >
                    {data.statement}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full relative">
              <div className="w-full border border-[#EEDCBC22] flex justify-center items-center h-auto sm:h-120 rounded-md sm:gap-5">
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

                <div className="w-full h-full flex justify-center items-center pl-15 sm:pl-0"> 
                  <div className="border-2 border-black p-3 sm:p-5 flex flex-col sm:flex-row items-center justify-start rounded-md absolute w-full md:w-170 md:h-70 sm:h-75 sm:w-130 bg-[#050505]">
                    {/* Decorative circles */}
                    <div className="backdrop-blur-sm md:w-27 md:h-20 sm:w-24 sm:h-14 rounded-2xl absolute bottom-[-40px] md:bottom-[-50px] sm:bottom-[-70px] left-1/2 -translate-x-[120%] sm:-translate-x-[150%] flex items-end justify-start shadow-[-4px_-2px_4px_-4px_#F7EBDD_inset,4px_3px_4px_-4px_#F7EBDD_inset,7.03px_7.03px_1.17px_-8.2px_#EEDCBC80_inset]"></div>
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
                        {describes[0].description}
                      </p>
                      <p className="text-sm sm:text-sm font-light text-[#EEDCBC]">
                        {describes[0].name}
                      </p>
                      <p className="text-sm sm:text-sm font-light text-[#EEDCBC]">
                        {describes[0].position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main testimonial */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-auto md:h-150 lg:100 sm:h-screen bg-[#1A0000] text-white font-comforta">
        <div className="flex justify-center ">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl max-w-full sm:max-w-max pb-10 border-b-1 font-bold text-center sm:text-left"
            style={{
              borderImage:
                "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
              color: "#EEDCBC",
            }}
          >
            TRUSTED BY
          </h1>
        </div>
        <div className=" mt-10 flex justify-center gap-22 flex-row w-full h-60 mb-10">
          {icon.map((count, index) => (
            <div>
              <img src={count.icon} alt="" key={index} className="w-60 h-60" />
            </div>
          ))}
        </div>
      </div>

      <div className=" w-full h-screen md:h-280 lg:200 sm:h-screen bg-[#1A0000] text-white font-comforta">
        <div className="flex justify-center">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl max-w-full sm:max-w-max pb-10 border-b-1 font-light text-center sm:text-left"
            style={{
              borderImage:
                "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
              color: "#EEDCBC",
            }}
          >
            WHEN EVERTHING COME TOGETHER
          </h1>
        </div>
        <div className="mt-30">
          <div className="flex justify-start ml-80 pt-7">
            <h1
              className="text-4xl sm:text-6xl md:text-4xl max-w-full sm:max-w-max pb-6 border-b-1 font-light text-center sm:text-left"
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
            <div className="flex gap-16 px-16  ml-60 mr-50 ">
              {imgs.map((data, index) => (
                <div
                  key={index}
                  className="mt-10 relative cursor-pointer group flex-shrink-0 w-141"
                >
                  {/* 🔹 Image + Hover Overlay */}
                  <div className="relative">
                    <img
                      src={data.image}
                      alt=""
                      className="w-140 h-140 bg-black/50 shadow-lg"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center hover:border-12 hover:border-purple-400 transition-all duration-100">
                      <IoPlayCircleSharp className="text-white text-6xl mb-2 transform w-50 h-50 transition-transform duration-500 group-hover:-translate-y-6" />
                      <span className="text-white text-6xl font-semibold opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2 font-exo">
                        PLAY VIDEO
                      </span>
                    </div>
                  </div>

                  {/* 🔹 Name stays below, no hover effect */}
                  <div className="flex justify-center mt-5">
                    <p className="text-3xl">{data.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-screen md:h-200 lg:200 sm:h-screen bg-[#1A0000] text-white font-comforta">
        <div className="flex justify-start ml-80 pt-7 ">
          <h1
            className="text-4xl sm:text-6xl md:text-4xl max-w-full sm:max-w-max pb-6 border-b-1 font-light text-center sm:text-left"
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
          <div className="flex gap-15 px-15 ml-60">
            {imgs.map((data, index) => (
              <div
                key={index}
                className="mt-10 relative cursor-pointer group flex-shrink-0 w-141"
              >
                {/* 🔹 Image + Hover Overlay */}
                <div className="relative">
                  <img
                    src={data.image}
                    alt=""
                    className="w-140 h-140 bg-black/50 shadow-lg"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center hover:border-12 hover:border-purple-400 transition-all duration-100">
                    <IoPlayCircleSharp className="text-white text-6xl mb-2 transform w-50 h-50 transition-transform duration-500 group-hover:-translate-y-6" />
                    <span className="text-white text-6xl font-semibold opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2 font-exo">
                      PLAY VIDEO
                    </span>
                  </div>
                </div>

                {/* 🔹 Name stays below, no hover effect */}
                <div className="flex justify-center mt-5">
                  <p className="text-3xl">{data.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#1A0000]">
        <div
          className="relative w-full h-auto overflow-hidden flex flex-col justify-center pl-4 sm:pl-16 md:pl-60 text-[#EEDCBC] space-y-4 p-5 gap-10 pt-8 sm:pt-30"
          ref={heroRef}
        >
          {/* Circle animation inside this column */}
          {/* First Circle */}
          <div className="circle1 absolute top-0 left-0 w-[600px] h-[600px] bg-[#B36666]/15 rounded-full blur-3xl"></div>

          {/* Second Circle (duplicate with different position/size) */}
          <div className="circle2 absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#B36666]/15 rounded-full blur-3xl"></div>

          <div className="w-full h-screen md:h-280 lg:280 sm:h-screen bg-[#1A0000] text-white  grid grid-cols-2 font-comforta test">
            <div className="flex  flex-col justify-center items-center gap-10">
              <h1
                className="text-4xl sm:text-6xl md:text-7xl max-w-full sm:max-w-max pb-6 border-b-1 font-light text-center sm:text-left"
                style={{
                  borderImage:
                    "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
                  color: "#EEDCBC",
                }}
              >
                LET'S COLLABORATE
              </h1>
              <p className="text-2xl font-light text-center">
                Have a project in mind? Fill out the form below and I’ll get
                back to you soon.
              </p>
            </div>
            <div className="flex justify-center font-light text-xl text-[#EEDCBC]">
              <form action="">
                <div className="p-40 flex flex-col bo">
                  <label className="">Name</label>
                  <input
                    type="text"
                    className=" lg:w-120 md:w-120 h-17 border text-[#EEDCBC80] mt-5 mb-5 p-4 rounded-md"
                    placeholder="Your Full Name"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)", // shiny inner glow
                      backdropFilter: "blur(50.1px)",
                      boxShadow: `
     
      
      -6px -3px 6px -4px #F7EBDD inset,
      8px 3px 6px -5px #F7EBDD inset,
      7.03px 7.03px 1.17px -8.2px #EEDCBC80 inset
    `,
                    }}
                  />
                  <label>Email</label>
                  <input
                    type="text"
                    className=" lg:w-120 md:w-120 h-17 border text-[#EEDCBC80] mt-5 mb-5 p-4 rounded-md bg-[#340000]"
                    placeholder="Your example@gmail.com"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)", // shiny inner glow
                      backdropFilter: "blur(50.1px)",
                      boxShadow: `
     
      
      -6px -3px 6px -4px #F7EBDD inset,
      8px 3px 6px -5px #F7EBDD inset,
      7.03px 7.03px 1.17px -8.2px #EEDCBC80 inset
    `,
                    }}
                  />
                  <label>Project Type</label>
                  <select
                    name=""
                    id=""
                    className="w-auto h-17 border text-[#EEDCBC80] mt-5 mb-5 p-4 rounded-md bg-[#340000]"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)", // shiny inner glow
                      backdropFilter: "blur(50.1px)",
                      boxShadow: `
     
      
      -6px -3px 6px -4px #F7EBDD inset,
      8px 3px 6px -5px #F7EBDD inset,
      7.03px 7.03px 1.17px -8.2px #EEDCBC80 inset
    `,
                    }}
                  >
                    <option value="">Graphic Design</option>
                  </select>

                  <label htmlFor="">Message</label>
                  <input
                    type="text"
                    className="lg:w-120 md:w-120 h-90 border border-transparent text-[#EEDCBC80] mt-5 mb-5 rounded-md bg-[#340000] font p-5 resize-none"
                    placeholder="Tell me about your project"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.08), rgba(238,220,188,0.1) 100%)", // subtle glass background
                      backdropFilter: "blur(50px)",
                      boxShadow: `
      /* top-left shine */
      -6px -3px 6px -4px #F7EBDD inset,

      /* bottom-right shine */
       6px  3px 6px -4px #F7EBDD inset,

      /* thin golden inner border highlight */
       4px  4px 2px -6px #EEDCBC80 inset
    `,
                    }}
                  />

                  <button
                    className="lg:w-120 md:w-120 h-17 border text-[#EEDCBC80] mt-5 mb-5 rounded-full cursor-pointer flex items-center justify-center gap-2 px-6"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(238,220,188,0.09), rgba(238,220,188,0.1) 100%)", // shiny inner glow
                      backdropFilter: "blur(50.1px)",
                      boxShadow: `
     
      
      -6px -3px 6px -4px #F7EBDD inset,
      8px 3px 6px -5px #F7EBDD inset,
      7.03px 7.03px 1.17px -8.2px #EEDCBC80 inset
    `,
                    }}
                  >
                    <FaArrowRight className="w-5 h-5" />
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
