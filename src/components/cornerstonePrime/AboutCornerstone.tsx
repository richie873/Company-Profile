import Image from "next/image";

const stats = [
  { id: 1, name: "Where Excellence Meets Innovation in Every Build."},
  { id: 2, name: "We dont just build structures — we craft spaces that embody quality, innovation, and prestige."},
];

export default function AboutCornerstone() {
  return (
    <div className="relative flex items-center justify-center mb-[25px] mt-[25px] min-h-[400px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <Image
        src="/images/cornerstoneasset.png"
        alt="Proyek Konstruksi"
        title="Proyek Konstruksi"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority={false}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Teks & Statistik */}
      <div className="relative z-10 text-center p-6 sm:p-10 text-white font-bold">
        <dl className="flex flex-col items-center gap-6">
          {stats.map((stat) => (
            <div key={stat.id}>
              <dd className="text-xl md:text-4xl">{stat.name}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
