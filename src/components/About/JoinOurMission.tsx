"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Using shadcn/ui Input component
import { motion } from "framer-motion";

export default function JoinOurMission() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="bg-amber-200 rounded-xl p-8 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Join Our Mission
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Tarikh-ul-Hayat is more than just a website—it's a movement to
          reconnect Muslims with their intellectual and spiritual heritage. We
          invite you to join us in this journey of discovery and revival.
        </p>
        <blockquote className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto italic text-gray-700 mb-8">
          "The example of guidance and knowledge with which Allah has sent me is
          like abundant rain falling on the earth..."
          <footer className="text-right text-sm text-gray-500 mt-4">
            — Prophet Muhammad ﷺ (Sahih al-Bukhari)
          </footer>
        </blockquote>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Help us spread the rain of knowledge by subscribing, sharing our
          content, providing feedback, and supporting this educational
          initiative.
        </p>

        {/* Subscription Box */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-64 bg-white rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
          <Button className="bg-amber-600 text-white rounded-md px-6 py-2 hover:bg-amber-700 transition">
            Subscribe
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
