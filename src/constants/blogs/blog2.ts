import { Blog } from "../blogtypes";

export const blog2: Blog = {
  id: "2",
  title: "Abu Bakr As-Siddiq: The First Caliph of Islam",
  excerpt: "Learn about the life and legacy of Abu Bakr As-Siddiq, the closest companion of Prophet Muhammad ﷺ and the first Caliph of Islam.",
  content: [
    { type: "heading", text: "Introduction to Seerah" },
    { type: "paragraph", text: "Seerah refers to the life of Prophet Muhammad (PBUH) and his journey." },
    { type: "list", items: ["Early Life", "Prophethood", "Migration"] },
    { type: "paragraph", text: "Understanding Seerah is crucial for every Muslim." }
  ],
  contentUrdu: [
    { type: "heading", text: "سیرت کا تعارف" },
    { type: "paragraph", text: "سیرت نبی کریم ﷺ کی زندگی اور ان کے سفر کا بیان ہے۔" },
    { type: "list", items: ["ابتدائی زندگی", "نبوت", "ہجرت"] },
    { type: "paragraph", text: "سیرت کو سمجھنا ہر مسلمان کے لیے ضروری ہے۔" }
  ],
  category: "Khilafat-e-Rashida",
  author: "Admin",
  date: "June 10, 2023",
  readTime: "7 min read",
  imageUrl: "/blog-2.svg",
};