// components/landingPage/LandingContent.tsx
"use client";

import { useEffect } from "react";
import Navbar from "@/components/cornerstonePrime/Navbar";
import Dashabord from "@/components/cornerstonePrime/Intro";
import FooterCornerstone from "@/components/cornerstonePrime/FooterCornerstone";
import WhoWeAre from "@/components/cornerstonePrime/WhoWeAre";
import AboutUs from "@/components/cornerstonePrime/AboutCornerstone";
import WhatWeDo from "@/components/cornerstonePrime/WhatWeDo";
import ConstructionCornerstone from "@/components/cornerstonePrime/ConstructionCornerstone"
import HowWeWork from "@/components/cornerstonePrime/HowWeWork"
import Experience from "@/components/cornerstonePrime/Experience"
import ContactUs from "@/components/cornerstonePrime/ContactUs"
import VideoSlider from "@/components/cornerstonePrime/VideoSlider"
import FloatingWhatsApp from "@/components/cornerstonePrime/FloatingWhatsApp"


export default function LandingContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <FloatingWhatsApp />
      <div className="relative w-full min-h-screen overflow-hidden mt-[15px]">
        <VideoSlider />
      </div>
      <div className="relative isolate w-full">
        <div className="bg-stone-50 dark:bg-gray-900 py-6 sm:py-8">
          <div className="w-full px-5 lg:px-5">
            <Dashabord />
            <AboutUs />
            <WhoWeAre />
            <WhatWeDo />
            <ConstructionCornerstone />
            <HowWeWork />
            <Experience />
            <ContactUs />
          </div>
        </div>
      </div>
      <FooterCornerstone />
    </div>
  );
}
