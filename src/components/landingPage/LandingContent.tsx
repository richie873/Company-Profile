// components/landingPage/LandingContent.tsx
"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import ImageSlider from "@/components/navbar/ImageSlider";
import ContentSection from "@/components/landingPage/ContentSection";
import LogoClouds from "@/components/landingPage/LogoClouds";
import ValuesSection from "@/components/landingPage/ValuesSection";
import PortoSection from "@/components/landingPage/PortoSection";
import Footer from "@/components/landingPage/Footer";
import CardStatistik from "@/components/landingPage/CardStatistik";
import LayananKami from "@/components/landingPage/LayananKami";
import AreaServedSection from "@/components/landingPage/AreaServedSection";


export default function LandingContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 dark:bg-gray-900 dark:text-white">
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <ImageSlider />
      </main>

      <div className="relative isolate w-full">
        <div className="bg-stone-50 dark:bg-gray-900 py-6 sm:py-8">
          <div className="w-full px-5 lg:px-5">
            <ContentSection />
            <AreaServedSection />
            <CardStatistik />
            <ValuesSection />
            <LogoClouds />
            <PortoSection />
            <LayananKami />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
