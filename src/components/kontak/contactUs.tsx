import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import Link from "next/link";

export default function ContentSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col text-center w-full max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl ml-[20px] font-semibold mt-[-100px] text-gray-900 mb-8">
          Hubungi Kami
        </h1>

        <div className="space-y-6 text-sm sm:text-base lg:text-lg text-gray-800">
          <div className="flex items-center gap-2 justify-center">
            <FaPhone className="text-blue-600 text-xl" />
            <p className="font-semibold">Telepon / WhatsApp</p>
            <div>
              <p>+62 858-7781-2999</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <FaEnvelope className="text-red-600 text-xl" />
            <p className="font-semibold">Email</p>
            <p>kana.jaya@gmail.com</p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <p className="font-semibold">Alamat</p>
            <p>Resinda blok D3 no 5 Karawang</p>
          </div>
          {/* Tombol Google Maps */}
          {/* <Link
            href="https://www.google.com/maps?q=Jl.+Contoh+Alamat+No.+123,+Surabaya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition duration-200 text-sm sm:text-base"
          >
            Lihat di Google Maps
          </Link> */}
        </div>
      </motion.div>
    </div>
  );
}
