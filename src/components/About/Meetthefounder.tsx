"use client";
import { motion } from "framer-motion";
import { Award, Instagram, Twitter } from "lucide-react";

export default function Meetthefounder() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl overflow-hidden">
        <div className="md:w-1/3 p-6 relative group">
          <div className="relative w-48 h-48 mx-auto md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-100">
            <div
              className="absolute inset-0 bg-cover bg-center group"
              style={{
                backgroundImage: "url('/umair.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-amber-200 opacity-75 flex flex-col items-center justify-center text-center text-gray-800 text-sm font-medium px-4 translate-y-100 group-hover:translate-y-0 duration-500 ease-in-">
              <p className="mb-2">&quot;Connect With Founder&quot;</p>
              <div className="flex space-x-3 mt-2">
                <a
                  href="#"
                  className="text-gray-800 hover:text-amber-700 transition"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-amber-700 transition"
                >
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 p-8 md:p-10">
          <div className="inline-flex items-center mb-3 bg-amber-100 px-3 py-1 rounded-full">
            <Award className="h-4 w-4 text-amber-600 mr-2" />
            <span className="text-amber-700 font-medium text-sm">
              Meet the Founder
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Umair Muhammad
          </h2>
          <p className="text-gray-700 mb-4">
            Umair Muhammad, a devoted student of Islamic history, founded
            Tarikh-ul-Hayat out of a deep-rooted passion to reconnect today’s
            generation with the timeless legacy of Islamic civilization. For
            him, history isn’t just a collection of ancient tales—it’s a living
            guide, filled with enduring lessons of resilience, leadership, and
            faith.
          </p>
          <p className="text-gray-700 mb-6">
            With years of dedicated study and an insatiable curiosity, Umair’s
            mission is clear yet powerful: to present authentic,
            well-researched, and engaging narratives that bridge the past with
            the present. Through Tarikh-ul-Hayat, he strives to make Islamic
            history not only accessible, but meaningful—reviving forgotten
            stories and bringing them to life for readers across the globe.
          </p>

          <a
            href="#"
            className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full shadow hover:bg-amber-700 transition"
          >
            Explore Tarikh-ul-Hayat
          </a>
        </div>
      </div>
    </motion.section>
  );
}
