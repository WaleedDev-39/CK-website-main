import React from "react";

export default function VisionMission() {
  return (
    <section className="bg-[#081012] text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Background Image (Hidden on Mobile) */}
        <div className="hidden md:block w-full md:w-1/2 pl-0">
          <img
            src="/networks-time-dots.png" // Replace with your image path
            alt="Background"
            className="w-full h-auto"
          />
        </div>

        {/* Content (Heading and Paragraph) */}
        <div className="w-full md:w-1/2 px-3 py-5 md:px-0">
          <h2 className="text-center text-[32px] sm:text-[40px] md:text-[48px] font-[500] mb-6">
            Our Vision and Mission
          </h2>

          <p className="text-[16px] text-center sm:text-[18px] md:text-[24px] leading-[28px] md:leading-[32px]">
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