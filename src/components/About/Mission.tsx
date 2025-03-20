"use client";
import { motion } from "framer-motion";
import { BookOpen, Compass, History } from "lucide-react";
export default function Mission() {
  return (
    <div className="flex flex-col md:flex-row items-center mb-16 bg-gray-50 rounded-xl overflow-hidden">
      <div
        className="md:w-1/2 h-64 md:h-auto relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543039717-b4d966058f69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-amber-500/10"></div>
      </div>
      <div className="md:w-1/2 p-8 md:p-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center mb-3 bg-amber-100 px-3 py-1 rounded-full">
            <Compass className="h-4 w-4 text-amber-600 mr-2" />
            <span className="text-amber-700 font-medium text-sm">
              Our Mission
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Providing Authentic Islamic Knowledge
          </h2>
          <p className="text-gray-700 mb-6">
            In an era of widespread misinformation and shallow content,
            Tarikh-ul-Hayat aims to be a beacon of authentic Islamic knowledge.
            We believe that accurate understanding of our history is essential
            for Muslims to navigate the complexities of the modern world while
            staying true to their faith.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <BookOpen className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">
                  Authentic Knowledge
                </h3>
                <p className="text-gray-600 text-sm">
                  Backed by reliable Islamic sources with proper references.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <History className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">
                  Historical Context
                </h3>
                <p className="text-gray-600 text-sm">
                  Presented in proper context with timeless lessons.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
