"use client";
import { categories } from "@/constant/categories";
import { motion } from "framer-motion";
import { Book, ChevronRight, Heart, User, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../ui/card";
export default function Categoriescategories() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const iconMap: Record<string, React.ReactNode> = {
    user: <User className="h-6 w-6 text-amber-500" />,
    users: <Users className="h-6 w-6 text-amber-500" />,
    book: <Book className="h-6 w-6 text-amber-500" />,
    heart: <Heart className="h-6 w-6 text-amber-500" />,
  };

  return (
    <section className="w-full py-12 bg-amber-200">
      <div className='"container px-4 md:px-6 lg:px-8 mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
            Explore Categoriescategories
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 mt-2 mb-6">
            Discover authentic Islamic knowledge organized by subjects
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((categories) => (
            <motion.div key={categories.id} variants={item}>
              <Link href={`/categories/#${categories.id}`}>
                <Card className="h-full w-full flex flex-col hover:shadow-md transition-all cursor-pointer border-amber-100 hover:border-amber-300 hover:bg-white">
                  <CardContent className="pt-4 pb-2 flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-amber-100 p-2 rounded-full">
                          {iconMap[categories.icon]}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {categories.count} articles
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">
                      {categories.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {categories.description}
                    </p>
                  </CardContent>
                  <CardFooter className="py-2">
                    <div className="flex items-center text-amber-600 text-sm font-medium">
                      Read Articles
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
