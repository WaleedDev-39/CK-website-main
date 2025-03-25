"use client";

import React, { useState } from "react";

// Define the type for card data
interface CardData {
  title: string;
  description: string;
  dropdownItems?: string[];
}

// Sample data for cards
const cards: CardData[] = [
  {
    title: "Cloud Engineering",
    description: "Connect your team with cloud expertise that drives innovation.",
    dropdownItems: ["Cloud Migration", "DevOps", "Infrastructure as Code"],
  },
  {
    title: "Software Development",
    description: "Connect your team with cloud expertise that drives innovation.",
    dropdownItems: ["Web Development", "Web Solutions", "Mobile Development"],
  },
  {
    title: "Graphics",
    description: "Connect your team with cloud expertise that drives innovation.",
    dropdownItems: ["UI/UX Design", "Branding", "Illustrations"],
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="bg-white text-[#050B0B] py-16 px-6 overflow-x-hidden relative">
      {/* Side Image (Hidden on Mobile) */}
      <div
        className="absolute inset-y-0 top-72 right-32 w-1/3 bg-cover bg-no-repeat bg-center opacity-80 hidden md:block"
        style={{
          backgroundImage: "url('/building.png')",
          backgroundSize: "90%",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Centered Heading and Paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-[500] mb-6">
            Let's solve your most complex IT <br /> infrastructure challenges.
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] max-w-[800px] mx-auto">
            Code to Kloud's solutions are designed to simplify complexity, delivering
            tailored services that ensure performance, scalability, and security.
          </p>
        </div>

        {/* Cards on the Left Side */}
        <div className={`w-2/3 ${activeCard !== null ? 'space-y-0' : 'space-y-8'}`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-[#F5F5F5] p-8 rounded-lg shadow-2xl transform transition-all duration-300 relative ${
                activeCard === index
                  ? "scale-110 z-30" // Active card: biggest and on top
                  : activeCard !== null
                  ? "scale-105 z-20 blur-[1.5px] -mt-2" // Other cards: slightly zoomed, blurred, and no gap
                  : ""
              }`}
            >
              {/* Clickable Icon */}
              <button
                className="absolute top-4 right-4 text-[#050B0B] hover:text-[#081617] transition-colors"
                onClick={() => toggleCard(index)}
              >
                <img src="/dropmenu.png" alt="dropdownicon" />
              </button>

              <h3 className="text-[30px] font-[500] mb-4">{card.title}</h3>
              <p className="text-[16px] mb-4">{card.description}</p>
              {activeCard === index && (
                <ul className="mt-4 space-y-2">
                  {card.dropdownItems?.map((item, i) => (
                    <li key={i} className="text-[14px]">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}