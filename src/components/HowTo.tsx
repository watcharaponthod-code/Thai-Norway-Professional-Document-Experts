import { motion } from 'motion/react';
import { Clock, Info, BookOpen, ChevronRight, FileSearch, ArrowRight } from 'lucide-react';
import { knowledgeBaseData } from '../data/knowledge';
import { useLanguage } from '../context/LanguageContext';

export const HowTo = () => {
  const { t, language } = useLanguage();

  const handleScrollToTopic = (id: number) => {
    const element = document.getElementById(`topic-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="how-to" className="py-24 bg-brand-cream/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-4 flex items-center justify-center gap-2"
            >
              <div className="w-8 h-[1px] bg-brand-red" />
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red">{language === 'th' ? 'ฐานความรู้และคู่มือ' : language === 'no' ? 'Kunnskapsbase og veiledninger' : 'Knowledge Base & Guides'}</p>
              <div className="w-8 h-[1px] bg-brand-red" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6 uppercase tracking-tighter"
            >
              Thainorexpert <span className="text-brand-red">Kongkhang</span>
            </motion.h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto text-xs uppercase tracking-widest leading-loose">
              {language === 'th'
                ? 'ศูนย์รวมขั้นตอนและเอกสารที่ต้องเตรียมสำหรับแต่ละบริการแบบเจาะลึก เพื่อให้งานกงสุลของคุณเป็นเรื่องง่าย'
                : language === 'no'
                  ? 'Komplett guide til prosedyrer og dokumentasjon som kreves for hver tjeneste, slik at konsulærsaker blir enkle.'
                  : 'Comprehensive guide to procedures and documentation required for each service, making consular tasks effortless.'}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-brand-navy p-8 md:p-12 mb-20 border-t-8 border-brand-red shadow-2xl skew-y-[-0.5deg]">
            <div className="flex items-center gap-4 mb-10 skew-y-[0.5deg]">
              <BookOpen className="text-brand-gold" size={24} />
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tighter">
                {language === 'th' ? 'สารบัญเนื้อหาแชร์ความรู้' : language === 'no' ? 'Kunnskapsbase og innholdsfortegnelse' : 'Knowledge Sharing Index'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 skew-y-[0.5deg]">
              {knowledgeBaseData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToTopic(item.id)}
                  className="flex items-center gap-4 text-left group hover:bg-white/5 p-3 transition-colors border-b border-white/5"
                >
                  <span className="text-brand-red font-mono text-xs font-bold w-6">
                    {item.id.toString().padStart(2, '0')}
                  </span>
                  <span className="text-gray-300 text-[11px] uppercase tracking-widest font-bold group-hover:text-brand-gold transition-colors flex items-center gap-3">
                    {language === 'th' ? item.title : language === 'no' ? (item.titleNo ?? item.titleEn) : item.titleEn}
                    <span className="flex gap-2">
                      {item.countries.map(country => (
                        <div key={country} className="flex items-center">
                          {country === 'th' ? (
                            <div className="w-5 h-3 border border-white/10 flex flex-col overflow-hidden">
                               <div className="flex-1 bg-[#EE1C25]"></div>
                               <div className="flex-1 bg-white"></div>
                               <div className="flex-[2] bg-[#00247D]"></div>
                               <div className="flex-1 bg-white"></div>
                               <div className="flex-1 bg-[#EE1C25]"></div>
                            </div>
                          ) : (
                            <div className="w-5 h-3 border border-white/10 relative bg-[#EF2B2D] overflow-hidden">
                               <div className="absolute top-[35%] bottom-[35%] left-0 right-0 bg-white"></div>
                               <div className="absolute left-[25%] right-[55%] top-0 bottom-0 bg-white"></div>
                               <div className="absolute top-[42%] bottom-[42%] left-0 right-0 bg-[#00205B]"></div>
                               <div className="absolute left-[29%] right-[59%] top-0 bottom-0 bg-[#00205B]"></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </span>
                  </span>
                  <ChevronRight size={14} className="ml-auto text-white/20 group-hover:text-brand-gold opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-24">
            {knowledgeBaseData.map((item, idx) => (
              <motion.div
                id={`topic-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
                   <div className="md:col-span-1 hidden md:block">
                      <span className="text-6xl font-display font-bold text-gray-100 absolute -top-8 -left-12 select-none">
                        {item.id.toString().padStart(2, '0')}
                      </span>
                   </div>
                    <div className="md:col-span-11 relative">
                       {/* Flags above Category Indicator */}
                       <div className="flex gap-2 mb-3">
                          {item.countries.map(country => (
                            <div key={country} className="flex items-center">
                              {country === 'th' ? (
                                <div className="w-8 h-5 border border-gray-200 shadow-sm flex flex-col overflow-hidden">
                                   <div className="flex-1 bg-[#EE1C25]"></div>
                                   <div className="flex-1 bg-white"></div>
                                   <div className="flex-[2] bg-[#00247D]"></div>
                                   <div className="flex-1 bg-white"></div>
                                   <div className="flex-1 bg-[#EE1C25]"></div>
                                </div>
                              ) : (
                                <div className="w-8 h-5 border border-gray-200 shadow-sm relative bg-[#EF2B2D] overflow-hidden">
                                   <div className="absolute top-[35%] bottom-[35%] left-0 right-0 bg-white"></div>
                                   <div className="absolute left-[25%] right-[55%] top-0 bottom-0 bg-white"></div>
                                   <div className="absolute top-[42%] bottom-[42%] left-0 right-0 bg-[#00205B]"></div>
                                   <div className="absolute left-[29%] right-[59%] top-0 bottom-0 bg-[#00205B]"></div>
                                </div>
                              )}
                            </div>
                          ))}
                       </div>

                       <div className="flex items-center gap-3 mb-4">
                         <div className="w-10 h-[2px] bg-brand-red" />
                         <span className="text-brand-red font-mono text-[10px] font-bold uppercase tracking-widest">
                           {language === 'th' ? 'หมวดหมู่คู่มือ #' : language === 'no' ? 'Veilederkategori #' : 'Guide Category #'}{item.id}
                         </span>
                       </div>
                       <h3 className="text-2xl md:text-4xl font-display font-bold text-brand-navy mb-6 uppercase tracking-tight leading-[1.1]">
                         {language === 'th' ? item.title : language === 'no' ? (item.titleNo ?? item.titleEn) : item.titleEn}
                       </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light max-w-3xl">
                        {language === 'th' ? item.description : language === 'no' ? (item.descriptionNo ?? item.descriptionEn) : item.descriptionEn}
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Steps/Process */}
                  <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                      <FileSearch size={120} className="text-brand-navy" />
                    </div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-navy mb-10 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-red" />
                      {language === 'th' ? 'ขั้นตอนการดำเนินงานโดยสังเขป' : language === 'no' ? 'OPERASJONELLE TRINN' : 'OPERATIONAL STEPS'}
                    </h4>
                    <ul className="space-y-8 relative z-10">
                      {item.steps.map((step, i) => (
                        <li key={i} className="flex gap-6 group/step">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-[10px] font-bold text-brand-navy group-hover/step:bg-brand-navy group-hover/step:text-white transition-all shadow-sm">
                            {i + 1}
                          </span>
                          <p className="text-gray-700 text-[13px] leading-relaxed font-medium">
                            {language === 'th' ? step.title : language === 'no' ? (step.titleNo ?? step.titleEn) : step.titleEn}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents & Details */}
                  <div className="space-y-8">
                    <div className="bg-brand-navy p-8 md:p-12 text-white relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-brand-red" />
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-8">
                        {language === 'th' ? 'รายการเอกสารที่ต้องจัดเตรียม' : language === 'no' ? 'NØDVENDIG DOKUMENTASJON' : 'REQUIRED DOCUMENTATION'}
                      </h4>
                      <ul className="space-y-4">
                        {(language === 'th' ? item.docs : language === 'no' ? (item.docsNo ?? item.docsEn) : item.docsEn).map((doc, i) => (
                          <li key={i} className="flex items-center gap-4 text-xs text-gray-300 font-light">
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-brand-cream/30 p-6 border border-brand-cream flex flex-col justify-center">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60 mb-2">{language === 'th' ? 'ระยะเวลาโดยประมาณ' : language === 'no' ? 'ESTIMERT VARIGHET' : 'ESTIMATED DURATION'}</span>
                        <div className="flex items-center gap-2 text-brand-navy font-display font-bold text-sm uppercase">
                          <Clock size={14} className="text-brand-red" />
                          {language === 'th' ? item.duration : language === 'no' ? (item.durationNo ?? item.durationEn) : item.durationEn}
                        </div>
                      </div>
                      <div className="bg-brand-red/5 p-6 border border-brand-red/10 flex flex-col justify-center">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-brand-red/60 mb-2">{language === 'th' ? 'ข้อควรระวังสำคัญ' : language === 'no' ? 'VIKTIG MERKNAD' : 'CRITICAL NOTE'}</span>
                        <div className="flex items-center gap-2 text-brand-navy font-medium text-[10px] leading-tight uppercase tracking-tight">
                          <Info size={14} className="text-brand-red shrink-0" />
                          {language === 'th' ? item.note : language === 'no' ? (item.noteNo ?? item.noteEn) : item.noteEn}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 h-[1px] bg-gray-100" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 text-center bg-brand-navy text-white p-12 md:p-20 relative border-t-8 border-brand-red"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 relative z-10 uppercase tracking-tighter">
              {language === 'th' ? 'พร้อมก้าวสู่ขั้นตอนต่อไป?' : language === 'no' ? 'KLAR FOR NESTE STEG?' : 'READY FOR THE NEXT STEP?'}
            </h3>
            <p className="text-white/60 font-light mb-12 max-w-2xl mx-auto relative z-10 text-xs md:text-sm uppercase tracking-widest leading-loose">
              {language === 'th'
                ? 'ให้ผู้เชี่ยวชาญดูแลความถูกต้องของเอกสารทั้งหมดแทนคุณ ลดความเสี่ยง และเพิ่มโอกาสสำเร็จสูงสุดทุกกรณี'
                : language === 'no'
                  ? 'LA VÅRE EKSPERTER HÅNDTERE ALL DOKUMENTNØYAKTIGHET FOR DEG. MINIMER RISIKOER OG MAKSIMER SUKSESS I HVERT TILFELLE.'
                  : 'LET OUR EXPERTS HANDLE ALL DOCUMENT ACCURACY FOR YOU. MINIMIZE RISKS AND MAXIMIZE SUCCESS IN EVERY CASE.'}
            </p>
            <a 
              href="https://line.me/ti/p/@thainorexpert" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-6 bg-brand-red hover:bg-white hover:text-brand-navy text-white px-12 py-6 font-bold transition-all uppercase tracking-widest text-sm relative z-10 shadow-xl group"
            >
              {language === 'th' ? 'ปรึกษาฟรีผ่าน LINE' : language === 'no' ? 'GRATIS KONSULTASJON VIA LINE' : 'FREE CONSULTATION VIA LINE'}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

