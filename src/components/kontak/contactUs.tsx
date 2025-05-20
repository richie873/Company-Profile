import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="relative w-full min-h-screen">
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
        className="absolute inset-0 z-20 flex items-center justify-center px-4 md:mt-[40px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <section
          aria-labelledby="kontak-kami"
          className="w-full max-w-3xl text-white text-center space-y-10 pt-20 pb-10 px-4 sm:px-6"
        >
          {[
            {
              title: "Kantor Pusat",
              phone: "+62 858 7781 2999",
              phoneLink: "https://wa.me/6285877812999",
              email: "marketing@kanajaya.co.id",
              emailLink: "mailto:marketing@kanajaya.co.id",
              address: "Resinda Blok D3 No 5, Karawang",
            },
            {
              title: "Cornerstone Prime Construction",
              phone: "+62 851 8330 0289",
              phoneLink: "https://wa.me/6285183300289",
              email: "cornerstoneprimeconstruction@kanajaya.co.id",
              emailLink: "mailto:cornerstoneprimeconstruction@kanajaya.co.id",
              address: `Treasury Tower, 31st Floor Jl. Jend. Sudirman \nKav. 52-53, District 8, SCBD,\nJakarta Selatan 12190`,
            },
          ].map((office, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">{office.title}</h2>

              <div className="space-y-3 text-sm sm:text-base">
                {/* Telepon: ikon di atas teks */}
                <a
                  href={office.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 hover:underline"
                >
                  <FaPhone className="text-blue-400 text-2xl" />
                  <span className="text-base sm:text-lg font-medium underline">
                    {office.phone}
                  </span>
                </a>

                {/* Email */}
                <a
                  href={office.emailLink}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 hover:underline"
                >
                  <FaEnvelope className="text-red-400 text-2xl" />
                  <span className="text-base sm:text-lg font-medium underline">
                    {office.email}
                  </span>
                </a>

                {/* Alamat */}
                <div className="flex flex-col sm:flex-row items-start justify-center gap-1 sm:gap-3 text-center px-2">
                  <FaMapMarkerAlt className="text-green-400 text-lg mt-1" />
                  <span className="text-base sm:text-lg font-medium whitespace-pre-line">
                    {office.address}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </motion.div>
    </div>
  );
}
