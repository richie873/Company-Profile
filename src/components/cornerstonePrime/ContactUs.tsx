import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="relative flex items-center justify-center mb-10 mt-10 min-h-[700px] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src="/images/cornerstone/cornerstoneimage5.png"
        alt="Proyek Konstruksi"
        title="Proyek Konstruksi"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority={false}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 py-12 max-w-4xl w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl"
        >
          {/* Judul CTA */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-transparent bg-clip-text">
            Ready to Build?
          </h2>

          <p className="text-center text-base sm:text-lg leading-relaxed mb-8">
            Lets turn your vision into something real — with the strength and
            style of Cornerstone Prime Construction.
          </p>

          {/* Alamat */}
          <div className="text-sm sm:text-base space-y-4 text-center">
            <p className="font-semibold">📍 Office:</p>
            <p>
              District 8, Gedung The Energy, Treasury Tower, <br />
              Jl. Jend. Sudirman Kav. 52-53, 31st Floor, <br />
              Jakarta Selatan 12190
            </p>

            <p className="font-semibold mt-6">📞 Contact:</p>
            <p>
              <a href="https://wa.me/6285183300289" target="_blank" className="underline hover:text-yellow-400">+62 851 8330 0289</a><br />
              
              <a
                href="mailto:cornerstoneprimeconstruction@kanajaya.co.id"
                className="underline hover:text-yellow-400"
              >
                cornerstoneprimeconstruction@kanajaya.co.id
              </a>
            </p>

            <p className="font-semibold mt-6">🔗 Social:</p>
            <p>
              Instagram:{" "}
              <a
                href="https://instagram.com/cornerstoneprimeconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-400"
              >
                @cornerstoneprimeconstruction
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
