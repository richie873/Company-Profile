"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "6285183300289";
  const message = encodeURIComponent("Hi, I saw your ad and would love to learn more about Two Sudirman.");
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Toggle Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-80 bg-white border border-gray-300 rounded-xl shadow-lg p-4 mb-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg text-green-600 mb-1">Chat with us</h3>
                <p className="text-sm text-gray-700">
                  Hi, I saw your ad and would love to learn more about Cornerstone Prime Construction.
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 ml-2">
                <X size={18} />
              </button>
            </div>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Start WhatsApp Chat
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.6 5.85L0 24l6.3-1.65A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-1.85 0-3.65-.5-5.22-1.45l-.37-.22-3.74.98.99-3.64-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.73l-1.6-.8c-.22-.11-.48-.05-.65.12l-.9.9a8.35 8.35 0 01-3.9-3.9l.9-.9c.17-.17.23-.43.12-.65l-.8-1.6a.5.5 0 00-.45-.28h-1.5a.5.5 0 00-.5.5c0 5.25 4.25 9.5 9.5 9.5a.5.5 0 00.5-.5v-1.5a.5.5 0 00-.28-.45z" />
        </svg>
      </motion.button>
    </div>
  );
}
