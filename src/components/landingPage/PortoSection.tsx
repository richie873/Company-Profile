"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const posts = [
  {
    id: 1,
    title: "Proyek Gedung Perkantoran",
    description: "Bintang Racing Team - Bogor",
    imageUrl: "/images/porto/proyek/Bintang Racing Team - Sentul Bogor.jpg",
  },
  {
    id: 2,
    title: "Renovasi Mall Besar",
    description: "BPJS Ketenagakerjaan - Karawang",
    imageUrl: "/images/porto/proyek/BPJS Ketenagakerjaan - Klari, Karawang.png",
  },
  {
    id: 3,
    title: "Konstruksi Pabrik",
    description: "Evalube - Cibitung",
    imageUrl: "/images/porto/proyek/Evalube - Cibitung.jpg",
  },
  {
    id: 4,
    title: "Proyek Gedung Perkantoran",
    description: "Gereja Katolik BIC - Cikampek",
    imageUrl: "/images/porto/proyek/Gereja Katolik BIC - Cikampek.jpg",
  },
  {
    id: 5,
    title: "Renovasi Mall Besar",
    description: "Hotel Igloo - Cibitung",
    imageUrl: "/images/porto/proyek/Hotel Igloo - Cibitung.jpg",
  },
  {
    id: 6,
    title: "Konstruksi Pabrik",
    description: "Musholla Al Azhar Memorial Garden",
    imageUrl: "/images/porto/proyek/Musholla Al Azhar Memorial Garden.jpg",
  },
];

export default function Example() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  } | null>(null);

  const router = useRouter();

  return (
    <div className="bg-white pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Proyek Kami
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer relative"
              onClick={() => setSelectedProject(post)}
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-[250px] object-cover rounded-lg shadow-md"
              />

              {/* Icon 🔍 dengan Tooltip */}
              <div className="absolute bottom-[40px] left-4">
                <svg
                  data-tooltip-id={`tooltip-${post.id}`}
                  data-tooltip-content="Lihat Detail"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                  />
                </svg>
                <Tooltip id={`tooltip-${post.id}`} />
              </div>

              <div className="mt-3 text-center">
                <span className="block text-gray-700 text-base font-medium">
                  {post.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button di tengah */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/proyek")}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Lihat Selengkapnya
          </motion.button>
        </motion.div>
      </div>

      {/* Modal Detail */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full mt-[75px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              width={400}
              height={300}
              className="rounded-lg w-full h-[300px]"
            />
            {/* <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {selectedProject.title}
            </h3> */}
            <p className="mt-2 text-gray-600">{selectedProject.description}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
