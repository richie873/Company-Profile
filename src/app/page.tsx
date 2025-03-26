'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar/Navbar';
import ImageSlider from '@/components/navbar/ImageSlider';
import ContentSection from '@/components/landingPage/ContentSection';
import LogoClouds from '@/components/landingPage/LogoClouds';

export default function LandingPage() {
    // Scroll ke atas saat halaman dimuat
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="bg-stone-50">
      <Navbar />

      <Head>
        <title>Image Slider</title>
        <meta name="description" content="Image slider example with Next.js, Tailwind CSS, dan TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <ImageSlider />
      </main>

      <div className="relative isolate px-6 lg:px-8">
        <div className="bg-stone-50 py-10 sm:py-10">
          <div className="mx-auto max-w-7xl px-5 lg:px-5">
              <ContentSection />
          </div>
          <LogoClouds />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p className="text-sm">Kana Jaya &copy; 2025 - All Rights Reserved</p>
        <p className="text-xs mt-1">Email: info@kanajaya.com | Phone: +62 812-3456-7890</p>
      </footer>
    </div>
  );
}
