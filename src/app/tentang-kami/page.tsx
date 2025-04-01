"use client";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import ContentSection from "@/components/landingPage/ContentSection";
import Image from "next/image";

export default function TentangKami() {
  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50">
      <Navbar />

      {/* Menambahkan gambar dengan overlay gelap */}
      <div className="relative w-full h-screen">
        {/* Overlay hitam dengan transparansi menggunakan Tailwind */}

        {/* Gambar */}
        <Image
          src="/images/jasa-curtainwall-acp.png"
          alt="Jasa Curtainwall ACP"
          layout="fill" // Membuat gambar mengisi seluruh div
          objectFit="cover" // Mengatur gambar agar menutupi seluruh area tanpa distorsi
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center text-4xl font-bold space-y-2">
            <span>Tentang Kami</span>
        </div>
      </div>
      <ContentSection />
      <Footer />
    </div>
  );
}
