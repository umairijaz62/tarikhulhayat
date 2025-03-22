"use client";
import BlogItem from "@/components/BlogCard/BlogItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogs } from "@/constants/blogs/allblogs";
import { categories } from "@/constants/categories";
import { motion } from "framer-motion";
import { Book, Heart, User, Users } from "lucide-react";
import React from "react";

const Page = () => {
  const [activeTab, setActiveTab] = React.useState<string>("all");

  React.useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash && categories.some((cat) => cat.id === hash)) {
        setActiveTab(hash);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    user: <User className="h-6 w-6 text-amber-500" />,
    users: <Users className="h-6 w-6 text-amber-500" />,
    book: <Book className="h-6 w-6 text-amber-500" />,
    heart: <Heart className="h-6 w-6 text-amber-500" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container px-4 md:px-6 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Explore Categories
          </h1>
          <p className="text-xl text-gray-600">
            Discover authentic Islamic knowledge organized by subjects
          </p>
        </motion.div>

        <Tabs
          defaultValue={activeTab}
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full flex overflow-x-auto mb-8 bg-amber-50 p-1">
            <TabsTrigger value="all" className="flex-1">
              All
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex-1"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {blogs.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
              ))}
            </motion.div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="flex items-center mb-8">
                {iconMap[category.icon]}
                <h2 className="text-2xl font-bold text-gray-900 ml-2">
                  {category.name}
                </h2>
              </div>
              <p className="text-gray-600 mb-8">{category.description}</p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {blogs
                  .filter((blog) => blog.category === category.name)
                  .map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Page;
