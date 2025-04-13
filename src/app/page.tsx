// app/page.tsx
import { Metadata } from "next";
import LandingContent from "@/components/landingPage/LandingContent";

export const metadata: Metadata = {
  title: "PT Kana Jaya | Aplikator Spesialis Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel",
  description:
    "PT Kana Jaya adalah Aplikator profesional dan penyedia material terpercaya untuk Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel. Lihat layanan dan portofolio kami.",
  robots: "index, follow",
  openGraph: {
    title: "PT Kana Jaya | Aplikator Spesialis Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel",
    description:
      "PT Kana Jaya adalah Aplikator profesional dan penyedia material terpercaya untuk Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel.",
    url: "https://kanajaya.co.id",
    images: [
      {
        url: "https://kanajaya.co.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "PT Kana Jaya",
      },
    ],
  },
};

export default function LandingPage() {
  return <LandingContent />;
}
