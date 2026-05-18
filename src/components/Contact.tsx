import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, MessageSquare, Clock, ShieldCheck, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxGzRh8XlKUt0-WXuEgjL9RHq9r-DAT9sTGRAx_ltf2m3_jP_RynVN9QkpGsbWCKdlM/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      // In no-cors mode, we can't read the response, but if fetch doesn't throw,
      // it means the request was successfully dispatched to Google.
      setStatus('success');
      setFormData({ name: '', phone: '', service: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
    
    // Auto reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

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
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{language === 'th' ? 'เลขทะเบียนองค์กร' : language === 'no' ? 'Organisasjonsnummer' : 'Organization Number'}</h4>
                    <p className="text-gray-300 font-light text-sm uppercase">935 839 343 (THAI NOR EXPERT KONGKHANG)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l border-white/10 pl-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{t('contact_phone')} (Norge)</h4>
                    <p className="text-gray-300 font-light text-sm"><a href="tel:+4746357897" className="hover:text-white transition-colors">+47 46 35 78 97</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l border-white/10 pl-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{t('contact_phone')} (Thailand)</h4>
                    <p className="text-gray-300 font-light text-sm"><a href="tel:+66611821497" className="hover:text-white transition-colors">+66 61 182 1497</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-l border-white/10 pl-6">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="text-brand-red" size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{t('contact_email')}</h4>
                    <p className="text-gray-300 font-light text-sm">thainorexpertkongkhang@gmail.com</p>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">{language === 'th' ? 'ชื่อ-นามสกุล' : language === 'no' ? 'Fullt navn' : 'Full Name'}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'th' ? "ภาษาไทยหรืออังกฤษ" : language === 'no' ? "Thailandsk eller engelsk" : "Thai or English"}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-navy transition-all text-sm rounded-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">{t('contact_phone')}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={language === 'th' ? "โปรดระบุรหัสประเทศ" : language === 'no' ? "Vennligst inkluder landskode" : "Please include country code"}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-navy transition-all text-sm rounded-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">{language === 'th' ? 'บริการที่สนใจ' : language === 'no' ? 'Tjeneste av interesse' : 'Service of Interest'}</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-navy transition-all appearance-none cursor-pointer text-sm rounded-sm"
                >
                  <option value="">{language === 'th' ? 'โปรดเลือกบริการ' : language === 'no' ? 'Vennligst velg en tjeneste' : 'Please select a service'}</option>
                  <option value="Document Certification">{language === 'th' ? 'การรับรองเอกสาร' : language === 'no' ? 'Dokumentsertifisering' : 'Document Certification'}</option>
                  <option value="Marriage Registration">{language === 'th' ? 'การจดทะเบียนสมรส' : language === 'no' ? 'Ekteskapsregistrering' : 'Marriage Registration'}</option>
                  <option value="Thai/Schengen Visa">{language === 'th' ? 'วีซ่าไทย/เชงเก้น' : language === 'no' ? 'Thai-/Schengenvisum' : 'Thai/Schengen Visa'}</option>
                  <option value="Marital Status Adjustment">{language === 'th' ? 'ปรับสถานะสมรส' : language === 'no' ? 'Oppdatering av sivilstatus' : 'Marital Status Adjustment'}</option>
                  <option value="Birth Registration">{language === 'th' ? 'แจ้งเกิดบุตร' : language === 'no' ? 'Fødselsregistrering' : 'Birth Registration'}</option>
                  <option value="Others">{language === 'th' ? 'อื่นๆ' : language === 'no' ? 'Annet' : 'Others'}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-navy">{language === 'th' ? 'ข้อความเพิ่มเติม' : language === 'no' ? 'Tilleggsmelding' : 'Additional Message'}</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={language === 'th' ? "พิมพ์รายละเอียดที่ต้องการปรึกษา..." : language === 'no' ? "Skriv inn detaljer du ønsker å konsultere..." : "Enter details you wish to consult..."}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-navy transition-all resize-none text-sm rounded-sm"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-xs flex items-center gap-2 rounded-sm">
                  <CheckCircle2 size={16} />
                  {language === 'th' ? 'ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด' : language === 'no' ? 'Meldingen er sendt! Vi vil kontakte deg snart.' : 'Message sent successfully! We will contact you shortly.'}
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 rounded-sm">
                  <XCircle size={16} />
                  {language === 'th' ? 'เกิดข้อผิดพลาดในการส่งข้อความ โปรดลองใหม่อีกครั้ง หรือติดต่อผ่าน LINE' : language === 'no' ? 'Det oppstod en feil under sending. Prøv igjen, eller kontakt oss via LINE.' : 'Failed to send message. Please try again or contact us via LINE.'}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-brand-red text-white font-bold py-5 hover:bg-brand-red/90 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {language === 'th' ? 'กำลังส่งข้อมูล...' : language === 'no' ? 'Sender...' : 'Sending...'}
                  </>
                ) : (
                  language === 'th' ? 'ส่งข้อมูลเพื่อขอรับคำปรึกษา' : language === 'no' ? 'Send inn for konsultasjon' : 'Submit for Consultation'
                )}
              </button>

              <p className="text-center text-[10px] text-gray-400 font-light mt-4 uppercase tracking-tighter">
                {language === 'th' 
                   ? 'โดยการส่งฟอร์มนี้ คุณยอมรับเงื่อนไขการดูแลรักษาข้อมูลส่วนบุคคลตามระบบนอร์เวย์' 
                   : language === 'no'
                     ? 'Ved å sende inn dette skjemaet godtar du vilkårene for personvern i henhold til norsk lovgivning.'
                     : 'By submitting this form, you accept the personal data protection conditions under the Norwegian system.'}
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
