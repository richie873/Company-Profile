import Image from "next/image";
import { layanan } from "@/components/cornerstonePrime/dataCornerstone";

export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-16 mt-[30px] dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-screen">
          <h2 className="text-2xl drak:text-white dark:text-white font-semibold tracking-tight text-center text-pretty text-gray-900 sm:text-4xl">
            Types of Buildings We Construct
          </h2>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-10 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-10">
          {layanan.map((item) => (
            <article
              key={item.id}
              className="flex max-w-xl flex-col items-center justify-between border-stone-400 rounded-lg shadow-sm p-4 bg-white"
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
              <div className="group relative text-center mt-[30px]">
                <h3 className="text-lg/6 text-center font-semibold text-gray-900 group-hover:text-gray-600">
                    {item.title}
                </h3>
                <p className="mt-3 text-base/6 text-black text-center">
                  {item.description}
                </p>
                {/* <div className="mt-4 flex justify-center">
                  <Link
                    href={`/layanan-kami/${slugify(item.title)}`}
                    className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700 transition"
                  >
                    Pelajari Selengkapnya
                  </Link>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
