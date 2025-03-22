"use client";

import {
  BookOpenIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-200 text-gray-800 border-t border-amber-300 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Top Section - Logo and Tagline */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center items-center gap-2 mb-3">
            <BookOpenIcon className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
            <span className="text-xl md:text-2xl font-extrabold text-slate-800">
              Tarikh-ul-Hayat
            </span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed max-w-2xl mx-auto px-4">
            Hum Islami tareekh ke roshan pehluon ko ujagar karte hain, jo aaj ke
            dor me rehnumai aur Quran ki hikmat se bharpoor hain.
          </p>
        </div>

        {/* Middle Section - Links and Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-gray-900 border-b border-amber-200 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-gray-900 border-b border-amber-200 pb-2">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/tac"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-gray-900 border-b border-amber-200 pb-2">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blogs#Seerah"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Seerah
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs#Khilafat-e-Rashida"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Khilafat-e-Rashida
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs#Asraar-e-Deen"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Asraar-e-Deen
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs#Qalb-e-Noor"
                  className="text-sm hover:text-amber-600 transition-colors duration-200"
                >
                  Qalb-e-Noor
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mb-6">
          <a
            href="#"
            className="hover:text-amber-600 transition-colors duration-200 bg-amber-50 p-2 rounded-full"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-amber-600 transition-colors duration-200 bg-amber-50 p-2 rounded-full"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-amber-600 transition-colors duration-200 bg-amber-50 p-2 rounded-full"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-amber-600 transition-colors duration-200 bg-amber-50 p-2 rounded-full"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-amber-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Tarikh-ul-Hayat. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Powered by <span className="font-semibold">Hayat Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
