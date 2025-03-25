'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Our Service', href: '#' },
  { name: 'Our Project', href: '#' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setShowContactInfo(scrollTop <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/30 shadow-md' : 'bg-white/0'
        }`}
      >
      {showContactInfo && (
      <div className="bg-gray-100 py-2 text-sm text-gray-700 flex justify-end px-4 md:px-8 duration-300">
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
        <nav className="flex items-center justify-between px-4 md:px-8 py-3">
          {/* Logo + Nama Perusahaan */}
          <div className="flex items-center gap-2">
            <a href="#" className="p-1.5 flex items-center">
              <Image src="/images/kanajaya.jpg" width={50} height={50} alt="Kana Jaya Logo" />
            </a>
            <div className="flex flex-col">
              <p className="text-white font-bold text-sm sm:text-lg">Kana Jaya</p>
              <p className="text-white text-xs sm:text-sm">General Contractor & Supplier</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg text-white">
                {item.name}
              </a>
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
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-4/5 max-w-[280px] bg-white px-6 py-6 shadow-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Image src="/images/kanajaya.jpg" width={50} height={50} alt="Kana Jaya Logo" />
              </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)} // Tutup saat klik menu
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2a10 10 0 0 0-10 10c0 1.87.51 3.65 1.41 5.18l-1.41 4.15 4.24-1.39c1.48.85 3.17 1.35 4.94 1.35 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.62 0-3.16-.43-4.5-1.22l-2.69.88.88-2.63A8.04 8.04 0 0 1 4 12a8 8 0 1 1 8 8zm-.39-6.22c-.34-.17-2.02-1-2.33-2.34-.07-.31-.33-.39-.5-.39-.19 0-.42.01-.64.02-.21.01-.47.02-.68.12s-.41.34-.41.67c0 .34.11.68.31 1 .19.31 1.08 1.69 2.63 2.32.9.37 1.41.4 1.91.35.46-.04 1.34-.55 1.52-1.08.17-.52.17-.96.12-1.07-.06-.11-.21-.18-.42-.29s-1.34-.67-1.54-.76c-.2-.09-.34-.15-.48-.03-.14.12-.55.66-.68.8-.13.14-.25.16-.45.09z"
          />
        </svg>
      </a>
    </>
  );
}
