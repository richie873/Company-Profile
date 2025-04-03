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
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/jasa-curtainwall-acp.png"
          alt="Jasa Curtainwall ACP"
          layout="fill" // Membuat gambar mengisi seluruh div
          objectFit="cover" // Mengatur gambar agar menutupi seluruh area tanpa distorsi
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col leading-normal capitalize items-start justify-center text-white text-left ml-[40px] text-4xl font-bold">
          <span>
            Kami aplikator dan pengadaan material untuk <br />
            Plafon, partisi, stainless steal, cover stainless steal <br />
            Dan Berbagai jenis tempered laminate
          </span>
        </div>
      </div>
      <TentangKamiSection />
      <VisiMisi />
      <Footer />
    </div>
  );
}
