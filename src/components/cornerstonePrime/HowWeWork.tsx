import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { id: 1, title: "Client-Centered Collaboration", name: "We listen, ask the right questions, and align with your goals from day one." },
  { id: 2, title: "Design-Led Precision", name: "Working closely with architects and consultants to ensure every line and layer serves its purpose." },
  { id: 3, title: "Flawless Execution", name: "Experienced teams, premium materials, and high standards at every step." },
  { id: 4, title: "Transparent Communication", name: "Clear updates, accountable budgeting, and zero guesswork — always." },
  { id: 5, title: "Sustainable & Scalable Thinking", name: "We integrate smart, efficient, and future-ready solutions into every build." },
];

export default function HowWeWork() {
  return (
    <div className="relative flex items-center justify-center mb-10 mt-10 min-h-[600px] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src="/images/cornerstone/cornerstoneimage3.png"
        alt="Proyek Konstruksi"
        title="Proyek Konstruksi"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority={false}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 py-10 max-w-6xl w-full text-white text-left">
        <h2 className="text-lg text-justify sm:text-3xl font-bold mb-10">
          HOW WE WORK
        </h2>

        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-10">
            Our approach is simple yet strategic:
          </h1>

          <div className="flex flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white/10 border-l-4 border-green-400 pl-6 pr-4 py-5 rounded-r-xl hover:bg-white/20 transition"
              >
                <div className="flex items-start gap-3">
                  {/* Check icon */}
                  <svg
                    className="w-5 h-5 mt-1 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">{stat.title}</h3>
                    <p className="text-sm sm:text-base text-white/90">{stat.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
