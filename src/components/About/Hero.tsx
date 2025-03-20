"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full  overflow-hidden mb-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-amber-900/40" />
      <div className="relative py-20 px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
        >
          About Tarikh-ul-Hayat
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90"
        >
          Educating the new generation with authentic Islamic history, inspiring
          them through real Islamic heroes, and offering Quran-based solutions
          for modern life struggles.
        </motion.p>
      </div>
    </div>
  );
}
