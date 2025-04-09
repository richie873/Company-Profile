'use client';

import { useEffect, useRef } from "react";
import { layanan } from "@/components/layananKami/data";
import { slugify } from "@/components/utils/slugify";
import Link from "next/link";

export default function SidebarWithMotion({ slug }: { slug: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const savedScrollX = sessionStorage.getItem("sidebar-scroll-x");
    if (scrollRef.current && savedScrollX) {
      scrollRef.current.scrollLeft = parseInt(savedScrollX, 10);
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      sessionStorage.setItem("sidebar-scroll-x", scrollRef.current.scrollLeft.toString());
    }
  };

    // Auto-scroll ke item aktif (baik mobile atau desktop)
    useEffect(() => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024 && activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }, []);
  
  return (
    <aside
      ref={scrollRef}
      onScroll={handleScroll}
      className="order-2 lg:order-none w-full lg:w-[250px] border-t lg:pl-[1px] lg:border-t-0 lg:border-r border-gray-200 px-2 py-3 lg:px-4 lg:py-6 bg-white sticky top-[64px] z-10 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:h-[calc(100vh-64px)] scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100"
    >
      <ul className="flex lg:flex-col gap-2 px-2 sm:px-4 w-max lg:w-full scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
        {layanan.map((item) => {
          const itemSlug = slugify(item.title);
          const isActive = itemSlug === slug;

          return (
            <li
              key={itemSlug}
              className="shrink-0 pr-4 sm:pr-6 lg:pr-0 lg:w-full"
              ref={isActive ? activeItemRef : null}
            >
              <Link href={`/layanan-kami/${itemSlug}`}>
                <span
                  className={`inline-block lg:block lg:w-full whitespace-normal break-words px-4 py-2 rounded text-sm md:text-base font-medium text-left transition-all duration-200 ${
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
