export interface Blog {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    imageUrl: string;
    references: string[];
    tags: string[];
    relatedArticles: string[];
    keyTakeaways: string[];
  }
  
  export const blogs: Blog[] = [
    {
      id: "1",
      title: "The Life of Prophet Muhammad ﷺ - Early Years in Makkah",
      excerpt: "Explore the formative years of Prophet Muhammad ﷺ in Makkah before the revelation, his character, and the society he lived in.",
      content: "",
      category: "Seerah",
      author: "Admin",
      date: "May 15, 2023",
      readTime: "5 min read",
      imageUrl: "/blog-1.svg",
      references: ["Sahih Bukhari", "Ar-Raheeq Al-Makhtum (The Sealed Nectar)"],
      tags: ["Prophet Muhammad ﷺ", "Makkah", "Early Islam"],
      relatedArticles: ["2", "4"],
      keyTakeaways: [
        "Prophet Muhammad ﷺ was known as Al-Amin (The Trustworthy) even before revelation",
        "He lived in a society dominated by tribal customs and idol worship",
        "His early years shaped his contemplative nature and compassion for humanity"
      ]
    },
    {
      id: "2",
      title: "Abu Bakr As-Siddiq: The First Caliph of Islam",
      excerpt: "Learn about the life and legacy of Abu Bakr As-Siddiq, the closest companion of Prophet Muhammad ﷺ and the first Caliph of Islam.",
      content: "",
      category: "Khilafat-e-Rashida",
      author: "Admin",
      date: "June 10, 2023",
      readTime: "7 min read",
      imageUrl: "/blog-2.svg",
      references: ["Sahih Bukhari", "Tarikh al-Tabari", "Al-Bidayah wan-Nihayah"],
      tags: ["Abu Bakr", "Khilafat", "Companions"],
      relatedArticles: ["3", "5"],
      keyTakeaways: [
        "Abu Bakr was the first adult male to accept Islam",
        "He was known for his unwavering faith and financial sacrifices for Islam",
        "During his caliphate, he unified Arabia and preserved the Quran"
      ]
    },
    {
      id: "3",
      title: "The Battle of Badr: First Major Victory in Islamic History",
      excerpt: "Discover the strategic, spiritual, and historical significance of the Battle of Badr, the first major victory for Muslims.",
      content: "",
      category: "Islamic History",
      author: "Admin",
      date: "July 5, 2023",
      readTime: "6 min read",
      imageUrl: "/blog-3.svg",
      references: ["Sahih Bukhari", "Sahih Muslim", "Sirat Ibn Hisham"],
      tags: ["Battle of Badr", "Islamic Warfare", "Ramadan"],
      relatedArticles: ["1", "6"],
      keyTakeaways: [
        "The Battle of Badr occurred in the month of Ramadan in the second year after Hijrah",
        "Muslims were outnumbered 3:1 but achieved victory through faith and divine support",
        "Badr established the early Muslim community's position in Arabia"
      ]
    },
    {
      id: "4",
      title: "Islamic Golden Age: Contributions to Science and Medicine",
      excerpt: "Explore how Muslim scholars revolutionized science, medicine, and mathematics during the Islamic Golden Age.",
      content: "",
      category: "Islamic History",
      author: "Admin",
      date: "August 22, 2023",
      readTime: "8 min read",
      imageUrl: "/blog-4.svg",
      references: ["Lost History by Michael Hamilton Morgan", "Science in Medieval Islam by Howard R. Turner"],
      tags: ["Golden Age", "Science", "Islamic Civilization"],
      relatedArticles: ["7", "8"],
      keyTakeaways: [
        "Muslim scholars preserved and translated ancient Greek and Roman knowledge",
        "Ibn Sina (Avicenna) wrote the Canon of Medicine, used in European universities for centuries",
        "Al-Khwarizmi's contributions led to the development of algebra and algorithms"
      ]
    }
  ];
  