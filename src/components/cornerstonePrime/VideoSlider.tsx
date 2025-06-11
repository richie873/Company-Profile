"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { videos } from "@/components/cornerstonePrime/videoCornerstone";
import Link from "next/link";
import Image from "next/image";

export default function VideoSlider(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <div
        className="relative w-full h-full"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowControls(true)}
      >
        {hasMounted && (
          <AnimatePresence mode="wait">
            <motion.div
              key={videos[currentIndex].src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                src={videos[currentIndex].src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />

        {/* Centered Content */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="/images/cornerstonelogo_clean_transparent_edit.png"
            alt="Cornerstone Logo"
            width={250}
            height={250}
            className="max-w-[250px] sm:max-w-[250px] w-full h-auto object-contain"
            priority
          />

          <p className="text-sm sm:text-base md:text-xl drop-shadow-sm">
            Where Excellence Meets Innovation in Every Build
          </p>

          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md max-w-3xl">
            LET US HELP YOU BUILD YOUR DREAM HOME
          </h1>

          <Link
            href="https://wa.me/6285183300289?text=Hello! I am interested in your construction services and would love to learn more about Cornerstone Prime Construction."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.6 5.85L0 24l6.3-1.65A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-1.85 0-3.65-.5-5.22-1.45l-.37-.22-3.74.98.99-3.64-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.73l-1.6-.8c-.22-.11-.48-.05-.65.12l-.9.9a8.35 8.35 0 01-3.9-3.9l.9-.9c.17-.17.23-.43.12-.65l-.8-1.6a.5.5 0 00-.45-.28h-1.5a.5.5 0 00-.5.5c0 5.25 4.25 9.5 9.5 9.5a.5.5 0 00.5-.5v-1.5a.5.5 0 00-.28-.45z" />
            </svg>
            <span>ENQUIRY NOW</span>
          </Link>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {showControls && (
        <div className="absolute top-1/2 left-0 right-0 z-30 flex justify-between px-6 transform -translate-y-1/2">
          <button
            className="bg-black bg-opacity-40 text-white p-3 rounded-full shadow-md hover:bg-opacity-75"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="bg-black bg-opacity-40 text-white p-3 rounded-full shadow-md hover:bg-opacity-75"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
