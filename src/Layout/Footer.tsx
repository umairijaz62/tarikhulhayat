"use client";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-amber-200 border-t border-amber-500">
      <div className="container px-4 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-amber-500" />
              <span className="text-lg font-bold text-slate-900">
                Tarikh-ul-Hayat
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2 pr-4">
              Educating the new generation with authentic Islamic history,
              inspiring them through real Islamic heroes, and offering
              Quran-based solutions for modern life struggles.
            </p>
            <div className="mt-12 flex gap-8  items-end">
              <Instagram className="text-gray-600 hover:text-amber-500 cursor-pointer" />
              <Facebook className="text-gray-600 hover:text-amber-500 cursor-pointer" />
              <Twitter className="text-gray-600 hover:text-amber-500 cursor-pointer" />
              <Linkedin className="text-gray-600 hover:text-amber-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <div
                  className="text-sm text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Home
                </div>
              </li>
              <li>
                <div
                  className="text-sm text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  onClick={() => {
                    window.location.href = "/about";
                  }}
                >
                  About
                </div>
              </li>
              <li>
                <div
                  className="text-sm text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  onClick={() => {
                    window.location.href = "/blogs";
                  }}
                >
                  Blogs
                </div>
              </li>
              <li>
                <div
                  className="text-sm text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Contact
                </div>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-gray-900">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <div
                  className="text-sm text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  onClick={() => {
                    // Clear hash first to ensure event triggers even when already on page
                    window.location.hash = "";
                    window.location.href = "/blogs#Seerah";
                  }}
                >
                  Seerah
                </div>
              </li>
              <li>
                <div
                  className="text-sm text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  onClick={() => {
                    window.location.hash = "";
                    window.location.href = "/blogs#Khilafat-e-Rashida";
                  }}
                >
                  Khilafat-e-Rashida
                </div>
              </li>
              <li>
                <div
                  className="text-sm text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  onClick={() => {
                    window.location.hash = "";
                    window.location.href = "/blogs#Asraar-e-Deen";
                  }}
                >
                  Asraar-e-Deen
                </div>
              </li>
              <li>
                <div
                  className="text-sm text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  onClick={() => {
                    window.location.hash = "";
                    window.location.href = "/blogs#Qalb-e-Noor";
                  }}
                >
                  Qalb-e-Noor
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-amber-100" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Tarikh-ul-Hayat. All rights
            reserved.
          </p>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="text-xs text-gray-500 flex items-center">
              Made with <Heart className="h-3 w-3 text-amber-500 mx-1" /> for
              the Ummah
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
