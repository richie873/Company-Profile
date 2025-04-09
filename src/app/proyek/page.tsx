"use client";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import Proyek from "@/components/proyek/proyek";

export default function TentangKami() {
  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      <Navbar />
      <Proyek />
      <Footer />
    </div>
  );
}
