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
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-center mb-4">{layanan.title}</h1>
      <Image
        src={layanan.imageUrl}
        alt={layanan.title}
        width={600}
        height={300}
        className="rounded-lg mb-4 object-contain mx-auto max-w-sm"
      />
      <p className="text-gray-700 ml-[10px] text-lg">{layanan.description}</p>

      {layanan.content && (
        <p className="mt-4 text-gray-600 ml-[10px]">{layanan.content}</p>
      )}

      {layanan.features && (
        <ul className="mt-4 list-disc ml-[10px] list-inside text-gray-600">
          {layanan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
