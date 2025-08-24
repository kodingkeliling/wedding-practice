'use client';

import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { weddingDetails } from '@/config/wedding';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-red-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-red-300" />
            <h2 className="text-3xl md:text-4xl font-bold wedding-heading">
              Kalida & Jamjam
            </h2>
            <Heart className="w-8 h-8 text-red-300" />
          </div>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Terima kasih telah berbagi kebahagiaan di hari istimewa kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 wedding-heading">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-red-300" />
                <span className="text-red-100">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-red-300" />
                <span className="text-red-100">kalida.jamjam@email.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-red-300" />
                <span className="text-red-100">{weddingDetails.address}</span>
              </div>
            </div>
          </div>

          {/* Wedding Details */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 wedding-heading">Detail Acara</h3>
            <div className="space-y-3">
              <p className="text-red-100">{weddingDetails.weddingDate}</p>
              <p className="text-red-100">{weddingDetails.weddingTime}</p>
              <p className="text-red-100">{weddingDetails.venue}</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4 wedding-heading">Media Sosial</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-red-300 to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-200">
            © {currentYear} Undangan Pernikahan Kalida & Jamjam. Dibuat dengan ❤️
          </p>
          <p className="text-red-300 text-sm mt-2">
            Powered by Next.js & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
