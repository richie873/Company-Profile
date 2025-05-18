import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function contactUs() {
  return (
    <div className="relative w-full h-screen">
      {/* Fullscreen Background Image */}
      <Image
        src="/images/porto/proyek/PabrikKopiKapalApi.jpeg"
        alt="Jasa Curtainwall ACP"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Konten di tengah gambar */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <section
          aria-labelledby="kontak-kami"
          className="w-full max-w-3xl text-white text-center space-y-10 mt-[100px]"
        >
          {/* Informasi kontak */}
          {[{
            title: "Kantor Pusat",
            phone: "+62 858 7781 2999",
            phoneLink: "https://wa.me/6285877812999",
            email: "marketing@kanajaya.co.id",
            emailLink: "mailto:marketing@kanajaya.co.id",
            address: "Resinda Blok D3 No 5, Karawang",
          }, {
            title: "Cornerstone Prime Construction",
            phone: "+62 851 8330 0289",
            phoneLink: "https://wa.me/6285183300289",
            email: "cornerstoneprimeconstruction@kanajaya.co.id",
            emailLink: "mailto:cornerstoneprimeconstruction@kanajaya.co.id",
            address: `District 8, Gedung The Energy, Treasury Tower,\nJl. Jend. Sudirman Kav. 52-53, 31st Floor,\nJakarta Selatan 12190`,
          }].map((office, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">{office.title}</h2>

              <div className="space-y-3 text-sm sm:text-base">
                <a
                  href={office.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 hover:underline"
                >
                  <FaPhone className="text-blue-400 text-lg" />
                  <span className="text-lg font-medium underline">{office.phone}</span>
                </a>

                <a
                  href={office.emailLink}
                  className="flex items-center justify-center gap-3 hover:underline"
                >
                  <FaEnvelope className="text-red-400 text-lg" />
                  <span className="text-lg font-medium underline">{office.email}</span>
                </a>

                <div className="flex items-start justify-center gap-3 text-center whitespace-pre-line">
                  <FaMapMarkerAlt className="text-green-400 text-lg mt-1" />
                  <span className="text-lg font-medium">{office.address}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </motion.div>
    </div>
  );
}
