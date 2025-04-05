import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Pintu dan Jendela Aluminium",
    href: "#",
    description:
      "Jasa pengadaan dan pemasangan berbagai jenis Pintu dan Jendela Aluminium",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/PintuJendelaAluminium.jpg",
  },
  {
    id: 2,
    title: "Semua Jenis Kaca ",
    href: "#",
    description:
      "Jasa pengadaan dan pemasangan semua jenis Kaca",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/kaca.jpg",
  },
  {
    id: 3,
    title: "Aluminium Composite Panel (ACP)",
    href: "#",
    description:
      "Jasa pengadaan dan pemasangan berbagai jenis Aluminium Composite Panel (ACP)",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/aluminiumCompositePanel.webp",
  },
  {
    id: 4,
    title: "Aneka Plafon",
    href: "#",
    description:
      "Jasa pengadaan dan pemasangan berbagai jenis Plafon",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/plafon.jpg",
  },
  {
    id: 5,
    title: "Partisi",
    href: "#",
    description:
      "Jasa pengadaan dan pemasangan berbagai jenis Partisi",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/partisi.png",
  },
  {
    id: 6,
    title: "Crutain Wall Facade",
    href: "#",
    description:
      "Jasa pengadaan dan pemasangan berbagai jenis Crutain Wall Facade",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/curtainWallFacade.png",
  },
  {
    id: 7,
    title: "Konstruksi Baja",
    href: "#",
    description:
      "Jasa pengadaan dan pengerjaan Konstruksi berbagai jenis Baja",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/baja.jpg",
  },
  {
    id: 8,
    title: "Pembangunan Perumahan",
    href: "#",
    description:
      "Jasa pengadaan dan pengerjaan Konstruksi Pembangunan Perumahan",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/pembangunanRumah.webp",
  },
  {
    id: 9,
    title: "Pergudangan",
    href: "#",
    description:
      "Jasa pengadaan dan pengerjaan Konstruksi Pergudangan",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/pergudangan.jpg",
  },
  {
    id: 10,
    title: "Pembuatan Jalan",
    href: "#",
    description:
      "Jasa pengadaan dan pengerjaan Konstruksi Pembuatan Jalan",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/pembuatanJalan.jpg",
  },
  {
    id: 11,
    title: "Saluran Irigasi",
    href: "#",
    description:
      "Jasa pengadaan dan pengerjaan Konstruksi Saluran Irigasi",
    category: { title: "Marketing", href: "#" },
    imageUrl:"/images/layananKami/saluranIrigasinew.jpg",
  },
];
  
  export default function Example() {
    return (
      <div className="bg-white py-12 sm:py-16 mt-[30px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-screen">
            <h2 className="text-2xl font-semibold tracking-tight text-center text-pretty text-gray-900 sm:text-4xl">
              Kami Mengerjakan dan Menyediakan Segala Kebutuhan Anda
            </h2>
            <p className="text-center mt-[10px] text-xl text-gray-500">Pekerja Berkualitas & Produk Berkualitas</p>
          </div>
          <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-10 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-10">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between border-stone-400 rounded-lg shadow-sm p-4 bg-white"
              >
                <div className="w-full mt-4">
                  <Image
                    alt={post.title}
                    src={post.imageUrl}
                    width={400}
                    height={300}
                    className="w-full h-[250px] object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={`/layanan-kami#${post.id}`}>
                      <span className="absolute inset-0 text-center" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base/6 text-black">
                    {post.description}
                  </p>
                  <Link
                    href={`/layanan-kami#${post.id}`}
                    className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700 transition"
                  >
                    Pelajari Selengkapnya
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  