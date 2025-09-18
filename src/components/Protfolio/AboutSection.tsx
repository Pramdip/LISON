import { cards, describes } from "../../constants/dashboard";
import InfoCard from "./Cards/infocard";
import ProfileCard from "./Cards/profileCard";
export default function AboutSection() {
  return (
    <section id="portfolio">

    <div className=" w-full min-h-screen md:min-h-[270px] bg-[#1A0000] text-white overflow-hidden pb-10">
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

      <div className="mt-20 sm:mt-20 grid grid-cols-1 md:grid-cols-2  sm:gap-10 px-10 lg:px-35 md:px-35 gap-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {cards.map((data, index) => (
            <InfoCard key={index} data={data} />
          ))}
        </div>

        <div className="w-full relative ">
          <ProfileCard
            position={describes[0].position}
            name={describes[0].name}
            description={describes[0].description}
          />
        </div>
      </div>
    </div>
    </section>
  );
}
