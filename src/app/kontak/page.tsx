"use client";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import ContactUs from "@/components/kontak/contactUs"

export default function TentangKami() {
  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50">
      <Navbar />
      <div className="p-14 bg-[#1E3A8A] shadow-md"></div>
      <ContactUs />
      <Footer />
    </div>
  );
}
