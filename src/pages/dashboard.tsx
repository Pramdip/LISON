import AboutSection from "../components/Protfolio/AboutSection";
import TrustedBrands from "../components/Protfolio/TrustedBrands";
import { icon as iconList } from "../constants/dashboard";
import NavBar from "../components/Navbar/NavBar";
import Fontpage from "../components/HomePage/FrontPage";
import InfoScroll from "../components/HomePage/InfoScroll";
import Testomonials from "../components/Testomonials/Testomonials";
import { imgs as imgslist } from "../constants/dashboard";
import Contact from "../components/Contact/Contact";

export default function Dashboard() {
  return (
    <>
      <div className="font-comforta">
        <NavBar />
        <Fontpage/>
        <InfoScroll />
        <AboutSection />
      </div>
      <TrustedBrands icon={iconList} />
      <Testomonials imgs={imgslist} />
      <Contact />
    </>
  );
}
