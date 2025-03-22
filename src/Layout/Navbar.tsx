"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsShowing(false);
      } else {
        setIsShowing(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const blogCategories = [
    { name: "Seerah", hash: "Seerah" },
    { name: "Khilafat-e-Rashida", hash: "Khilafat-e-Rashida" },
    { name: "Asraar-e-Deen", hash: "Asraar-e-Deen" },
    { name: "Qalb-e-Noor", hash: "Qalb-e-Noor" },
  ];

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md flex p-4 lg:px-10 justify-between items-center border-b-2 border-amber-500 transition-transform duration-300 ease-in-out ${
          isShowing ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-amber-700">Tarikh-ul-Hayat</h1>
        </div>

        {/* Desktop Nav Links - Hidden on mobile */}
        <ul className="hidden md:flex gap-10 lg:text-lg font-medium text-gray-800">
          <li className="relative group">
            <Link href="/" className="relative inline-block">
              Home
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          <li className="relative group">
            <Link href="/about" className="relative inline-block">
              About
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {/* Blog dropdown with hover - only on desktop */}
          <li className="relative group">
            <Link href="/blogs" className="relative inline-block">
              Blogs
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div className="absolute left-0 top-full pt-6 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white shadow-md rounded-lg py-2">
                {blogCategories.map((category) => (
                  <Link
                    key={category.hash}
                    href={`/blogs#${category.hash}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition duration-200"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li className="relative group">
            <Link href="/contact" className="relative inline-block">
              Contact Us
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu - Slides down when open */}
      <div
        className={`fixed w-full bg-white shadow-md transition-transform duration-300 ease-in-out z-10 md:hidden ${
          isMobileMenuOpen && isShowing ? "translate-y-16" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col py-4">
          <li>
            <Link
              href="/"
              className="block px-6 py-2 text-gray-800 hover:bg-amber-50 hover:text-amber-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-6 py-2 text-gray-800 hover:bg-amber-50 hover:text-amber-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="block px-6 py-2 text-gray-800 hover:bg-amber-50 hover:text-amber-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-6 py-2 text-gray-800 hover:bg-amber-50 hover:text-amber-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
