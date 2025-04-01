"use client";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import ContentSection from "@/components/landingPage/ContentSection";

export default function TentangKami() {
  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50">
      <Navbar />

      <div className="p-8 bg-blue-500">
        <h1 className="text-2xl font-bold">Tentang Kami</h1>
        <p>Ini adalah halaman tentang kami.</p>
      </div>
      <ContentSection />
      <Footer />
    </div>
  );
}
