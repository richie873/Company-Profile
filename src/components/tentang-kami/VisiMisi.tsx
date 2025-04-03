import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Data untuk Visi dan Misi dengan format baris baru (\n) untuk Misi
const stats = [
  {
    id: 1,
    name: "Visi",
    description:
      "Menjadi perusahaan konstruksi terkemuka di Indonesia yang memberikan solusi inovatif, berkualitas tinggi, dan berkelanjutan untuk pembangunan infrastruktur yang mendukung kemajuan ekonomi dan sosial bangsa.",
  },
  {
    id: 2,
    name: "Misi",
    description:
      "Memberikan Kualitas Terbaik: Menyediakan produk dan layanan konstruksi berkualitas tinggi yang memenuhi standar internasional dan memenuhi kebutuhan pelanggan.\n\n" +
      "Inovasi Berkelanjutan: Terus berinovasi dalam teknologi dan proses untuk memberikan solusi konstruksi yang efisien dan ramah lingkungan.\n\n" +
      "Kepercayaan dan Kepuasan Pelanggan: Membangun hubungan yang kuat dan terpercaya dengan pelanggan dengan memberikan layanan yang tepat waktu, handal, dan sesuai harapan.\n\n" +
      "Pengembangan Sumber Daya Manusia: Berinvestasi dalam pengembangan keterampilan dan keahlian karyawan untuk menciptakan lingkungan kerja yang profesional dan penuh semangat.\n\n" +
      "Kontribusi terhadap Pembangunan Infrastruktur Nasional: Mendukung perkembangan ekonomi Indonesia dengan berpartisipasi aktif dalam pembangunan infrastruktur yang berkualitas tinggi dan tahan lama.",
  },
];

// Hook untuk animasi teks
const useTextAnimation = (isInView: boolean) => {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: isInView ? 1 : 0, y: 0 },
    transition: { duration: 1.3, ease: "easeOut", delay: 0.2 },
  };
};

// Komponen Visi dan Misi
const StatisticCard = ({
  name,
  description,
  isMisi,
}: {
  name: string;
  description: string;
  isMisi: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Cek apakah elemen masuk viewport
  const motionProps = useTextAnimation(isInView); // Ambil animasi untuk teks

  return (
    <div ref={ref} className="flex w-full flex-col gap-y-4 items-start text-justify">
      <dt className="text-gray-950 font-semibold">{name}</dt>
      <dd className="text-gray-900">
        <motion.p
          {...motionProps}
          className={`text-gray-800 sm:text-base leading-relaxed ${
            isMisi ? "whitespace-pre-line text-sm" : "text-sm"
          }`}
        >
          {description}
        </motion.p>
      </dd>
    </div>
  );
};

export default function ContentSection() {
  return (
    <div className="lg:px-8 mt-[60px] bg-stone-100">
      {/* Visi dan Misi */}
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-2 mt-6">
        {stats.map((stat) => (
          <StatisticCard
            key={stat.id}
            name={stat.name}
            description={stat.description}
            isMisi={stat.id === 2} // Menambahkan kondisi untuk Misi
          />
        ))}
      </dl>
    </div>
  );
}
