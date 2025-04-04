// components/landingPage/ValuesSection.js
import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    { title: "Membangun Hubungan yang Kuat", description: "Menjaga hubungan yang positif dan profesional antara PT. Kana Jaya dan pelanggan untuk menciptakan lingkungan kerja yang harmonis dan berkelanjutan." },
    { title: "Tanggung Jawab", description: "Bertanggung jawab atas setiap proyek yang dipercayakan kepada PT. Kana Jaya, baik dalam skala besar maupun kecil, dengan menjunjung tinggi profesionalisme dan integritas." },
    { title: "Etika dan Kesopanan", description: "Menunjukkan sikap sopan, ramah, dan profesional dalam setiap interaksi dengan pelanggan dan mitra PT. Kana Jaya." },
    { title: "Pemanfaatan Sumber Daya Secara Optimal", description: "Menggunakan keterampilan dan sumber daya PT. Kana Jaya secara maksimal untuk memastikan keberhasilan setiap proyek yang dikerjakan." },
    { title: "Semangat dan Dedikasi", description: "Mengerjakan setiap proyek dengan penuh semangat dan dedikasi guna menciptakan suasana kerja yang positif dan kondusif." },
    { title: "Ketelitian dan Keakuratan", description: "Bekerja dengan cermat dan akurat dalam setiap proses pengerjaan proyek guna memastikan hasil yang optimal bagi pelanggan." },
    { title: "Komitmen terhadap Keunggulan", description: "Memberikan upaya dan kualitas terbaik dalam setiap layanan untuk memastikan kepuasan pelanggan dan hasil kerja yang unggul." },
    { title: "Efisiensi dan Ketangkasan", description: "Melaksanakan setiap proyek dengan efisien, cepat, dan tetap berorientasi pada kualitas tinggi." },
    { title: "Kreativitas dan Inovasi", description: "Selalu mencari cara baru dan inovatif dalam menyelesaikan proyek agar tetap kompetitif dan berkualitas." } // **Tambahkan ini**
  ];  

  return (
    <div className="bg-stone-50 py-10 px-6 lg:px-8 mt-[55px]">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-15">Nilai-Nilai Utama PT Kana Jaya</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {values.map((value, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
            <p className="text-gray-900 mt-2">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
