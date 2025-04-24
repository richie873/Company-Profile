// app/layanan-kami/page.tsx
"use client"; // wajib agar bisa pakai useEffect dan akses window.gtag

import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import LayananLandingPage from "@/components/landingPage/LayananKami";
import LayananKamiComponents from "@/components/layananKami/layananKami";

export default function LayananKami() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16998638724/WH5aCMu5oboaEITJyqk_",
        value: 1.0,
        currency: "IDR",
      });
    }
  }, []);

  return (
    <div className="pt-[50px]">
      <Navbar />
      <LayananKamiComponents />
      <LayananLandingPage />
      <Footer />
    </div>
  );
}
