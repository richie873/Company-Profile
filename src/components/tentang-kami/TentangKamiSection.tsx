import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContentSection() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 w-full mx-auto px-6 lg:px-4">
      {/* Gambar */}
      <motion.div
        className="relative flex justify-center w-full lg:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="relative w-full mt-[60px]"
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
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
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

      {/* Teks dan Statistik */}
      <motion.div
        className="flex flex-col items-start text-left w-full max-w-2xl sm:max-w-md lg:max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="ml-6 mr-6 text-justify leading-normal mt-[40px]">
          <h1 className="mt-3 text-xl font-semibold text-gray-900 mb-[10px]">
            SEJARAH PT. KANA JAYA
          </h1>
          <div className="space-y-4 text-base">
            <p>
              PT Kana Jaya awalnya merupakan perusahaan dagang yang bergerak di
              bidang penyediaan barang dan jasa konstruksi, seperti aluminium,
              kaca, dan stainless steel. Perusahaan ini didirikan pada tahun
              1989 dengan nama PD Kana Jaya.
            </p>

            <p>
              Pada 24 Agustus 1995, PD Kana Jaya memperoleh Tanda Daftar
              Perusahaan yang disahkan oleh Kepala Kantor Departemen Perdagangan
              Kabupaten Bekasi dengan Nomor Pendaftaran 10075607603.
            </p>

            <p>
              Seiring perkembangan perusahaan, PD Kana Jaya berubah menjadi
              badan hukum dengan nama PT Kana Jaya. Perubahan ini diresmikan
              melalui Akta Notaris Bapak Ida Rosida Suryana, SH, Nomor 57,
              tanggal 10 Agustus 2002 .
            </p>

            <p>
              Dengan pertumbuhan ekonomi, industri, dan kemajuan teknologi yang
              pesat di Indonesia, PT Kana Jaya terus mengembangkan bisnisnya di
              bidang perdagangan dan jasa konstruksi.
            </p>

            <p>
              Saat ini, PT Kana Jaya tidak hanya menyediakan aluminium, kaca,
              dan stainless steel, tetapi juga memperluas layanannya ke berbagai
              bidang konstruksi lainnya, seperti composite, panel, partisi,
              gypsum, plafon, dan baja ringan.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
