export interface ServiceDetail {
  id: number;
  title: string;
  titleEn: string;
  titleNo?: string;
  summary: string;
  summaryEn: string;
  summaryNo?: string;
  steps?: string[];
  stepsEn?: string[];
  stepsNo?: string[];
  docs?: string[];
  docsEn?: string[];
  docsNo?: string[];
  duration?: string;
  durationEn?: string;
  durationNo?: string;
  note?: string;
  noteEn?: string;
  noteNo?: string;
  detailedDesc?: string;
  detailedDescEn?: string;
  detailedDescNo?: string;
  detailedSteps?: { title: string; desc: string; titleEn: string; descEn: string; titleNo?: string; descNo?: string }[];
  expertTips?: string[];
  expertTipsEn?: string[];
  expertTipsNo?: string[];
  conclusion?: string;
  conclusionEn?: string;
  conclusionNo?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 1,
    title: 'ให้คำแนะนำเกี่ยวกับเอกสารนอร์เวย์-ไทย',
    titleEn: 'Advisory on Norwegian-Thai Documents',
    titleNo: 'Rådgivning om norsk-thailandske dokumenter',
    summary: 'บริการให้คำปรึกษาเชิงลึกเกี่ยวกับระเบียบและขั้นตอนการเตรียมเอกสารทั้งสองประเทศอย่างละเอียด',
    summaryEn: 'In-depth consultation on regulations and preparation steps for both countries.',
    summaryNo: 'Dybdekonsultasjon om forskrifter og forberedelsestrinn for begge land.',
    detailedDesc: 'การเตรียมเอกสารระหว่างประเทศไทยและนอร์เวย์ไม่ใช่แค่เรื่องของการทำสำเนา แต่เป็นเรื่องราวของ "ความถูกต้องตามระบบกฎหมายสองขั้ว" (Bilateral Legal Synchronization) ข้อมูลที่คุณได้รับจากเราไม่ใช่เพียงข้อมูลทั่วไปในเว็บไซต์ราชการ แต่เป็น "ยุทธศาสตร์การเตรียมเคส" ที่กลั่นกรองจากแนวทางปฏิบัติจริงของหน่วยงานระดับท้องถิ่น (Kommune) ไปจนถึงกระทรวงต่างประเทศ (UD) ในนอร์เวย์ และกรมการกงสุลในไทย เราช่วยคุณวิเคราะห์ความสัมพันธ์ของชื่อตัว-ชื่อสกุลในระบบฐานข้อมูลนอร์เวย์ (Skatteetaten) ให้ตรงกับฐานข้อมูลทะเบียนราษฎร์ของไทย เพื่อป้องกันขั้นตอนที่ติดขัดในอนาคตซึ่งอาจกินเวลานับเดือน การมีที่ปรึกษาที่เข้าใจ "ช่องว่างระหว่างวัฒนธรรมราชการ" จะเป็นตัวแปรสำคัญที่ทำให้คุณประหยัดทั้งเวลาและงบประมาณอย่างมหาศาล',
    detailedDescEn: 'Preparing documents between Thailand and Norway is far more than just making copies; it is about "Bilateral Legal Synchronization." The information you receive from us isn\'t just public boilerplate from government websites; it is a "case preparation strategy" distilled from the actual practices of local Norwegian authorities (Kommune), the Ministry of Foreign Affairs (UD) in Norway, and the Department of Consular Affairs in Thailand. We analyze the correlation between your names in the Norwegian National Registry (Skatteetaten) and the Thai Civil Registry to prevent systemic bottlenecks that can cause months of delay. Having a consultant who understands the "bureaucratic cultural gap" is the critical variable that saves you significant time and financial resources.',
    detailedDescNo: 'Forberedelse av dokumenter mellom Thailand og Norge handler om mer enn bare å ta kopier; det handler om "Bilateral juridisk synkronisering". Informasjonen du mottar fra oss er ikke bare standard tekst fra myndighetssider; det er en "strategi for saksforberedelse" basert på faktisk praksis hos lokale norske myndigheter (Kommune), Utenriksdepartementet (UD) og den thailandske konsulæravdelingen. Vi analyserer sammenhengen mellom navnene dine i Skatteetaten og det thailandske folkeregisteret for å forhindre forsinkelser. Å ha en konsulent som forstår det byråkratiske kulturgapet er avgjørende for å spare tid og penger.',
    detailedSteps: [
      { 
        title: 'การวิเคราะห์โครงสร้างเคส (Deep Case Profiling)', 
        desc: 'ทีมงานจะทำการตรวจสอบประวัติเอกสารย้อนหลังของคุณ (เช่น เคสเปลี่ยนชื่อ, การหย่าร้างในอดีต) เพื่อระบุ "จุดอ่อน" ทางเอกสารที่เจ้าหน้าที่มักจะมองหาและขอตรวจสอบเพิ่มเติมเป็นพิเศษ',
        titleEn: 'Deep Case Profiling',
        descEn: 'Our team audits your document history (e.g., name changes, past divorces) to identify "documentary weaknesses" that officials typically target for extra scrutiny.',
        titleNo: 'Dyp saksanalysering (Deep Case Profiling)',
        descNo: 'Teamet vårt går gjennom din dokumenthistorikk (f.eks. navneendringer, tidligere skilsmisser) for å identifisere "dokumentmessige svakheter" som tjenestemenn ofte ser etter for ekstra kontroll.'
      },
      { 
        title: 'การจัดลำดับเอกสารเชิงบูรณาการ (Systematic Categorization)', 
        desc: 'เราแยกเอกสารตามความเร่งด่วนและลำดับการใช้งาน (Primary vs Supporting) เพื่อให้คุณไม่ต้องเสียค่าธรรมเนียมการแปลหรือรับรองในเอกสารที่ "ไม่จำเป็น" จริงๆ ในเคสนั้นๆ',
        titleEn: 'Systematic Categorization',
        descEn: 'We categorize documents by urgency and usage order (Primary vs Supporting), ensuring you don\'t waste translation or legalization fees on documents that aren\'t strictly necessary for your specific case.',
        titleNo: 'Systematisk kategorisering',
        descNo: 'Vi kategoriserer dokumenter etter hastegrad og rekkefølge for bruk, slik at du ikke kaster bort penger på oversettelse eller legalisering av dokumenter som ikke er strengt nødvendige for din sak.'
      },
      { 
        title: 'แผนที่หน่วยงานและยุทธวิธีติดต่อ (Strategic Agency Map)', 
        desc: 'มอบรายชื่อหน่วยงานที่รับผิดชอบโดยตรงตามเขตพำนักของคุณ พร้อมระบุชื่อตำแหน่งเจ้าหน้าที่ที่ต้องเข้าพบ และ "Key Message" ที่คุณควรสื่อสารเพื่อให้ได้รับการปฏิบัติหน้าที่อย่างรวดเร็วที่สุด',
        titleEn: 'Strategic Agency Mapping',
        descEn: 'We provide a precise list of agencies based on your residence, specifying the exact officials to meet and the "Key Message" you should deliver to ensure the fastest possible processing.',
        titleNo: 'Strategisk kartlegging av etater',
        descNo: 'Vi gir deg en nøyaktig liste over etater basert på din bopel, spesifiserer hvem du skal møte og hvilke "nøkkelbudskap" du bør gi for å sikre raskest mulig behandling.'
      },
      { 
        title: 'การควบคุมมาตรฐานดิจิทัล (Digital Compliance Audit)', 
        desc: 'เตรียมความพร้อมด้านไฟล์ดิจิทัลให้ตรงตามมาตรฐาน ISO ของหน่วยงานในนอร์เวย์ และมาตรฐาน e-Consular ของไทย เพื่อการอัปโหลดที่ราบรื่นและมีน้ำหนักในการพิจารณาสูงสุด',
        titleEn: 'Digital Compliance Audit',
        descEn: 'We prepare your digital files to meet ISO standards for Norwegian agencies and Thai e-Consular standards, ensuring smooth uploads and maximum evidentiary weight.',
        titleNo: 'Digital samsvarsrevisjon',
        descNo: 'Vi klargjør dine digitale filer for å møte ISO-standarder for norske etater og thailandske e-konsulære standarder, noe som sikrer problemfri opplasting og maksimal bevisverdi.'
      }
    ],
    conclusion: 'โดยสรุป การปรึกษาเชิงลึกจะช่วยให้การดำเนินเอกสารระหว่างประเทศมีความแม่นยำและเป็นไปตามระเบียบข้อบังคับ ช่วยลดขั้นตอนที่ซ้ำซ้อนและระยะเวลาการรอคอยได้อย่างมีประสิทธิภาพ',
    conclusionEn: 'In summary, in-depth consultation ensures that international document processing is accurate and compliant with regulations, effectively reducing redundant steps and waiting periods.',
    conclusionNo: 'Kort oppsummert sikrer dypdykk i konsultasjon at internasjonal dokumentbehandling er nøyaktig og i samsvar med regelverket, noe som effektivt reduserer overflødige trinn og ventetid.',
    expertTips: [
      'ควรเริ่มเตรียมเอกสารอย่างน้อย 3-6 เดือนล่วงหน้าก่อนแผนการเดินทางจริง',
      'เอกสารฉบับจริงในนอร์เวย์ส่วนใหญ่ออกในรูปแบบดิจิทัล (Digital Post) ต้องรู้วิธีดาวน์โหลดแบบที่มีลายเซ็นอิเล็กทรอนิกส์ที่กงสุลยอมรับ'
    ],
    expertTipsEn: [
      'Start preparing documents at least 3-6 months before your intended travel date.',
      'Most Norwegian originals are issued digitally; ensure you download the version with electronic signatures accepted by consulates.'
    ],
    expertTipsNo: [
      'Start forberedelsene minst 3-6 måneder før planlagt reisedato.',
      'De fleste norske originaler utstedes digitalt (Digital Post); sørg for at du laster ned versjonen med elektronisk signatur som aksepteres av konsulater.'
    ],
  },
  {
    id: 2,
    title: 'ด้านการรับรองเอกสารและกงสุล',
    titleEn: 'Document Legalization & Consular Services',
    titleNo: 'Dokumentlegalisering og konsulære tjenester',
    summary: 'แนะนำหน่วยงานที่รับรอง (Notary, UD, กงสุล) และช่วยกรองเอกสารแต่ละประเภทแบบไม่ซ้ำซ้อนเพื่อประหยัดเวลา',
    summaryEn: 'Agency guidance (Notary, UD, Consular) and document filtering to prevent redundancy and save time.',
    summaryNo: 'Byråveiledning (Notarius publicus, UD, konsulær) og dokumentfiltrering for å unngå overflødighet og spare tid.',
    steps: [
      'คัดกรองเอกสารที่จำเป็นตามวัตถุประสงค์',
      'วางแผนลำดับการรับรอง (Notary Public -> UD -> สถานทูต)',
      'ตรวจสอบความถูกต้องของตราประทับและลายเซ็น'
    ],
    stepsEn: [
      'Filter necessary documents based on purpose',
      'Plan the legalization sequence (Notary Public -> UD -> Embassy)',
      'Verify the accuracy of stamps and signatures'
    ],
    stepsNo: [
      'Filtrer nødvendige dokumenter basert på formål',
      'Planlegg legaliseringsrekkefølgen (Notarius Publicus -> UD -> Ambassade)',
      'Verifiser nøyaktigheten av stempler og signaturer'
    ],
    detailedDesc: 'กระบวนการรับรองเอกสารและกงสุล (Consular Legalization) เปรียบเสมือนด่านปราการทางกฎหมายที่ต้องใช้ความแม่นยำสูง กฎเกณฑ์ "Apostille" ของนอร์เวย์มีความแตกต่างจากการรับรองในประเทศอื่นๆ ที่อยู่นอกอนุสัญญากรุงเฮก Thainorexpert มีความลุ่มลึกในการวิเคราะห์ลำดับขั้น (Authentication Chain) ตั้งแต่การได้รับการประทับตราจาก Notarius Publicus ณ Tingrett (ศาลท้องถิ่น) ไปจนถึงการรับรองอำนาจเจ้าหน้าที่จาก Utenriksdepartementet (UD) และขั้นตอนสุดท้ายที่ "กองสัญชาติและนิติกรณ์" หรือสถานทูตไทย เราตรวจสอบทุกรายละเอียดตั้งแต่ "หมึกที่ใช้เซ็น" ไปจนถึง "วันที่ออกเอกสาร" เพื่อให้มั่นใจว่าธุรกรรมของคุณจะไม่ถูกตีกลับเนื่องจากความผิดพลาดของเจ้าหน้าที่ผู้ออกเอกสารตั้งแต่ต้นทาง',
    detailedDescEn: 'The Consular Legalization process is a legal fortress requiring absolute precision. Norway\'s "Apostille" regulations differ significantly from non-Hague Convention countries. Thainorexpert possesses deep insights into the Authentication Chain—from securing the Notarius Publicus stamp at the local Tingrett to authenticating official authority at the Ministry of Foreign Affairs (UD), and finally reaching the Department of Consular Affairs or the Thai Embassy. We scrutinize every detail, from the "ink used for signatures" to the "document issuance date," ensuring your transaction isn\'t rejected due to clerical errors made by the issuing official at the source.',
    detailedDescNo: 'Konsulær legaliseringsprosess er en juridisk festning som krever absolutt presisjon. Norges "Apostille"-regler skiller seg betydelig fra land som ikke er med i Haag-konvensjonen. Thainorexpert har dyp innsikt i autentiseringskjeden – fra å sikre Notarius Publicus-stempel ved den lokale Tingretten til å autentisere offentlig myndighet hos Utenriksdepartementet (UD), og til slutt nå Konsulæravdelingen eller den thailandske ambassaden. Vi gransker hver detalj, fra "blekket brukt for signaturer" til "dokumentets utstedelsesdato", for å sikre at din transaksjon ikke blir avvist på grunn av saksbehandlingsfeil gjort av den utstedende tjenestepersonen ved kilden.',
    detailedSteps: [
      { 
        title: 'การประเมินความถูกต้องสมบูรณ์ (Legal Integrity Audit)', 
        desc: 'เราตรวจสอบว่าเอกสารต้นฉบับมีคุณสมบัติครบถ้วนตามกฎหมาย รวมถึง "Digital Signatures" (ถ้ามี) ว่าได้รับการรับรองในรูปแบบที่สถานทูตไทยยอมรับหรือไม่',
        titleEn: 'Legal Integrity Audit',
        descEn: 'We verify that original documents meet all legal requirements, including checking whether "Digital Signatures" are in a format accepted by the Thai Embassy.',
        titleNo: 'Juridisk integritetsrevisjon (Legal Integrity Audit)',
        descNo: 'Vi verifiserer at originaldokumenter oppfyller alle juridiske krav, inkludert kontroll av om "digitale signaturer" er i et format som aksepteres av den thailandske ambassaden.'
      },
      { 
        title: 'การเตรียมสำนวนคำชี้แจง (Preparation of Legal Statements)', 
        desc: 'ในบางเคสที่เอกสารมีประเด็นซับซ้อน เราช่วยร่างคำชี้แจงเพื่อยื่นต่อ Notarius Publicus เพื่อขอการรับรองในประเด็นเฉพาะเจาะจงที่จำเป็นต้องใช้ในไทย',
        titleEn: 'Preparation of Legal Statements',
        descEn: 'In complex cases, we draft explanatory statements for the Notarius Publicus to secure certifications for specific points required uniquely in Thailand.',
        titleNo: 'Utarbeidelse av juridiske uttalelser',
        descNo: 'I komplekse saker utarbeider vi forklarende uttalelser for Notarius Publicus for å sikre sertifiseringer for spesifikke punkter som kreves spesielt i Thailand.'
      },
      { 
        title: 'การบริหารจัดการผ่านระบบ Apostille (MFA/UD Liaison)', 
        desc: 'ดำเนินการประสานงานเชิงลึกเพื่อให้เอกสารได้รับการประทับตรา Apostille ที่ถูกต้อง โดยเราจะแนะนำบริการส่งเอกสารที่รวดเร็ว (Express Channels) ที่ UD นอร์เวย์กำหนด',
        titleEn: 'MFA/UD Liaison Support',
        descEn: 'We coordinate the Apostille process to ensure exactness, recommending the specific Express Channels mandated by the Norwegian Ministry of Foreign Affairs (UD).',
        titleNo: 'Liaisonstøtte for MFA/UD',
        descNo: 'Vi koordinerer Apostille-prosessen for å sikre nøyaktighet, og anbefaler de spesifikke ekspresskanalene som er pålagt av det norske Utenriksdepartementet (UD).'
      },
      { 
        title: 'การตรวจสอบขั้นสุดท้ายที่กงสุล (Embassy Final Clearance)', 
        desc: 'เราทำหน้าที่ตรวจสอบความพร้อมของชุดเอกสาร (Folder Preparation) ทั้งหมดก่อนส่งไปรับรองที่สถานทูตไทย ณ กรุงออสโล เพื่อให้เจ้าหน้าที่สามารถอนุมัติได้ทันทีในครั้งเดียว',
        titleEn: 'Embassy Final Clearance',
        descEn: 'We act as the final folder preparer for the whole document set before it reaches the Thai Embassy in Oslo, ensuring officials can grant immediate approval in a single pass.',
        titleNo: 'Endelig godkjenning på ambassaden',
        descNo: 'Vi fungerer som den endelige mappeutbedreren for hele dokumentsettet før det når den thailandske ambassaden i Oslo, og sikrer at tjenestemenn kan gi umiddelbar godkjenning på ett forsøk.'
      }
    ],
    conclusion: 'กระบวนการรับรองเอกสารในระดับกงสุลต้องการความถูกต้องสมบูรณ์ในทุกรายละเอียด บริการนี้จะช่วยตรวจสอบความครบถ้วนของตราประทับและลำดับการรับรองเพื่อให้เป็นไปตามมาตรฐานสากล',
    conclusionEn: 'Consular document legalization requires absolute accuracy in every detail. This service verifies the completeness of stamps and certification sequences to ensure compliance with international standards.',
    conclusionNo: 'Konsulær dokumentlegalisering krever absolutt nøyaktighet i alle detaljer. Denne tjenesten verifiserer fullstendigheten av stempler og sertifiseringssekvenser for å sikre samsvar med internasjonale standarder.',
    expertTips: [
      'ตราประทับ Apostille ในนอร์เวย์ปัจจุบันเป็นแบบสติกเกอร์ ห้ามแกะหรือทำเครื่องหมายใดๆ บนสติกเกอร์เด็ดขาด',
      'การรับรองเอกสารทะเบียนสมรสต้องมีอายุไม่เกิน 6 เดือนเมื่อถึงมือเจ้าหน้าที่ที่ไทย'
    ],
    expertTipsEn: [
      'Current Norwegian Apostille stamps are stickers; do not peel or mark them in any way.',
      'Marriage certificates must be less than 6 months old when they reach Thai authorities.'
    ],
    expertTipsNo: [
      'Nåværende norske Apostille-stempler er klistremerker; ikke pell eller merk dem på noen måte.',
      'Ekteskapsattester må være under 6 måneder gamle når de når thailandske myndigheter.'
    ],
  },
  {
    id: 3,
    title: 'ทำวีซ่าประเทศไทย',
    titleEn: 'Thai Visa Services',
    titleNo: 'Thailandske visumtjenester',
    summary: 'ดำเนินการขอวีซ่าเข้าประเทศไทยทุกประเภท (Non-O, Retirement, Tourist) สำหรับชาวนอร์เวย์และครอบครัว',
    summaryEn: 'Handling all types of Thai visas (Non-O, Retirement, Tourist) for Norwegians and their families.',
    summaryNo: 'Håndtering av alle typer thailandske visum (Non-O, Pensjonist, Turist) for nordmenn og deres familier.',
    steps: [
      'เตรียมเอกสารฝ่ายไทยและฝ่ายนอร์เวย์',
      'ยื่นคำร้องผ่านระบบออนไลน์ของสถานทูตไทย',
      'ติดตามสถานะการอนุมัติจนได้รับวีซ่า'
    ],
    stepsEn: [
      'Prepare documents for both Thai and Norwegian parties',
      'Submit application via the Royal Thai Embassy online system',
      'Track approval status until the visa is issued'
    ],
    stepsNo: [
      'Forbered dokumenter for begge de thailandske og norske partene',
      'Send søknad via den kongelige thailandske ambassadens nettsystem',
      'Spor godkjenningsstatus til visummet er utstedt'
    ],
    detailedDesc: 'การยื่นขอวีซ่าประเทศไทยในปัจจุบันก้าวเข้าสู่ระบบดิจิทัล 100% (Thai e-Visa) ซึ่งมาพร้อมกับความท้าทายด้านการเชื่อมโยงข้อมูลข้ามระบบ Thainorexpert ไม่เพียงแต่ช่วยกรอกฟอร์ม แต่เราทำหน้าที่เป็น "ที่ปรึกษายุทธศาสตร์วีซ่า" (Visa Strategist) เราวิเคราะห์ว่าในสถานการณ์ของคุณ การใช้เงินฝากในไทยหรือการใช้การรับรองรายได้จากนอร์เวย์ (Income Verification) แบบไหนจะมี "ความเสี่ยงต่ำกว่า" และ "ความมั่นคงสูงกว่า" ในระยะยาว โดยเฉพาะวีซ่าเกษียณอายุ (Retirement) และวีซ่าติดตามครอบครัว (O-Visa) ซึ่งมีระเบียบปลีกย่อยที่มักเปลี่ยนแปลงตลอดเวลาตามคำสั่งของสำนักงานตรวจคนเข้าเมือง (สตม.) เราช่วยให้คุณมั่นใจว่าทุกข้อมูลที่ปรากฏบนระบบจะถูกส่งผ่านอย่างสมบูรณ์แบบและลดโอกาสที่จะถูกตีกลับเพื่อสอบหาข้อมูลเพิ่มเติม (RFE) ให้เป็นศูนย์',
    detailedDescEn: 'Thai visa applications have transitioned into a 100% digital ecosystem (Thai e-Visa), bringing new challenges in cross-system data linking. Thainorexpert acts not just as a form-filler, but as your "Visa Strategist." We analyze whether using Thai savings or Norwegian income verification offers "lower risk" and "higher stability" for your long-term goals. Especially for Retirement and Family (O-Visa) categories, where regulations frequently shift under Immigration Bureau orders, we ensure every piece of data submitted is perfect. Our goal is to drive the probability of receiving a "Request for Evidence" (RFE) or rejection down to zero.',
    detailedDescNo: 'Thailandske visumsøknader har gått over til et 100 % digitalt økosystem (Thai e-Visa), noe som medfører nye utfordringer i datasystemkobling på tvers av systemer. Thainorexpert fungerer ikke bare som en skjemautfyller, men som din "Visumstrateg". Vi analyserer om bruk av thailandske besparelser eller norsk inntektsverifisering gir "lavere risiko" og "høyere stabilitet" for dine langsiktige mål. Spesielt for pensjonist- og familie- (O-Visa) kategorier, hvor forskrifter ofte endres under utlendingsdirektoratets ordre, sørger vi for at alle innsendte data er perfekte. Målet vårt er å drive sannsynligheten for å motta en "Forespørsel om bevis" (RFE) eller avvisning ned til null.',
    detailedSteps: [
      { 
        title: 'การวางโครงสร้างหลักฐานการเงิน (Financial Dossier Structuring)', 
        desc: 'เราช่วยคุณจัดเตรียมหนังสือรับรองยอดเงิน (Letter of Guarantee) และรายการเดินบัญชี (Statement) ให้เป็นไปตาม "รูปแบบยอดเงินนิ่ง" (Seasoning) ที่เจ้าหน้าที่กงสุลพิจารณาเป็นเกณฑ์สำคัญ',
        titleEn: 'Financial Dossier Structuring',
        descEn: 'We assist in structuring your Letter of Guarantee and Statements to meet the "Seasoning" requirements that consular officials prioritize in their review criteria.',
        titleNo: 'Strukturering av økonomisk dossier',
        descNo: 'Vi bistår med å strukturere garantibrev og kontoutskrifter for å møte "modningskravene" som konsulære tjenestemenn prioriterer i sine gjennomgangskriterier.'
      },
      { 
        title: 'การจัดทำแฟ้มประวัติความสัมพันธ์ (Relationship Portfolio)', 
        desc: 'สำหรับวีซ่าครอบครัว เราช่วยคัดเลือกและจัดระเบียบภาพถ่าย ทะเบียนบ้าน และเอกสารแสดงความสัมพันธ์ ให้เป็น "เล่าเรื่อง" ที่ชัดเจนและตรวจสอบความจริงได้ง่ายที่สุด',
        titleEn: 'Relationship Portfolio Prep',
        descEn: 'For family visas, we curate and organize photos, house registrations, and relationship proofs into a clear "narrative" that officials can easily verify.',
        titleNo: 'Forberedelse av relasjonsportefølje',
        descNo: 'For familievisum kuraterer og organiserer vi bilder, bostedsregistreringer og relasjonsbevis til en klar "fortelling" som tjenestemenn lett kan verifisere.'
      },
      { 
        title: 'การส่งคำร้องและตรวจสอบความปลอดภัย (Secure E-Submission)', 
        desc: 'เราให้การดูแลตั้งแต่อัปโหลดพาสปอร์ตจนถึงการโอนค่าธรรมเนียมผ่านระบบออนไลน์ ป้องกันปัญหา "Payment Failures" ที่มักเกิดขึ้นในระบบระหว่างประเทศ',
        titleEn: 'Secure E-Submission Support',
        descEn: 'We manage everything from passport uploads to online fee transfers, preventing the "Payment Failures" common in cross-border system transactions.',
        titleNo: 'Sikker e-innsendingsstøtte',
        descNo: 'Vi administrerer alt fra passopplasting til online gebyroverføringer, og forhindrer "Betalingsfeil" som er vanlige i grenseoverskridende systemtransaksjoner.'
      }
    ],
    conclusion: 'การยื่นขอวีซ่าผ่านระบบอิเล็กทรอนิกส์ต้องอาศัยการเตรียมพิจารณาหลักฐานทางการเงินและความสัมพันธ์ที่รัดกุม บริการของเรามุ่งเน้นการจัดทำเอกสารให้สอดคล้องกับเกณฑ์การพิจารณาของเจ้าหน้าที่กงสุล',
    conclusionEn: 'Electronic visa applications require rigorous preparation of financial and relationship evidence. Our service focuses on aligning documentation with consular review criteria.',
    conclusionNo: 'Elektroniske visumsøknader krever grundig forberedelse av økonomiske og relasjonsbevis. Tjenesten vår fokuserer på å samkjøre dokumentasjon med konsulære gjennomgangskriterier.',
    expertTips: [
      'การยื่น Thai e-Visa ต้องแนบไฟล์รูปถ่ายที่มีฉากหลังสีขาวล้วนและไม่มีเงาตกกระทบ',
      'หากใช้เงินฝากในไทย ต้องมีสมุดบัญชีที่อัปเดตย้อนหลังอย่างน้อย 3 เดือน'
    ],
    expertTipsEn: [
      'Thai e-Visa applications require photos with a plain white background and no shadows.',
      'If using Thai bank deposits, the passbook must show at least 3 months of recent activity.'
    ],
    expertTipsNo: [
      'Søknader om Thai e-Visa krever bilder med en ren hvit bakgrunn og ingen skygger.',
      'Ved bruk av thailandske bankinnskudd må passboken vise minst 3 måneders nylig aktivitet.'
    ],
  },
  {
    id: 4,
    title: 'จัดทำเช็คลิสต์เตรียมเอกสาร',
    titleEn: 'Custom Document Checklists',
    titleNo: 'Tilpassede dokumentsjekklister',
    summary: 'เตรียมรายการเอกสารที่ต้องใช้สำหรับเรื่องต่างๆ เช่น ขอวีซ่า, แจ้งเกิดไทย, จดทะเบียนสมรส เพื่อความแม่นยำ',
    summaryEn: 'Prepare specific document lists for various matters such as Visas, Birth Registration, or Marriage.',
    summaryNo: 'Utarbeide spesifikke dokumentlister for ulike saker som visum, fødselsregistrering eller ekteskap.',
    docs: [
      'เช็คลิสต์ตามระเบียบใหม่ล่าสุดของหน่วยงาน',
      'ตัวอย่างการกรอกฟอร์มที่ถูกต้อง',
      'คำแนะนำในการเตรียมไฟล์ดิจิทัล'
    ],
    docsEn: [
      'Checklists updated with latest agency regulations',
      'Samples of correctly filled forms',
      'Digital file preparation guidance'
    ],
    docsNo: [
      'Sjekklister oppdatert med siste etatforskrifter',
      'Eksempler på riktig utfylte skjemaer',
      'Veiledning for forberedelse av digitale filer'
    ],
    detailedDesc: 'ในโลกของกฎหมายที่อิงตามหลักฐาน "เช็คลิสต์" คือหัวใจสำคัญของการทำงานที่มีประสิทธิภาพ (Operational Excellence) เช็คลิสต์ของ Thainorexpert ไม่ใช่รายการที่เขียนขึ้นจากความจำ แต่เป็น "เอกสารควบคุมคุณภาพ" (Quality Control Document) ที่ถูกปรับปรุงให้ทันสมัย (Live Updates) ตามประกาศล่าสุดจากสถานทูตไทยในออสโล และหน่วยงานทะเบียนราษฎร์ในนอร์เวย์ เราช่วยให้คุณมองเห็น "ภาพรวมของวงจรเอกสาร" (Document Lifespan) ว่าเอกสารชิ้นใดต้องทำก่อน (Pre-requisite) และเอกสารชิ้นใดจะหมดอายุเมื่อไหร่ ซึ่งเป็นสาเหตุหลักที่ทำให้หลายเคสต้องเริ่มใหม่ทั้งหมด เราสร้างแผนที่นำทางที่เป็นส่วนตัวเพื่อให้คุณก้าวเดินได้อย่างแม่นยำที่สุด',
    detailedDescEn: 'In an evidence-based legal world, a "Checklist" is the core of Operational Excellence. Thainorexpert\'s checklists aren\'t generic lists; they are "Quality Control Documents" featuring Live Updates aligned with the latest mandates from the Thai Embassy in Oslo and Norwegian registries. We help you visualize the "Document Lifespan"—identifying which papers are prerequisites and exactly when each will expire. Expiration is the primary reason cases fail and restart. We build a personalized roadmap so every step you take is mathematically precise.',
    detailedDescNo: 'I en bevisbasert juridisk verden er en "Sjekkliste" kjernen i operasjonell fortreffelighet. Thainorexperts sjekklister er ikke generiske lister; de er "kvalitetskontrolldokumenter" med live-oppdateringer på linje med de nyeste mandatene fra den thailandske ambassaden i Oslo og norske registre. Vi hjelper deg med å visualisere "dokumentets levetid" - identifisere hvilke papirer som er forutsetninger og nøyaktig når hver av dem utløper. Utløp er den primære årsaken til at saker mislykkes og må starte på nytt. Vi bygger et personlig veikart slik at hvert steg du tar er matematisk presist.',
    detailedSteps: [
      { 
        title: 'การจัดวางโครงสร้างความต้องการ (Strategic Needs Analysis)', 
        desc: 'เราวิเคราะห์เส้นทางชีวิตของคุณ (เช่น การสมรสข้ามแดน, การมอบอำนาจทำนิติกรรม) เพื่อสร้างรายการเอกสารที่ "รัดกุมที่สุด" ตัดสิ่งที่ไม่จำเป็นออก และเพิ่มสิ่งที่หน่วยงานมักจะขอเสริม',
        titleEn: 'Strategic Needs Analysis',
        descEn: 'We analyze your life path (e.g., cross-border marriage, power of attorney for property) to create the "leanest" possible document list—cutting fluff while adding the extras officials often request.',
        titleNo: 'Strategisk behovsanalyse',
        descNo: 'Vi analyserer livsveien din (f.eks. grenseoverskridende ekteskap, fullmakt for eiendom) for å lage den "slankeste" mulige dokumentlisten – kutter unødvendig innhold mens vi legger til de ekstra som tjenestemenn ofte ber om.'
      },
      { 
        title: 'การตรวจสอบคุณสมบัติรายชิ้น (Individual Attribute Verification)', 
        desc: 'ระบุละเอียดระดับ "รายใบ" ว่าเอกสารนั้นต้องมีการแปลเป็นภาษาอังกฤษหรือไม่ และตราประทับ Apostille ต้องปรากฏที่ด้านหน้าหรือด้านหลังของเอกสารเพื่อให้เจ้าหน้าที่ยอมรับ',
        titleEn: 'Attribute Verification',
        descEn: 'We specify at the "item level" whether a document needs English translation and exactly where the Apostille stamp must appear (front vs. back) for agency acceptance.',
        titleNo: 'Attributtverifisering',
        descNo: 'Vi spesifiserer på "gjenstandsnivå" om et dokument trenger engelsk oversettelse og nøyaktig hvor Apostille-stempelet skal vises (foran vs. bak) for etatsgodkjennelse.'
      }
    ],
    conclusion: 'คู่มือเช็คลิสต์ที่ปรับปรุงตามระเบียบปัจจุบันจะช่วยให้การจัดเตรียมเอกสารเป็นระบบและครอบคลุมทุกความต้องการของหน่วยงานราชการ ป้องกันความคลาดเคลื่อนที่อาจเกิดขึ้น',
    conclusionEn: 'Checklists updated to current regulations ensure that document preparation is systematic and covers all government requirements, preventing potential discrepancies.',
    conclusionNo: 'Sjekklister oppdatert til gjeldende forskrifter sikrer at dokumentforberedelse er systematisk og dekker alle offentlige krav, og forhindrer potensielle avvik.',
    expertTips: [
      'เช็คลิสต์ของเรามีการระบุประเภทตราประทับที่ต้องใช้ (Stamp Type) เพื่อป้องกันเจ้าหน้าที่ปฏิเสธเอกสาร',
      'ควรถ่ายรูปเอกสารที่เตรียมเสร็จแล้วส่งให้เราช่วยรีเช็คอีกครั้งทาง LINE'
    ],
    expertTipsEn: [
      'Our checklists specify the exact Stamp Type required to prevent agency rejection.',
      'Take photos of your prepared document sets and send them to us for a final LINE re-check.'
    ],
    expertTipsNo: [
      'Sjekklistene våre spesifiserer nøyaktig stempeltype som kreves for å forhindre avvisning fra etaten.',
      'Ta bilder av dine forberedte dokumentsett og send dem til oss for en siste sjekk på LINE.'
    ],
  },
  {
    id: 5,
    title: 'ตรวจเอกสารก่อนยื่นต่อหน่วยงาน',
    titleEn: 'Pre-submission Document Review',
    titleNo: 'Dokumentgjennomgang før innsending',
    summary: 'บริการตรวจสอบความครบถ้วนและความถูกต้องของเนื้อหาในเอกสารทั้งหมดก่อนนำไปยื่นจริง เพื่อลดความเสี่ยงในการถูกปฏิเสธ',
    summaryEn: 'Review service for completeness and accuracy of document content before actual submission to minimize rejection risk.',
    summaryNo: 'Gjennomgangstjeneste for fullstendighet og nøyaktighet av dokumentinnhold før faktisk innsending for å minimere avvisningsrisiko.',
    note: 'ช่วยลดโอกาสเสียค่าธรรมเนียมซ้ำซ้อนจากเอกสารผิดพลาด',
    noteEn: 'Reduces the chance of redundant fees caused by document errors.',
    noteNo: 'Reduserer sjansen for overflødige gebyrer forårsaket av dokumentfeil.',
    detailedDesc: 'ในหน้าประวัติศาสตร์ของการประสานงานข้ามชาติ "ความผิดพลาดเล็กๆ" คือสิ่งที่สร้างความเสียหายใหญ่หลวงได้เสมอ การตรวจเอกสารก่อนยื่น (Pre-submission Audit) ของเราทำหน้าที่เป็นด่านสุดท้าย (Final Guard) ที่กรองความผิดพลาดด้านไวยากรณ์ทางกฎหมาย และความคลาดเคลื่อนของข้อมูลสำคัญ เราตรวจสอบความเป็นเอกภาพของชุดเอกสาร (Document Consistency) เพื่อให้มั่นใจว่าเมื่อเจ้าหน้าที่กดยอมรับเอกสารชุดแรก เอกสารชุดต่อๆ ไปในเคสเดียวกันจะสอดคล้องกันแบบ "ไร้รอยต่อ" (Seamless Integration) บริการนี้คือการลงทุนเพื่อประกันว่าเครดิตและความน่าเชื่อถือของคุณในสายตาเจ้าหน้าที่รัฐจะอยู่ในระดับสูงสุดตลอดเวลา',
    detailedDescEn: 'In the history of transnational coordination, "minor errors" have always caused major disruptions. Our Pre-submission Audit acts as your "Final Guard," filtering legal grammatical errors and data inconsistencies. We verify "Document Consistency" to ensure that once an official accepts the first document, every subsequent file in the case aligns "seamlessly." This service is an investment in ensuring your status and credibility in the eyes of government officials remain at the highest possible level throughout the process.',
    detailedDescNo: 'I historien til transnasjonal koordinering har "mindre feil" alltid forårsaket store forstyrrelser. Vår forhåndsgjennomgang fungerer som din "Siste Vakt", som filtrerer juridiske grammatiske feil og datakonsekvenser. Vi verifiserer "dokumentkonsistens" for å sikre at når en tjenestemann aksepterer det første dokumentet, vil hver påfølgende fil i saken samsvare "sømløst". Denne tjenesten er en investering i å sikre din status og troverdighet i offentlige tjenestemenns øyne holder seg på høyest mulige nivå gjennom hele prosessen.',
    detailedSteps: [
      { 
        title: 'การจับคู่ข้อมูลความร้อน (Data Point Matching)', 
        desc: 'เราทำการรีเช็คเลขประจำตัวประชาชน (National ID), เลขพาสปอร์ต และวันเดือนปีเกิด ระหว่างต้นฉบับภาษาไทยและคำแปลนอร์เวย์/อังกฤษ เพื่อป้องกันการปัดตกจากเรื่องเล็กน้อย',
        titleEn: 'Data Point Matching',
        descEn: 'We cross-check National IDs, Passport numbers, and birth dates between Thai originals and Norwegian/English translations to prevent rejection over minor typos.',
        titleNo: 'Datapunktsamsvar',
        descNo: 'Vi krysssjekker nasjonale ID-er, passnummer og fødselsdatoer mellom thailandske originaler og norske/engelske oversettelser for å forhindre avvisning på grunn av mindre skrivefeil.'
      },
      { 
        title: 'การวิเคราะห์ลำดับอนุมัติ (Approval Chain Analysis)', 
        desc: 'เราเช็คว่าตราประทับของแต่ละหน่วยงานอยู่ในตำแหน่งที่ถูกต้อง และลำดับการประทับตรา (Hierarchy of Stamps) เป็นไปตามกฎระเบียบสากลของการรับรองเอกสาร',
        titleEn: 'Approval Chain Analysis',
        descEn: 'We verify that every agency stamp is correctly positioned and that the Hierarchy of Stamps follows international standards for document legalization.',
        titleNo: 'Analyse av godkjenningskjede',
        descNo: 'Vi verifiserer at hvert etatsstempel er riktig plassert og at stempelhierarkiet følger internasjonale standarder for dokumentlegalisering.'
      }
    ],
    conclusion: 'การตรวจสอบความถูกต้องก่อนการยื่นจริงเป็นขั้นตอนสำคัญในการลดความเสี่ยงจากการถูกปฏิเสธเอกสาร โดยมุ่งเน้นความสอดคล้องของข้อมูลในทุกฉบับเพื่อความราบรื่นในการพิจารณา',
    conclusionEn: 'Pre-submission review is a critical step in minimizing document rejection risks, focusing on data consistency across all files for a smooth evaluation process.',
    conclusionNo: 'Gjennomgang før innsending er et kritisk skritt for å minimere risikoen for avvisning av dokumenter, og fokuserer på datakonsistens på tvers av alle filer for en jevn evalueringsprosess.',
    expertTips: [
      'การสะกดชื่อในเอกสารภาษาอังกฤษต้องตรงกับหน้าพาสปอร์ตทุกตัวอักษร ห้ามยึดตามบัตรประชาชนหากข้อมูลไม่ตรงกัน',
      'ตราประทับต้องมีความคมชัด ไม่จาง หรือทับซ้อนกับเนื้อหาสำคัญ'
    ],
    expertTipsEn: [
      'English name spelling must match your passport exactly; do not use ID card spelling if they differ.',
      'Stamps must be sharp and clear, not faded or overlapping critical text.'
    ],
    expertTipsNo: [
      'Engelsk navnestaving må samsvare nøyaktig med passet ditt; ikke bruk staving fra ID-kort hvis de er forskjellige.',
      'Stempler må være skarpe og tydelige, ikke falmede eller overlappende med kritisk tekst.'
    ],
  },
  {
    id: 6,
    title: 'ติดต่อประสานงานแทนกับหน่วยงาน',
    titleEn: 'Authority Liaison & Coordination',
    titleNo: 'Myndighetskontakt og koordinering',
    summary: 'เป็นตัวแทนติดต่อและประสานงานกับหน่วยงานราชการทั้งในไทยและนอร์เวย์ เพื่อลดขั้นตอนที่ยุ่งยากสำหรับคุณ',
    summaryEn: 'Acting as your representative in coordinating with government agencies in both Thailand and Norway.',
    summaryNo: 'Opptre som din representant i koordinering med offentlige etater i både Thailand og Norge.',
    note: 'เช่น ประสานงานเจ้าหน้าที่อำเภอ, กองทะเบียนราษฎร์ หรือสถานทูต',
    noteEn: 'E.g., coordinating with district officers, civil registries, or embassies.',
    noteNo: 'F.eks. koordinering med distriktsoffiserer, folkeregistre eller ambassader.',
    detailedDesc: 'การติดต่อกับหน่วยงานราชการท่ามกลางความแตกต่างทางวัฒนธรรมและภาษาอาจกลายเป็นฝันร้ายหากขาด "การทูตเชิงกฎหมาย" (Legal Diplomacy) Thainorexpert ทำหน้าที่เป็นเสมือน "ผู้ถืออำนาจส่วนหน้า" (Front-line Representative) ที่พร้อมจะประสานงานเชิงลึก ไม่ว่าจะเป็นการต่อรองเงื่อนไขการส่งเอกสารทางไปรษณีย์กับเจ้าหน้ากระทรวงต่างประเทศนอร์เวย์ หรือการชี้แจงความจำเป็นเร่งด่วนกับนายทะเบียนอำเภอในประเทศไทย เรามีทักษะในการใช้ภาษาทางราชการที่สร้าง "ความไว้วางใจ" (Trust) และ "ความเกรงใจ" (Respect) ซึ่งมักจะส่งผลให้เคสที่ดูเหมือนจะทางตันสามารถเดินหน้าต่อไปได้ด้วยช่องทางพิเศษหรือคำแนะนำที่เราได้รับเฉพาะตัวเท่านั้น',
    detailedDescEn: 'Navigating government agencies amidst cultural and language divides can become a nightmare without "Legal Diplomacy." Thainorexpert acts as your "Front-line Representative," ready for deep coordination—whether negotiating document mailing conditions with Norwegian MFA officials or explaining urgent needs to Thai district registrars. We possess the official linguistic skills to build "Trust" and "Respect," often turning stalled cases into progress through specialized channels or insider guidance uniquely available to us.',
    detailedDescNo: 'Å navigere i offentlige etater på tvers av kultur- og språkskiller kan bli et mareritt uten "juridisk diplomati". Thainorexpert fungerer som din "Frontlinjerepresentant", klar for dyp koordinering – enten det gjelder å forhandle om betingelser for dokumentutsending med norske UD-tjenestemenn eller å forklare presserende behov for thailandske distriktsregistratorer. Vi har de offisielle språkkunnskapene som bygger "Tillit" og "Respekt", og gjør ofte fastlåste saker om til fremgang gjennom spesialiserte kanaler eller innsideveiledning som er unikt tilgjengelig for oss.',
    detailedSteps: [
      { 
        title: 'ตัวแทนประสานงานเชิงโต้ตอบ (Interactive Liaison)', 
        desc: 'เราทำหน้าที่ดูแลการรับส่งจดหมายโต้ตอบทางอิเล็กทรอนิกส์และโทรศัพท์ โดยเน้นการสร้างสัมพันธ์ที่ดีกับเจ้าหน้าที่ผู้รับผิดชอบเคส (Case Officer) เพื่อให้เคสของคุณได้รับการพิจารณาเป็นลำดับต้นๆ',
        titleEn: 'Interactive Liaison',
        descEn: 'We manage electronic and telephonic correspondence, focusing on building rapport with Case Officers to ensure your file receives priority attention.',
        titleNo: 'Interaktiv forbindelse',
        descNo: 'Vi administrerer elektronisk og telefonisk korrespondanse, med fokus på å bygge relasjoner med saksbehandlere for å sikre at filen din får prioritert oppmerksomhet.'
      },
      { 
        title: 'การบริหารจัดการแรงเสียดทาน (Friction Management)', 
        desc: 'เมื่อเกิดความเข้าใจผิดหรือการขอเอกสารที่ซับซ้อนเกินไป เราจะเข้าแทรกแซงเพื่อชี้แจงข้อเท็จจริงตามหลักฐานและข้อกฎหมาย เพื่อลดขั้นตอนที่ซ้ำซ้อนและลดความกดดันของลูกค้า',
        titleEn: 'Friction Management',
        descEn: 'When misunderstandings or overly complex requests arise, we intervene to clarify facts based on evidence and law, reducing redundant steps and customer stress.',
        titleNo: 'Friksjonshåndtering',
        descNo: 'Når misforståelser eller altfor komplekse forespørsler oppstår, griper vi inn for å avklare fakta basert på bevis og lovverk, noe som reduserer overflødige trinn og kundestress.'
      }
    ],
    conclusion: 'การเป็นตัวแทนประสานงานอย่างเป็นทางการช่วยลดภาระในการสื่อสารและติดตามงานกับหน่วยงานรัฐ โดยใช้ความเชี่ยวชาญในระเบียบปฏิบัติเพื่อผลประโยชน์สูงสุดในเคสของคุณ',
    conclusionEn: 'Official liaison representation reduces the burden of communication and follow-up with government agencies, leveraging regulatory expertise for the best outcome in your case.',
    conclusionNo: 'Offisiell representasjon reduserer byrden av kommunikasjon og oppfølging med offentlige etater, og utnytter regulatorisk ekspertise for det beste resultatet i din sak.',
    expertTips: [
       'การประสานงานกับหน่วยงานในไทยในวันศุกร์บ่ายมักจะทำได้ยาก ควรเร่งประสานก่อนวันพุธ',
       'เรามีฐานข้อมูลเบอร์โทรภายในของหน่วยงานหลายแห่งที่ช่วยให้การติดตามงานรวดเร็วกว่าปกติ'
    ],
    expertTipsEn: [
       'Coordinating with Thai agencies on Friday afternoons is often difficult; aim for balance before Wednesday.',
       'We maintain an internal contact database for many agencies to speed up tracking beyond standard channels.'
    ],
    expertTipsNo: [
       'Koordinering med thailandske byråer på fredag ettermiddager er ofte vanskelig; mål om balanse før onsdag.',
       'Vi opprettholder en intern kontaktdatabase for mange byråer for å fremskynde sporing utover standardkanaler.'
    ],
  },
  {
    id: 7,
    title: 'แนะนำวิธีค้นหาหน่วยงานติดต่อ',
    titleEn: 'Agency Mapping & Location Guidance',
    titleNo: 'Byråkartlegging og stedsveiledning',
    summary: 'แนะนำการระบุและเข้าถึงหน่วยงานที่ถูกต้องสำหรับเอกสารแต่ละประเภท เพื่อลดความสับสนในการติดต่อ',
    summaryEn: 'Guidance on identifying and accessing the correct agencies for each document type to avoid confusion.',
    summaryNo: 'Veiledning om identifisering og tilgang til riktige byråer for hver dokumenttype for å unngå forvirring.',
    note: 'ทั้งหน่วยงานระดับท้องถิ่น (Tingrett, Skatteetaten) และระดับประเทศ',
    noteEn: 'Both local (Tingrett, Skatteetaten) and national level agencies.',
    noteNo: 'Både lokale (Tingrett, Skatteetaten) og nasjonale etater.',
    detailedDesc: 'ความได้เปรียบของการทำงานในระดับผู้เชี่ยวชาญคือการมี "ฐานข้อมูลภูมิศาสตร์ราชการ" (Administrative Geospatial Data) ที่แม่นยำ Thainorexpert ไม่ได้เพียงแต่บอกที่อยู่บน Google Maps แต่เราวิเคราะห์ประสิทธิภาพการทำงานรายพื้นที่ (Performance Analysis) ของหน่วยงานต่างๆ เราแนะนำได้ว่าในช่วงเวลานั้นๆ Tingrett ไหนคิวสั้นที่สุด หรือ statsforvalteren จังหวัดไหนมีการตอบรับทางไปรษณีย์ที่รวดเร็วกว่า ข้อมูลเหล่านี้นำไปสู่การวางแผนการเดินทางและจัดคิวนัดหมายที่ทำให้งานเอกสารของคุณเคลื่อนไหวได้เร็วกว่าค่าเฉลี่ยปกติถึง 2-3 เท่า',
    detailedDescEn: 'The advantage of expert-level work lies in having precise "Administrative Geospatial Data." Thainorexpert doesn\'t just provide Google Maps addresses; we analyze the "Performance Analysis" of various agencies by region. We can advise which Tingrett currently has the shortest queues or which Statsforvalteren office processes mail faster. This data-driven approach leads to travel and appointment planning that moves your documents 2-3 times faster than the standard average.',
    detailedDescNo: 'Fordelen med arbeid på ekspertnivå ligger i å ha presise "Administrative Geospatial Data". Thainorexpert gir ikke bare Google Maps-adresser; vi analyserer "Ytelsesanalyse" av ulike byråer etter region. Vi kan gi råd om hvilken Tingrett som i dag har kortest køer eller hvilket Statsforvalteren-kontor som behandler post raskere. Denne datadrevne tilnærmingen fører til reise- og avtaleplanlegging som flytter dokumentene dine 2-3 ganger raskere enn standardgjennomsnittet.',
    detailedSteps: [
      { 
        title: 'การวิเคราะห์เขตอำนาจศาล (Jurisdictional Strategy)', 
        desc: 'ตรวจสอบอำนาจการรับรองตามที่อยู่และสถานะ (Legal Residence) เพื่อให้มั่นใจว่าคุณจะไม่ถูกปฏิเสธเนื่องจากยื่นเอกสารผิดเขตพื้นที่ซึ่งเป็นข้อผิดพลาดที่พบบ่อยที่สุด',
        titleEn: 'Jurisdictional Strategy',
        descEn: 'We verify certification authority based on your Legal Residence, ensuring you aren\'t rejected for filing in the wrong district—one of the most common errors.',
        titleNo: 'Jurisdiksjonsstrategi',
        descNo: 'Vi verifiserer sertifiseringsmyndighet basert på din juridiske bopel, og sikrer at du ikke blir avvist for å ha levert inn i feil distrikt – en av de vanligste feilene.'
      },
      { 
        title: 'คู่มือการเข้าถึงระบบนัดหมาย (Digital Entry Guide)', 
        desc: 'ให้คำแนะนำเชิงลึกในการเข้าถึงระบบนัดหมายออนไลน์ของ Posten, Skatteetaten และศาลนอร์เวย์ รวมถึงเทคนิคการกดจองคิวในช่วงเวลาที่มีโอกาสหลุดจองสูง',
        titleEn: 'Digital Entry Guide',
        descEn: 'Detailed guidance on accessing online booking systems for Posten, Skatteetaten, and Norwegian courts, including techniques for securing cancellations or high-demand slots.',
        titleNo: 'Digital inngangsveileder',
        descNo: 'Detaljert veiledning om tilgang til online bookingsystemer for Posten, Skatteetaten og norske domstoler, inkludert teknikker for å sikre kanselleringer eller tider med høy etterspørsel.'
      }
    ],
    conclusion: 'การระบุพิกัดและหน่วยงานที่มีอำนาจหน้าที่โดยตรงตามเขตพื้นที่ช่วยให้การดำเนินงานมีความรวดเร็วและถูกต้อง ลดอุปสรรคจากการติดต่อผิดแผนกหรือผิดสถานที่',
    conclusionEn: 'Identifying coordinates and agencies with direct jurisdictional authority ensures rapid and correct processing, eliminating obstacles from contacting the wrong departments or locations.',
    conclusionNo: 'Identifisering av koordinater og byråer med direkte jurisdiksjonsmyndighet sikrer rask og korrekt behandling, og eliminerer hindringer fra å kontakte feil avdelinger eller lokasjoner.',
    expertTips: [
      'ควรตรวจสอบวันหยุดราชการของทั้งไทยและนอร์เวย์ก่อนวางแผนเดินทาง เพราะวันหยุดไม่ตรงกัน',
      'หน่วยงาน Skatteetaten ในบางสาขาเลิกรับเอกสารแบบกระดาษแล้ว ต้องเช็คเงื่อนไขรายสาขา'
    ],
    expertTipsEn: [
      'Check public holidays for both Thailand and Norway before planning trips, as they differ significantly.',
      'Some Skatteetaten branches no longer accept paper documents; verify specific branch conditions beforehand.'
    ],
    expertTipsNo: [
      'Sjekk helligdager for både Thailand og Norge før du planlegger turer, da de varierer betydelig.',
      'Noen Skatteetaten-avdelinger godtar ikke lenger papirdokumenter; bekreft spesifikke filialsbetingelser på forhånd.'
    ],
  },
  {
    id: 8,
    title: 'แนะนำทักษะการสื่อสารเพื่อขอเอกสาร',
    titleEn: 'Official Communication Guidance',
    titleNo: 'Veiledning for offisiell kommunikasjon',
    summary: 'แนะนำวิธีเขียนจดหมาย การสนทนา และคำศัพท์เฉพาะทางที่ควรใช้เมื่อต้องพูดคุยกับเจ้าหน้าที่เพื่อให้ได้เอกสารที่ต้องการ',
    summaryEn: 'Guidance on writing, speaking, and technical terminology to use when communicating with officials.',
    summaryNo: 'Veiledning om skriving, muntlig og teknisk terminologi som skal brukes ved kommunikasjon med tjenestemenn.',
    note: 'มีตัวอย่างประโยคภาษาไทยและภาษาอังกฤษที่จำเป็น',
    noteEn: 'Includes essential Thai and English sample phrases.',
    noteNo: 'Inkluderer viktige thailandske og engelske prøvefraser.',
    detailedDesc: 'ทักษะการสื่อสารกับเจ้าหน้าที่รัฐ (Administrative Communication Mastery) คือศิลปะของการสร้างแรงจูงใจให้เจ้าหน้าที่ "อยากช่วย" (Will to Assist) Thainorexpert นำเสนอการแนะนำที่อ้างอิงจากจิตวิทยาการสื่อสารและกฎระเบียบปฏิบัติของราชการนอร์เวย์และไทย เราช่วยสร้างชุดข้อความ (Scripts) และประโยคที่ใช้แสดงความจำเป็นโดยไม่ดูเป็นการเรียกร้อง ซึ่งจะเปลี่ยนบรรยากาศการติดต่อให้เป็นมิตรและราบรื่น การใช้คำศัพท์ทางสถิติทะเบียนราษฎร์ที่ถูกต้องจะช่วยลดการซักถามที่เหนื่อยล้า และทำให้เจ้าหน้าที่เชื่อมั่นในเจตนาและความรู้ของคุณ',
    detailedDescEn: 'Administrative Communication Mastery is the art of fostering an official\'s "Will to Assist." Thainorexpert provides guidance rooted in communication psychology and the operational protocols of both Norwegian and Thai bureaucracies. We help craft "Scripts" and phrasing that express necessity without appearing demanding, transforming interactions into friendly, smooth experiences. Using the correct civil registry terminology minimizes exhausting questioning and signals your professional intent and competence to the officials.',
    detailedDescNo: 'Administrativ kommunikasjonsmestring er kunsten å fremme en tjenestemanns "vilje til å hjelpe". Thainorexpert gir veiledning forankret i kommunikasjonspsykologi og driftsprotokollene til både norske og thailandske byråkratier. Vi hjelper til med å utforme "manus" og frasering som uttrykker nødvendighet uten å virke krevende, og forvandler interaksjoner til vennlige, smidige opplevelser. Bruk av riktig folkeregisterterminologi minimerer utmattende avhør og signaliserer din profesjonelle intensjon og kompetanse til tjenestemennene.',
    detailedSteps: [
      { 
        title: 'การสื่อสารด้วยโครงสร้าง (Structured Communication)', 
        desc: 'ฝึกวิธีลำดับเรื่องราวแบบ "Problem-Impact-Solution" เพื่อให้เจ้าหน้าที่เห็นภาพความเดือดร้อนของคุณและสรุปหาทางออกได้ทันทีตั้งแต่ช่วง 5 นาทีแรก',
        titleEn: 'Structured Communication',
        descEn: 'Training on the "Problem-Impact-Solution" narrative structure, ensuring officials grasp your situation and find solutions within the first 5 minutes.',
        titleNo: 'Strukturert kommunikasjon',
        descNo: 'Opplæring i narrativ struktur av typen "Problem-Effekt-Løsning", som sikrer at tjenestemenn forstår situasjonen din og finner løsninger innen de første 5 minuttene.'
      },
      { 
        title: 'การจัดการกับคำปฏิเสธ (Objection Handling)', 
        desc: 'เรามอบเทคนิคการถามกลับเพื่อหา "เหตุผลทางกฎหมาย" ที่แท้จริง (Legal Ground) เมื่อถูกปฏิเสธ เพื่อให้คุณสามารถกลับมาเตรียมตัวใหม่ได้อย่างถูกจุด',
        titleEn: 'Objection Handling',
        descEn: 'We provide techniques for querying the actual "Legal Grounds" when rejected, allowing you to re-prepare with precision.',
        titleNo: 'Håndtering av innvendinger',
        descNo: 'Vi tilbyr teknikker for å spørre om de faktiske "juridiske grunnlagene" ved avslag, slik at du kan forberede deg på nytt med presisjon.'
      }
    ],
    conclusion: 'ทักษะการสื่อสารเชิงบริหารจัดการจะช่วยให้การร้องขอเอกสารหรือการชี้แจงเคสซับซ้อนมีความเป็นมืออาชีพและได้รับการยอมรับจากเจ้าหน้าที่ผู้ปฏิบัติงาน',
    conclusionEn: 'Administrative communication skills ensure that document requests or complex case explanations are professional and well-received by operating officials.',
    conclusionNo: 'Administrative kommunikasjonsevner sikrer at dokumentforespørsler eller komplekse saksforklaringer er profesjonelle og blir godt mottatt av fungerende tjenestemenn.',
    expertTips: [
      'การใช้ประโยคที่แสวงความร่วมมือ (Collaborative approach) มักได้ผลดีกว่าการเรียกร้องตามสิทธิเสมอ',
      'หากเจ้าหน้าที่ให้คำแนะนำเป็นคำพูด ควรขอให้จดโน้ตย่อหรือส่งอีเมลยืนยันเพื่อเป็นหลักฐาน'
    ],
    expertTipsEn: [
      'A collaborative approach always works better than a purely rights-based demand when dealing with officials.',
      'If an official gives oral advice, ask for a brief note or a follow-up email to serve as evidence.'
    ],
    expertTipsNo: [
      'En samarbeidende tilnærming fungerer alltid bedre enn et rent rettighetsbasert krav i møte med tjenestemenn.',
      'Dersom en tjenestemann gir muntlige råd, be om et kort notat eller en oppfølgings-e-post for å tjene som bevis.'
    ],
  },
  {
    id: 9,
    title: 'การส่งเอกสารกลับไทยแบบปลอดภัย',
    titleEn: 'Secure Document Delivery to Thailand',
    titleNo: 'Sikker dokumentlevering til Thailand',
    summary: 'บริการจัดส่งเอกสารสำคัญกลับประเทศไทยด้วยระบบที่เชื่อถือได้ พร้อมการแพ็กป้องกันความเสียหายและการติดตามสถานะ',
    summaryEn: 'Secure international shipping service for vital documents with damage protection and full tracking.',
    summaryNo: 'Sikker internasjonal frakttjeneste for viktige dokumenter med skadebeskyttelse og full sporing.',
    steps: [
      'ตรวจสอบชุดเอกสารและสแกนสำรองไฟล์',
      'แพ็กซองกันน้ำและกล่องป้องกันการพับ',
      'จัดส่งผ่าน Posten Norge (REK), DHL หรือ FedEx ตามความต้องการ'
    ],
    stepsEn: [
      'Verify document sets and create digital backup scans',
      'Pack in waterproof bags and anti-folding boxes',
      'Ship via Posten Norge (REK), DHL or FedEx as requested'
    ],
    stepsNo: [
      'Verifiser dokumentsett og opprett digitale sikkerhetskopier',
      'Pakk i vanntette poser og bokser mot bretting',
      'Send via Posten Norge (REK), DHL eller FedEx etter forespørsel'
    ],
    detailedDesc: 'ในยุคที่ "ข้อมูลคือสินทรัพย์ที่มีค่าที่สุด" การขนส่งเอกสารส่วนตัวข้ามประเทศจึงต้องมีมาตรฐานความปลอดภัยเทียบเท่าการขนส่งในภาคธุรกิจธนาคาร (Banking-level Security) บริการจัดส่งของเราเน้นย้ำที่ "ความสมบูรณ์ของโซ่อุปทาน" (Supply Chain Integrity) Thainorexpert ไม่เพียงแต่ส่งของ แต่เราดูแลตั้งแต่การทำ "แฟ้มดิจิทัลคู่ขนาน" (Parallel Digital Dossier) เพื่อให้มั่นใจว่าหากเกิดเหตุสุดทางเศรษฐกิจหรือภัยพิบัติระหว่างประเทศ ข้อมูลเอกสารทั้งหมดของคุณจะถูกกู้คืนได้อย่างรวดเร็ว ระบบการแพ็กของเราระดับ "Fortress Packaging" จะป้องกันทุกความเป็นไปได้ที่จะทำให้เอกสารของคุณมีรอยพับหรือรอยเปื้อนซึ่งอาจทำให้ถูกกงสุลปฏิเสธได้',
    detailedDescEn: 'In an era where "data is the most valuable asset," cross-border document shipping must meet the security standards of the banking sector. Our delivery service emphasizes "Supply Chain Integrity." Thainorexpert doesn\'t just ship; we maintain a "Parallel Digital Dossier" to ensure that even in the case of international disaster or economic shifts, your document data can be swiftly recovered. Our "Fortress Packaging" eliminates any possibility of folds or stains that could lead to consular rejection.',
    detailedDescNo: 'I en tid der "data er den mest verdifulle eiendelen", må internasjonal dokumentforsendelse oppfylle sikkerhetsstandardene i banksektoren. Leveringstjenesten vår vektlegger "forsyningskjedens integritet". Thainorexpert sender ikke bare; vi vedlikeholder et "parallelt digitalt dossier" for å sikre at dokumentdataene dine raskt kan gjenopprettes selv ved internasjonale katastrofer eller økonomiske skifter. Vår "Festningsemballasje" eliminerer enhver mulighet for bretter eller flekker som kan føre til konsulær avvisning.',
    detailedSteps: [
      { 
        title: 'การดูแลความสมบูรณ์ของเอกสาร (Custodial Integrity Care)', 
        desc: 'เราใช้วัสดุปราศจากกรด (Acid-free) ในการจัดเก็บเบื้องต้น เพื่อป้องกันคราบเหลืองหรือการเสื่อมสภาพของหมึกประทับตราสดในระหว่างการขนส่งนับสิบวัน',
        titleEn: 'Custodial Integrity',
        descEn: 'We use acid-free materials for primary storage to prevent yellowing or ink degradation of fresh stamps during the multi-day shipping journey.',
        titleNo: 'Forvalterintegritet',
        descNo: 'Vi bruker syrefrie materialer for primærlagring for å forhindre gulning eller blekknedbrytning av ferske stempler i løpet av den flerdagers fraktreisen.'
      },
      { 
        title: 'ระบบสำรองข้อมูลฉุกเฉิน (Emergency Data Recovery)', 
        desc: 'เราทำสำเนาที่มีการรับรองแบบเสมือน (Virtual Certified Copies) และส่งให้คุณผ่านช่องทางที่เข้ารหัส (Encrypted Channels) ทันทีหลังส่งชุดจริง เพื่อให้คุณดำเนินการในขั้นตอนอื่นๆ ได้ขนานกันไป',
        titleEn: 'Emergency Data Recovery',
        descEn: 'We create virtual certified copies and transmit them to you via encrypted channels immediately after shipping the physical set, allowing you to proceed with other steps in parallel.',
        titleNo: 'Gjenoppretting av nøddata',
        descNo: 'Vi lager virtuelle sertifiserte kopier og overfører dem til deg via krypterte kanaler umiddelbart etter at vi har sendt det fysiske settet, slik at du kan fortsette med andre trinn parallelt.'
      }
    ],
    conclusion: 'ระบบการจัดส่งเอกสารระหว่างประเทศที่มีมาตรฐานความปลอดภัยสูงและการสำรองข้อมูลดิจิทัล ช่วยประกันความสมบูรณ์ของเอกสารต้นฉบับจนถึงมือผู้รับปลายทาง',
    conclusionEn: 'A high-security international document delivery system with digital backup ensures the integrity of original documents until they reach the final recipient.',
    conclusionNo: 'Et høysikkert internasjonalt dokumentleveringssystem med digital sikkerhetskopiering sikrer integriteten til originaldokumentene inntil de når den endelige mottakeren.',
    expertTips: [
      'ห้ามใช้ซองจดหมายธรรมดาในการส่งเอกสารกลับไทยเด็ดขาด เพราะเสี่ยงต่อการถูกเครื่องคัดแยกทำลาย',
      'ควรทำเครื่องหมาย "DO NOT BEND" ให้ชัดเจนทั้งภาษาไทยและอังกฤษบนหน้าซอง'
    ],
    expertTipsEn: [
      'Never use standard envelopes for shipping to Thailand; they risk destruction by sorting machines.',
      'Mark the envelope clearly with "DO NOT BEND" in both Thai and English.'
    ],
    expertTipsNo: [
      'Bruk aldri standardkonvolutter for frakt til Thailand; de risikerer å bli ødelagt av sorteringsmaskiner.',
      'Merk konvolutten tydelig med "DO NOT BEND" på både thai og engelsk.'
    ],
  }
];

