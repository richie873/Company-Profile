// import Link from "next/link";
// import { layanan } from "@/components/layananKami/data";
// import { slugify } from "@/components/utils/slugify";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import LayananLandingPage from "@/components/landingPage/LayananKami"

export default function LayananKami() {
  return (
    <div>
      <Navbar />
      <LayananLandingPage />
      <Footer />
    </div>
  );
}

{/* <div className="flex flex-col lg:flex-row mt-24">
<main className="flex-1 px-4 pb-16 mt-4">
  <h1 className="text-2xl font-bold mb-4">Semua Layanan</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {layanan.map((item) => {
      const slug = slugify(item.title);
      return (
        <Link href={`/layanan-kami/${slug}`} key={slug}>
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </Link>
      );
    })}
  </div>
</main>
</div> */}

