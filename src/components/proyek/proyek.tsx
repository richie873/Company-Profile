"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const posts = [
  {
    id: 1,
    title: "Bintang Racing Team - Bogor",
    description: "Bintang Racing Team - Bogor",
    imageUrl: "/images/porto/proyek/Bintang Racing Team - Sentul Bogor.jpg",
  },
  {
    id: 2,
    title: "BPJS Ketenagakerjaan - Karawang",
    description: "BPJS Ketenagakerjaan - Karawang",
    imageUrl: "/images/porto/proyek/BPJS Ketenagakerjaan - Klari, Karawang.png",
  },
  {
    id: 3,
    title: "Evalube - Cibitung",
    description: "Evalube - Cibitung",
    imageUrl: "/images/porto/proyek/Evalube - Cibitung.jpg",
  },
  {
    id: 4,
    title: "RSUD - Karawang",
    description: "RSUD - Karawang",
    imageUrl: "/images/porto/proyek/Gedung Isolasi RSUD - Karawang.jpg",
  },
  {
    id: 5,
    title: "Gereja Katolik BIC - Cikampek",
    description: "Gereja Katolik BIC - Cikampek",
    imageUrl: "/images/porto/proyek/Gereja Katolik BIC - Cikampek.jpg",
  },
  {
    id: 6,
    title: "harper purwakarta",
    description: "Harper - Purwakarta",
    imageUrl: "/images/porto/proyek/harper purwakarta.webp",
  },
  {
    id: 7,
    title: "harper purwakarta",
    description: "Heritage - Bandung",
    imageUrl: "/images/porto/proyek/heritage bandung.jpg",
  },
  {
    id: 8,
    title: "Hotel Igloo - Cibitung",
    description: "Hotel Igloo - Cibitung",
    imageUrl: "/images/porto/proyek/Hotel Igloo - Cibitung.jpg",
  },
  {
    id: 9,
    title: "Musholla Al Azhar Memorial Garden",
    description: "Musholla Al Azhar Memorial Garden",
    imageUrl: "/images/porto/proyek/Musholla Al Azhar Memorial Garden.jpg",
  },
  {
    id: 10,
    title: "Pabrik Kopi Kapal Api",
    description: "Pabrik Kopi Kapal Api",
    imageUrl: "/images/porto/proyek/PabrikKopiKapalApi.jpeg",
  },
  {
    id: 11,
    title: "PT Kawai Indonesia Factory",
    description: "PT Kawai Indonesia Factory",
    imageUrl: "/images/porto/proyek/PT Kawai indonesia factory.jpg",
  },
  {
    id: 12,
    title: "PT Kyowa Indonesia - Cikarang",
    description: "PT Kyowa Indonesia - Cikarang",
    imageUrl: "/images/porto/proyek/PT Kyowa indonesia - ejip cikarang.jpg",
  },
  {
    id: 13,
    title: "PT NBC - KIIC Karawang",
    description: "PT NBC - KIIC Karawang",
    imageUrl: "/images/porto/proyek/PT NBC - KIIC Karawang.jpg",
  },
  {
    id: 14,
    title: "PT Top Tube Indonesia - Karawang",
    description: "PT Top Tube Indonesia - Karawang",
    imageUrl: "/images/porto/proyek/PT Top Tube Indonesia 2- Karawang.jpg",
  },
  {
    id: 15,
    title: "PT Voith Paper Rolls Indonesia - Karawang",
    description: "PT Voith Paper Rolls Indonesia - Karawang",
    imageUrl: "/images/porto/proyek/PT Voith Paper Rolls Indonesia - Karawang.jpg",
  },
  {
    id: 16,
    title: "Risti Telkom - Bandung",
    description: "Risti Telkom - Bandung",
    imageUrl: "/images/porto/proyek/Risti Telkom-Bandung.jpg",
  },
  {
    id: 17,
    title: "RS Imanuel Way Halim - Bandar Lampung",
    description: "RS Imanuel Way Halim - Bandar Lampung",
    imageUrl: "/images/porto/proyek/RS Imanuel Way Halim - Bandar Lampung.jpg",
  },
  {
    id: 18,
    title: "RS Melinda 2 - Bandung",
    description: "RS Melinda 2 - Bandung",
    imageUrl: "/images/porto/proyek/RS Melinda 2 - Bandung.jpg",
  },
  {
    id: 19,
    title: "Rumah Sakit Saraswati - Karawang",
    description: "Rumah Sakit Saraswati - Karawang",
    imageUrl: "/images/porto/proyek/Rumah Sakit Saraswati - Karawang.jpg",
  },
  {
    id: 20,
    title: "TVS Motor",
    description: "TVS Motor",
    imageUrl: "/images/porto/proyek/tvs motor.webp",
  },
  {
    id: 21,
    title: "Yamaha Piano - Jakarta",
    description: "Yamaha Piano - Jakarta",
    imageUrl: "/images/porto/proyek/Yamaha Piano Jakarta edited.jpg",
  },
];

export default function Example() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  } | null>(null);


  return (
    <div className="mt-[50px] pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16">
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.03 }}
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
                <span className="block text-gray-700 font-semibold text-base">
                  {post.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
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
            <p className="mt-2 text-gray-600 font-semibold text-center">{selectedProject.description}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 px-4 py-2 ml-[135px] md:ml-[140px] lg:ml-[160px] xl:ml-[165px] bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
