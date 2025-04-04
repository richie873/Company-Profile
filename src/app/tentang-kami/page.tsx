"use client";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import TentangKamiSection from "@/components/tentang-kami/TentangKamiSection";
import VisiMisi from "@/components/tentang-kami/VisiMisi";
import Image from "next/image";

export default function TentangKami() {
  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src="/images/jasa-curtainwall-acp.png"
          alt="Jasa Curtainwall ACP"
          layout="fill" // Membuat gambar mengisi seluruh div
          objectFit="cover" // Mengatur gambar agar menutupi seluruh area tanpa distorsi
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Teks Hero */}
        <div className="absolute inset-0 flex flex-col leading-normal capitalize items-start justify-center text-white text-left px-6 sm:px-12">
          <span className="text-xl sm:text-2xl md:text-4xl font-bold">
            Kami aplikator dan pengadaan material untuk <br className="hidden sm:block" />
            Plafon, Partisi, Stainless Steel, Cover Stainless Steel <br className="hidden sm:block" />
            Curtain Wall, Aluminium Composite Panel <br />
            Dan Berbagai Jenis Tempered Laminate
          </span>
        </div>
      </div>

      <TentangKamiSection />
      <VisiMisi />
      <Footer />
    </div>
  );
}
