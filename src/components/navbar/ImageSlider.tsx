"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Data gambar dengan teks dalam 3 baris
const images = [
  {
    src: "/images/porto/portoImageSlider/RSUDKarawang.jpg",
    text: ["Selamat Datang di Kana Jaya", "Apliktor ACP, Kaca, Plafon, Partisi, dan Stainless Steel", "Untuk Konstruksi Modern & Elegan"],
  },
  {
    src: "/images/porto/portoImageSlider/BPJSKetenagakerjaanKlariKarawang.png",
    text: ["Ketahanan & Estetika", "Material Berkualitas untuk Bangunan Kokoh", "Tampil Mewah, Awet, dan Fungsional"],
  },
  {
    src: "/images/porto/portoImageSlider/BintangRacingTeamSentulBogor.jpg",
    text: ["Kualitas Tanpa Kompromi", "Teknologi Modern untuk Keindahan & Kekuatan", "Bangun Masa Depan dengan Material Terbaik"],
  },
];

export default function ImageSlider(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex]);

  return (
    <div className="relative w-full h-screen">
      {/* Container Gambar */}
      <div
        className="relative w-full h-screen"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowControls(true)}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* Overlay Hitam 50% */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Animasi Teks */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center text-4xl font-bold space-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {images[currentIndex].text.map((line, i) => (
              <div key={i} className="text-xl md:text-4xl lg:text-5xl"> {/* Logo mengecil di mobile */}
                {line}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tombol Previous & Next, hanya muncul saat disentuh di mobile */}
      {showControls && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 transform -translate-y-1/2 md:flex">
          <button
            className="bg-opacity-50 text-white p-3 rounded-full shadow-md hover:bg-opacity-75"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="bg-opacity-50 text-white p-3 rounded-full shadow-md hover:bg-opacity-75"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
