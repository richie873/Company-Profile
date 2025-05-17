import { motion } from "framer-motion";

export default function Intro() {

  return (
    <div className="mt-[50px] items-center">
      {/* Teks */}
      <motion.div
        className="flex flex-col items-center w-full lg:w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-center md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Cornerstone Prime Construction
          </h1>
          <div className="text-gray-800 sm:text-justify text-xl md:text-center dark:text-gray-300 md:text-2xl max-w-4xl mx-auto">
            <p>
            Where Excellence Meets Innovation in Every Build
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
