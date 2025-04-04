import { useRef } from "react";
import { motion } from "framer-motion";

// Data untuk Visi dan Misi
const stats = [
  {
    id: 1,
    name: "Visi",
    description:
      "Menjadi perusahaan konstruksi terkemuka di Indonesia yang memberikan solusi inovatif, berkualitas tinggi, dan berkelanjutan untuk pembangunan infrastruktur yang mendukung kemajuan ekonomi dan sosial bangsa.\n\n" +
      "Membangun kemitraan yang strategis dan saling menguntungkan dengan mitra bisnis, pemerintah, dan lembaga terkait, untuk mendorong pertumbuhan dan keberhasilan proyek konstruksi di Indonesia.",
  },
  {
    id: 2,
    name: "Misi",
    description: 
      "Memberikan Kualitas Terbaik. Menyediakan produk dan layanan konstruksi berkualitas tinggi yang memenuhi standar internasional dan memenuhi kebutuhan pelanggan.\n\n" +
      "Inovasi Berkelanjutan. Terus berinovasi dalam teknologi dan proses untuk memberikan solusi konstruksi yang efisien dan ramah lingkungan.\n\n" +
      "Kepercayaan dan Kepuasan Pelanggan. Membangun hubungan yang kuat dan terpercaya kepada pelanggan dengan memberikan layanan yang tepat waktu, handal, dan sesuai harapan.\n\n" +
      "Pengembangan Sumber Daya Manusia. Berinvestasi dalam pengembangan keterampilan dan keahlian karyawan untuk menciptakan lingkungan kerja yang profesional dan penuh semangat.\n\n" +
      "Kontribusi terhadap Pembangunan Infrastruktur Nasional. Mendukung perkembangan ekonomi Indonesia dengan berpartisipasi aktif dalam pembangunan infrastruktur yang berkualitas tinggi dan tahan lama.",
  },
];

// Komponen Visi dan Misi
const StatisticCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="flex w-full flex-col gap-y-3 sm:gap-y-4 items-start text-justify">
      <dt className="text-gray-950 text-lg sm:text-xl font-semibold">{name}</dt>
      <dd className="text-gray-900 leading-snug whitespace-pre-line text-sm sm:text-base md:text-lg lg:text-base">
        {/* Responsif dari kecil ke besar */}
        <motion.p>
          {description}
        </motion.p>
      </dd>
    </div>
  );
};

export default function ContentSection() {
  return (
    <div className="px-4 sm:px-6 md:px-8 mt-[40px] bg-stone-100">
      {/* Visi dan Misi */}
      <dl className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16 text-left">
        {stats.map((stat) => (
          <StatisticCard
            key={stat.id}
            name={stat.name}
            description={stat.description}
          />
        ))}
      </dl>
    </div>
  );
}
