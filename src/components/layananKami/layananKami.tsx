"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { layanan } from "./data";
import { slugify } from "@/components/utils/slugify";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LayananKami() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const router = useRouter();

  // Ambil slug dari URL saat pertama kali render
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#layanan-")) {
      setSelectedSlug(hash.replace("#layanan-", ""));
    } else {
      // default pilih layanan pertama
      setSelectedSlug(slugify(layanan[0].title));
    }
  }, []);

  const handleSelect = (slug: string) => {
    setSelectedSlug(slug);
    // update hash di URL agar bisa diakses langsung
    router.push(`/layanan-kami/${slug}`);
};

  const selectedLayanan = layanan.find((item) => slugify(item.title) === selectedSlug);

  return (
    <div className="flex flex-col lg:flex-row mt-[70px] lg:mt-[80px] ">
      {/* Sidebar */}
      <aside
        className="order-2 lg:order-none
             w-full lg:w-[250px]
             bg-white border-t lg:border-t-0 lg:border-r border-gray-200
             px-2 py-4
             sticky top-0 lg:top-20 z-10"
      >
        <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-y-auto space-x-2 lg:space-x-0 lg:space-y-2 w-full">
          {layanan.map((item) => {
            const slug = slugify(item.title);
            const isActive = selectedSlug === slug;
            return (
              <button
                key={item.title}
                onClick={() => handleSelect(slug)}
                className={`whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full
                      border transition-all min-w-max
                      ${
                        isActive
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                      }
                      lg:w-full lg:rounded-md lg:text-left`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Konten */}
      <AnimatePresence mode="wait">
        {selectedLayanan && (
          <motion.main
            key={selectedSlug} // Biar animasi aktif tiap ganti konten
            className="order-1 lg:order-none flex-1 px-4 pb-16 mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div id={`layanan-${selectedSlug}`} className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                {selectedLayanan.title}
              </h2>
              <Image
                src={selectedLayanan.imageUrl}
                alt={selectedLayanan.title}
                width={400}
                height={400}
                className="rounded-lg mb-4 mx-auto max-w-sm object-contain"
              />
              <p className="text-gray-700 text-lg">
                {selectedLayanan.description}
              </p>

              {selectedLayanan.content && (
                <p className="mt-4 text-gray-600">{selectedLayanan.content}</p>
              )}

              {selectedLayanan.features && (
                <ul className="mt-4 list-disc list-inside text-gray-600">
                  {selectedLayanan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
