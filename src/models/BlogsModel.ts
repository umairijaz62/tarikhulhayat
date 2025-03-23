import { Schema, model, models } from "mongoose";

// Content Block Schema
const ContentBlockSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["paragraph", "heading", "list"], // sirf yahi types hain tumhare BlogContentBlock ke mutabiq
      required: true,
    },
    text: { type: String }, // heading & paragraph ke liye
    items: { type: [String] }, // list ke liye
  },
  { _id: false }
);

// Blog Schema
const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    author: { type: String, default: "Admin" },
    date: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    readTime: { type: String, required: true },
    content: { type: [ContentBlockSchema], required: true },
    contentUrdu: { type: [ContentBlockSchema], required: true },
  },
  { timestamps: true }
);

// Blog Model
const BlogModel = models.Blog || model("Blog", BlogSchema);

export default BlogModel;
