import { motion, useScroll, useSpring } from 'motion/react';
import { Hero } from './Hero';
import { Services } from './Services';
import { WhyUs } from './WhyUs';
import { Checklist } from './Checklist';
import { HowTo } from './HowTo';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { Comments } from './Comments';
import { Navbar } from './Navbar';
import { FloatingActions } from './FloatingActions';
import { useLanguage } from '../context/LanguageContext';

export const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const { t, language } = useLanguage();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Checklist />
        <HowTo />
        <Testimonials />
        <Contact />
        <Comments />
      </main>

      <footer className="bg-brand-navy text-white pt-24 pb-12 border-t-8 border-brand-red">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-8 uppercase tracking-tighter">Thainorexpert Kongkhang</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm max-w-lg uppercase tracking-tight">
                {language === 'th'
                   ? 'ศูนย์บริการรับรองเอกสารและกงสุลไทย-นอร์เวย์ ตั้งอยู่ในประเทศนอร์เวย์โดยตรง ดูแลโดยทีมงานมืออาชีพที่มีประสบการณ์ยาวนาน เพื่อความถูกต้องแม่นยำในทุกรายละเอียด'
                   : language === 'no'
                     ? 'Senter for sertifisering av thai-norske dokumenter, direkte basert i Norge. Drevet av erfarne fagfolk for prøvesikkerhet i enhver detalj.'
                     : 'Thai-Norwegian Consular & Documentation Center based directly in Norway. Managed by experienced professionals ensuring precision in every detail.'}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-red">{t('footer_about')}</h3>
              <ul className="space-y-4 font-light text-gray-400 text-[10px] uppercase tracking-widest">
                <li><a href="#services" className="hover:text-brand-gold transition-colors">{t('nav_services')}</a></li>
                <li><a href="#checklist" className="hover:text-brand-gold transition-colors">{t('nav_checklist')}</a></li>
                <li><a href="#how-to" className="hover:text-brand-gold transition-colors">{t('nav_process')}</a></li>
                <li><a href="#contact" className="hover:text-brand-gold transition-colors">{t('nav_contact')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-brand-red">{t('contact_phone')}</h3>
              <ul className="space-y-4 text-gray-300 text-[10px] uppercase tracking-widest leading-loose">
                <li>Org. Nr.:<br/><span className="text-gray-100 font-bold uppercase">935 839 343 (THAI NOR EXPERT KONGKHANG)</span></li>
                <li>{t('contact_address')}:<br/><span className="text-gray-100 font-bold uppercase">Jensvollveien 56, 3413 Lier, Norway</span></li>
                <li>{t('contact_phone')} (Norge):<br/><span className="text-gray-100 font-bold uppercase">+47 46 35 78 97</span></li>
                <li>{t('contact_phone')} (Thailand):<br/><span className="text-gray-100 font-bold uppercase">+66 61 182 1497</span></li>
                <li>LINE ID:<br/><span className="text-gray-100 font-bold uppercase">@thainorexpert</span></li>
                <li>EMAIL:<br/><span className="text-gray-100 font-bold uppercase italic lowercase">thainorexpertkongkhang@gmail.com</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} THAINOREXPERT KONGKHANG. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      <FloatingActions />
    </div>
  );
};
