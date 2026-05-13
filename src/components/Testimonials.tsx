import { motion } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqs } from '../data/services';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { t, language } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4 uppercase tracking-tight"
          >
            {t('faq_title')}
          </motion.h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6" />
          <p className="text-gray-700 text-[10px] uppercase tracking-[0.2em]">
            {t('faq_desc')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`border border-gray-100 transition-all duration-300 ${openIdx === idx ? 'bg-brand-cream/10 border-brand-navy/10' : 'hover:bg-gray-50'}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-navy text-white flex items-center justify-center font-bold text-[10px]">
                    Q
                  </span>
                  <span className="font-display font-bold text-brand-navy text-sm uppercase tracking-tight">
                    {language === 'no' ? (faq.qNo ?? faq.qEn) : language === 'th' ? faq.q : faq.qEn}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-brand-gold transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-8 pt-0 text-gray-700 text-sm leading-relaxed border-t border-gray-50">
                  {language === 'no' ? (faq.aNo ?? faq.aEn) : language === 'th' ? faq.a : faq.aEn}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-brand-navy text-white text-center">
          <p className="font-display font-bold text-[10px] uppercase tracking-[0.2em]">
            {t('faq_footer')}
            <a href="tel:+4794190563" className="ml-4 text-brand-gold hover:underline underline-offset-4">
              +47 94 19 05 63
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
