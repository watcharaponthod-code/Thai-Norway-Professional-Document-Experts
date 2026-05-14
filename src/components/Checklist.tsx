import { motion } from 'motion/react';
import { CheckCircle, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Checklist = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      title: language === 'th' ? 'ประเภทวีซ่า' : language === 'no' ? 'Visumkategorier' : 'Visa Categories',
      items: language === 'th' 
        ? ['พาสปอร์ตไทยตัวจริง', 'รูปถ่ายตามมาตรฐาน UDI', 'ใบคำขอวีซ่า (Application form)', 'ใบจองตั๋วเครื่องบิน/ที่พัก']
        : language === 'no'
          ? ['Originalt thailandsk pass', 'Bilder i henhold til UDI-standarder', 'Visumsøknadsskjema', 'Fly-/overnattingsbestilling']
          : ['Original Thai Passport', 'Photos as per UDI standards', 'Visa Application Form', 'Flight/Accommodation Booking']
    },
    {
      title: language === 'th' ? 'เอกสารส่วนตัว' : language === 'no' ? 'Personlige dokumenter' : 'Personal Documents',
      items: language === 'th'
        ? ['ใบเกิด', 'ทะเบียนบ้าน', 'ใบเปลี่ยนชื่อ-นามสกุล (ถ้ามี)', 'ใบรับรองโสด/ทะเบียนสมรส']
        : language === 'no'
          ? ['Fødselsattest', 'Bostedsregistrering', 'Navneendringsattest (hvis aktuelt)', 'Sivilstandsattest/Vigselsattest']
          : ['Birth Certificate', 'House Registration', 'Change of Name/Surname Certificate (if any)', 'Certificate of Marital Status/Marriage Certificate']
    },
    {
      title: language === 'th' ? 'เอกสารฝั่งนอร์เวย์' : language === 'no' ? 'Dokumenter fra norsk side' : 'Norwegian Side Documents',
      items: language === 'th'
        ? ['จดหมายเชิญ (Invitation)', 'เอกสารการเงินผู้เชิญ (Payslips)', 'สำเนาพาสปอร์ตผู้เชิญ', 'หลักฐานที่พัก']
        : language === 'no'
          ? ['Invitasjonsbrev', 'Invitørens finansielle dokumenter (lønnslipper)', 'Kopi av invitørens pass', 'Dokumentasjon på overnatting']
          : ['Invitation Letter', 'Invitor\'s Financial Documents (Payslips)', 'Invitor\'s Passport Copy', 'Evidence of Accommodation']
    }
  ];

  return (
    <section id="checklist" className="py-24 bg-brand-cream/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-6 uppercase tracking-tight">
              {t('checklist_title_1')} <br />
              <span className="text-brand-red border-b-2 border-brand-gold pb-1">{t('checklist_title_2')}</span>
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-sm">
              {t('checklist_desc')}
            </p>
            <div className="bg-white p-8 border-l-4 border-brand-red shadow-sm">
              <div className="flex items-center gap-3 text-brand-navy mb-4 font-bold uppercase tracking-wider text-xs">
                <Info size={16} className="text-brand-red" />
                <span>{t('checklist_advice_label')}</span>
              </div>
              <p className="text-sm text-gray-700 italic leading-relaxed">
                {t('checklist_advice_text')}
              </p>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={idx === 2 ? "sm:col-span-2" : ""}
              >
                <div className="bg-white p-8 h-full border border-gray-200 shadow-sm transition-shadow">
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-6 flex items-center gap-3 uppercase tracking-tighter">
                    <span className="w-8 h-8 bg-brand-navy text-white text-[10px] flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-4 border-l border-brand-red/20 pl-4 py-1">
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
