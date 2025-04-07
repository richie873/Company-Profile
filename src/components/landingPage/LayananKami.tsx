import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/components/utils/slugify";
import { layanan } from "@/components/layananKami/data";

export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-16 mt-[30px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-screen">
          <h2 className="text-2xl font-semibold tracking-tight text-center text-pretty text-gray-900 sm:text-4xl">
            Kami Mengerjakan dan Menyediakan Segala Kebutuhan Anda
          </h2>
          <p className="text-center mt-[10px] text-xl text-gray-500">
            Pekerja Berkualitas & Produk Berkualitas
          </p>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-10 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-10">
          {layanan.map((item) => (
            <article
              key={item.id}
              className="flex max-w-xl flex-col items-start justify-between border-stone-400 rounded-lg shadow-sm p-4 bg-white"
            >
              <div className="w-full mt-4">
                <Image
                  alt={item.title}
                  src={item.imageUrl}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 text-center font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link href={`/layanan-kami/${slugify(item.title)}`}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-base/6 text-black text-center">
                  {item.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <Link
                    href={`/layanan-kami/${slugify(item.title)}`}
                    className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700 transition"
                  >
                    Pelajari Selengkapnya
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
