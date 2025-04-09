import { CheckCircle } from "lucide-react";

export default function LayananKamiComponents() {
  const points = [
    "Tim profesional dan berpengalaman",
    "Kualitas kerja tinggi dan tepat waktu",
    "Pelayanan ramah dan komunikatif",
    "Menggunakan material terbaik dan terpercaya",
    "Harga kompetitif dan transparan",
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5 mt-12 sm:mt-16">
        <h3 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 dark:text-white mb-6">
          Kenapa Anda Harus Memilih PT Kana Jaya?
        </h3>
        <p className="text-center text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
          Kami memiliki tim profesional, pengalaman luas di bidang konstruksi,
          dan komitmen penuh terhadap kualitas dan ketepatan waktu. PT Kana Jaya
          siap menjadi mitra terpercaya untuk mewujudkan proyek Anda dengan
          hasil terbaik dan pelayanan terbaik.
        </p>

        {/* List Keunggulan */}
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle
                className="text-blue-600 dark:text-blue-400 mt-1"
                size={22}
              />
              <p className="text-gray-800 dark:text-gray-200 text-base">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
