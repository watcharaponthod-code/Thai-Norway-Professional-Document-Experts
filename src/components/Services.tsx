import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  ShieldCheck, 
  Plane, 
  ListChecks, 
  Eye, 
  Users, 
  MapPin, 
  PenTool, 
  Truck,
  FileCheck
} from 'lucide-react';
import { servicesData } from '../data/services';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  MessageSquare, ShieldCheck, Plane, ListChecks, Eye, Users, MapPin, PenTool, Truck
];

export const Services = () => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4 uppercase tracking-tight"
          >
            {t('services_title')}
          </motion.h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6" />
          <p className="text-gray-700 text-sm uppercase tracking-widest">
            {t('services_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = icons[index] || FileCheck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 bg-brand-cream/10 border border-gray-100 hover:border-brand-navy/10 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col h-full rounded-sm"
              >
                <div className="w-12 h-12 bg-brand-navy flex items-center justify-center mb-6 shadow-md rounded-sm">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-base font-display font-bold text-brand-navy mb-3 group-hover:text-brand-red transition-colors leading-tight uppercase tracking-tight">
                  {language === 'th' ? service.title : language === 'no' ? (service.titleNo ?? service.titleEn) : service.titleEn}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow">
                  {language === 'th' ? service.summary : language === 'no' ? (service.summaryNo ?? service.summaryEn) : service.summaryEn}
                </p>
                <Link 
                  to={`/service/${service.id}`}
                  className="text-brand-navy text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/link border-b border-transparent hover:border-brand-navy pb-1 w-fit"
                >
                  {language === 'th' ? 'ดูขั้นตอนอย่างละเอียด' : language === 'no' ? 'Se detaljerte trinn' : 'View detailed steps'}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
