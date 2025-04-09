// app/page.tsx
import { Metadata } from "next";
import LandingContent from "@/components/landingPage/LandingContent";

export const metadata: Metadata = {
  title: "PT Kana Jaya | Spesialis Aluminium, Kaca, ACP, dan Plafon",
  description:
    "PT Kana Jaya adalah aplikator profesional dan penyedia material terpercaya untuk aluminium, kaca, ACP, dan plafon. Lihat layanan dan portofolio kami.",
  robots: "index, follow",
  openGraph: {
    title: "PT Kana Jaya | Spesialis Aluminium, Kaca, ACP, dan Plafon",
    description:
      "PT Kana Jaya adalah aplikator profesional dan penyedia material terpercaya untuk aluminium, kaca, ACP, dan plafon.",
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