export interface FaqItem {
  q: string;
  qEn: string;
  qNo?: string;
  a: string;
  aEn: string;
  aNo?: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'จำเป็นต้องเดินทางมาพบเจ้าหน้าที่ด้วยตัวเองหรือไม่?',
    qEn: 'Do I need to visit the office in person for consultation?',
    qNo: 'Må jeg møte opp personlig for konsultasjon?',
    a: 'ไม่จำเป็นต้องเดินทางมาด้วยตัวเองในทุกขั้นตอนค่ะ Thainorexpert ออกแบบระบบการทำงานแบบ Hybrid ที่รองรับทั้งการปรึกษาผ่านระบบ Video Call และการส่งเอกสารผ่านทางไปรษณีย์ลงทะเบียน (REK) หรือ Courier ทั่วโลก อย่างไรก็ตาม หากคุณสะดวกนัดพบ เรามีสำนักงานตั้งอยู่ในเขต Lier นอร์เวย์ ซึ่งพร้อมให้บริการนัดหมายล่วงหน้าเพื่อตรวจสอบเอกสารฉบับจริงร่วมกันเพื่อความสบายใจสูงสุด',
    aEn: 'It is not mandatory to visit in person. Thainorexpert operates using a hybrid system that supports video consultations and document delivery via registered mail (REK) or global couriers. However, if you prefer a face-to-face meeting, our office in Lier, Norway, is available for pre-scheduled appointments to review original documents together for your maximum peace of mind.',
    aNo: 'Det er ikke obligatorisk å møte opp personlig. Thainorexpert opererer med et hybridsystem som støtter videokonsultasjoner og dokumentlevering via rekommandert post (REK) eller globale kurerer. Hvis du imidlertid foretrekker et fysisk møte, er kontoret vårt i Lier, Norge, tilgjengelig for forhåndsavtalte møter for å gjennomgå originaldokumenter sammen for din maksimale trygghet.'
  },
  {
    q: 'โครงสร้างค่าบริการมีการคำนวณอย่างไร และมีค่าใช้จ่ายแอบแฝงหรือไม่?',
    qEn: 'How are fees calculated and are there any hidden costs?',
    qNo: 'Hvordan beregnes gebyrene, og er det noen skjulte kostnader?',
    a: 'เรายึดหลักความโปร่งใส (Price Transparency) ค่าบริการจะถูกคำนวณตามความซับซ้อนของเคส จำนวนชุดเอกสาร และประเภทของหน่วยงานที่ต้องไปติดต่อ โดยเราจะดำเนินการประเมินผล (Initial Assessment) และเสนอราคาแบบสุทธิ (Flat Rate) ให้คุณพิจารณาก่อนเริ่มงานเสมอ คุณจะได้รับทราบงบประมาณทั้งหมดล่วงหน้า รวมถึงค่าธรรมเนียมราชการโดยประมาณ เพื่อให้ไม่มีค่าใช้จ่ายแอบแฝงที่ทำให้คุณกังวลใจในภายหลัง',
    aEn: 'We adhere to strict Price Transparency. Fees are calculated based on case complexity, document count, and the specific agencies involved. We perform an Initial Assessment and provide a flat-rate quote before any work begins. You will be informed of the total budget upfront, including estimated government fees, ensuring no hidden costs arise later.',
    aNo: 'Vi opprettholder streng pristransparens. Gebyrene beregnes basert på sakens kompleksitet, antall dokumenter og de spesifikke byråene som er involvert. Vi utfører en innledende vurdering og gir et fast pristilbud før arbeidet begynner. Du vil få opplyst hele budsjettet på forhånd, inkludert estimerte offentlige avgifter, slik at ingen skjulte kostnader oppstår senere.'
  },
  {
    q: 'ระยะเวลาดำเนินการมาตรฐานสำหรับงานแต่ละประเภทเป็นอย่างไร?',
    qEn: 'What is the standard processing time for each type of service?',
    qNo: 'Hva er standard behandlingstid for hver type tjeneste?',
    a: 'ระยะเวลาขึ้นอยู่กับระเบียบของหน่วยงานราชการในขณะนั้นโดยตรง โดยปกติการรับรองเอกสารและกงสุลจะใช้เวลาประมาณ 2-4 สัปดาห์รวมเวลาขนส่ง ส่วนการจดทะเบียนสมรสหรือการแจ้งเกิดข้ามแดนอาจใช้เวลา 1-3 เดือน ขึ้นอยู่กับคิวของหน่วยงานทะเบียนราษฎร์และ Statsforvalteren ทั้งนี้ Thainorexpert จะมีการอัปเดตสถานะ (Status Update) ให้คุณทราบเป็นระยะเพื่อให้คุณสามารถวางแผนการเดินทางได้อย่างแม่นยำ',
    aEn: 'Processing times depend directly on current government agency schedules. Generally, document authentication and consular services take 2-4 weeks including shipping. Marriage registrations or birth notifications typically take 1-3 months depending on registry and Statsforvalteren backlogs. Thainorexpert provides regular status updates so you can plan your travels with precision.',
    aNo: 'Behandlingstiden avhenger direkte av gjeldende tidsplaner for offentlige etater. Generelt tar dokumentautentisering og konsulære tjenester 2-4 uker inkludert frakt. Ekteskapsregistreringer eller fødselsmeldinger tar vanligvis 1-3 måneder avhengig av saksbehandlingstiden hos folkeregisteret og Statsforvalteren. Thainorexpert gir jevnlige statusoppdateringer slik at du kan planlegge reisene dine med presisjon.'
  },
  {
    q: 'หากตัวฉันพำนักอยู่ในประเทศไทย สามารถใช้บริการของ Thainorexpert ได้หรือไม่?',
    qEn: 'Can I use your services if I am currently residing in Thailand?',
    qNo: 'Kan jeg bruke tjenestene deres hvis jeg for øyeblikket er bosatt i Thailand?',
    a: 'สามารถทำได้แน่นอนค่ะ เรามีเครือข่ายความร่วมมือกับทีมงานผู้เชี่ยวชาญในประเทศไทยที่สามารถประสานงานกับกรมการกงสุล ถนนแจ้งวัฒนะ และสำนักงานเขต/อำเภอต่างๆ ได้โดยตรง บริการของเราจึงครอบคลุมแบบ End-to-End ไม่ว่าตัวคุณจะอยู่ที่นอร์เวย์หรือไทย เราสามารถดูแลโซ่วงจรเอกสารให้เชื่อมถึงกันได้อย่างสมบูรณ์แบบ',
    aEn: 'Absolutely. We have a robust partnership network in Thailand capable of coordinating directly with the Department of Consular Affairs (Chaeng Wattana) and various district offices. Our service is End-to-End; regardless of whether you are in Norway or Thailand, we ensure your document lifecycle remains perfectly connected.',
    aNo: 'Absolutt. Vi har et solid partnernettverk i Thailand som er i stand til å koordinere direkte med Konsulæravdelingen (Chaeng Wattana) og ulike distriktskontorer. Tjenesten vår er ende-til-ende; uansett om du er i Norge eller Thailand, sørger vi for at dokumentets livssyklus forblir perfekt tilkoblet.'
  },
  {
    q: 'ทางบริษัทมีมาตรการคุ้มครองความลับและเอกสารส่วนบุคคลอย่างไร?',
    qEn: 'What measures are in place to protect confidentiality and personal documents?',
    qNo: 'Hvilke tiltak er på plass for å beskytte konfidensialitet og personlige dokumenter?',
    a: 'ความปลอดภัยของข้อมูลลูกค้าคือหัวใจของ Thainorexpert เราปฏิบัติตามมาตรฐานการคุ้มครองข้อมูลส่วนบุคคลอย่างเคร่งครัด (GDPR Compliant) เอกสารของคุณจะถูกเข้าถึงโดยเจ้าหน้าที่ที่ได้รับมอบหมายเท่านั้น และจะไม่มีการเปิดเผยข้อมูลแก่บุคคลภายนอกโดยไม่ได้รับอนุญาต นอกจากนี้ การจัดเก็บไฟล์ดิจิทัลสำรองยังดำเนินการบนระบบ Cloud ที่มีการเข้ารหัสระดับสูง (End-to-end Encryption) เพื่อป้องกันความปลอดภัยสูงสุดในทุกมิติ',
    aEn: 'Customer data security is at the heart of Thainorexpert. We strictly adhere to personal data protection standards (GDPR Compliance). Your documents are accessed only by assigned staff, and no information is disclosed to third parties without authorization. Furthermore, digital backups are stored on high-level encrypted cloud systems (End-to-End Encryption) to ensure maximum security in all dimensions.',
    aNo: 'Kundedatasikkerhet er kjernen i Thainorexpert. Vi overholder strengt standarder for personvern (GDPR). Dokumentene dine er kun tilgjengelige for tildelt personale, og ingen informasjon utleveres til tredjeparter uten tillatelse. Videre lagres digitale sikkerhetskopier på høyt krypterte skysystemer (End-to-End Encryption) for å sikre maksimal sikkerhet i alle dimensjoner.'
  }
];
