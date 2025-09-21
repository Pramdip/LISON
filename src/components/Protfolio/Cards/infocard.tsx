import type { Card } from "../../../types/dashboard";

export default function InfoCard({ data }: { data: Card }) {
  return (
    <>
      <div
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
    </>
  );
}
