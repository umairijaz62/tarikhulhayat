"use client";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
export default function Vision() {
  return (
    <div className="flex flex-col md:flex-row items-center mb-16 bg-gray-50 rounded-xl overflow-hidden">
      <div className="md:w-1/2 p-8 md:p-10 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center mb-3 bg-amber-100 px-3 py-1 rounded-full">
            <Eye className="h-4 w-4 text-amber-600 mr-2" />
            <span className="text-amber-700 font-medium text-sm">
              Our Vision
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A Revival of Authentic Islamic Knowledge
          </h2>
          <p className="text-gray-700 mb-6">
            We envision a world where Muslims are deeply connected to their
            authentic Islamic heritage, drawing inspiration and guidance from it
            to excel in all aspects of contemporary life. We aim to be the
            premier resource for reliable Islamic historical knowledge presented
            in an engaging, accessible format.
          </p>
          <p className="text-gray-700">
            Our vision is to foster a generation of Muslims who are confident in
            their identity, grounded in authentic knowledge, and equipped to
            address modern challenges while upholding Islamic values.
          </p>
        </motion.div>
      </div>
      <div
        className="md:w-1/2 h-64 md:h-auto order-1 md:order-2 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566159998588-f549725680da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-amber-500/10"></div>
      </div>
    </div>
  );
}
