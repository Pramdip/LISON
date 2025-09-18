import dot from "../../img/dot.png";
export default function InfoScroll() {
  return (
    <>
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
    </>
  );
}
