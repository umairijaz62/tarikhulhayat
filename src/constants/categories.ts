export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "Seerah",
    name: "Seerah",
    description: "Life of Prophet Muhammad ﷺ",
    icon: "user",
  },
  {
    id: "Khilafat-e-Rashida",
    name: "Khilafat-e-Rashida",
    description: "The Rightly Guided Caliphs",
    icon: "users",
  },
  {
    id: "Asraar-e-Deen",
    name: "Asraar-e-Deen",
    description: "Major events in Islamic history",
    icon: "book",
  },
  {
    id: "Qalb-e-Noor",
    name: "Qalb-e-Noor",
    description: "Quranic solutions for modern problems",
    icon: "heart",
  }
];
