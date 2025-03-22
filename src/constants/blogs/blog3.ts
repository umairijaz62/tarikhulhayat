import { Blog } from "../blogtypes";

export const blog3: Blog = {
  id: "3",
  title: "The Battle of Badr: First Major Victory in Islamic History",
  excerpt: "Discover the strategic, spiritual, and historical significance of the Battle of Badr, the first major victory for Muslims.",
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
  category: "Asraar-e-Deen",
  author: "Admin",
  date: "July 5, 2023",
  readTime: "6 min read",
  imageUrl: "/blog-3.svg",
};

// blogs/blo