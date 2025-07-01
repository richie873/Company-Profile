"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Kontak", href: "/kontak" },
  { name: "Proyek", href: "/proyek" },
  { name: "Layanan Kami", href: "/layanan-kami" },
  { name: "Cornerstone Prime", href: "/cornerstoneprimeconstruction" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isSpecialPage = pathname.startsWith("/layanan-kami") || pathname === "/proyek";
  const navbarScrolled = isScrolled || isSpecialPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        navbarScrolled
          ? "bg-[#19123b] shadow-md py-[8px]"
          : "bg-transparent py-[16px]"
      }`}
    >
      {/* Info Kontak */}
      {!navbarScrolled && (
        <div className="bg-gray-100 mt-[-18px] py-2 text-sm text-gray-700 flex justify-end px-4 md:px-8">
          <div className="flex items-center">
            <EnvelopeIcon className="w-5 h-5" />
            {/* Email */}
            <a
              href="mailto:marketing@kanajaya.co.id"
              className="flex items-center gap-3 justify-center hover:underline"
            >
              <span className="ml-[5px] mr-[15px]">
                marketing@kanajaya.co.id
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="w-5 h-5" />
            <a
              href="https://wa.me/6285877812999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center hover:underline"
            >
              <span className="ml-[5px]">
                +62 858-7781-2999
              </span>
            </a>
          </div>
        </div>
      )}

      <nav className="flex items-center justify-between px-4 md:px-8">
        {/* Logo + Nama */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="p-1.5 relative w-12 h-12 md:w-[60px] md:h-[60px]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/kanajayanew.jpg"
                alt="Kana Jaya Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex flex-col">
            <p className="font-bold text-white text-lg md:text-base">
              Kana Jaya
            </p>
            <p className="text-white text-sm md:text-xs">
              General Contractor & Supplier
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg px-3 py-1 transition ${
                pathname === item.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400 hover:underline"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white p-2"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40 bg-black/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-4/5 max-w-[280px] bg-white px-6 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/images/kanajaya.jpg"
                width={50}
                height={50}
                alt="Kana Jaya Logo"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 text-base font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
