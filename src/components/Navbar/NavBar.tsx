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
      <div className="grid md:grid-cols-[20fr_60fr_20fr] sm:grid-cols-3 grid-cols-2 items-center sm:gap-2 md:gap-4 lg:gap-6 p-5">
        {/* Logo */}
        <div className="lg:h-30 lg:w-30 md:h-20 md:w-20 sm:h-10 sm:w-10 w-10 h-10 md:ml-30 sm:ml-20">
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

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#340000] w-full absolute top-full left-0 shadow-lg z-50">
          <ul className="flex flex-col items-center gap-4 py-4 text-white">
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
      )}
    </nav>
  );
}
