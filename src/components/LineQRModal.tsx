import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import lineQr from '../line.jpg';

export const LineQRModal = () => {
  const { isLineQRModalOpen, setIsLineQRModalOpen, language } = useLanguage();

  const labels = {
    title: { th: 'สแกนเพื่อปรึกษาทาง LINE', en: 'Scan to Consult via LINE', no: 'Skann for å konsultere via LINE' },
    desc: { th: 'เพิ่มเพื่อนเพื่อรับคำปรึกษาฟรีจากผู้เชี่ยวชาญ', en: 'Add friend for free expert consultation', no: 'Legg til venn for gratis ekspertkonsultasjon' },
    close: { th: 'ปิดหน้าต่าง', en: 'Close', no: 'Lukk' }
  };

  return (
    <AnimatePresence>
      {isLineQRModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLineQRModalOpen(false)}
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-sm rounded-sm shadow-2xl overflow-hidden"
          >
            <div className="bg-brand-navy p-6 text-center relative">
              <button
                onClick={() => setIsLineQRModalOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-white font-display font-bold uppercase tracking-tight text-lg mb-1">
                {labels.title[language]}
              </h3>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                {labels.desc[language]}
              </p>
            </div>
            
            <div className="p-8 flex flex-col items-center">
              <div className="bg-white p-4 border-2 border-gray-100 rounded-sm shadow-inner mb-6">
                <img 
                  src={lineQr} 
                  alt="LINE QR Code" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              
              <div className="text-center mb-8">
                <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-1">LINE ID: @thainorexpert</p>
                <div className="w-12 h-1 bg-brand-red mx-auto" />
              </div>

              <button
                onClick={() => setIsLineQRModalOpen(false)}
                className="w-full bg-brand-navy text-white font-bold py-4 rounded-sm uppercase tracking-widest text-xs hover:bg-brand-red transition-all duration-300 shadow-lg"
              >
                {labels.close[language]}
              </button>
            </div>

            <div className="bg-gray-50 py-4 px-6 text-center border-t border-gray-100">
               <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.4em]">Official Expert Channel — Sukanya Kongkhang</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
