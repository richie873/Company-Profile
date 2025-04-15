'use client';

import { motion } from "framer-motion";

export default function AreaServedSection() {
  return (
    <section className="my-12 gap-8 md:px-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-center md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
      >
        Layanan Kami Tersedia di Karawang & Jabodetabek
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-800 sm:text-justify md:text-center dark:text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto"
      >
        Kami siap membantu proyek Anda di Karawang, Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
        Bahkan kami siap menjangkau <b>seluruh wilayah Indonesia</b> sesuai kebutuhan proyek Anda.
      </motion.p>
    </section>
  );
}
