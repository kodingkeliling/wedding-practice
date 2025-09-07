'use client';

import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { IoIosArrowDown } from 'react-icons/io';
import { useSearchParams } from 'next/navigation';
import { weddingDetails } from '@/config/wedding';

export default function Hero() {
  const searchParams = useSearchParams();
  const inviteParam = searchParams.get('invite')?.trim();
  const inviteText = inviteParam && inviteParam.length > 0
    ? `Dengan sukacita kami mengundang ${inviteParam} untuk hadir di acara pernikahan kami.`
    : 'Dengan sukacita kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 wedding-gradient-light">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-red-500/30 rounded-full"></div>
      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-pink-500/30 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-red-500/30 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-pink-500/30 rounded-full"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-4 wedding-heading">
            Undangan Pernikahan
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Heart className="w-8 h-8 text-red-500 animate-pulse" />
            <span className="text-2xl md:text-3xl font-semibold text-gray-700">
              Kalida & Jamjam
            </span>
            <Heart className="w-8 h-8 text-red-500 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            {inviteText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8 w-full px-3"
        >
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md ring-1 ring-gray-200/70 w-full max-w-sm mx-auto">
            <Calendar className="w-6 h-6 text-red-500 mt-0.5" />
            <div className="text-left">
              <p className="text-xs md:text-sm text-gray-500">Tanggal & Waktu</p>
              <p className="text-sm md:text-base font-semibold text-gray-800">{weddingDetails.weddingDate}</p>
              <p className="text-sm md:text-base font-semibold text-gray-800">{weddingDetails.weddingTime}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md ring-1 ring-gray-200/70 w-full max-w-sm mx-auto">
            <MapPin className="w-6 h-6 text-red-500 mt-0.5" />
            <div className="text-left">
              <p className="text-xs md:text-sm text-gray-500">Lokasi</p>
              <p className="text-sm md:text-base font-semibold text-gray-800">{weddingDetails.venue}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md ring-1 ring-gray-200/70 w-full max-w-sm mx-auto">
            <Heart className="w-6 h-6 text-red-500 mt-0.5" />
            <div className="text-left">
              <p className="text-xs md:text-sm text-gray-500">Kehadiran</p>
              <p className="text-sm md:text-base font-semibold text-gray-800">Konfirmasi</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="wedding-btn wedding-btn-primary text-lg px-8 py-4"
          >
            Lihat Undangan
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <IoIosArrowDown size={36} className="text-red-500" />
        </div>
      </motion.div>
    </section>
  );
}
