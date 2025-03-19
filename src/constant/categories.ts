export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  imageUrl: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "seerah",
    name: "Seerah",
    description: "Life of Prophet Muhammad ﷺ",
    icon: "user",
    imageUrl: "/seerah.svg",
    count: 15
  },
  {
    id: "khilafat",
    name: "Khilafat-e-Rashida",
    description: "The Rightly Guided Caliphs",
    icon: "users",
    imageUrl: "/khilafat.svg",
    count: 12
  },
  {
    id: "islamic-history",
    name: "Islamic History",
    description: "Major events in Islamic history",
    icon: "book",
    imageUrl: "/islamic-history.svg",
    count: 20
  },
  {
    id: "quran-therapy",
    name: "Healing Through Quran",
    description: "Quranic solutions for modern problems",
    icon: "heart",
    imageUrl: "/quran-therapy.svg",
    count: 10
  }
];
