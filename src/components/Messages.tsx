'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, User, Calendar } from 'lucide-react';
import { WeddingMessage } from '@/types';

interface MessagesProps {
  messages: WeddingMessage[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

export default function Messages({ messages, loading, error, onRetry }: MessagesProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return 'Tanggal tidak valid';
      }
      
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Tanggal tidak valid';
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat pesan...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={onRetry}
              className="wedding-btn wedding-btn-outline"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 wedding-heading">
              Pesan & Doa
            </h2>
            <MessageCircle className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pesan dan doa dari keluarga dan teman-teman kami
          </p>
        </motion.div>

        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Belum ada pesan. Jadilah yang pertama!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {messages.map((message, index) => {
              // Generate a unique key using message.id or fallback to index and timestamp
              const uniqueKey = message.id && message.id.trim() !== '' 
                ? message.id 
                : `message-${index}-${message.createdAt || Date.now()}`;
              
              return (
                <motion.div
                  key={uniqueKey}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 wedding-heading">
                          {message.name && message.name.trim() !== '' ? message.name : 'Tamu Undangan'}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {formatDate(message.createdAt)}
                        </div>
                      </div>
                    </div>
                    <Heart className="w-5 h-5 text-red-400" />
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {message.content && message.content.trim() !== '' ? message.content : 'Pesan dari tamu undangan'}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="wedding-btn wedding-btn-secondary"
          >
            Kirim Pesan Anda
          </button>
        </motion.div>
      </div>
    </section>
  );
}
