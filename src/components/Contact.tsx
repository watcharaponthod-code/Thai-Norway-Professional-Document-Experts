import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-brand-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white border border-gray-100 shadow-sm flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-12 md:p-16 bg-brand-navy text-white relative">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 uppercase tracking-tight">
                {t('contact_title_1')} <br />
                <span className="text-brand-red">{t('contact_title_2')}</span>
              </h2>
              <p className="text-gray-300 mb-12 max-w-md text-sm leading-relaxed uppercase tracking-widest text-[9px]">
                {t('contact_desc')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 border-l border-white/10 pl-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Organization Number</h4>
                    <p className="text-gray-300 font-light text-sm uppercase">935 839 343 (THAI NOR EXPERT KONGKHANG)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l border-white/10 pl-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{t('contact_phone')} (Norge)</h4>
                    <p className="text-gray-300 font-light text-sm">+47 94 19 05 63</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l border-white/10 pl-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{language === 'th' ? 'อีเมลทางการ' : 'Official Email'}</h4>
                    <p className="text-gray-300 font-light text-sm">warn999151@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l border-white/10 pl-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{t('contact_address')}</h4>
                    <p className="text-gray-300 font-light text-sm">Jensvollveien 56, 3413 Lier, Norway</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l border-white/10 pl-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <Clock className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{t('contact_hours')}</h4>
                    <p className="text-gray-200 text-sm">{t('contact_hours_val')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="contact-form" className="lg:w-1/2 p-12 md:p-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">{language === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name'}</label>
                  <input 
                    type="text" 
                    placeholder={language === 'th' ? "ภาษาไทยหรืออังกฤษ" : "Thai or English"}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-navy transition-all text-sm rounded-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">{t('contact_phone')}</label>
                  <input 
                    type="tel" 
                    placeholder={language === 'th' ? "โปรดระบุรหัสประเทศ" : "Please include country code"}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-navy transition-all text-sm rounded-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">{language === 'th' ? 'บริการที่สนใจ' : 'Service of Interest'}</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-navy transition-all appearance-none cursor-pointer text-sm rounded-sm">
                  <option>{language === 'th' ? 'โปรดเลือกบริการ' : 'Please select a service'}</option>
                  <option>{language === 'th' ? 'การรับรองเอกสาร' : 'Document Certification'}</option>
                  <option>{language === 'th' ? 'การจดทะเบียนสมรส' : 'Marriage Registration'}</option>
                  <option>{language === 'th' ? 'วีซ่าไทย/เชงเก้น' : 'Thai/Schengen Visa'}</option>
                  <option>{language === 'th' ? 'ปรับสถานะสมรส' : 'Marital Status Adjustment'}</option>
                  <option>{language === 'th' ? 'แจ้งเกิดบุตร' : 'Birth Registration'}</option>
                  <option>{language === 'th' ? 'อื่นๆ' : 'Others'}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">{language === 'th' ? 'ข้อความเพิ่มเติม' : 'Additional Message'}</label>
                <textarea 
                  rows={4}
                  placeholder={language === 'th' ? "พิมพ์รายละเอียดที่ต้องการปรึกษา..." : "Enter details you wish to consult..."}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-navy transition-all resize-none text-sm rounded-sm"
                ></textarea>
              </div>

              <button className="w-full bg-brand-red text-white font-bold py-5 hover:bg-brand-red/90 transition-all uppercase tracking-widest text-xs">
                {language === 'th' ? 'ส่งข้อมูลเพื่อขอรับคำปรึกษา' : 'Submit for Consultation'}
              </button>

              <p className="text-center text-[10px] text-gray-400 font-light mt-4 uppercase tracking-tighter">
                {language === 'th' 
                   ? 'โดยการส่งฟอร์มนี้ คุณยอมรับเงื่อนไขการดูแลรักษาข้อมูลส่วนบุคคลตามระบบนอร์เวย์' 
                   : 'By submitting this form, you accept the personal data protection conditions under the Norwegian system.'}
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
