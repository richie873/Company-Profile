import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContentSection() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Teks dan Statistik */}
      <motion.div
        className="flex flex-col items-start text-left w-full max-w-2xl sm:max-w-md lg:max-w-2xl lg:mt-[60px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="ml-4 sm:ml-6 mr-4 sm:mr-6 text-justify">
          <h1 className="text-lg sm:text-2xl font-semibold !text-gray-900 mb-4">
            SEJARAH PT. KANA JAYA
          </h1>
          <div className="space-y-4 text-sm sm:text-base !text-gray-900 leading-8 lg:text-lg">
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
              tanggal 10 Agustus 2002.
            </p>

            <p>
              Dengan pertumbuhan ekonomi, industri, dan kemajuan teknologi yang
              pesat di Indonesia, PT Kana Jaya terus mengembangkan bisnisnya di
              bidang perdagangan dan jasa konstruksi.
            </p>

            <p>
              Saat ini, PT Kana Jaya tidak hanya mengerjakan dan menyediakan
              pemasangan pintu dan jendela aluminium, kaca, dan stainless steel,
              tetapi juga memperluas layanannya ke berbagai bidang konstruksi
              lainnya, seperti Curtain Wall Facade, Aluminium Composite Panel
              (ACP), Aneka Plafon, Partisi, serta proyek konstruksi baja,
              pembangunan perumahan, pergudangan, pembuatan jalan, dan irigasi.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Gambar */}
      <motion.div
        className="relative flex justify-center w-full lg:w-1/2 lg:mt-[60px]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="relative w-full max-w-[800px] h-auto"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)}
        >
          <Image
            src="/images/page_23.png"
            alt="PERIZINAN BERUSAHA UNTUK MENUNJANG KEGIATAN USAHA SERTIFIKAT BADAN USAHA (SBU) KONSTRUKSI"
            title="PERIZINAN BERUSAHA UNTUK MENUNJANG KEGIATAN USAHA SERTIFIKAT BADAN USAHA (SBU) KONSTRUKSI"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto object-contain"
            priority={false}
          />
          {showTooltip && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-black text-white text-xs px-3 py-2 rounded-md shadow-md">
              Perizinan Berusaha Untuk Menunjang Kegiatan Usaha Sertifikat Badan Usaha (SBU) KONSTRUKSI
              <div className="absolute left-1/2 -translate-x-1/2 top-full border-8 border-transparent border-t-black"></div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
