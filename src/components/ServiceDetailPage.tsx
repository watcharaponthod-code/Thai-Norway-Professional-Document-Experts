import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, CheckCircle2, FileText, Info } from 'lucide-react';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const service = servicesData.find(s => s.id === parseInt(id || '0'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <button 
            onClick={() => navigate(-1)}
            className="text-brand-red font-bold hover:underline"
          >
            {language === 'th' ? 'กลับไปจุดเดิม' : language === 'no' ? 'Tilbake til forrige side' : 'Back to previous page'}
          </button>
        </div>
      </div>
    );
  }

  const title = language === 'th' ? service.title : language === 'no' ? (service.titleNo ?? service.titleEn) : service.titleEn;
  const detailedDesc = language === 'th' ? service.detailedDesc : language === 'no' ? (service.detailedDescNo ?? service.detailedDescEn) : service.detailedDescEn;
  const steps = service.detailedSteps;
  const expertTips = language === 'th' ? service.expertTips : language === 'no' ? (service.expertTipsNo ?? service.expertTipsEn) : service.expertTipsEn;
  const conclusion = language === 'th' ? service.conclusion : language === 'no' ? (service.conclusionNo ?? service.conclusionEn) : service.conclusionEn;

  return (
    <div className="min-h-screen bg-[#f8f5f0] py-12 px-4 md:py-24 selection:bg-brand-red/20">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-brand-navy mb-8 hover:text-brand-red transition-colors font-bold uppercase tracking-widest text-xs group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {language === 'th' ? 'กลับไปที่เดิม' : language === 'no' ? 'Tilbake' : 'Back to Previous'}
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100 relative mb-12"
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
            style={{ 
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' 
            }} 
          />

          {/* Side Border (Stripe) */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-brand-red" />
          
          <div className="bg-brand-navy text-white p-8 md:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ 
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest">
                    Verified Route
                  </div>
                  <span className="text-white/40 font-mono text-xs font-bold tracking-widest">ID: #{service.id.toString().padStart(4, '0')}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[0.85] break-words">
                  {title}
                </h1>
              </div>
              <div className="flex-shrink-0 bg-white/5 p-6 rounded-sm backdrop-blur-md border border-white/10 text-center min-w-[140px]">
                <FileText className="text-brand-red mx-auto mb-3" size={40} />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">Expert Guide</p>
                <div className="mt-2 w-full h-[1px] bg-white/20" />
                <p className="mt-2 text-[8px] font-bold uppercase tracking-widest text-brand-red italic">Thainorexpert</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-16 relative">
             {/* Decorative Stamp Seal */}
             <div className="absolute top-10 right-10 md:right-16 w-32 h-32 opacity-[0.05] pointer-events-none rotate-12 select-none hidden md:block">
               <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-navy">
                 <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50s50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40s-17.9 40-40 40z" />
                 <text x="50" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" className="fill-brand-navy uppercase">Legalized</text>
                 <text x="50" y="60" textAnchor="middle" fontSize="6" fontWeight="bold" className="fill-brand-navy uppercase">Official Expert</text>
                 <path d="M30 50h40M50 30v40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
               </svg>
             </div>

            {/* Introduction */}
            <section className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Info size={18} />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-navy border-b border-brand-navy/10 pb-1">
                  {language === 'th' ? 'ข้อมูลเชิงลึกและหลักการดำเนินการ' : language === 'no' ? 'Dybdeprinsipper og innsikt' : 'In-depth Principles & Insights'}
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                {detailedDesc}
              </p>
            </section>

            {/* Expert Tips / Pro Tips */}
            {expertTips && expertTips.length > 0 && (
              <section className="mb-20">
                <div className="bg-brand-navy/5 border border-brand-navy/10 p-8 rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
                    <CheckCircle2 size={120} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy uppercase tracking-tight mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 bg-brand-red rounded-full" />
                    {language === 'th' ? 'เคล็ดลับจากผู้เชี่ยวชาญ (Pro Tips)' : language === 'no' ? 'Eksperttips og innsikt' : 'Pro Tips & Expert Insights'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {expertTips.map((tip, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-brand-red">
                         <p className="text-sm font-bold text-brand-navy leading-relaxed">
                           {tip}
                         </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Detailed Steps */}
            {steps && steps.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl font-display font-bold text-brand-navy uppercase tracking-tight mb-12 flex items-center gap-4">
                  <div className="h-10 w-1 bg-brand-red" />
                  {language === 'th' ? 'ขั้นตอนการดำเนินงานทีละขั้น' : language === 'no' ? 'Steg-for-steg-metode' : 'Step-by-Step Methodology'}
                </h2>
                <div className="space-y-12">
                  {steps.map((step, idx) => (
                    <div key={idx} className="group flex gap-8 relative">
                      {idx !== steps.length - 1 && (
                        <div className="absolute left-[19px] top-10 bottom-[-48px] w-[2px] bg-brand-navy/5 group-hover:bg-brand-red/20 transition-colors" />
                      )}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy group-hover:bg-brand-red flex items-center justify-center text-white text-sm font-bold z-10 transition-colors shadow-lg">
                        {idx + 1}
                      </div>
                      <div className="pt-1">
                        <h3 className="text-xl font-bold text-brand-navy uppercase tracking-tight mb-3">
                          {language === 'th' ? step.title : language === 'no' ? (step.titleNo ?? step.titleEn) : step.titleEn}
                        </h3>
                        <div className="bg-gray-50/50 p-6 rounded-sm border-l-2 border-brand-navy/10 group-hover:border-brand-red/30 transition-colors">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {language === 'th' ? step.desc : language === 'no' ? (step.descNo ?? step.descEn) : step.descEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* In-page Checklist Summary */}
            <div className="bg-[#fcf8f0] p-10 rounded-sm border border-brand-red/10 mb-20 relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-red/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] mb-8 text-brand-red flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center">
                  <CheckCircle2 size={14} />
                </div>
                {language === 'th' ? 'สรุปรายการเตรียมความพร้อม' : language === 'no' ? 'Beredskapsliste' : 'Readiness Checklist'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {(language === 'th' ? service.steps : language === 'no' ? (service.stepsNo ?? service.stepsEn) : service.stepsEn)?.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-5 h-5 rounded-sm border border-brand-red/30 flex items-center justify-center group-hover/item:border-brand-red transition-colors">
                      <div className="w-2.5 h-2.5 bg-brand-red opacity-0 group-hover/item:opacity-100 transition-opacity rounded-sm" />
                    </div>
                    <span className="text-xs font-bold text-brand-navy/70 uppercase tracking-widest">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            {conclusion && (
               <section className="bg-brand-navy p-12 text-white rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 blur-[80px]" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-[2px] bg-brand-red" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-red">Official Recommendation</p>
                  </div>
                  <p className="text-xl md:text-2xl font-display font-medium leading-relaxed uppercase tracking-tight">
                    {conclusion}
                  </p>
               </section>
            )}
          </div>

          {/* Footer of the Paper */}
          <div className="bg-gray-50/50 py-10 px-12 text-center border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 grayscale opacity-60">
             <div className="flex gap-4">
                <div className="w-6 h-6 grayscale"><img src="https://flagcdn.com/th.svg" alt="Thailand" /></div>
                <div className="w-6 h-6 grayscale"><img src="https://flagcdn.com/no.svg" alt="Norway" /></div>
             </div>
             <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.6em]">Thainorexpert Kongkhang Official Documentation Hub — Oslo / Bangkok</p>
             <p className="text-[9px] font-mono text-gray-400">© 2024 THAINOREXPERT. ALL RIGHTS RESERVED.</p>
          </div>
        </motion.div>

        {/* Action Button */}
        <div className="text-center pb-12">
            <HashLink 
              to="/#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-brand-red text-white font-bold py-6 px-16 rounded-sm transition-all duration-300 uppercase tracking-[0.3em] text-sm shadow-2xl hover:bg-brand-navy active:scale-95"
            >
              <span className="relative z-10">{language === 'th' ? 'ปรึกษาผู้เชี่ยวชาญ สุกัญญา คงแข็ง' : language === 'no' ? 'Konsulter ekspert Sukanya Kongkhang' : 'Consult Expert Sukanya Kongkhang'}</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </HashLink>
            <p className="mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">{language === 'th' ? 'พร้อมให้บริการตลอด 24/7 ผ่าน LINE และอีเมล' : language === 'no' ? 'Tilgjengelig 24/7 via LINE og e-post' : 'Available 24/7 via LINE & Email'}</p>
        </div>
      </div>
    </div>
  );
};
