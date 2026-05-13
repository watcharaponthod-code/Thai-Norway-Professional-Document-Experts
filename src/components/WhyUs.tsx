import { motion } from 'motion/react';
import { Shield, Globe, Users, History } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import whyUsBg from '../15c3589a-cfb4-4eac-bd85-ae3b635d21fd.png';

export const WhyUs = () => {
  const { t, language } = useLanguage();

  const reasons = [
    {
      icon: Globe,
      title: {
        th: 'ประจำการในนอร์เวย์โดยตรง',
        en: 'Based in Norway',
        no: 'Basert i Norge'
      },
      desc: {
        th: 'เราประจำการอยู่ในนอร์เวย์โดยตรง เข้าใจบริบทและสภาพแวดล้อมจริงของที่นี่อย่างลึกซึ้ง',
        en: 'Directly stationed in Norway, with deep understanding of the local context and environment.',
        no: 'Direkte stasjonert i Norge med inngående forståelse av det lokale systemet og miljøet.'
      }
    },
    {
      icon: Shield,
      title: {
        th: 'เครือข่ายพาร์ทเนอร์มืออาชีพ',
        en: 'Professional Partner Network',
        no: 'Profesjonelt partnernettverk'
      },
      desc: {
        th: 'ทำงานร่วมกับเครือข่ายผู้เชี่ยวชาญทั้งฝั่งไทยและนอร์เวย์ มั่นใจทุกขั้นตอน',
        en: 'Working with a network of specialists from both Thailand and Norway for confidence at every step.',
        no: 'Samarbeider med et nettverk av spesialister fra både Thailand og Norge for trygghet i hvert steg.'
      }
    },
    {
      icon: Users,
      title: {
        th: 'ความเชี่ยวชาญในทั้งสองระบบ',
        en: 'Bilateral System Expertise',
        no: 'Kompetanse i begge systemer'
      },
      desc: {
        th: 'ประสานงานได้คล่องตัวทั้งระบบ Skatt, UDI ของนอร์เวย์ และงานกงสุลของไทย',
        en: 'Fluent coordination with Norway\'s Skatt, UDI systems and Thai Consular services.',
        no: 'Flytende koordinering med Norges Skatt, UDI og thailandske konsulatstjenester.'
      }
    },
    {
      icon: History,
      title: {
        th: 'ความปลอดภัยและการรักษาความลับสูงสุด',
        en: 'Maximum Security & Confidentiality',
        no: 'Maksimal sikkerhet og konfidensialitet'
      },
      desc: {
        th: 'เอกสารสำคัญของคุณจะได้รับการดูแลเสมือนเป็นของเราเอง รับประกันความลับ',
        en: 'Your important documents are handled with the utmost care and guaranteed confidentiality.',
        no: 'Dine viktige dokumenter behandles med største omsorg og garantert konfidensialitet.'
      }
    }
  ];

  return (
    <section id="why-us" className="py-24 relative text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={whyUsBg} className="w-full h-full object-cover" alt="Why Choose Us Background" />
        <div className="absolute inset-0 bg-brand-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/20 to-brand-navy" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-8 uppercase tracking-tight leading-tight"
          >
            {t('why_quote')}
          </motion.h2>
          <p className="text-gray-300 text-sm mb-12 leading-relaxed max-w-xl">
            {t('why_desc')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col gap-5 border-l-2 border-brand-red/30 group-hover:border-brand-red pl-6 transition-all">
                  <div className="w-12 h-12 bg-brand-navy flex items-center justify-center rounded-sm shadow-md">
                    <reason.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-display font-bold uppercase tracking-tight">{reason.title[language]}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {reason.desc[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
