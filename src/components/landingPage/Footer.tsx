import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 dark:bg-[#1E3A8A]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* Logo di kiri */}
        <div className="relative w-30 h-20 flex-shrink-0">
          <Image
            src="/images/kanajaya.jpg"
            alt="Kana Jaya Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Teks di kanan */}
        <div className="text-center sm:text-left text-sm sm:text-base">
          <p className="mt-1">
            Email: <a href="mailto:kana.jaya@gmail.com" className="underline hover:text-gray-300">kana.jaya@gmail.com</a> | 
            Phone: <a href="https://wa.me/6285877812999" className="underline hover:text-gray-300 ml-1">+62 858-7781-2999</a>
          </p>
          <p className="mt-1">Alamat: Resinda blok D3 no 5 Karawang</p>
          <p className="font-semibold mt-[10px]">
            PT Kana Jaya &copy; 2025 - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
