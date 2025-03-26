import { motion } from 'framer-motion';
import Image from 'next/image';

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
  })
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Pisahkan logo menjadi dua baris
const firstRow = [
  { src: "/images/logo/1PTPembangunanPerumahan.png", alt: "PT Pembangunan Perumahan" },
  { src: "/images/logo/2PTPrakarsaDirgaAneka.png", alt: "PT Prakarsa Dirga Aneka" },
  { src: "/images/logo/3NusaRayaCipta.png", alt: "Nusa Raya Cipta" },
  { src: "/images/logo/4PTTokyuConstructionIndonesia.png", alt: "PT Tokyu Construction Indonesia" }
];

const secondRow = [
  { src: "/images/logo/5ptjayaobayashilogo.jpg", alt: "PT Jaya Obayashi" },
  { src: "/images/logo/6MuriAgungAbadi.jpg", alt: "Muri Agung Abadi" },
  { src: "/images/logo/7BakrieBuildingIndustries.png", alt: "Bakrie Building Industries" },
  { src: "/images/logo/8MeindoElangIndah.jpg", alt: "Meindo Elang Indah" }
];

const thridRow = [
    { src: "/images/logo/9MitraBangunPersada.png", alt: "Mitra Bangun Persada" },
    { src: "/images/logo/10pptaiseiindonesia.jpg", alt: "PP Taisei Indonesia" },
    { src: "/images/logo/6MuriAgungAbadi.jpg", alt: "Muri Agung Abadi" },
    { src: "/images/logo/7BakrieBuildingIndustries.png", alt: "Bakrie Building Industries" }
  ];

const fourRow = [
    { src: "/images/logo/10pptaiseiindonesia.jpg", alt: "PP Taisei Indonesia" },
    { src: "/images/logo/6MuriAgungAbadi.jpg", alt: "Muri Agung Abadi" },
    { src: "/images/logo/7BakrieBuildingIndustries.png", alt: "Bakrie Building Industries" },
    { src: "/images/logo/8MeindoElangIndah.jpg", alt: "Meindo Elang Indah" }
  ];

const fiveRow = [
    { src: "/images/logo/9MitraBangunPersada.png", alt: "Mitra Bangun Persada" },
    { src: "/images/logo/10pptaiseiindonesia.jpg", alt: "PP Taisei Indonesia" },
    { src: "/images/logo/8MeindoElangIndah.jpg", alt: "Meindo Elang Indah" },
    { src: "/images/logo/9MitraBangunPersada.png", alt: "Mitra Bangun Persada" }
]

export default function ClientsSection() {
  return (
    <div className="bg-white mt-5 mb-20 pb-20 sm:mt-10 sm:mb-40 sm:pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Our Clients
        </h1>

        {/* Animasi untuk baris pertama */}
        <motion.div
          custom={0}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {firstRow.map((logo, index) => (
            <motion.div 
            key={index} 
            variants={itemVariants} 
            className="flex justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                width={200}
                height={100}
                className="w-auto h-[100px] sm:h-[120px] lg:h-[150px] max-w-[150px] sm:max-w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Animasi untuk baris kedua, muncul setelah baris pertama */}
        <motion.div
          custom={1}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {secondRow.map((logo, index) => (
            <motion.div 
            key={index} 
            variants={itemVariants} 
            className="flex justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                width={200}
                height={100}
                className="w-auto h-[100px] sm:h-[120px] lg:h-[150px] max-w-[150px] sm:max-w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Animasi untuk baris ketiga, muncul setelah baris kedua */}
        <motion.div
          custom={2}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {thridRow.map((logo, index) => (
            <motion.div 
            key={index} 
            variants={itemVariants} 
            className="flex justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                width={200}
                height={100}
                className="w-auto h-[100px] sm:h-[120px] lg:h-[150px] max-w-[150px] sm:max-w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Animasi untuk baris keempat, muncul setelah baris ketiga */}
        <motion.div
          custom={2}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {fourRow.map((logo, index) => (
            <motion.div 
            key={index} 
            variants={itemVariants} 
            className="flex justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                width={200}
                height={100}
                className="w-auto h-[100px] sm:h-[120px] lg:h-[150px] max-w-[150px] sm:max-w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Animasi untuk baris kelima, muncul setelah baris keempat */}
        <motion.div
          custom={2}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {fiveRow.map((logo, index) => (
            <motion.div 
            key={index} 
            variants={itemVariants} 
            className="flex justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                width={200}
                height={100}
                className="w-auto h-[100px] sm:h-[120px] lg:h-[150px] max-w-[150px] sm:max-w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
