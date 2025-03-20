"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, Compass, Eye, Heart, History } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Meetthefounder from "./Meetthefounder";

export default function AllStuff() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12"
    >
      {/* Header Section with Background */}
      <div className="relative w-full rounded-xl overflow-hidden mb-16">
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
            Educating the new generation with authentic Islamic history,
            inspiring them through real Islamic heroes, and offering Quran-based
            solutions for modern life struggles.
          </motion.p>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {/* Vision Section - Right aligned with background image */}
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
                authentic Islamic heritage, drawing inspiration and guidance
                from it to excel in all aspects of contemporary life. We aim to
                be the premier resource for reliable Islamic historical
                knowledge presented in an engaging, accessible format.
              </p>
              <p className="text-gray-700">
                Our vision is to foster a generation of Muslims who are
                confident in their identity, grounded in authentic knowledge,
                and equipped to address modern challenges while upholding
                Islamic values.
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

        {/* Mission Section - Left aligned with background image */}
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
                Tarikh-ul-Hayat aims to be a beacon of authentic Islamic
                knowledge. We believe that accurate understanding of our history
                is essential for Muslims to navigate the complexities of the
                modern world while staying true to their faith.
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

        {/* Approach Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-amber-50 p-8 md:p-10 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Approach
          </h2>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We strive to make Islamic history and knowledge accessible to
            everyone through a carefully crafted methodology:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <BookOpen className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Clear Language
                  </h3>
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
                  Well-organized articles with proper headings and clear
                  structure for easy navigation and comprehension.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Practical Focus
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Emphasis on takeaways that can be applied in daily life,
                  making historical knowledge relevant today.
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
                  Stories and examples designed to motivate and inspire, not
                  just inform, creating a deep connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <Meetthefounder />

        {/* Join Our Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Tarikh-ul-Hayat is more than just a website—it's a movement to
              reconnect Muslims with their intellectual and spiritual heritage.
              We invite you to join us in this journey of discovery and revival.
            </p>
            <blockquote className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto italic text-gray-700 mb-8">
              "The example of guidance and knowledge with which Allah has sent
              me is like abundant rain falling on the earth..."
              <footer className="text-right text-sm text-gray-500 mt-4">
                — Prophet Muhammad ﷺ (Sahih al-Bukhari)
              </footer>
            </blockquote>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Help us spread the rain of knowledge by sharing our content,
              providing feedback, and supporting this educational initiative.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
