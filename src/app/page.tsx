'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import WeddingDetails from '@/components/WeddingDetails';
import Messages from '@/components/Messages';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';
import { fetchWeddingMessages } from '@/lib/api';
import { WeddingMessage } from '@/types';

export default function Home() {
  const [messages, setMessages] = useState<WeddingMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [errorMessages, setErrorMessages] = useState<string | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        setLoadingMessages(true);
        const data = await fetchWeddingMessages();
        // Sort by creation date (newest first)
        const sortedMessages = data.data
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setMessages(sortedMessages);
      } catch (err) {
        setErrorMessages('Gagal memuat pesan. Silakan coba lagi.');
        console.error('Error loading messages:', err);
      } finally {
        setLoadingMessages(false);
      }
    };

    loadMessages();
  }, []);

  const handleAddMessage = (newMessage: WeddingMessage) => {
    setMessages(prevMessages => [newMessage, ...prevMessages]);
  };

  return (
    <div className="min-h-screen bg-wedding-gradient-light text-gray-800">
      <Hero />
      <WeddingDetails />
      <Messages 
        messages={messages}
        loading={loadingMessages}
        error={errorMessages}
        onRetry={() => window.location.reload()}
      />
      <RSVP onMessageSubmitted={handleAddMessage} />
      <Footer />
    </div>
  );
}
