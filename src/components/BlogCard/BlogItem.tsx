import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { generateSlug } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";

interface BlogItemProps {
  blog: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  };
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() =>
        (window.location.href = `/blogs/${generateSlug(blog.title)}`)
      }
    >
      <Card className="h-full hover:shadow-md transition-shadow border-amber-100">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <Badge className="bg-amber-100 hover:bg-amber-200 text-amber-800">
              {blog.category}
            </Badge>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {blog.readTime}
            </div>
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-900">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
          <div className="text-xs text-gray-500">Published: {blog.date}</div>
        </CardContent>
        <CardFooter className="pt-0 pb-4 px-6">
          <div className="flex items-center text-amber-500 text-sm font-medium">
            Read more
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogItem;
