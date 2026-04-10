'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const phoneNumber = '919971145913'; // Replace with actual phone number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Chaurey,%20I%20would%20like%20to%20schedule%20an%20appointment.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors md:flex hidden items-center gap-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
