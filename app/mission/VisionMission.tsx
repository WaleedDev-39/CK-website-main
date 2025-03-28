import React from "react";

export default function VisionMission() {
  return (
    <section className="bg-[#081012] text-white px-4">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center h-auto md:h-[28rem]">
        {/* Background Image (Hidden on Mobile) */}
        <div className="absolute  -left-32 top-[768px] hidden md:block">
          <img
            src="/networks-time-dots.png"
            alt="Background"
            className="w-full h-full"
          />
        </div>

        {/* Content (Heading and Paragraph) */}
        <div className="bg-[#081012]  w-full py-10 md:w-[65%] lg:w-[60%] text-center md:ml-auto md:mr-10">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-[500]">
            Our Vision and Mission
          </h2>

          <p className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[32px]">
            As architects of connection, we empower businesses across the globe
            to envision a future where legacy technology serves as a foundational
            stepping stone towards progress. Our mission is to connect the dots
            between where your business is today and the dynamic, multi-cloud
            future that awaits.
          </p>
        </div>
      </div>
    </section>
  );
}
