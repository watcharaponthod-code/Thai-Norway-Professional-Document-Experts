import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'th' | 'en' | 'no';

interface Translations {
  [key: string]: {
    th: string;
    en: string;
    no: string;
  };
}

export const translations: Translations = {
  // Navbar
  nav_home: { th: 'หน้าแรก', en: 'Home', no: 'Hjem' },
  nav_services: { th: 'บริการของเรา', en: 'Our Services', no: 'Våre tjenester' },
  nav_checklist: { th: 'รายการตรวจสอบเอกสาร', en: 'Document Checklist', no: 'Dokumentsjekkliste' },
  nav_process: { th: 'ขั้นตอนการดำเนินการ', en: 'Process & Steps', no: 'Fremgangsmåte' },
  nav_contact: { th: 'ติดต่อเรา', en: 'Contact Us', no: 'Kontakt oss' },
  nav_signin: { th: 'เข้าสู่ระบบ', en: 'Sign In', no: 'Logg inn' },
  nav_create_account: { th: 'สร้างบัญชีผู้ใช้', en: 'Create Account', no: 'Opprett konto' },

  // Hero
  hero_title: { th: 'THAINOREXPERT KONGKHANG', en: 'THAINOREXPERT KONGKHANG', no: 'THAINOREXPERT KONGKHANG' },
  hero_subtitle: { th: 'บริการเอกสารราชการอย่างเป็นทางการ', en: 'Official Document Services', no: 'Offisielle dokumenttjenester' },
  hero_description: {
    th: 'ผู้เชี่ยวชาญด้านเอกสารและวีซ่า ไทย-นอร์เวย์ แบบครบวงจร',
    en: 'Your Professional Thai-Norwegian Document & Visa Specialists',
    no: 'Din profesjonelle Thai-norske dokumentspesialist'
  },
  hero_badge: {
    th: 'บริการที่ผ่านการรับรองอย่างเป็นทางการ — ตั้งอยู่ที่เมือง Lier ประเทศนอร์เวย์',
    en: 'Certified Official Services — Based in Lier, Norway',
    no: 'Sertifiserte offisielle tjenester — Basert i Lier, Norge'
  },
  hero_article_title: {
    th: 'Thainorexpert Kongkhang|เชื่อมต่อไทย-นอร์เวย์ ให้เรื่องเอกสารเป็นเรื่องง่าย',
    en: 'Thainorexpert Kongkhang|Connecting Thailand–Norway, Making Documents Easy',
    no: 'Thainorexpert Kongkhang|Forbinder Thailand–Norge, gjør dokumenter enkelt'
  },
  hero_article_subtitle: {
    th: 'ผู้ช่วยมืออาชีพตัวจริง ด้านเอกสาร วีซ่า และการประสานงานระหว่างประเทศ ครบจบในที่เดียว',
    en: 'Your True Professional Partner for Documents, Visas & International Coordination — All in One Place',
    no: 'Din ekte profesjonelle partner for dokumenter, visum og internasjonal koordinering — alt på ett sted'
  },
  hero_article_content: {
    th: 'การทำเรื่องเอกสารข้ามประเทศไม่ว่าจะเป็นเรื่องการแจ้งเกิดเพื่อขอสัญชาติไทย สำหรับคนไทยที่คลอดบุตรในต่างประเทศ (นอร์เวย์) รวมทั้งการเตรียมเอกสารเพื่อนำไปบันทึกฐานะแห่งครอบครัวในระบบทะเบียนราษฎรของไทย เช่น สถานะสมรส, สถานะหย่า, สถานะหม้าย หรือชาวต่างชาติต้องการจดทะเบียนสมรสในประเทศไทย, เอกสารการทำธุรกรรมเกี่ยวกับที่ดิน, ธนาคาร ฯลฯ||ชาวนอร์เวย์ต้องการทำวีซ่าไปประเทศไทย ซึ่งแต่ละงานมักจะมีความยุ่งยาก ซับซ้อน และต้องใช้ความแม่นยำสูง Thainorexpert Kongkhang เข้าใจถึงปัญหานี้ดี เราจึงพร้อมเป็น "คนประสานงาน" ที่จะช่วยแบ่งเบาภาระและทำให้ทุกขั้นตอนของคุณราบรื่นที่สุด||บริการของเราดูแลโดยผู้มีความรู้ ความสามารถ มีความเชี่ยวชาญ และมีประสบการณ์ด้านนี้มายาวนาน และพร้อมอัปเดตข้อมูลทุกวันแบบเคสบายเคส มั่นใจได้ว่าเคสของคุณจะได้รับการดูแลอย่างถูกต้องตามข้อบังคับล่าสุดของทั้งสองประเทศ',
    en: 'Cross-border document processing — from birth registration for Thai nationals born abroad (Norway), preparing documents for family status records in Thailand\'s civil registration system (marriage, divorce, widowhood), foreign nationals registering marriage in Thailand, land and banking transactions, and more.||Norwegian nationals needing a Thai visa face the same complexity. Each task is often complicated, multi-layered, and requires high precision. Thainorexpert Kongkhang understands this well and is ready to be your dedicated coordinator to ease the burden and ensure every step runs smoothly.||Our services are managed by knowledgeable, capable, and highly experienced professionals who update their expertise case-by-case every day — ensuring your case is handled correctly according to the latest regulations of both countries.',
    no: 'Grensekryssende dokumentbehandling — fra fødselsregistrering for thailandske statsborgere født i utlandet (Norge), forberedelse av dokumenter for familiestatusregistrering i Thailands folkeregister (ekteskap, skilsmisse, enkestand), utenlandske statsborgere som gifter seg i Thailand, eiendoms- og banktransaksjoner og mer.||Nordmenn som trenger thai-visum møter den samme kompleksiteten. Hvert oppdrag er ofte komplisert og krever høy presisjon. Thainorexpert Kongkhang forstår dette godt og er klar til å være din dedikerte koordinator.||Tjenestene våre ledes av kunnskapsrike og erfarne fagfolk som oppdaterer sin ekspertise sak for sak hver dag — og sikrer at din sak håndteres korrekt i henhold til gjeldende regelverk i begge land.'
  },
  hero_services_intro: {
    th: 'บริการครบวงจร ที่ตอบโจทย์ทุกความต้องการของคุณ เราไม่ได้เพียงแค่ให้คำปรึกษา แต่เรา "ดูแล" คุณตั้งแต่ต้นจนจบ',
    en: 'Comprehensive Services — We don\'t just consult, we "take care" of you from start to finish.',
    no: 'Omfattende tjenester — Vi gir ikke bare råd, vi "tar vare på" deg fra start til slutt.'
  },
  hero_features: {
    th: '• งานวีซ่า (Visa Services): รับทำวีซ่าไทย พร้อมให้คำแนะนำอย่างละเอียด||• งานทะเบียนและกงสุล (Consular & Registration Services): จัดเตรียมเชคลิสต์แจ้งเกิดเพื่อขอสัญชาติไทย สำหรับคนไทยที่คลอดบุตรในต่างประเทศ (นอร์เวย์), รวมทั้งการเตรียมเอกสารเพื่อนำไปบันทึกฐานะแห่งครอบครัวในระบบทะเบียนราษฎรของไทย เช่น สถานะสมรส, สถานะหย่า, สถานะหม้าย หรือชาวต่างชาติต้องการจดทะเบียนสมรสในประเทศไทย||• ตรวจสอบความถูกต้อง (Accuracy Check): ตรวจสอบเอกสารทุกฉบับอย่างละเอียดก่อนยื่นจริง เพื่อลดความผิดพลาดและการเสียเวลา||• ประสานงานภาครัฐ (Government Liaison): ดำเนินการติดต่อและประสานงานกับหน่วยงานราชการทั้งนอร์เวย์และไทยแทนคุณ||• รับส่งเอกสารปลอดภัย (Secure Delivery): มีบริการส่งเอกสารสำคัญกลับประเทศไทยอย่างปลอดภัยไร้กังวล',
    en: '• Visa Services: Thai visa processing with detailed expert guidance||• Consular & Registration Services: Birth registration checklist for Thai nationals born abroad (Norway), plus preparation of documents for family status records in Thailand\'s civil registration system — marriage, divorce, widowhood — and marriage registration in Thailand for foreign nationals||• Accuracy Check: Thorough review of every document before submission to reduce errors and save time||• Government Liaison: We handle all contacts and coordination with official authorities in both Norway and Thailand on your behalf||• Secure Delivery: Safe and worry-free delivery of important documents back to Thailand',
    no: '• Visum (Visa Services): Thai visumbehandling med detaljert ekspertveiledning||• Konsulær & Registrering: Sjekkliste for fødselsregistrering for thai-statsborgere født i utlandet (Norge), samt forberedelse av dokumenter for familiestatusregistrering i Thailands folkeregister — ekteskap, skilsmisse, enkestand — og ekteskapsregistrering i Thailand for utenlandske statsborgere||• Nøyaktighetssjekk: Grundig gjennomgang av alle dokumenter før innsending for å redusere feil og spare tid||• Myndighetskontakt: Vi tar hånd om all kontakt og koordinering med offentlige myndigheter i både Norge og Thailand på dine vegne||• Sikker Levering: Trygg og bekymringsfri levering av viktige dokumenter tilbake til Thailand'
  },
  hero_closing_title: {
    th: 'ดูแลด้วยหัวใจ มั่นใจด้วยมืออาชีพ',
    en: 'Care from the Heart, Confidence from Professionals',
    no: 'Omsorg fra hjertet, trygghet fra fagfolk'
  },
  hero_closing_text: {
    th: 'ทีมพาร์ทเนอร์ของเราทุกคนคือมืออาชีพที่มีประสบการณ์ พร้อมทำงานด้วยความซื่อสัตย์ โปร่งใส และใส่ใจในทุกรายละเอียด เพื่อให้คุณได้รับบริการที่ดีที่สุด รวดเร็วที่สุด และประหยัดเวลาที่สุด',
    en: 'Every member of our partner team is an experienced professional, ready to work with honesty, transparency, and attention to every detail — so you receive the best, fastest, and most time-efficient service possible.',
    no: 'Hvert medlem av partnerteamet vårt er en erfaren fagperson, klar til å arbeide med ærlighet, åpenhet og oppmerksomhet på alle detaljer — slik at du får den beste, raskeste og mest tidseffektive tjenesten.'
  },
  hero_closing_quote: {
    th: '"ปล่อยให้เรื่องเอกสารยากๆ เป็นหน้าที่ของเรา... Thainorexpert Kongkhang พร้อมยืนเคียงข้างคุณ เพื่อให้คุณเริ่มต้นบทใหม่ของชีวิตในต่างแดนหรือการกลับบ้านได้อย่างมั่นใจและไร้กังวลค่ะ"',
    en: '"Let the complex paperwork be our responsibility... Thainorexpert Kongkhang stands by your side, so you can begin your new chapter abroad or return home with confidence and peace of mind."',
    no: '"La det komplekse papirarbeidet være vårt ansvar... Thainorexpert Kongkhang står ved din side, slik at du kan starte et nytt kapittel i livet ditt i utlandet eller returnere hjem med trygghet og ro."'
  },
  cta_consultation: { th: 'ปรึกษาเราเลยวันนี้', en: 'Consult Us Today', no: 'Kontakt oss i dag' },

  // Quick Actions
  qa_visa_title: { th: 'ต้องการทำวีซ่า?', en: 'Need a Visa?', no: 'Trenger du visum?' },
  qa_visa_desc: { th: 'ตรวจสอบเงื่อนไขและประเภทวีซ่าเบื้องต้น', en: 'Check requirements and visa categories', no: 'Sjekk krav og visumkategorier' },
  qa_online_title: { th: 'ยื่นเอกสารออนไลน์ได้ไหม?', en: 'Can I Apply Online?', no: 'Kan jeg søke digitalt?' },
  qa_online_desc: { th: 'ตรวจสอบความพร้อมสำหรับการยื่นทางออนไลน์', en: 'Check eligibility for online submission', no: 'Sjekk om din sak kan behandles digitalt' },
  qa_online_detail: {
    th: 'ปัจจุบันการยื่นวีซ่านอร์เวย์และบริการกงสุลหลายส่วนสามารถทำผ่านระบบออนไลน์ได้ ประหยัดเวลาและค่าใช้จ่าย เราพร้อมช่วยคุณตรวจสอบความพร้อมของเอกสารดิจิทัลและแนะนำขั้นตอนการอัปโหลดที่ถูกต้อง เพื่อลดโอกาสในการถูกปฏิเสธเนื่องจากเอกสารไม่ครบถ้วน',
    en: 'Many Norwegian visa and consular services are now available online, saving both time and costs. We help you prepare your digital documents and guide you through the correct submission process to minimize the risk of rejection due to incomplete documentation.',
    no: 'Mange norske visum- og konsulatstjenester er nå tilgjengelige digitalt, noe som sparer tid og kostnader. Vi hjelper deg med å forberede digitale dokumenter og veileder deg gjennom riktig innsendingsprosess for å minimere risikoen for avvisning.'
  },
  qa_visa_detail: {
    th: 'ไม่ว่าคุณจะต้องการวีซ่าท่องเที่ยว วีซ่าเยี่ยมเยียน หรือวีซ่าติดตามครอบครัว เรามีผู้เชี่ยวชาญคอยให้คำปรึกษาเชิงลึกเกี่ยวกับระเบียบการของ UDI และสถานทูต เตรียมตัวให้พร้อมที่สุดเพื่อผลลัพธ์ที่ดีที่สุด',
    en: 'Whether you need a tourist, visitor, or family reunification visa, our experts provide in-depth consultation on UDI and Embassy regulations to help you achieve the best possible outcome.',
    no: 'Enten du trenger turistvisum, besøksvisum eller familiegjenforeningsvisum, gir våre eksperter grundig veiledning om UDI- og ambassaderegler for å sikre best mulig resultat.'
  },
  qa_choice_detail: {
    th: 'ด้วยบริการที่หลากหลายของเรา เราจะช่วยประเมินสถานภาพและเป้าหมายของคุณ เพื่อเลือกประเภทการรับรองเอกสารหรือประเภทวีซ่าที่เหมาะสมที่สุด ประหยัดทั้งเงินและเวลาด้วยการวางแผนที่ถูกต้องตั้งแต่ก้าวแรก',
    en: 'With our comprehensive range of services, we assess your situation and goals to recommend the most suitable document certification or visa type — saving you both time and money from the very first step.',
    no: 'Med vårt brede tjenestetilbud vurderer vi din situasjon og dine mål for å anbefale den mest hensiktsmessige dokumentsertifiseringen eller visumtypen — og sparer deg for tid og penger fra første steg.'
  },
  qa_choice_title: { th: 'เลือกบริการประเภทใดดี?', en: 'Which Service Is Right for Me?', no: 'Hvilken tjeneste passer for meg?' },
  qa_choice_desc: { th: 'เลือกบริการที่เหมาะสมกับกรณีของคุณ', en: 'Find the service that matches your situation', no: 'Finn tjenesten som passer din situasjon' },

  // Services
  services_title: { th: 'รายการบริการทางวิชาชีพ', en: 'Professional Services', no: 'Profesjonelle tjenester' },
  services_desc: {
    th: 'ศูนย์บริการจัดการเอกสารทางกฎหมายและธุรกรรม ไทย-นอร์เวย์ อย่างครบวงจร',
    en: 'Comprehensive Thai-Norwegian legal document and transaction management center',
    no: 'Komplett senter for håndtering av juridiske dokumenter og transaksjoner mellom Thailand og Norge'
  },
  services_btn_detail: { th: 'ดูรายละเอียด', en: 'View Details', no: 'Se detaljer' },

  // Checklist
  checklist_title_1: { th: 'รายการเอกสาร', en: 'Document', no: 'Dokumenter' },
  checklist_title_2: { th: 'ที่ต้องจัดเตรียม', en: 'Checklist', no: 'som må forberedes' },
  checklist_desc: {
    th: 'เพื่อให้การดำเนินการเป็นไปอย่างถูกต้องและรวดเร็ว กรุณาตรวจสอบและจัดเตรียมเอกสารตามรายการเบื้องต้นดังต่อไปนี้',
    en: 'To ensure accurate and efficient processing, please review and prepare the following preliminary document list.',
    no: 'For å sikre korrekt og effektiv saksbehandling, vennligst gjennomgå og forbered følgende dokumentliste.'
  },
  checklist_advice_label: { th: 'ข้อแนะนำสำคัญ', en: 'Important Notice', no: 'Viktig merknad' },
  checklist_advice_text: {
    th: 'เอกสารทุกฉบับที่จะนำไปใช้ในต่างประเทศ จำเป็นต้องได้รับการแปลและรับรองความถูกต้องโดยหน่วยงานของรัฐที่เกี่ยวข้อง มิเช่นนั้นจะไม่สามารถนำไปอ้างอิงทางกฎหมายในประเทศนอร์เวย์ได้เลย',
    en: 'All documents intended for use abroad must be translated and certified by the relevant government authorities. Failure to do so will result in the documents having no legal standing in Norway.',
    no: 'Alle dokumenter som skal brukes i utlandet, må oversettes og sertifiseres av relevante offentlige myndigheter. Dersom dette ikke gjøres, vil dokumentene ikke ha rettslig gyldighet i Norge.'
  },
  services_modal_steps: { th: 'ขั้นตอนการดำเนินการ', en: 'Process Steps', no: 'Prosesstrinn' },
  services_modal_docs: { th: 'เอกสารที่ต้องเตรียม', en: 'Required Documents', no: 'Nødvendige dokumenter' },
  services_modal_duration: { th: 'ระยะเวลาดำเนินการ', en: 'Processing Time', no: 'Behandlingstid' },
  services_modal_note: { th: 'หมายเหตุ', en: 'Note', no: 'Merknad' },
  services_modal_close: { th: 'ปิดหน้าต่าง', en: 'Close', no: 'Lukk' },

  // Why Us
  why_title: { th: 'เหตุใดจึงควรเลือกเรา?', en: 'Why Choose Us?', no: 'Hvorfor velge oss?' },
  why_quote: {
    th: '"ดูแลด้วยหัวใจ มั่นใจด้วยมืออาชีพ"',
    en: '"Care from the Heart, Confidence from Professionals"',
    no: '"Omsorg fra hjertet, trygghet fra fagfolk"'
  },
  why_desc: {
    th: 'ทีมพาร์ทเนอร์ของเราทุกคนคือมืออาชีพที่มีประสบการณ์ พร้อมทำงานด้วยความซื่อสัตย์ โปร่งใส และใส่ใจในทุกรายละเอียด เพื่อให้คุณได้รับบริการที่ดีที่สุด รวดเร็วที่สุด และประหยัดเวลาที่สุด "ปล่อยให้เรื่องเอกสารยากๆ เป็นหน้าที่ของเรา... Thainorexpert Kongkhang พร้อมยืนเคียงข้างคุณ เพื่อให้คุณเริ่มต้นบทใหม่ของชีวิตในต่างแดนหรือการกลับบ้านได้อย่างมั่นใจและไร้กังวล"',
    en: 'Every member of our partner team is an experienced professional committed to honesty, transparency, and attention to detail — delivering the best, fastest, and most time-efficient service possible. "Let us handle the complex paperwork... Thainorexpert Kongkhang stands by your side so you can start your new chapter abroad or return home with confidence and peace of mind."',
    no: 'Hvert medlem av partnerteamet vårt er en erfaren fagperson som er forpliktet til ærlighet, åpenhet og oppmerksomhet på detaljer. "La oss ta hånd om det komplekse papirarbeidet... Thainorexpert Kongkhang står ved din side slik at du kan starte et nytt kapittel i livet ditt i utlandet eller returnere hjem med trygghet og ro."'
  },
  why_expert_title: { th: 'ความเชี่ยวชาญเฉพาะด้าน', en: 'Specialized Expertise', no: 'Spesialisert kompetanse' },
  why_expert_desc: {
    th: 'เข้าใจกฎระเบียบของกงสุลและ UDI อย่างลึกซึ้ง',
    en: 'Deep understanding of Consular and UDI regulations',
    no: 'Inngående kunnskap om konsulære regler og UDI-forskrifter'
  },
  why_secure_title: { th: 'ปลอดภัย 100%', en: '100% Secure', no: '100% Sikker' },
  why_secure_desc: {
    th: 'รักษาความลับและความปลอดภัยของเอกสารสำคัญในระดับสูงสุด',
    en: 'Highest level of confidentiality and security for your important documents',
    no: 'Høyeste nivå av konfidensialitet og sikkerhet for dine viktige dokumenter'
  },

  // How it works
  how_title: { th: 'ขั้นตอนการดำเนินงาน', en: 'How It Works', no: 'Slik fungerer det' },
  how_step1_title: { th: 'ให้คำปรึกษาและประเมิน', en: 'Consultation & Evaluation', no: 'Konsultasjon og vurdering' },
  how_step1_desc: {
    th: 'วิเคราะห์กรณีและแจ้งรายละเอียดเอกสารที่ต้องใช้',
    en: 'Analyze your case and specify the required documentation',
    no: 'Analysere saken din og spesifisere nødvendig dokumentasjon'
  },
  how_step2_title: { th: 'เตรียมการและตรวจสอบ', en: 'Preparation & Verification', no: 'Forberedelse og kontroll' },
  how_step2_desc: {
    th: 'เราตรวจสอบความถูกต้องของเอกสารก่อนยื่นจริง',
    en: 'We verify the accuracy of all documents prior to submission',
    no: 'Vi kontrollerer nøyaktigheten av alle dokumenter før innsending'
  },
  how_step3_title: { th: 'ดำเนินการรับรองเอกสาร', en: 'Document Authentication', no: 'Dokumentautentisering' },
  how_step3_desc: {
    th: 'ดำเนินการขั้นตอนกงสุลและสถานทูตแทนคุณ',
    en: 'We handle all Consular and Embassy procedures on your behalf',
    no: 'Vi håndterer alle konsulære og ambassadeprosedyrer på dine vegne'
  },
  how_step4_title: { th: 'ส่งมอบเอกสาร', en: 'Document Delivery', no: 'Dokumentlevering' },
  how_step4_desc: {
    th: 'ส่งมอบเอกสารคืนถึงมือคุณอย่างปลอดภัย',
    en: 'Secure delivery of completed documents back to you',
    no: 'Sikker levering av ferdigstilte dokumenter til deg'
  },

  // How To Section
  howto_title: { th: 'คู่มือและขั้นตอนการรับรองเอกสาร', en: 'Document Certification Guide', no: 'Veiledning for dokumentsertifisering' },
  howto_desc: {
    th: 'เราสรุปขั้นตอนสำคัญและเอกสารที่ต้องเตรียมสำหรับแต่ละบริการ เพื่อช่วยให้คุณเตรียมการได้อย่างถูกต้องและรวดเร็ว',
    en: 'We outline the key steps and required documents for each service to help you prepare accurately and efficiently.',
    no: 'Vi beskriver de viktigste trinnene og nødvendige dokumenter for hver tjeneste, slik at du kan forberede deg korrekt og effektivt.'
  },

  // CTA Section
  cta_title: { th: 'เริ่มต้นการรับรองเอกสารที่ถูกต้อง วันนี้', en: 'Begin Your Official Documentation Process Today', no: 'Start din offisielle dokumentprosess i dag' },
  cta_desc: {
    th: 'ทีมงาน Thainorexpert Kongkhang พร้อมให้คำปรึกษาและดูแลเอกสารสำคัญของคุณตามมาตรฐานสากล',
    en: 'The Thainorexpert Kongkhang team is ready to consult and manage your important documents to international standards.',
    no: 'Thainorexpert Kongkhang-teamet er klare til å rådgi og håndtere dine viktige dokumenter etter internasjonale standarder.'
  },
  cta_button: { th: 'ปรึกษาเราทาง LINE', en: 'Contact Us via LINE', no: 'Kontakt oss via LINE' },

  // FAQ
  faq_title: { th: 'คำถามที่พบบ่อย', en: 'Frequently Asked Questions', no: 'Ofte stilte spørsmål' },
  faq_desc: {
    th: 'รวบรวมคำถามเบื้องต้นเพื่อให้คุณเข้าใจบริการของเราได้อย่างชัดเจน',
    en: 'A collection of common questions to help you better understand our services',
    no: 'En samling vanlige spørsmål for å hjelpe deg å forstå tjenestene våre bedre'
  },
  faq_footer: {
    th: 'ไม่พบคำตอบที่ต้องการ? ติดต่อเราได้ที่',
    en: "Can't find the answer you're looking for? Contact us at",
    no: 'Finner du ikke svaret du leter etter? Kontakt oss på'
  },

  // Contact
  contact_title_1: { th: 'ปรึกษาผู้เชี่ยวชาญ', en: 'Consult the Expert', no: 'Kontakt eksperten' },
  contact_title_2: { th: 'สุกัญญา คงแข็ง', en: 'Sukanya Kongkhang', no: 'Sukanya Kongkhang' },
  contact_desc: {
    th: 'เรายินดีให้คำปรึกษาเบื้องต้นโดยไม่มีค่าใช้จ่าย ไม่ว่าคุณจะอยู่ในขั้นเตรียมการหรือประสบปัญหาระหว่างดำเนินการ เราพร้อมให้ความช่วยเหลือทั้งในนอร์เวย์และไทย',
    en: 'We offer a free initial consultation whether you are in the preparation stage or encountering difficulties. We are here to assist you, both in Norway and Thailand.',
    no: 'Vi tilbyr gratis innledende konsultasjon enten du er i forberedelsesfasen eller støter på vanskeligheter. Vi er her for å hjelpe deg, både i Norge og Thailand.'
  },
  contact_phone: { th: 'หมายเลขโทรศัพท์', en: 'Phone Number', no: 'Telefonnummer' },
  contact_email: { th: 'อีเมลทางการ', en: 'Official Email', no: 'Offisiell e-post' },
  contact_address: { th: 'ที่อยู่สำนักงาน', en: 'Office Address', no: 'Kontoradresse' },
  contact_hours: { th: 'เวลาทำการ', en: 'Business Hours', no: 'Åpningstider' },
  contact_hours_val: {
    th: 'เปิดทุกวัน: 09:00 – 20:00 (เวลานอร์เวย์)',
    en: 'Open Daily: 09:00 – 20:00 (Norway Time)',
    no: 'Åpent daglig: 09:00 – 20:00 (norsk tid)'
  },

  // Footer
  footer_copy: {
    th: '© 2024 Thainorexpert Kongkhang. สงวนลิขสิทธิ์ทุกประการ.',
    en: '© 2024 Thainorexpert Kongkhang. All rights reserved.',
    no: '© 2024 Thainorexpert Kongkhang. Alle rettigheter forbeholdt.'
  },
  footer_about: { th: 'เกี่ยวกับเรา', en: 'About Us', no: 'Om oss' },
  footer_privacy: { th: 'นโยบายความเป็นส่วนตัว', en: 'Privacy Policy', no: 'Personvernregler' },
  footer_terms: { th: 'ข้อกำหนดการใช้งาน', en: 'Terms of Use', no: 'Brukervilkår' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLineQRModalOpen: boolean;
  setIsLineQRModalOpen: (open: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('th');
  const [isLineQRModalOpen, setIsLineQRModalOpen] = useState(false);

  const t = (key: string) => {
    if (!translations[key]) return key;
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLineQRModalOpen, setIsLineQRModalOpen }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
