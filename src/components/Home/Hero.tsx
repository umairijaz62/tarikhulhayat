"use client";
import { motion } from "framer-motion";
import { BookOpen, ThumbsUp } from "lucide-react";
import { Button } from "../ui/button";
export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url(/bg-1.jpg)] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container px-4 md:px-6 lg:px-8 relative z-20 max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl text-transparent bg-linear-to-r from-amber-300 to-white bg-clip-text leading-tight">
            Islamic Heritage Chronicles
          </h1>
          <p className="mx-auto max-w-[600px] text-white md:text-lg">
            Educate yourself with accurate knowledge of our rich Islamic
            heritage and find Quranic solutions to modern challenges.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white md:p-6 cursor-pointer">
              <BookOpen className="mr-2 h-4 w-4" />
              Explore Blogs
            </Button>
            <Button
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-50 md:p-6 cursor-pointer"
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              Quran Therapy
            </Button>
          </div>
          <div className="w-full max-w-md mx-auto mt-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg transform rotate-[1.5deg]"></div>
            <div className="relative bg-white py-4 px-12 rounded-lg border border-amber-200 shadow-md">
              <p className="text-base text-gray-700 italic">
                "Whoever takes a path upon which to obtain knowledge, Allah
                makes the path to Paradise easy for him."
              </p>
              <p className="text-xs text-right mt-2 text-gray-600">
                — Prophet Muhammad ﷺ (Sahih Muslim)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
