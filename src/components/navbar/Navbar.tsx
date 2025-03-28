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
          isScrolled ? 'bg-[#1E3A8A] shadow-md py-2' : 'bg-white/0 py-4'
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
            <a href="#" className="p-1.5 flex items-center">
              <Image
                src="/images/kanajaya.jpg"
                width={isScrolled ? 40 : 50} // Ukuran logo lebih kecil saat scroll
                height={isScrolled ? 40 : 50}
                alt="Kana Jaya Logo"
                className="transition-all duration-300"
              />
            </a>
            <div className="flex flex-col">
              <p className={`font-bold transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-lg'} text-white`}>
                Kana Jaya
              </p>
              <p className={`transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'} text-white`}>
                General Contractor & Supplier
              </p>
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
