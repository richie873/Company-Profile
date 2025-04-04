"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Kontak", href: "/kontak" },
  { name: "Layanan Kami", href: "/bisnis-kami" },
  { name: "Proyek", href: "/proyek" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(true);
  const pathname = usePathname(); // Menentukan halaman aktif

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowContactInfo(scrollTop <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1E3A8A] shadow-md py-2" : "bg-white/0 py-4"
        }`}
      >
        {showContactInfo && (
          <div className="bg-gray-100 mt-[-18px] py-2 text-sm text-gray-700 flex justify-end px-4 md:px-8 transition-all duration-300">
            <div className="flex items-center">
              <EnvelopeIcon className="w-5 h-5 text-gray-700" />
              <span className="ml-[3px] mr-[15px]">kanajaya@gmail.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 text-gray-700" />
              <span className="ml-[3px]">081291424681</span>
            </div>
          </div>
        )}
        <nav className="flex items-center justify-between px-4 md:px-8 transition-all duration-300">
          {/* Logo + Nama Perusahaan */}
          <div className="flex items-center gap-2 transition-all duration-300">
            <Link
              href="/"
              className="p-1.5 flex items-center relative w-12 h-12 sm:w-10 sm:h-10 md:w-[60px] md:h-[60px] transition-all duration-300"
            >
              <div
                className={`relative transition-all duration-300 ${
                  isScrolled ? "w-10 h-10" : "w-12 h-12 mt-[5px]"
                } sm:w-10 sm:h-10 md:w-[60px] md:h-[60px]`}
              >
                <Image
                  src="/images/kanajaya.jpg"
                  alt="Kana Jaya Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex flex-col">
              <p
                className={`font-bold transition-all duration-300 ${
                  isScrolled ? "text-sm" : "text-lg"
                } text-white`}
              >
                Kana Jaya
              </p>
              <p
                className={`transition-all duration-300 ${
                  isScrolled ? "text-xs" : "text-sm"
                } text-white`}
              >
                General Contractor & Supplier
              </p>
            </div>
          </div>

          {/* Menu Desktop dengan Animasi */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-lg px-3 py-1 transition-all duration-300 ${
                  pathname === item.href
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400 hover:underline decoration-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Menu Mobile Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black/50" />
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
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
