import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-5 items-center gap-4">
        {/* Logo di kiri */}
        <div className="relative w-30 h-45 sm:col-span-1">
          <Image
            src="/images/kanajaya.jpg"
            alt="Kana Jaya Logo"
            layout="fill"
            className="object-contain"
          />
        </div>

        {/* Text center di tengah (span 4 kolom) */}
        <div className="sm:col-span-4 mt-[25px] text-center text-sm sm:text-lg mr-[200px] text-gray-150">
          <p className="font-semibold">PT Kana Jaya &copy; 2025 - All Rights Reserved</p>
          <p className="mt-1">Email: kana.jaya@gmail.com | Phone: +62 858-7781-2999</p>
          <p className="mt-1">
            Alamat: Resinda blok D3 no 5 Karawang
          </p>
        </div>
      </div>
    </footer>
  );
}
