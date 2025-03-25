'use client'
import Head from 'next/head';
import Navbar from '@/components/navbar/Navbar';
import ImageSlider from '@/components/navbar/ImageSlider';

const posts = [
  {
    id: 1,
    imageUrl: '/images/porto/PabrikKopiKapalApi.jpeg',
  },
  {
    id: 2,
    title: 'Tentang Kami',
    href: '#',
    description: 
      'PT. Kana Jaya awalnya bergerak di bidang perdagangan dan jasa konstruksi aluminium, kaca, dan stainless steel.\n\n' +
      'Seiring perkembangan ekonomi dan teknologi di Indonesia, perusahaan ini memperluas usahanya ke konstruksi composite, panel, partisi, gypsum, plafon, dan baja ringan.\n\n' +
      'Sejak 1989 hingga 2025, PT. Kana Jaya telah menyelesaikan lebih dari 100+ proyek di berbagai kota di Jawa, seperti Jakarta, Bandung, dan Cilegon, serta proyek di luar Jawa, termasuk Kalimantan dan Sumatera.\n\n' +
      'Proyek yang ditangani mencakup gedung, kantor, pabrik, mall, rumah sakit, sekolah, dan perumahan. Dengan pengalaman panjang dan komitmen pada kualitas, PT. Kana Jaya terus menjadi perusahaan konstruksi yang profesional, cepat, dan dapat dipercaya, selalu mengutamakan kepuasan pelanggan.',
  },
];

export default function LandingPage() {
  return (
    <div className="bg-stone-50">
      <Head>
        <title>Image Slider</title>
        <meta name="description" content="Image slider example with Next.js, Tailwind CSS, dan TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <ImageSlider />
      </main>

      <Navbar />

      <div className="relative isolate px-6 lg:px-8">
        <div className="bg-stone-50 py-10 sm:py-10">
          <div className="mx-auto max-w-7xl px-5 lg:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Gambar */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={posts[0].imageUrl} 
                  alt="Featured Image" 
                  className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
                />
              </div>

              {/* Artikel */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                {posts.slice(1).map((post) => (
                  <article key={post.id} className="max-w-2xl">
                    <h3 className="mt-3 text-xl font-semibold text-gray-900">
                      <a href={post.href}>{post.title}</a>
                    </h3>
                    <p className="mt-5 text-sm text-gray-800 whitespace-pre-line">
                      {post.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p className="text-sm">Kana Jaya &copy; 2025 - All Rights Reserved</p>
        <p className="text-xs mt-1">Email: info@kanajaya.com | Phone: +62 812-3456-7890</p>
      </footer>
    </div>
  );
}
