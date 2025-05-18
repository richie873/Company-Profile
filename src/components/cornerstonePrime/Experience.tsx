"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Data statistik
const stats = [
  { id: 1, name: "Cities Served", value: 20, Description: "+" },
  { id: 2, name: "Experience", value: 36, Description: "+ Years" },
  { id: 3, name: "Clients Satisfied", value: 118, Description: "+" },
];

// Hook animasi count-up
const useCountUp = (target: number, isInView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const speed = target > 50 ? 2 : 20;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [target, isInView]);

  return count;
};

// Komponen Statistik
const StatisticCard = ({
  name,
  value,
  description,
}: {
  name: string;
  value: number;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animatedValue = useCountUp(value, isInView);

  return (
    <motion.div
      ref={ref}
      className="backdrop-blur-sm bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <dt className="text-white text-lg sm:text-xl font-medium mb-2">{name}</dt>
      <dd className="flex items-end justify-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {animatedValue}
        </motion.span>
        <span className="ml-2 text-xl sm:text-2xl text-white">{description}</span>
      </dd>
    </motion.div>
  );
};

// Komponen utama
export default function Experience() {
  return (
    <div className="relative flex items-center justify-center mb-10 mt-10 min-h-[600px] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src="/images/cornerstone/cornerstoneimage4.png"
        alt="Proyek Konstruksi"
        title="Proyek Konstruksi"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority={false}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      {/* Kontainer Konten */}
      <div className="relative z-10 text-center p-6 sm:p-10 w-full max-w-6xl">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatisticCard
              key={stat.id}
              name={stat.name}
              value={stat.value}
              description={stat.Description}
            />
          ))}
        </dl>
      </div>
    </div>
  );
}
