import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Tentang Kami",
    description:
    "Didirikan Tahun 1989 PT Kana Jaya perusahaan bergerak di bidang perdagangan dan jasa konstruksi aluminium, kaca, dan stainless steel.\n\n" +
    "Legalitas Perusahaan Pada 24 Agustus 1995, PT Kana Jaya mendapatkan Tanda Daftar Perusahaan dari Kepala Kantor Departemen Perdagangan Kabupaten Bekasi (No. 10075607603).\n\n" +
    "PT Kana Jaya Resmi berbadan hukum pada 10 Agustus 2002 dengan Akta Notaris No. 57 oleh Bapak Ida Rosida Suryana, SH.\n\n" +
    "Ekspansi Bisnis Seiring dengan perkembangan ekonomi, industri, dan teknologi di Indonesia, PT. Kana Jaya memperluas cakupan bisnisnya.\n\n" +
    "Bidang Usaha Saat Ini Tidak hanya fokus pada aluminium, kaca, dan stainless steel, tetapi juga Composite, Panel, Partisi, Gypsum, Plafon, Baja Ringan",
  },
];

export default function ContentSection() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
      {/* Gambar */}
      <motion.div
        className="relative flex justify-center w-full lg:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="relative w-full"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)}
        >
          <Image
            src="/images/porto/PabrikKopiKapalApi.jpeg"
            alt="Pabrik Kopi Kapal Api - Balaraja Tangerang"
            title="Pabrik Kopi Kapal Api - Balaraja Tangerang"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full h-[375px] object-cover"
            priority={false}
          />
          {showTooltip && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-black text-white text-xs px-3 py-2 rounded-md shadow-md">
              Pabrik Kopi Kapal Api - Balaraja Tangerang
              <div className="absolute left-1/2 -translate-x-1/2 top-full border-8 border-transparent border-t-black"></div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Teks */}
      <motion.div
        className="flex flex-col items-start text-left w-full lg:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {posts.map((post) => {
          return (
            <article key={post.id} className="w-full">
              <h3 className="mt-3 text-3xl font-semibold text-gray-900">
                <span>{post.title}</span>
              </h3>
              <p className="text-base text-gray-800 text-justify whitespace-pre-line mt-[15px]">
                {post.description}
              </p>
            </article>
          );
        })}
      </motion.div>
    </div>
  );
}
