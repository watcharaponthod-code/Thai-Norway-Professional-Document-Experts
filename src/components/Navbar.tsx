import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HashLink as Link } from 'react-router-hash-link';
import { cn } from '../lib/utils';
import logo from '../logo.png';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_home'), href: '/#' },
    { name: t('nav_services'), href: '/#services' },
    { name: t('nav_checklist'), href: '/#checklist' },
    { name: t('nav_process'), href: '/#how-to' },
    { name: t('nav_contact'), href: '/#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner (Official Style) */}
      <div className="bg-brand-navy py-1.5 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-[10px] text-white/70 uppercase tracking-widest font-medium">
          <div className="flex gap-4 items-center">
            {/* Tiny Flags */}
            <div className="flex gap-1.5 grayscale-[0.2] opacity-80">
                <div className="w-5 h-3 flex flex-col">
                    <div className="flex-1 bg-[#EE1C25]"></div>
                    <div className="flex-1 bg-white"></div>
                    <div className="flex-[2] bg-[#00247D]"></div>
                    <div className="flex-1 bg-white"></div>
                    <div className="flex-1 bg-[#EE1C25]"></div>
                </div>
                <div className="w-5 h-3 relative bg-[#EF2B2D]">
                    <div className="absolute top-[35%] bottom-[35%] left-0 right-0 bg-white"></div>
                    <div className="absolute left-[25%] right-[55%] top-0 bottom-0 bg-white"></div>
                    <div className="absolute top-[42%] bottom-[42%] left-0 right-0 bg-[#00205B]"></div>
                    <div className="absolute left-[29%] right-[59%] top-0 bottom-0 bg-[#00205B]"></div>
                </div>
            </div>
            <span>{language === 'th' ? 'ผู้เชี่ยวชาญเอกสารไทย-นอร์เวย์มืออาชีพ' : language === 'no' ? 'Thailandsk-norske profesjonelle dokumenteksperter' : 'Thai-Norway Professional Document Experts'}</span>
            <span className="border-l border-white/20 pl-4">{language === 'no' ? 'Basert i Lier, Norge' : language === 'th' ? 'ตั้งอยู่ที่เมือง Lier ประเทศนอร์เวย์' : 'Based in Lier, Norway'}</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="tel:+4746357897" className="hover:text-white transition-colors">+47 46 35 78 97</a>
            <span className="border-l border-white/20 pl-4">thainorexpertkongkhang@gmail.com</span>
            <div className="border-l border-white/20 ml-2 pl-4 flex gap-2 items-center">
              <button
                onClick={() => setLanguage('th')}
                className={cn("transition-colors text-[10px] font-bold", language === 'th' ? "text-brand-gold" : "hover:text-white")}
              >TH</button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLanguage('no')}
                className={cn("transition-colors text-[10px] font-bold", language === 'no' ? "text-brand-gold" : "hover:text-white")}
              >NO</button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={cn("transition-colors text-[10px] font-bold", language === 'en' ? "text-brand-gold" : "hover:text-white")}
              >EN</button>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          'transition-all duration-300 px-4 py-3 bg-white',
          isScrolled ? 'shadow-md' : 'border-b border-gray-100'
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/#">
              <img src={logo} alt="Thainorexpert Logo" className="h-10 md:h-12 w-auto object-contain cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                smooth
                key={link.name}
                to={link.href}
                className="font-semibold text-[13px] text-brand-navy hover:text-brand-red transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-brand-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-t border-gray-100 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  smooth
                  key={link.name}
                  to={link.href}
                  className="text-brand-navy font-bold text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('th')}
                  className={cn("flex-1 py-3 border font-bold text-xs", language === 'th' ? "bg-brand-navy text-white" : "bg-gray-50 text-gray-400")}
                >TH</button>
                <button
                  onClick={() => setLanguage('no')}
                  className={cn("flex-1 py-3 border font-bold text-xs", language === 'no' ? "bg-brand-navy text-white" : "bg-gray-50 text-gray-400")}
                >NO</button>
                <button
                  onClick={() => setLanguage('en')}
                  className={cn("flex-1 py-3 border font-bold text-xs", language === 'en' ? "bg-brand-navy text-white" : "bg-gray-50 text-gray-400")}
                >EN</button>
              </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
