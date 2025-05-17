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


export default function LandingContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="relative isolate w-full mt-[50px]">
        <div className="bg-stone-50 dark:bg-gray-900 py-6 sm:py-8">
          <div className="w-full px-5 lg:px-5">
            <Dashabord />
            <AboutUs />
            <WhoWeAre />
            <WhatWeDo />
            <ConstructionCornerstone />
            <HowWeWork />
          </div>
        </div>
      </div>
      <FooterCornerstone />
    </div>
  );
}
