'use client';

import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_k831ejd',
        'template_ly938rb', 
        form.current,
        {
          publicKey: 'nUPOfy2HO7SUIDMIq',
        }
      )
      .then(() => {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2800);
      })
      .catch((err) => {
        console.error('EmailJS failed:', err);
        setStatus('error');
        setErrorMsg(err.text || 'An unexpected error occurred. Please try again.');
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 50 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-zinc-900/95 border border-yellow-600/30 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl shadow-yellow-900/20">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-zinc-400 hover:text-yellow-400 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes size={28} />
              </button>

              <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-3">Let's Collaborate</h2>
              <p className="text-zinc-400 mb-8 text-lg">
                Have a project in mind? Whether it's game development, design, or a creative partnership, I'd love to hear about it.
              </p>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-green-400 text-6xl mb-6">✓</div>
                  <h3 className="text-2xl font-bold text-green-300 mb-3">Message Sent!</h3>
                  <p className="text-zinc-300 text-lg">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-zinc-300 mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-zinc-800/70 border border-zinc-700 rounded-lg px-5 py-3.5 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 outline-none transition placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-zinc-300 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="name@example.com"
                      required
                      className="w-full bg-zinc-800/70 border border-zinc-700 rounded-lg px-5 py-3.5 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 outline-none transition placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-zinc-300 mb-2 font-medium">
                      How can I help you?
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project ideas or collaboration goals..."
                      required
                      className="w-full bg-zinc-800/70 border border-zinc-700 rounded-lg px-5 py-3.5 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 outline-none resize-none transition placeholder:text-zinc-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-black font-bold text-lg py-4 px-8 rounded-full transition-all flex items-center justify-center gap-3 disabled:opacity-60 shadow-lg shadow-yellow-900/40"
                  >
                    <FaPaperPlane className={status === 'sending' ? 'animate-pulse' : ''} />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-center mt-3 font-medium">{errorMsg}</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}