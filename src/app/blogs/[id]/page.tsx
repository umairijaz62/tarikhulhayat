"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogs } from "@/constants/blogs/allblogs";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const BlogDetail = () => {
  const pathname = usePathname();
  const blogId = pathname.split("/")[2];

  const blog = blogs.find((b) => b.id === blogId);

  const [language, setLanguage] = useState("english");

  if (!blog) {
    return (
      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The article you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link href="/categories">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              Browse Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container px-4 md:px-6 lg:px-8 py-12"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-8">
          <Link href="/categories">
            <Button variant="ghost" size="sm" className="hover:bg-amber-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge className="bg-amber-100 hover:bg-amber-200 text-amber-800 mb-4">
            {blog.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900 mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </motion.div>

        <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${blog.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => setLanguage("english")}
              className={`$ {
                language === "english"
                  ? "bg-amber-500 hover:bg-amber-600 text-white md:p-6 cursor-pointer"
                  : "border-amber-500 text-amber-500 hover:bg-amber-50 md:p-6 cursor-pointer"
              }`}
            >
              English
            </Button>
            <Button
              size="sm"
              onClick={() => setLanguage("urdu")}
              className={`$ {
                language === "urdu"
                  ? "bg-amber-500 hover:bg-amber-600 text-white md:p-6 cursor-pointer"
                  : "border-amber-500 text-amber-500 hover:bg-amber-50 md:p-6 cursor-pointer"
              }`}
            >
              اردو
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`prose max-w-none text-gray-700 ${
            language === "urdu" ? "text-right font-nastaleeq" : ""
          }`}
        >
          {language === "english"
            ? blog.content.map((block, idx) => {
                if (block.type === "heading")
                  return (
                    <h2 key={idx} className="text-2xl font-bold mb-4">
                      {block.text}
                    </h2>
                  );
                if (block.type === "paragraph")
                  return (
                    <p key={idx} className="mb-4">
                      {block.text}
                    </p>
                  );
                if (block.type === "list")
                  return (
                    <ul key={idx} className="list-disc pl-5 mb-4">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
              })
            : blog.contentUrdu.map((block, idx) => {
                if (block.type === "heading")
                  return (
                    <h2 key={idx} className="text-2xl font-bold mb-4">
                      {block.text}
                    </h2>
                  );
                if (block.type === "paragraph")
                  return (
                    <p key={idx} className="mb-4">
                      {block.text}
                    </p>
                  );
                if (block.type === "list")
                  return (
                    <ul key={idx} className="list-disc pl-5 mb-4">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
              })}
        </motion.div>

        <Separator className="my-8 bg-amber-200" />
      </div>
    </motion.div>
  );
};

export default BlogDetail;
