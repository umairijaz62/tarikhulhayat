import { Blog } from "../blogtypes";

export const blog1: Blog = {
  id: "1",
  title: "Islamic History",
  excerpt: "This is paragraph.This is paragraph.This is paragraph.This is paragraph.",
  author: "Umair",
  date: "2025-03-22",
  category: "Seerah",
  imageUrl: "/images/islamic-history.jpg",
  readTime: "5 min",
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
  ]
};
