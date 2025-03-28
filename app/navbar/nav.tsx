"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Handle mouse leave from dropdown
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white text-[#050B0B] py-8 px-6 shadow-lg text-[20px]">
      <div className="w-full mx-auto px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={55} height={32} className="relative top-[0px] left-[0px]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9">
          <li className="absolute top-[38px] left-[887px] w-[55px] h-[27px]:"><Link href="/">Home</Link></li>

          {/* Services Dropdown */}
          <li 
            className="absolute top-[38px] left-[984px] dropdown w-[75px] h-[27px]"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-1">
              Services <ChevronDown size={18} />
            </button>
            {activeDropdown === "services" && (
              <ul className="absolute left-0 mt-2 w-48 z-10 bg-white shadow-md rounded-md p-2">
                <li><Link href="/services/service1" className="block p-2 hover:bg-gray-200">Service 1</Link></li>
                <li><Link href="/services/service2" className="block p-2 hover:bg-gray-200">Service 2</Link></li>
                <li><Link href="/services/service3" className="block p-2 hover:bg-gray-200">Service 3</Link></li>
              </ul>
            )}
          </li>

          {/* Expertise Dropdown */}
          <li 
            className="absolute top-[38px] left-[1102px] dropdown w-[85px] h-[27px]"
            onMouseEnter={() => setActiveDropdown("expertise")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-1">
              Expertise <ChevronDown size={18} />
            </button>
            {activeDropdown === "expertise" && (
              <ul className="absolute left-0 mt-2 w-48 z-10 bg-white shadow-md rounded-md p-2">
                <li><Link href="/expertise/expertise1" className="block p-2 hover:bg-gray-200">Expertise 1</Link></li>
                <li><Link href="/expertise/expertise2" className="block p-2 hover:bg-gray-200">Expertise 2</Link></li>
                <li><Link href="/expertise/expertise3" className="block p-2 hover:bg-gray-200">Expertise 3</Link></li>
              </ul>
            )}
          </li>

          <li 
            className="absolute top-[38px] left-[1232px] dropdown w-[93px] h-[27px]"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-1">
              Resources <ChevronDown size={18} />
            </button>
            {activeDropdown === "resources" && (
              <ul className="absolute left-0 mt-2 w-48 z-10 bg-white shadow-md rounded-md p-2">
                <li><Link href="/Resources/Resources" className="block p-2 hover:bg-gray-200">Resources 1</Link></li>
                <li><Link href="/Resources/Resources" className="block p-2 hover:bg-gray-200">Resources 2</Link></li>
                <li><Link href="/Resources/Resources" className="block p-2 hover:bg-gray-200">Resources 3</Link></li>
              </ul>
            )}
          </li>
          <li className="absolute top-[38px] left-[1358px] w-[85px] h-[27px]:"><Link href="/about">About Us</Link></li>

          <Image src="/search.svg" alt="search" width={34} height={31} className="absolute top-[30px] left-[1487px]" />
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white p-4 space-y-3 shadow-lg">
          <li><Link href="/">Home</Link></li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <button onClick={() => toggleDropdown("services")} className="flex items-center justify-between w-full">
              Services <ChevronDown size={18} />
            </button>
            {activeDropdown === "services" && (
              <ul className="bg-gray-100 p-2 rounded-md">
                <li><Link href="/services/service1" className="block p-2 hover:bg-gray-200">Service 1</Link></li>
                <li><Link href="/services/service2" className="block p-2 hover:bg-gray-200">Service 2</Link></li>
                <li><Link href="/services/service3" className="block p-2 hover:bg-gray-200">Service 3</Link></li>
              </ul>
            )}
          </li>

          {/* Expertise Dropdown */}
          <li className="dropdown">
            <button onClick={() => toggleDropdown("expertise")} className="flex items-center justify-between w-full">
              Expertise <ChevronDown size={18} />
            </button>
            {activeDropdown === "expertise" && (
              <ul className="bg-gray-100 p-2 rounded-md">
                <li><Link href="/expertise/expertise1" className="block p-2 hover:bg-gray-200">Expertise 1</Link></li>
                <li><Link href="/expertise/expertise2" className="block p-2 hover:bg-gray-200">Expertise 2</Link></li>
                <li><Link href="/expertise/expertise3" className="block p-2 hover:bg-gray-200">Expertise 3</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
      )}
    </nav>
  );
}