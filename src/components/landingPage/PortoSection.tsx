import { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Tambahkan ini
import { useRouter } from 'next/navigation';

const posts = [
  {
    id: 1,
    title: 'Proyek Gedung Perkantoran',
    description: 'Pabrik Kopi Kapal Api - Bala Raja Tangerang',
    imageUrl: '/images/porto/portoSection/PabrikKopiKapalApi.jpeg',
  },
  {
    id: 2,
    title: 'Renovasi Mall Besar',
    description: 'PT Bintang Racing Team - Bogor',
    imageUrl: '/images/porto/portoSection/2.PT Bintang Racing Team.jpg',
  },
  {
    id: 3,
    title: 'Konstruksi Pabrik',
    description: 'Bank Jabar - Cibinong',
    imageUrl: '/images/porto/portoSection/bank jabar cibinong.jpg',
  },
  {
    id: 4,
    title: 'Proyek Gedung Perkantoran',
    description: 'Hotel Harper - Purwakarta',
    imageUrl: '/images/porto/portoSection/harper purwakarta.webp',
  },
  {
    id: 5,
    title: 'Renovasi Mall Besar',
    description: 'Telkom - Bandung',
    imageUrl: '/images/porto/portoSection/Risti Telkom-Bandung.jpg',
  },
  {
    id: 6,
    title: 'Konstruksi Pabrik',
    description: 'RSUD - Karawang',
    imageUrl: '/images/porto/portoSection/RSUD Karawang edited.jpg',
  },
];

export default function Example() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  } | null>(null);
  
  const router = useRouter();
  
  return (
    <div className="bg-white py-24 sm:py-35">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Proyek Kami
          </h2>
          <p className="mt-6 max-w-full text-justify text-base sm:text-lg text-gray-800 leading-relaxed">
            PT. Kana Jaya telah menyelesaikan lebih dari 100+ proyek di berbagai
            kota di Jawa, seperti Jakarta, Bandung, dan Cilegon, serta proyek di
            luar Jawa, termasuk Kalimantan dan Sumatera. Proyek yang ditangani
            mencakup gedung, kantor, pabrik, mall, rumah sakit, sekolah, dan
            perumahan. Dengan pengalaman panjang dan komitmen pada kualitas, PT.
            Kana Jaya terus menjadi perusahaan konstruksi yang profesional,
            cepat, dan dapat dipercaya, karena kami selalu mengutamakan kepuasan
            pelanggan.
          </p>
        </div>

        {/* Grid Proyek */}
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="cursor-pointer">
              {/* Gambar dengan icon 🔍 */}
              <div
                className="relative group"
                onClick={() => setSelectedProject(post)}
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover rounded-lg shadow-md transition duration-300"
                />

                {/* Icon 🔍 tetap di dalam gambar */}
                <div className="absolute bottom-4 left-4">
                  <svg
                    data-tooltip-id={`tooltip-${post.id}`}
                    data-tooltip-content="Lihat Detail"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="size-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                  {/* Tooltip */}
                  <Tooltip id={`tooltip-${post.id}`} />
                </div>
              </div>

              {/* Deskripsi */}
              <div className="mt-3 text-center">
                <span className="block text-gray-700 text-base font-medium">
                  {post.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Button di tengah */}
        <div className="w-full flex justify-center mt-10">
          <button
            onClick={() => router.push("/our-project")}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>

      {/* Modal Detail */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full mt-[75px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              width={400}
              height={300}
              className="rounded-lg w-full h-[300px]"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {selectedProject.title}
            </h3>
            <p className="mt-2 text-gray-600">{selectedProject.description}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
