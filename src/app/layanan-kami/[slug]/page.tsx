// app/layanan-kami/[slug]/page.tsx
import { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import LayananContent from "./LayananContent";

export default async function Page({
  params,
}: {
  params: { slug: string };
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
