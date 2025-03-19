"use client";
import { QuranTherapies } from "@/constant/QuranTherapies";
import { motion } from "framer-motion";
import {
  Banknote,
  Brain,
  Check,
  CloudRain,
  HeartHandshake,
} from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function QuranTherpy() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const iconMap: Record<string, React.ReactNode> = {
    brain: <Brain className="h-6 w-6 text-amber-500" />,
    "cloud-rain": <CloudRain className="h-6 w-6 text-amber-500" />,
    banknote: <Banknote className="h-6 w-6 text-amber-500" />,
    "heart-handshake": <HeartHandshake className="h-6 w-6 text-amber-500" />,
  };
  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
            Healing Through Quran
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 mt-2">
            Quranic solutions for modern life challenges
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {QuranTherapies.map((therapy) => (
            <motion.div key={therapy.id} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow border-amber-100">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    {iconMap[therapy.icon]}
                    <CardTitle className="ml-2 text-xl text-gray-900">
                      {therapy.problem}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{therapy.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-amber-800 font-semibold text-lg text-right mb-1 font-['Amiri']">
                      {therapy.quranVerse.arabic}
                    </p>
                    <p className="text-sm text-gray-700 italic mb-1">
                      "{therapy.quranVerse.translation}"
                    </p>
                    <p className="text-xs text-gray-500 text-right">
                      {therapy.quranVerse.reference}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Practical Steps:
                    </h4>
                    <ul className="space-y-2">
                      {therapy.steps.map((step, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
