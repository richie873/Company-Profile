import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 dark:bg-[#1E3A8A]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* Logo di kiri */}
        <div className="relative w-70 h-50 md:ml-[-25px] mt-[5px] flex-shrink-0">
          <Image
            src="/images/cornerstonelogo.png"
            alt="Kana Jaya Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Teks */}
        <div className="text-center mt-[15px] sm:text-left text-sm sm:text-base">
          <p className="mt-1">
            Email :
            <a
              href="mailto:cornerstoneprimeconstruction@kanajaya.co.id"
              className="underline hover:text-gray-300"
            >
              <span className="text-lg">
                {" "}
                cornerstoneprimeconstruction@kanajaya.co.id{" "}
              </span>
            </a>
            | Phone :
            <a
              href="https://wa.me/6285183300289"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 ml-1"
            >
              <span className="text-lg"> +62 851-8330-0289 </span>
            </a>
          </p>

          <p className="mt-3 text-lg">
            Treasury Tower, 31st Floor
          </p>
          <p className="mt-1 text-lg">
            Jl. Jend. Sudirman Kav. 52-53,
          </p>
          <p className="mt-1 text-lg">District 8, SCBD, Jakarta Selatan 12190</p>
          <p className="font-semibold mt-[20px]">
            PT Kana Jaya &copy; 2025 - All Rights Reserved
          </p>
        </div>
        <div className="relative w-70 h-50 md:ml-[20px] mt-[10px] flex-shrink-0 items-end">
          <Image
            src="/images/kanajaya.jpg"
            alt="Cornerstone Prime Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
