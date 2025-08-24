'use client';

import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Clock, Users, Camera } from 'lucide-react';
import { weddingDetails } from '@/config/wedding';

export default function WeddingDetails() {
  const timeline = [
    {
      time: '08:00 WIB',
      event: 'Akad Nikah',
      description: 'Prosesi akad nikah di masjid',
    },
    {
      time: '09:00 WIB',
      event: 'Resepsi',
      description: 'Acara resepsi dan jamuan makan',
    },
    {
      time: '11:00 WIB',
      event: 'Foto Bersama',
      description: 'Sesi foto bersama keluarga dan tamu',
    },
    {
      time: '13:00 WIB',
      event: 'Selesai',
      description: 'Acara selesai',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 wedding-heading">
              Detail Acara
            </h2>
            <Heart className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Informasi lengkap tentang acara pernikahan kami
          </p>
        </motion.div>

        {/* Couple Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 wedding-heading">
                Mempelai
              </h3>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl font-bold wedding-heading">
                      {weddingDetails.brideName.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 wedding-heading">
                    {weddingDetails.brideName}
                  </h4>
                  <p className="text-gray-600">Mempelai Wanita</p>
                </div>
                
                <div className="text-4xl text-red-500 wedding-decorative">
                  &
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl font-bold wedding-heading">
                      {weddingDetails.groomName.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 wedding-heading">
                    {weddingDetails.groomName}
                  </h4>
                  <p className="text-gray-600">Mempelai Pria</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Tanggal & Waktu</h5>
                    <p className="text-gray-600">{weddingDetails.weddingDate}</p>
                    <p className="text-gray-600">{weddingDetails.weddingTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lokasi</h5>
                    <p className="text-gray-600">{weddingDetails.venue}</p>
                    <p className="text-gray-600">{weddingDetails.address}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Kapasitas</h5>
                    <p className="text-gray-600">500 Tamu</p>
                    <p className="text-gray-600">Dress Code: Pakaian Adat / Formal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Foto</h5>
                    <p className="text-gray-600">Sesi foto bersama</p>
                    <p className="text-gray-600">Dokumentasi tersedia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center wedding-heading">
              Timeline Acara
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {item.event}
                      </h4>
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
