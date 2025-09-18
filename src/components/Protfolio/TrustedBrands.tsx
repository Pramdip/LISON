import type { icons } from "../../types/dashboard";

type TrustedBrandsProps = {
  icon: icons[];
};

export default function TrustedBrands({ icon }: TrustedBrandsProps) {
  return (
    <div className="w-full h-100 md:h-180 bg-[#1A0000] text-white font-comforta pt-10">
      <div className="flex justify-center">
        <h1
          className="text-2xl md:text-4xl lg:text-6xl text-center sm:text-left sm:pt-5 pb-10 sm:pb-5"
          style={{
            borderBottom: "1px solid transparent",
            borderImage:
              "linear-gradient(to right, #E6CCCC, #993333, #F2E5E5) 1",
            color: "#EEDCBC",
          }}
        >
          TRUSTED BY
        </h1>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-16 lg:gap-22 w-full mb-10">
        {icon.map((item, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={item.icon}
              alt=""
              className="w-24 h-24 sm:w-26 sm:h-26 md:w-48 md:h-48 lg:w-60 lg:h-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
