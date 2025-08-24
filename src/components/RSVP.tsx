'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import { submitComment } from '@/lib/api';
import { CommentFormData, WeddingMessage } from '@/types';

interface RSVPProps {
  onMessageSubmitted: (message: WeddingMessage) => void;
}

export default function RSVP({ onMessageSubmitted }: RSVPProps) {
  const [formData, setFormData] = useState<CommentFormData>({
    name: '',
    message: '',
    attendance: 'yes',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    try {
      const newMessage = await submitComment(formData);
      setSubmitStatus('success');
      setFormData({ name: '', message: '', attendance: 'yes' }); // Clear form
      onMessageSubmitted(newMessage); // Add new message to UI immediately
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Gagal mengirim konfirmasi. Silakan coba lagi.');
      console.error('RSVP submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-red-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 wedding-heading">
              Konfirmasi Kehadiran
            </h2>
            <Heart className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-lg text-gray-800  max-w-2xl mx-auto">
            Mohon konfirmasi kehadiran Anda dan berikan doa serta pesan untuk kami
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-red-100"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-all duration-200 text-gray-800 bg-white"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="attendance" className="block text-gray-700 text-sm font-medium mb-2">
              Kehadiran <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 appearance-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-all duration-200 text-gray-800 pr-10 bg-white"
              >
                <option value="yes">Ya, saya akan hadir</option>
                <option value="no">Maaf, tidak bisa hadir</option>
                <option value="maybe">Mungkin hadir</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Pesan & Doa
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-all duration-200 text-gray-800 bg-white"
              placeholder="Tulis pesan dan doa untuk kami..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="wedding-btn wedding-btn-primary w-full flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Mengirim...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Kirim Konfirmasi
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-green-600 font-medium"
            >
              Terima kasih! Konfirmasi Anda telah terkirim.
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-red-600 font-medium"
            >
              {errorMessage}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
