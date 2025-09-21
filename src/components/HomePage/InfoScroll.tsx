
export default function InfoScroll() {
  return (
    <nav style={{ backgroundColor: "#1A0000", color: "#F2E5E5" }}>
      <div className="relative overflow-hidden w-full h-10 flex items-center">
        {/* Moving content */}
        <ul
          className="
            flex gap-4 sm:gap-40 sm:text-sm md:text-xl lg:text-3xl
            font-light items-center whitespace-nowrap
            animate-marquee
          "
        >
          <li>Reels editing</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Vlog Editing</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Social Media Post</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Flat Design</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Isometric Design</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Brand identity design</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Thumbnail design</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Logo animation</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Poster and Banner design</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Product mockups</li>
          <img src={"/img/dot.png"} alt="" className="w-4 h-4" />
          <li>Intrography design</li>
        </ul>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </nav>
  );
}
