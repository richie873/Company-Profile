import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const logoRows = [
  [
    { src: "/images/logo/1PTPembangunanPerumahan.png", alt: "PT Pembangunan Perumahan" },
    { src: "/images/logo/2PTPrakarsaDirgaAneka.png", alt: "PT Prakarsa Dirga Aneka" },
    { src: "/images/logo/5ptjayaobayashilogo.jpg", alt: "PT Jaya Obayashi" },
    { src: "/images/logo/4PTTokyuConstructionIndonesia.png", alt: "PT Tokyu Construction Indonesia" },
  ],
  [
    { src: "/images/logo/8MeindoElangIndah.jpg", alt: "PT Meindo Elang Indah" },
    { src: "/images/logo/6MuriAgungAbadi.jpg", alt: "Muri Agung Abadi" },
    { src: "/images/logo/7BakrieBuildingIndustries.png", alt: "Bakrie Building Industries" },
    { src: "/images/logo/8ptbukitmuriajayaestateresinda.jpg", alt: "PT Bukit Muria Jaya Estate Resinda" },
  ],
  [
  {src: "/images/logo/9MitraBangunPersada.png", alt: "Mitra Bangun Persada"},
  {src: "/images/logo/10pptaiseiindonesia.jpg", alt: "PP Taisei Indonesia"},
  {src: "/images/logo/11ptalazharmemorialgarden.png", alt: "PT Al Azhar Memorial Garden"},
  {src: "/images/logo/3NusaRayaCipta.png", alt: "Nusa Raya Cipta" },
  ],
  [
    {src: "/images/logo/13ptdimaindonesiaa.png", alt: "PT Dima Indonesia"},
    {src: "/images/logo/14PTDjasaUbersakti.jpg", alt: "PT Djasa Ubersakti"},
    {src: "/images/logo/15PTGaluhCitarum.png", alt: "PT Galuh Citarum"},
    {src: "/images/logo/16PTpacificplacejakarta.jpg", alt: "PT Pacific Place Jakarta"},
  ],
  [
    {src: "/images/logo/17ptpermatabiramasakti.jpg", alt: "PT Permata Birama Sakti"},
    {src: "/images/logo/18PTUniteknindoIntiSarana.jpeg", alt: "PT Uniteknindo Inti Sarana"},
    {src: "/images/logo/19PTAlamHijauLestari.png", alt: "PT Alam Hijau Lestari" },
    {src: "/images/logo/20PTEstikaYasakelola.webp", alt: "PT Estika Yasakelola"},
  ],
];


export default function ClientsSection() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setActiveTooltip(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTooltip = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  return (
    <div className="bg-white mt-10 mb-10 pb-10 sm:mt-16 sm:mb-16 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Client Kami
        </h1>

        {logoRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            custom={rowIndex}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
          >
            {row.map((logo, index) => {
              const uniqueIndex = rowIndex * 4 + index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex flex-col items-center h-[150px]" // Tetapkan tinggi tetap
                >
                  <div
                    onClick={(e) => toggleTooltip(uniqueIndex, e)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.alt}
                      width={200}
                      height={100}
                      className="w-auto h-[100px] sm:h-[120px] lg:h-[150px] max-w-[150px] sm:max-w-[200px] object-contain"
                    />
                  </div>

                  {activeTooltip === uniqueIndex && (
                    <motion.div
                      ref={tooltipRef}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-[-8px] bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg"
                    >
                      {logo.alt}
                      <div
                        className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-0 h-0 
                        border-l-[6px] border-l-transparent 
                        border-r-[6px] border-r-transparent 
                        border-t-[6px] border-t-gray-900"
                      ></div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </div>
  );
}