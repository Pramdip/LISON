import { useState } from "react";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import image from "../../img/logo.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  // Helper function to scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-[#340000] fixed w-screen z-100">
      <div className=" flex justify-around items-center sm:gap-2 md:gap-4 lg:gap-6 p-5">
        {/* Logo */}
        <div className="lg:h-30 lg:w-30 md:h-20 md:w-20 sm:h-10 sm:w-10 w-10 h-10 md:ml-30 ">
          <img src={image} alt="logo" className="h-full w-full object-contain" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center">
          <ul className="flex sm:text-sm md:text-xl lg:text-2xl gap-2 sm:gap-4 md:gap-6 lg:gap-8 list-none font-light text-[#EEDCBC]">
            <li
              className="cursor-pointer hover:text-[#FFD700] transition"
              onClick={() => scrollToSection("home")}
            >
              HOME
            </li>
            <li
              className="cursor-pointer hover:text-[#FFD700] transition"
              onClick={() => scrollToSection("portfolio")}
            >
              PORTFOLIO
            </li>
            <li
              className="cursor-pointer hover:text-[#FFD700] transition"
              onClick={() => scrollToSection("testimonials")}
            >
              TESTIMONIALS
            </li>
            <li
              className="cursor-pointer hover:text-[#FFD700] transition"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex justify-end">
          {open ? (
            <IoClose className="text-white text-3xl" onClick={handleChange} />
          ) : (
            <IoMenu className="text-white text-3xl" onClick={handleChange} />
          )}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex justify-end md:justify-center lg:justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
          <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />
          <FaDiscord className="cursor-pointer hover:text-indigo-500 transition" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
        </div>
      </div>

    
      

      {/* Left Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#340000] shadow-xl transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <ul className="flex flex-col mt-20 gap-6 text-white text-lg pl-6">
          {["home", "portfolio", "testimonials", "contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[#FFD700] transition-colors"
              onClick={() => scrollToSection(item)}
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Optional Social icons inside drawer */}
        <div className="flex gap-5 mt-10 pl-6 text-2xl text-white">
          <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />
          <FaDiscord className="cursor-pointer hover:text-indigo-500 transition" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
        </div>
      </div>
    </nav>
  );
}
