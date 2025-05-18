"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    name: "Where Excellence Meets Innovation in Every Build.",
  },
  {
    id: 2,
    name: "We don't just build structures — we craft spaces that embody quality, innovation, and prestige.",
  },
];

export default function AboutCornerstone() {
  return (
    <div className="relative flex items-center justify-center mb-[25px] mt-[25px] min-h-[400px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <Image
        src="/images/cornerstoneasset.png"
        alt="Proyek Konstruksi"
        title="Proyek Konstruksi"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority={false}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Teks & Statistik */}
      <div className="relative z-10 text-center p-6 sm:p-10 text-white font-bold">
        <dl className="flex flex-col items-center gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: index * 0.3,
              }}
              viewport={{ once: true }}
            >
              <motion.dd className="text-xl md:text-4xl max-w-4xl">
                {stat.name}
              </motion.dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
