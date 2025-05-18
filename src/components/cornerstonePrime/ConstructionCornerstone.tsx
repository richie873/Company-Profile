"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { layanan } from "@/components/cornerstonePrime/dataCornerstone";

export default function ConstructionCornerstone() {
  return (
    <div className="bg-white py-12 sm:py-16 mt-[30px] dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl dark:text-white font-semibold tracking-tight text-center text-gray-900 sm:text-4xl">
            Types of Buildings We Construct
          </h2>
        </div>

        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 border-t border-gray-200 pt-10">
          {layanan.map((item, index) => (
            <motion.article
              key={item.id}
              className="flex max-w-xl flex-col items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4 bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <div className="w-full">
                <Image
                  alt={item.title}
                  src={item.imageUrl}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover rounded-lg shadow-sm"
                />
              </div>
              <div className="group relative text-center mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-600">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-black dark:text-gray-300 text-center">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
