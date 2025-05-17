import Image from "next/image";

const stats = [
  { id: 1, title: "General Contracting", name: "Full-service project execution from concept to completion, with a focus on quality, cost-efficiency, and time control."},
  { id: 2, title: "Design & Build", name: "Seamless integration between architectural design and construction implementation for a unified, streamlined experience."},
  { id: 3, title: "Project Management", name: "Professional oversight that ensures precision planning, transparency, and timely delivery of every milestone."},
  { id: 4, title: "Structural & Finishing Works", name: "Expert teams delivering solid structural systems and meticulous interior finishing that reflect your desired aesthetic and durability."},
  { id: 5, title: "Custom High-End Residential & Commercial Projects", name: "We specialize in creating luxury spaces — from villas and private estates to boutique offices and hospitality properties."},
];

export default function WhatWeDo() {
  return (
    <div className="relative flex items-center justify-center mb-10 mt-10 min-h-[600px] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src="/images/cornerstone/cornerstoneimage1.png"
        alt="Proyek Konstruksi"
        title="Proyek Konstruksi"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority={false}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-12 max-w-6xl w-full text-white">
        <h1 className="text-lg text-justify sm:text-3xl font-bold md:text-center mb-10">At Cornerstone Prime Construction, we provide comprehensive construction solutions tailored to each clients vision and goals. Our core services include:</h1>
        <div className="space-y-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white/10 border border-white/20 p-6 rounded-xl transition hover:bg-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl font-extrabold">{index + 1}.</div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-1">{stat.title}</h2>
                  <p className="text-sm sm:text-lg font-normal text-white/90">{stat.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
