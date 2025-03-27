import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Tentang Kami",
    href: "#",
    description:
      "PT. Kana Jaya awalnya bergerak di bidang perdagangan dan jasa konstruksi aluminium, kaca, dan stainless steel. Seiring perkembangan ekonomi dan teknologi di Indonesia, perusahaan ini memperluas usahanya ke konstruksi composite, panel, partisi, gypsum, plafon, dan baja ringan.\n\n" +
      "Sejak 1989 hingga 2025, PT. Kana Jaya telah menyelesaikan lebih dari 100+ proyek di berbagai kota di Jawa, seperti Jakarta, Bandung, dan Cilegon, serta proyek di luar Jawa, termasuk Kalimantan dan Sumatera. Proyek yang ditangani mencakup gedung, kantor, pabrik, mall, rumah sakit, sekolah, dan perumahan. Dengan pengalaman panjang dan komitmen pada kualitas, PT. Kana Jaya terus menjadi perusahaan konstruksi yang profesional, cepat, dan dapat dipercaya, selalu mengutamakan kepuasan pelanggan.\n\n",
  },
];

const stats = [
  { id: 1, name: "Proyek Selesai", value: 116 },
  { id: 2, name: "Tahun Berpengalaman", value: 36 },
];

// Hook untuk animasi angka naik saat elemen terlihat
const useCountUp = (target: number, isInView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return; // Hanya mulai jika elemen terlihat
    let current = 0;
    const speed = target > 50 ? 2 : 20;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [target, isInView]);

  return count;
};

// Komponen Statistik
const StatisticCard = ({ name, value }: { name: string; value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Cek apakah elemen masuk viewport
  const animatedValue = useCountUp(value, isInView); // Panggil animasi hanya jika terlihat

  return (
    <div ref={ref} className="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt className="text-xl font-mono text-gray-950">{name}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {animatedValue}
        </motion.span>
      </dd>
    </div>
  );
};

export default function ContentSection() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-[35px]">
      {/* Gambar dengan animasi */}
      <motion.div
        className="flex justify-center lg:justify-end w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/porto/PabrikKopiKapalApi.jpeg"
          alt="Pabrik Kopi Kapal Api - Balaraja Tangerang"
          title="Pabrik Kopi Kapal Api - Balaraja Tangerang"
          width={800}
          height={600}
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
          priority={false}
        />
      </motion.div>

      {/* Artikel dengan animasi */}
      <motion.div
        className="flex flex-col items-start text-left w-full max-w-2xl sm:max-w-md lg:max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {posts.map((post) => {
          return (
            <article key={post.id} className="w-full">
              <h3 className="mt-3 text-3xl font-semibold text-gray-900">
                <a href={post.href}>{post.title}</a>
              </h3>
              <p className="text-base text-gray-800 whitespace-pre-line font-sans mt-[10px]">
                {post.description}
              </p>

              {/* Statistik dengan animasi angka */}
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2 mt-6">
                {stats.map((stat) => (
                  <StatisticCard key={stat.id} name={stat.name} value={stat.value} />
                ))}
              </dl>
            </article>
          );
        })}
      </motion.div>
    </div>
  );
}
