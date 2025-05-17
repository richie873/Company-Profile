import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Who We Are",
    description:
    "Cornerstone Prime Construction is proud to operate under the umbrella of PT Kana Jaya, a trusted name in the Indonesian construction industry with a legacy of excellence since 1989.\n\n" +
    "At Cornerstone Prime Construction, we are a team of visionaries, engineers, architects, interior designer and builders who believe that construction is more than assembling materials — its about creating meaningful, enduring environments.\n\n" +
    "Founded with a mission to deliver first-class construction services to both high-end and discerning middle-market clients, we are rooted in excellence, driven by innovation, and committed to integrity at every step.\n\n" +
    "We pride ourselves on being both Main Contractor and Trusted Sub-Contractor, equipped to deliver value through expertise, adaptability, and partnership. Every project is a reflection of our values — strong foundations, elevated standards, and timeless craftsmanship.\n\n"
  },
];

export default function WhoWeAre() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
      {/* Gambar */}
      <motion.div
        className="relative flex justify-center w-full lg:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="relative w-full"
        >
          <Image
            src="/images/cornerstonelogo.png"
            alt="Pabrik Kopi Kapal Api - Balaraja Tangerang"
            title="Pabrik Kopi Kapal Api - Balaraja Tangerang"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full h-[375px] object-cover"
            priority={false}
          />
        </div>
      </motion.div>

      {/* Teks */}
      <motion.div
        className="flex flex-col items-start text-left w-full lg:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {posts.map((post) => {
          return (
            <article key={post.id} className="w-full">
              <h3 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">
                <span>{post.title}</span>
              </h3>
              <p className="text-base text-gray-800 text-justify whitespace-pre-line mt-[15px] dark:text-white">
                {post.description}
              </p>
            </article>
          );
        })}
      </motion.div>
    </div>
  );
}
