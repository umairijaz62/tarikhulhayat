"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

interface Comment {
  name: string;
  comment: string;
}

interface Props {
  slug: string; // unique blog identifier
}

const CommentSection = ({ slug }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Load existing comments from localStorage (temporary storage!)
  useEffect(() => {
    const stored = localStorage.getItem(`comments-${slug}`);
    if (stored) {
      setComments(JSON.parse(stored));
    }
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return alert("Please fill all fields!");

    const newComment = { name, comment };
    const updatedComments = [newComment, ...comments];

    setComments(updatedComments);

    // Save to localStorage
    localStorage.setItem(`comments-${slug}`, JSON.stringify(updatedComments));

    setName("");
    setComment("");
  };

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit" className="bg-amber-500 text-white">
          Submit
        </Button>
      </form>

      <Separator className="mb-4" />

      <div className="max-h-[300px] overflow-y-auto space-y-4 p-2 bg-gray-50 rounded-lg">
        {comments.length > 0 ? (
          comments.map((c, i) => (
            <div key={i} className="border rounded-lg p-3 bg-white shadow">
              <div className="font-semibold">{c.name}</div>
              <p>{c.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first one!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
