"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState } from "react";

const companies = [
  { name: "DRACLE", logo: "/oracle2.png" },
  { name: "FedEx", logo: "/course.png" },
  { name: "Liber", logo: "/disney.png" },
  { name: "Coursé", logo: "/FedEx.png" },
  { name: "Uber", logo: "/uber.png" },
  // Duplicate to ensure seamless looping
  { name: "DRACLE", logo: "/oracle2.png" },
  { name: "FedEx", logo: "/course.png" },
  { name: "Liber", logo: "/disney.png" },
  { name: "Coursé", logo: "/FedEx.png" },
  { name: "Uber", logo: "/uber.png" },
];

export default function CompaniesSlider() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-5xl py-12 ">
      {/* Blur Effect at Corners */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

      <Marquee
        speed={50} // Adjust speed (higher = slower)
        gradient={false} // Disable built-in gradient
        pauseOnHover={true} // Pauses on hover
        pauseOnClick={false}
      >
        {companies.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className={`mx-8 transition-all duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-50 blur-[1.6px]"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={91}
              height={29}
              className={` object-contain transition-transform duration-300 ${
              
                hoveredIndex === index ? "scale-110" : ""
              }`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}