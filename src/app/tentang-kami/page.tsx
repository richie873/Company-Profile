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
    <div className="bg-stone-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src="/images/porto/proyek/PabrikKopiKapalApi.jpeg"
          alt="Jasa Curtainwall ACP"
          fill // Membuat gambar mengisi seluruh div
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Teks Hero */}
        <div className="absolute inset-0 mt-[50px] lg:mt-[20px] flex flex-col leading-normal capitalize items-center justify-center text-white text-center px-6 sm:px-12">
          {/* Judul Utama */}
          <span className="text-xl sm:text-2xl md:text-4xl font-bold">
            Kami Aplikator untuk segala kebutuhan anda
          </span>
          {/* Deskripsi Kecil */}
          <span className="mt-3 text-sm sm:text-base md:text-lg font-normal opacity-90">
            Aluminium, ACP, Gypsum, Baja, Plafon, Partisi, Stainless Steel, Curtain
            Wall
            <br />
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
