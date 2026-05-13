import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, FileCheck, Landmark, Scale, FileDigit, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import heroBg from '../Gemini_Generated_Image_jagnntjagnntjagn.png';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
        icon: Landmark,
        title: t('qa_visa_title'),
        desc: t('qa_visa_desc'),
        detail: t('qa_visa_detail'),
        color: "bg-brand-navy"
    },
    {
        icon: FileDigit,
        title: t('qa_online_title'),
        desc: t('qa_online_desc'),
        detail: t('qa_online_detail'),
        color: "bg-brand-red"
    },
    {
        icon: Scale,
        title: t('qa_choice_title'),
        desc: t('qa_choice_desc'),
        detail: t('qa_choice_detail'),
        color: "bg-brand-gold"
    }
  ];

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col items-center justify-center overflow-hidden py-20 lg:py-0">
      {/* Background Image with Dark Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          className="w-full h-full object-cover"
          alt="Professional Document Service"
        />
        <div className="absolute inset-0 bg-brand-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-auto lg:h-full flex flex-col lg:flex-row items-center justify-between py-12 md:py-20 lg:px-24 gap-12">
        {/* Left Side: Article Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center pt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-6"
          >



            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight uppercase leading-tight">
              {t('hero_article_title')}
            </h1>

            <div className="w-20 h-1 bg-brand-red" />

            <div className="space-y-4 max-w-2xl">
              <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                {t('hero_article_content')}
              </p>
              
              <div className="bg-brand-navy/60 backdrop-blur-sm border-l-2 border-brand-red p-6 mt-8 shadow-xl space-y-4">
                {t('hero_features').split('|').map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                    <p className="text-white text-[11px] md:text-[13px] font-bold uppercase tracking-widest leading-none">
                      {feature.replace('•', '').trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest transition-all hover:translate-x-1 shadow-xl">
                {t('cta_consultation') || 'Contact Expert Now'}
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-[11px] font-bold uppercase tracking-widest transition-all"
              >
                {t('nav_services')}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Cards (Accordion Style) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {cards.map((card, i) => (
                <div key={i} className="w-full flex flex-col">
                    <motion.button
                        onClick={() => setActiveCard(activeCard === i ? null : i)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className={cn(
                            "bg-white group flex items-center p-6 gap-5 transition-all border-l-4 shadow-lg w-full text-left relative z-20",
                            activeCard === i ? "border-brand-red" : "border-transparent hover:border-brand-red/50"
                        )}
                    >
                        <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-brand-navy transition-all duration-300 shadow-md">
                            <card.icon className="text-white" size={24} />
                        </div>
                        <div className="text-left flex-grow">
                            <h4 className="text-brand-navy font-bold text-xs uppercase tracking-tight mb-1">{card.title}</h4>
                            <p className="text-gray-500 text-[10px] font-medium opacity-80 leading-snug">{card.desc}</p>
                        </div>
                        <ChevronDown 
                            size={14} 
                            className={cn(
                                "text-brand-gold transition-transform duration-300 opacity-50",
                                activeCard === i ? "rotate-0 opacity-100" : "-rotate-90"
                            )} 
                        />
                    </motion.button>
                    
                    <AnimatePresence>
                        {activeCard === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden bg-brand-navy/90 backdrop-blur-md border-l-4 border-brand-red shadow-inner"
                            >
                                <div className="p-8 space-y-4">
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        {card.detail}
                                    </p>
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="bg-white/10 hover:bg-brand-red text-white border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors"
                                        >
                                            {t('services_btn_detail')}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </div>

      {/* Legacy Modal Removed */}
    </section>
  );
};

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
