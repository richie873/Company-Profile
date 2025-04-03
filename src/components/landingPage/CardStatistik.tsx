import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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
      <div ref={ref} className="mx-auto flex max-w-xs flex-col gap-y-4 ml-[50px]">
      <dt className="text-3xl text-white">{name}</dt>
      <dd className="order-first text-5xl font-semibold tracking-tight text-white sm:text-5xl">
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
    <div className="relative flex items-center justify-center w-full mt-[50px]">
      {/* Background Image */}
      <Image
        src="/images/proyek-konstruksi.jpeg"
        alt="Pabrik Kopi Kapal Api - Balaraja Tangerang"
        title="Pabrik Kopi Kapal Api - Balaraja Tangerang"
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
        priority={false}
      />

      {/* Overlay (Agar teks tetap terbaca) */}
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

      {/* Kontainer Teks & Statistik */}
      <div className="relative z-10 text-center p-10">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {stats.map((stat) => (
            <StatisticCard key={stat.id} name={stat.name} value={stat.value} />
          ))}
        </dl>
      </div>
    </div>
  );
}
