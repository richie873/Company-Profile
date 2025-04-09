// app/layanan-kami/[slug]/page.tsx
import { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import LayananContent from "./LayananContent";
import { getLayananBySlug } from "@/lib/layanan/getLayananBySlug";
import { Metadata } from "next";

// ✅ Gunakan await untuk params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const layanan = await getLayananBySlug(slug);

  if (!layanan) {
    return {
      title: "Layanan tidak ditemukan | PT Kana Jaya",
      description: "Halaman layanan tidak ditemukan.",
    };
  }

  return {
    title: `${layanan.title} | PT Kana Jaya`,
    description: layanan.description,
    robots: "index, follow",
    openGraph: {
      title: `${layanan.title} | PT Kana Jaya`,
      description: layanan.description,
      url: `https://kanajaya.co.id/layanan-kami/${slug}`,
      images: [
        {
          url: `https://kanajaya.co.id${layanan.imageUrl}`,
        },
      ],
    },
  };
}

// ✅ Sama juga untuk komponen halaman utama
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Navbar />
      <Suspense fallback={<p className="text-center mt-10">Memuat detail layanan...</p>}>
        <LayananContent slug={slug} />
      </Suspense>
      <Footer />
    </>
  );
}
