"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, Heart, History } from "lucide-react";
import { Card, CardContent } from "../ui/card";
export default function Approach() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 bg-amber-200 p-8 md:p-10 rounded-xl"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Our Approach
      </h2>
      <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        We strive to make Islamic history and knowledge accessible to everyone
        through a carefully crafted methodology:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-amber-100">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Clear Language</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Engaging writing that avoids unnecessarily complex terminology
              while maintaining scholarly depth.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-100">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <History className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">
                Structured Content
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Well-organized articles with proper headings and clear structure
              for easy navigation and comprehension.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-100">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Practical Focus</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Emphasis on takeaways that can be applied in daily life, making
              historical knowledge relevant today.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-100">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Inspirational</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Stories and examples designed to motivate and inspire, not just
              inform, creating a deep connection.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
