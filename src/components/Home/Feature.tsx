"use client";
import { blogs } from "@/constants/blogs/allblogs";
import AnimatedButton from "@/custom/AnimateButton";
import { motion } from "framer-motion";
import { ArrowRight, Badge, Clock } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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

const featuredBlogs = blogs.slice(0, 3);

export default function Feature() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              Featured Articles
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 mt-2">
              Discover our most popular authentic Islamic history content
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {featuredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={item}
                transition={{ duration: 0.8 }}
              >
                <Link href={`/blogs/${blog.id}`}>
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge className="bg-amber-100 hover:bg-amber-200 text-amber-800">
                          {blog.category}
                        </Badge>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {blog.readTime}
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-xl text-gray-900">
                        {blog.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{blog.date}</span>
                      <span className="text-amber-500 hover:text-amber-600 text-sm font-medium flex items-center">
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/categories">
              <AnimatedButton
                text="View All Articles"
                className="mt-8 p-2 bg-amber-500 hover:bg-amber-600 rounded-md text-white group flex items-center  transition-all duration-300 overflow-hidden"
              >
                <span className="inline-block max-w-0 opacity-0 ml-0 group-hover:max-w-[16px] group-hover:ml-2 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
