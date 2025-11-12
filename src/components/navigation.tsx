"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 w-full">
          <div className="flex items-center justify-center">
            <div className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/10">
              <a
                href={navLinks[0].href}
                onClick={() => setActiveLink(navLinks[0].href)}
                className={`transition-all duration-300 font-medium text-xl ${
                  activeLink === navLinks[0].href
                    ? "bg-[#FFC857] text-black px-4 py-2 rounded-full"
                    : "text-white hover:text-[#FFC857]"
                }`}
              >
                {navLinks[0].label}
              </a>

              <a
                href={navLinks[1].href}
                onClick={() => setActiveLink(navLinks[1].href)}
                className={`transition-all duration-300 font-medium text-xl ${
                  activeLink === navLinks[1].href
                    ? "bg-[#FFC857] text-black px-4 py-2 rounded-full"
                    : "text-white hover:text-[#FFC857]"
                }`}
              >
                {navLinks[1].label}
              </a>

              <div className="flex items-center justify-center px-20">
                <Image
                  src="/images/tealpinklogo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="inline-block"
                />
              </div>

              <a
                href={navLinks[2].href}
                onClick={() => setActiveLink(navLinks[2].href)}
                className={`transition-all duration-300 font-medium text-xl ${
                  activeLink === navLinks[2].href
                    ? "bg-[#FFC857] text-black px-4 py-2 rounded-full"
                    : "text-white hover:text-[#FFC857]"
                }`}
              >
                {navLinks[2].label}
              </a>

              <a
                href={navLinks[3].href}
                onClick={() => setActiveLink(navLinks[3].href)}
                className={`transition-all duration-300 font-medium text-xl ${
                  activeLink === navLinks[3].href
                    ? "bg-[#FFC857] text-black px-4 py-2 rounded-full"
                    : "text-white hover:text-[#FFC857]"
                }`}
              >
                {navLinks[3].label}
              </a>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-[#FFC857] transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
    </nav>
  );
}
