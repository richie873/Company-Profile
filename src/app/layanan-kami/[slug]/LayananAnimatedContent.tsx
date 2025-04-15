'use client';

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  layanan: {
    title: string;
    imageUrl: string;
    description: string;
    content?: string;
    features?: string[];
  };
};

export default function LayananAnimatedContent({ layanan }: Props) {
  return (
    <motion.div
      key={layanan.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 dark:text-white">
        {layanan.title}
      </h1>

      <Image
        src={layanan.imageUrl}
        alt={layanan.title}
        width={900}
        height={600}
        className="rounded-lg mb-6 object-contain mx-auto w-full max-w-3xl"
      />

      <p className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-white text-justify mb-4">
        {layanan.description}
      </p>

      {layanan.content && (
        <p className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-white text-justify mb-4">
          {layanan.content}
        </p>
      )}

      {layanan.features && (
        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-900 dark:text-white ml-4">
          {layanan.features.map((feature, index) => (
            <li key={index} className="mb-1">{feature}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
