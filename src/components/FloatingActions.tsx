import { MessageCircle, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setIsLineQRModalOpen } = useLanguage();

  const labels = {
    line: { th: 'คุยทาง LINE', en: 'Chat via LINE', no: 'Chat via LINE' },
    call: { th: 'โทรเบอร์นอร์เวย์', en: 'Call Norway', no: 'Ring Norge' },
    consult: { th: 'ปรึกษาฟรี', en: 'Free Consultation', no: 'Gratis konsultasjon' },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-3 mb-4 items-end">
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.0 }}
              onClick={() => {
                setIsLineQRModalOpen(true);
                setIsOpen(false);
              }}
              className="bg-[#00B900] text-white flex items-center gap-2 px-6 py-4 rounded-sm shadow-lg font-bold text-xs uppercase tracking-widest w-full justify-center"
            >
              <MessageCircle size={18} />
              {labels.line[language]}
            </motion.button>
            <motion.a
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.1 }}
              href="https://www.facebook.com/share/1DYgCpsJNx/"
              target="_blank"
              className="bg-[#0084FF] text-white flex items-center gap-2 px-6 py-4 rounded-sm shadow-lg font-bold text-xs uppercase tracking-widest"
            >
              <MessageSquare size={18} />
              Messenger
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ delay: 0.2 }}
              href="tel:+4794190563"
              className="bg-brand-navy text-white flex items-center gap-2 px-6 py-4 rounded-sm shadow-lg font-bold text-xs uppercase tracking-widest"
            >
              <Phone size={18} />
              {labels.call[language]}
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-red text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all outline-none rounded-sm"
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <MessageCircle size={32} />
        </motion.div>
      </button>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-white px-5 py-3 shadow-xl border border-gray-100 whitespace-nowrap text-brand-navy font-bold text-[10px] uppercase tracking-widest rounded-sm"
        >
          {labels.consult[language]}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white border-r border-t border-gray-100 rotate-45" />
        </motion.div>
      )}
    </div>
  );
};
