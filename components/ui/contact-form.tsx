'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Building, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  translations: {
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  locale: string;
}

export function ContactForm({ translations, locale }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale })
      });

      if (response.ok) {
        setStatus('success');
        // Open Gmail compose
        const mailtoLink = `mailto:info@protonai.online?subject=${encodeURIComponent(
          `Contact from ${formData.name} - ${formData.company || 'N/A'}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`
        )}`;
        window?.open?.(mailtoLink, '_blank');
        
        // Reset form
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name */}
      <div className="relative">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          {translations.name}
        </label>
        <div className="relative">
          <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          {translations.email}
        </label>
        <div className="relative">
          <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
          />
        </div>
      </div>

      {/* Company */}
      <div className="relative">
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
          {translations.company}
        </label>
        <div className="relative">
          <Building size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
          />
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          {translations.message}
        </label>
        <div className="relative">
          <MessageSquare size={20} className="absolute left-3 top-4 text-gray-400" />
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full pl-11 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
          />
        </div>
      </div>

      {/* Status Message */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm"
        >
          {translations.success}
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm"
        >
          {translations.error}
        </motion.div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
      >
        <span>{status === 'sending' ? translations.sending : translations.submit}</span>
        <Send size={18} />
      </button>
    </motion.form>
  );
}