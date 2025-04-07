'use client';

import { layanan } from "@/components/layananKami/data";
import { slugify } from "@/components/utils/slugify";
import Link from "next/link";

export default function SidebarWithMotion({ slug }: { slug: string }) {
  return (
<aside className="order-2 lg:order-none w-full lg:w-[250px] border-t lg:pl-[1px] lg:border-t-0 lg:border-r border-gray-200 px-2 py-3 lg:px-4 lg:py-6 bg-white sticky top-[64px] z-10 overflow-x-auto lg:overflow-visible">
  <ul className="grid grid-flow-col auto-cols-[minmax(120px,1fr)] sm:auto-cols-[minmax(150px,1fr)] gap-2 w-max lg:flex lg:flex-col lg:w-full">
    {layanan.map((item) => {
      const itemSlug = slugify(item.title);
      const isActive = itemSlug === slug;

      return (
        <li key={itemSlug} className="shrink-0">
          <Link href={`/layanan-kami/${itemSlug}`}>
            <span
              className={`block whitespace-nowrap px-4 py-2 rounded text-sm md:text-base font-medium text-left transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {item.title}
            </span>
          </Link>
        </li>
      );
    })}
  </ul>
</aside>

  );
}
