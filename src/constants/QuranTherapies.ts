export interface QuranTherapy {
    id: string;
    problem: string;
    description: string;
    quranVerse: {
      arabic: string;
      translation: string;
      reference: string;
    };
    hadith: {
      text: string;
      reference: string;
    };
    steps: string[];
    icon: string;
  }
  
  export const QuranTherapies: QuranTherapy[] = [
    {
      id: "anxiety",
      problem: "Anxiety",
      description: "Finding peace amidst worry and fear",
      quranVerse: {
        arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        translation: "Verily, in the remembrance of Allah do hearts find rest.",
        reference: "Surah Ar-Ra'd 13:28"
      },
      hadith: {
        text: "When anxiety overwhelms you, say: 'O Allah, I am Your servant, son of Your servant, son of Your maidservant, my forelock is in Your hand, Your command over me is forever executed and Your decree over me is just...'",
        reference: "Ahmad, authenticated by Al-Albani"
      },
      steps: [
        "Practice daily dhikr (remembrance of Allah)",
        "Recite Surah Al-Fatiha and the last three surahs of the Quran",
        "Make dua (supplication) specifically for your anxiety",
        "Establish a consistent prayer routine"
      ],
      icon: "brain"
    },
    {
      id: "depression",
      problem: "Depression",
      description: "Finding hope and purpose in difficult times",
      quranVerse: {
        arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا، إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        translation: "For indeed, with hardship will be ease. Indeed, with hardship will be ease.",
        reference: "Surah Ash-Sharh 94:5-6"
      },
      hadith: {
        text: "No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, even if it were the prick he receives from a thorn, but that Allah expiates some of his sins for that.",
        reference: "Sahih Bukhari"
      },
      steps: [
        "Remember Allah's promise that every hardship is followed by ease",
        "Practice gratitude for your blessings daily",
        "Maintain connection with supportive community",
        "Seek professional help alongside spiritual remedies"
      ],
      icon: "cloud-rain"
    },
    {
      id: "financial-stress",
      problem: "Financial Stress",
      description: "Finding contentment and provision through faith",
      quranVerse: {
        arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
        translation: "And whoever fears Allah - He will make for him a way out and will provide for him from where he does not expect.",
        reference: "Surah At-Talaq 65:2-3"
      },
      hadith: {
        text: "If you were to rely on Allah as He should be relied upon, He would provide for you as He provides for the birds. They go out early in the morning hungry and return in the evening full.",
        reference: "Jami at-Tirmidhi"
      },
      steps: [
        "Practice tawakkul (reliance on Allah) while taking practical steps",
        "Give regular charity, even if small",
        "Recite and reflect on Surah Al-Waqiah daily",
        "Make dua for barakah (blessing) in your provision"
      ],
      icon: "banknote"
    },
    {
      id: "relationship-difficulties",
      problem: "Relationship Difficulties",
      description: "Building harmony through Islamic principles",
      quranVerse: {
        arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
        translation: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
        reference: "Surah Ar-Rum 30:21"
      },
      hadith: {
        text: "The best of you are those who are best to their families, and I am the best to my family.",
        reference: "Sunan Ibn Majah"
      },
      steps: [
        "Practice active listening and compassionate communication",
        "Remember the Sunnah of forgiveness and patience",
        "Make dua together for your relationship",
        "Follow the Prophet's ﷺ example in treating family with kindness"
      ],
      icon: "heart-handshake"
    }
  ];
  