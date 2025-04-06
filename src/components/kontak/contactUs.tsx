import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function ContentSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Fullscreen Background Image */}
      <Image
        src="/images/porto/proyek/PabrikKopiKapalApi.jpeg"
        alt="Jasa Curtainwall ACP"
        fill
        className="object-cover"
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Konten di tengah gambar */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Hubungi Kami</h1>

        <div className="space-y-4 text-sm sm:text-base lg:text-lg">
          {/* WhatsApp */}
          <a
            href="https://wa.me/6285877812999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center hover:underline"
          >
            <FaPhone className="text-blue-400 text-xl" />
            <span className="font-medium text-xl underline">+62 858-7781-2999</span>
          </a>

          {/* Email */}
          <a
            href="mailto:kana.jaya@gmail.com"
            className="flex items-center gap-3 justify-center hover:underline"
          >
            <FaEnvelope className="text-red-400 text-xl" />
            <span className="font-medium text-xl underline">kana.jaya@gmail.com</span>
          </a>

          {/* Alamat */}
          <div className="flex items-center gap-3 justify-center">
            <FaMapMarkerAlt className="text-green-400 text-xl" />
            <span className="font-medium text-xl">Resinda blok D3 no 5 Karawang</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
