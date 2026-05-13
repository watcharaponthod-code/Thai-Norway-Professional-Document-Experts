export interface KnowledgeBaseItem {
  id: number;
  title: string;
  titleEn: string;
  titleNo?: string;
  description: string;
  descriptionEn: string;
  descriptionNo?: string;
  steps: { title: string; titleEn: string; titleNo?: string }[];
  docs: string[];
  docsEn: string[];
  docsNo?: string[];
  duration: string;
  durationEn: string;
  durationNo?: string;
  note?: string;
  noteEn?: string;
  noteNo?: string;
  countries: ('th' | 'no')[];
}

export const knowledgeBaseData: KnowledgeBaseItem[] = [
  {
    id: 1,
    title: 'การรับรองเอกสารไทย เพื่อใช้ในนอร์เวย์',
    titleEn: 'Authentication of Thai Documents for Use in Norway',
    countries: ['th', 'no'],
    description: 'เอกสารที่ออกในประเทศไทย เช่น สูติบัตร ทะเบียนบ้าน ใบรับรองความเป็นโสด หากต้องนำมาใช้ในประเทศนอร์เวย์ จะต้องผ่านการรับรองเอกสารอย่างถูกต้องก่อน มิฉะนั้นทางหน่วยงานนอร์เวย์จะไม่รับพิจารณา',
    descriptionEn: 'Documents issued in Thailand, such as birth certificates, house registrations, or single status certificates, must be properly authenticated before they can be used in Norway; otherwise, Norwegian authorities will not accept them.',
    steps: [
      { title: 'ขอคัดสำเนาเอกสารต้นฉบับใหม่จากหน่วยงานราชการไทย (ฉบับล่าสุด อายุไม่เกิน 6 เดือน)', titleEn: 'Request a fresh original copy from Thai authorities (issued within the last 6 months).' },
      { title: 'แปลเอกสารจากภาษาไทยเป็นภาษาอังกฤษ โดยศูนย์แปลที่กรมการกงสุลรับรอง', titleEn: 'Translate the document from Thai to English via a center certified by the Department of Consular Affairs.' },
      { title: 'นำเอกสารต้นฉบับ + คำแปล ไปรับรองที่ กรมการกงสุล กระทรวงการต่างประเทศไทย', titleEn: 'Submit the original and translation for legalization at the Department of Consular Affairs (MFA Thailand).' },
      { title: 'นำเอกสารที่ผ่านการรับรองจากกงสุลไทย ไปรับรองอีกชั้นที่ สถานเอกอัครราชทูตนอร์เวย์ ประจำกรุงเทพฯ', titleEn: 'Legalize the documents further at the Royal Norwegian Embassy in Bangkok.' }
    ],
    docs: [
      'เอกสารต้นฉบับฉบับจริง อายุไม่เกิน 6 เดือน',
      'สำเนาบัตรประชาชนของเจ้าของเอกสาร',
      'สำเนาหนังสือเดินทาง (หน้าที่มีรูปและข้อมูล)',
      'หนังสือมอบอำนาจ (กรณีให้ผู้อื่นดำเนินการแทน) ติดอากรแสตมป์ 10 บาท',
      'สำเนาบัตรประชาชนของผู้รับมอบอำนาจ'
    ],
    docsEn: [
      'Original official document (issued within 6 months)',
      'Copy of ID card of the document owner',
      'Copy of passport photo page',
      'Power of Attorney (if applicable) with 10 THB duty stamp',
      'Copy of ID card of the authorized representative'
    ],
    duration: 'ประมาณ 2-3 สัปดาห์',
    durationEn: 'Approximately 2-3 weeks',
    note: 'กรมการกงสุลมีบริการรับรองด่วน (1 วัน) และแบบปกติ (3-5 วันทำการ)',
    noteEn: 'The Department of Consular Affairs offers express (1 day) and standard (3-5 working days) services.'
  },
  {
    id: 2,
    title: 'การรับรองเอกสารนอร์เวย์ เพื่อใช้ในประเทศไทย',
    titleEn: 'Authentication of Norwegian Documents for Use in Thailand',
    countries: ['no', 'th'],
    description: 'เอกสารที่ออกในประเทศนอร์เวย์ เช่น ทะเบียนสมรสนอร์เวย์ ใบรับรองความเป็นโสด ทะเบียนบ้าน หากต้องนำไปใช้ในประเทศไทย จะต้องผ่านขั้นตอนการรับรองหลายขั้น',
    descriptionEn: 'Documents issued in Norway, such as Norwegian marriage certificates, single status certificates, or residence certificates, must undergo several authentication steps before they can be used in Thailand.',
    steps: [
      { title: 'ขอเอกสารต้นฉบับจากหน่วยงานนอร์เวย์ (Skatteetaten) โดยขอเป็น “ฉบับ 5 ภาษา” (Flerspråklig attest)', titleEn: 'Request the original document from Skatteetaten as a "5-language version" (Flerspråklig attest) if possible.' },
      { title: 'กรณีไม่มีภาษาอังกฤษ: แปลเป็นภาษาอังกฤษหรือไทย โดยผู้แปลที่ได้รับการรับรองดุสิตนอร์เวย์', titleEn: 'If English is not included: Translate to English/Thai via a State Authorized Translator.' },
      { title: 'รับตราประทับจาก Notary Public (Notarius Publicus) ที่ Tingrett ใกล้บ้าน', titleEn: 'Obtain a stamp from the Notary Public (Notarius Publicus) at your local Tingrett.' },
      { title: 'รับตราประทับจาก กระทรวงต่างประเทศนอร์เวย์ (UD - Utenriksdepartementet)', titleEn: 'Obtain an Apostille/stamp from the Norwegian Ministry of Foreign Affairs (UD).' },
      { title: 'รับตราประทับจาก สถานเอกอัครราชทูตไทย ณ กรุงออสโล', titleEn: 'Obtain final legalization from the Royal Thai Embassy in Oslo.' }
    ],
    docs: [
      'เอกสารนอร์เวย์ต้นฉบับฉบับจริง (อายุไม่เกิน 6 เดือน)',
      'สำเนาหนังสือเดินทาง (Passport) ของเจ้าของเอกสาร',
      'สำเนาบัตรประจำตัวประชาชนนอร์เวย์ (ID-kort)',
      'สำเนาทะเบียนบ้านนอร์เวย์ (Bostedsattest)'
    ],
    docsEn: [
      'Original Norwegian document (issued within 6 months)',
      'Copy of passport of the document owner',
      'Copy of Norwegian ID card (ID-kort)',
      'Copy of Norwegian residence certificate (Bostedsattest)'
    ],
    duration: '2-4 สัปดาห์',
    durationEn: '2-4 weeks',
    note: 'เอกสารแบบ 5 ภาษา (Flerspråklig attest) ช่วยประหยัดทั้งค่าแปลและเวลาได้มาก',
    noteEn: 'The 5-language version (Flerspråklig attest) significantly saves time and translation costs.'
  },
  {
    id: 3,
    title: 'การจดทะเบียนสมรสไทย-นอร์เวย์ (จดทะเบียนในประเทศไทย)',
    titleEn: 'Thai-Norwegian Marriage Registration (In Thailand)',
    countries: ['th', 'no'],
    description: 'กรณีที่คู่สมรสประสงค์จะจดทะเบียนสมรสในประเทศไทย โดยฝ่ายหนึ่งเป็นคนไทย อีกฝ่ายเป็นชาวนอร์เวย์',
    descriptionEn: 'Process for couples wishing to register their marriage in Thailand where one party is Thai and the other is Norwegian.',
    steps: [
      { title: 'ฝ่ายชาวนอร์เวย์ขอใบรับรองความเป็นโสด (Sivilstandsattest) จากนอร์เวย์', titleEn: 'Norwegian party requests a Single Status Certificate (Sivilstandsattest) from Norway.' },
      { title: 'ขอ “หนังสือรับรองให้ทำการสมรสได้” ณ สถานทูตนอร์เวย์ในกรุงเทพฯ', titleEn: 'Obtain an "Affirmation to Marry" from the Norwegian Embassy in Bangkok.' },
      { title: 'นำหนังสือรับรองไปแปลเป็นภาษาไทยและรับรองที่กรมการกงสุล', titleEn: 'Translate the affirmation into Thai and legalize it at the Department of Consular Affairs.' },
      { title: 'จดทะเบียนสมรสที่สำนักงานเขต/ที่ว่าการอำเภอ พร้อมพยานและล่าม', titleEn: 'Register the marriage at any District Office in Thailand with witnesses and an interpreter.' }
    ],
    docs: [
      'หนังสือเดินทางฝ่ายนอร์เวย์',
      'ใบรับรองความเป็นโสด (Sivilstandsattest) อายุไม่เกิน 6 เดือน',
      'ใบหย่าตัวจริง (ถ้ามี)',
      'บัตรประชาชนและทะเบียนบ้านฝ่ายไทย',
      'ใบรับรองความเป็นโสดฝ่ายไทย'
    ],
    docsEn: [
      'Norwegian passport',
      'Single Status Certificate (Sivilstandsattest) within 6 months',
      'Original Divorce Certificate (if applicable)',
      'Thai ID card and house registration',
      'Thai Single Status Certificate'
    ],
    duration: 'ประมาณ 1-2 เดือน',
    durationEn: 'Approximately 1-2 months',
    note: 'ฝ่ายชาวนอร์เวย์ต้องชี้แจงรายได้และที่อยู่ปัจจุบันเพื่อขอหนังสือรับรองที่สถานทูต',
    noteEn: 'The Norwegian party must provide proof of income and current address for the embassy affirmation.'
  },
  {
    id: 4,
    title: 'การจดทะเบียนสมรสไทย-นอร์เวย์ (จดทะเบียนในประเทศนอร์เวย์)',
    titleEn: 'Thai-Norwegian Marriage Registration (In Norway)',
    countries: ['no', 'th'],
    description: 'กรณีคู่สมรสประสงค์จะจดทะเบียนในนอร์เวย์ จะต้องผ่านขั้นตอน Prøvingsattest จากหน่วยงาน Skatteetaten ก่อน',
    descriptionEn: 'Couples wishing to marry in Norway must first obtain a Marriage Eligibility Certificate (Prøvingsattest) from Skatteetaten.',
    steps: [
      { title: 'ฝ่ายชาวไทยขอใบรับรองความเป็นโสด แปล และรับรองจนถึงสถานทูตนอร์เวย์ในไทย', titleEn: 'Thai party obtains a Single Status Certificate, translates, and legalizes it up to the Norwegian Embassy in Bangkok.' },
      { title: 'ยื่นคำร้องขอ Prøvingsattest ที่ Skatteetaten (ใช้เวลาประมาณ 2-3 สัปดาห์)', titleEn: 'Submit a Prøvingsattest application to Skatteetaten (takes approx. 2-3 weeks).' },
      { title: 'นัดหมายจดทะเบียนสมรสที่ Tingrett หรือพิธีตามศาสนาเมื่อได้ใบ Prøvingsattest', titleEn: 'Schedule the marriage ceremony at Tingrett or a religious venue once the certificate is granted.' }
    ],
    docs: [
      'ใบรับรองความเป็นโสดฝ่ายไทย (แปล + รับรองครบถ้วน)',
      'สูติบัตรและทะเบียนบ้านฝ่ายไทย (แปล + รับรองครบถ้วน)',
      'หนังสือเดินทางไทย',
      'ทะเบียนบ้านนอร์เวย์ของฝ่ายนอร์เวย์ (Bostedsattest)'
    ],
    docsEn: [
      'Thai Single Status Certificate (Translated & Legalized)',
      'Thai Birth Certificate and House Registration (Translated & Legalized)',
      'Thai Passport',
      'Norwegian residence certificate (Bostedsattest)'
    ],
    duration: 'ประมาณ 2-3 เดือน',
    durationEn: 'Approximately 2-3 months',
    note: 'เอกสารฝ่ายไทยที่รับรองแล้วมีอายุการใช้งานในนอร์เวย์ 4 เดือน',
    noteEn: 'Certified Thai documents are generally valid for use in Norway for 4 months.'
  },
  {
    id: 5,
    title: 'การปรับสถานะสมรสในทะเบียนราษฎรไทย (หลังจดทะเบียนที่นอร์เวย์)',
    titleEn: 'Updating Thai Marital Status (After Marriage in Norway)',
    countries: ['th', 'no'],
    description: 'เมื่อจดทะเบียนสมรสในนอร์เวย์แล้ว ควรไปแจ้งปรับสถานะเป็น “สมรส” ในทะเบียนราษฎรไทยเพื่อให้ข้อมูลถูกต้องตรงกัน',
    descriptionEn: 'After marrying in Norway, you should update your status to "Married" in the Thai Civil Registry for data consistency and future legal transactions.',
    steps: [
      { title: 'ขอทะเบียนสมรสนอร์เวย์ฉบับ 5 ภาษา (Flerspråklig vigselsattest) จาก Skatteetaten', titleEn: 'Request a 5-language Norwegian marriage certificate from Skatteetaten.' },
      { title: 'นำไปรับรองที่สถานเอกอัครราชทูตไทย ณ กรุงออสโล', titleEn: 'Legalize the certificate at the Royal Thai Embassy in Oslo.' },
      { title: 'นำไปรับรองคำแปลที่กรมการกงสุลในความดูแลของกระทรวงการต่างประเทศไทย', titleEn: 'Legalize the Thai translation at the Department of Consular Affairs (MFA Thailand).' },
      { title: 'ยื่นเรื่องปรับข้อมูลที่สำนักงานเขต/อำเภอที่มีทะเบียนบ้านอยู่', titleEn: 'Submit documents at your registered District/District Office in Thailand.' }
    ],
    docs: [
      'ทะเบียนสมรสนอร์เวย์ (Flerspråklig vigselsattest)',
      'หนังสือเดินทางคู่สมรส (รับรองสำเนาครบถ้วน)',
      'บัตรประชาชนและทะเบียนบ้านฝ่ายไทย',
      'หนังสือมอบอำนาจ (หากดำเนินการแทน)'
    ],
    docsEn: [
      'Norwegian marriage certificate (Flerspråklig version)',
      'Passports of both spouses (Certified copies)',
      'Thai ID card and house registration',
      'Power of Attorney (if using a representative)'
    ],
    duration: '1-2 เดือน (กรณีส่งทางไปรษณีย์)',
    durationEn: '1-2 months (if processed by mail)',
    note: 'สามารถทำเรื่องที่ไทยได้โดยไม่ต้องเดินทางกลับไทยด้วยการมอบอำนาจ',
    noteEn: 'This can be processed in Thailand via power of attorney without needing to travel there in person.'
  },
  {
    id: 6,
    title: 'การแจ้งเกิดบุตรที่เกิดในนอร์เวย์ และเพิ่มชื่อในทะเบียนบ้านไทย',
    titleEn: 'Birth Notification in Norway & Thai House Registration',
    countries: ['no', 'th'],
    description: 'บุตรที่เกิดในนอร์เวย์จากบิดาหรือมารดาคนไทย มีสิทธิได้รับสัญชาติไทย ควรแจ้งเกิดเพื่อทำสูติบัตรไทยและเพิ่มชื่อเข้าทะเบียนบ้าน',
    descriptionEn: 'Children born in Norway to a Thai parent are entitled to Thai citizenship. Parents should register the birth for a Thai birth certificate and house registration.',
    steps: [
      { title: 'ขอใบเกิดนอร์เวย์ (Fødselsattest) และใบรับรองชื่อ (Navneattest) จาก Skatteetaten', titleEn: 'Obtain the Norwegian birth certificate and name certificate from Skatteetaten.' },
      { title: 'ขอ “สูติบัตรไทย” ณ สถานเอกอัครราชทูตไทย ณ กรุงออสโล', titleEn: 'Apply for a "Thai Birth Certificate" at the Royal Thai Embassy in Oslo.' },
      { title: 'ส่งสูติบัตรไทยกลับไทยเพื่อเพิ่มชื่อบุตรในทะเบียนบ้าน', titleEn: 'Send the Thai birth certificate to Thailand to add the child to the house registration.' }
    ],
    docs: [
      'ใบเกิดนอร์เวย์แบบ 5 ภาษา',
      'ใบรับรองชื่อบุตร (Navneattest)',
      'หนังสือเดินทางบิดา-มารดา (รับรอง Notary & UD)',
      'ทะเบียนสมรสบิดามารดา (ถ้ามี)',
      'ทะเบียนบ้านไทยของบิดา/มารดาไทย'
    ],
    docsEn: [
      'Norwegian birth certificate (5-language version)',
      'Child\'s name certificate (Navneattest)',
      'Passports of parents (Notary & UD certified)',
      'Parents\' marriage registration (if applicable)',
      'Thai parent\'s house registration'
    ],
    duration: 'เตรียมเอกสาร 2-3 สัปดาห์',
    durationEn: 'Preparation 2-3 weeks',
    note: 'ควรแจ้งเกิดบุตรภายใน 1 ปีหลังคลอด',
    noteEn: 'Birth should ideally be registered within 1 year of delivery.'
  },
  {
    id: 7,
    title: 'การขอวีซ่าประเทศไทย สำหรับคู่สมรส/บุตรชาวนอร์เวย์',
    titleEn: 'Thai Visa for Norwegian Spouses/Children',
    countries: ['th', 'no'],
    description: 'ชาวนอร์เวย์ที่สมรสกับคนไทย หรือบุตรชาวนอร์เวย์ของคนไทย สามารถขอวีซ่าพำนักระยะยาวเพื่อติดตามครอบครัวได้',
    descriptionEn: 'Norwegians married to Thais or children of Thai parents can apply for long-term residency visas (Non-O) to stay with their family in Thailand.',
    steps: [
      { title: 'ประเมินประเภทวีซ่า (Non-O สมรส/ติดตามครอบครัว หรือ O-A เกษียณอายุ)', titleEn: 'Assess visa type (Non-O for marriage/family dependency or O-A for retirement).' },
      { title: 'เตรียมหลักฐานการเงิน (Statement) ตามเกณฑ์ที่กำหนด', titleEn: 'Prepare financial evidence (statements) according to official criteria.' },
      { title: 'ยื่นคำร้องขอวีซ่าผ่านระบบออนไลน์ของสถานทูตไทย', titleEn: 'Submit the visa application via the Royal Thai Embassy\'s online portal.' }
    ],
    docs: [
      'หนังสือเดินทางที่มีอายุเหลือมากกว่า 6 เดือน',
      'ทะเบียนสมรส (คร.2 และ คร.3) หรือสูติบัตร',
      'หลักฐานการเงิน (400,000 บาท ในบัญชีไทย หรือรายได้เดือนละ 40,000 บาท)',
      'บัตรประชาชนและทะเบียนบ้านฝ่ายไทย'
    ],
    docsEn: [
      'Passport valid for at least 6 months',
      'Marriage/Birth certificates',
      'Financial proof (400,000 THB in Thai bank or 40,000 THB/month income)',
      'Thai ID and house registration of the Thai spouse/parent'
    ],
    duration: 'ประมาณ 5-15 วันทำการ',
    durationEn: 'Approx. 5-15 working days',
    note: 'กฎเกณฑ์วีซ่ามีการปรับเปลี่ยนบ่อย ควรตรวจสอบเกณฑ์การพิจารณาลาสุด',
    noteEn: 'Visa regulations change frequently; always check the latest criteria.'
  },
  {
    id: 8,
    title: 'การขอวีซ่าเชงเก้น (นอร์เวย์) สำหรับคนไทย',
    titleEn: 'Schengen Visa (Norway) for Thai Citizens',
    countries: ['no', 'th'],
    description: 'คนไทยที่ต้องการเดินทางไปนอร์เวย์เพื่อท่องเที่ยวหรือเยี่ยมญาติ จะต้องขอวีซ่าประเภท C ที่ศูนย์ VFS Global ในกรุงเทพฯ',
    descriptionEn: 'Thai nationals wishing to visit Norway for tourism or family visits must apply for a Category C visa at the VFS Global center in Bangkok.',
    steps: [
      { title: 'กรอกใบสมัครออนไลน์ผ่าน Application Portal ของ UDI', titleEn: 'Fill out the online application via the UDI Application Portal.' },
      { title: 'จองนัดหมายที่ VFS Global กรุงเทพฯ เพื่อพิมพ์ลายนิ้วมือ', titleEn: 'Schedule an appointment at VFS Global Bangkok for biometrics.' },
      { title: 'ยื่นเอกสารและรอผลพิจารณาจากสถานทูตนอร์เวย์', titleEn: 'Submit documents and wait for the Norwegian Embassy\'s decision.' }
    ],
    docs: [
      'หนังสือเดินทาง + สำเนาทุกหน้าที่มีตราประทับ',
      'ประกันการเดินทางวงเงินคุ้มครอง 1.5 ล้านบาท',
      'หลักฐานการงานและการเงินย้อนหลัง 3-6 เดือน',
      'จดหมายเชิญ (Invitation) จากผู้เชิญในนอร์เวย์ (ถ้ามี)'
    ],
    docsEn: [
      'Passport + copies of all stamped pages',
      'Travel insurance with min. €30,000 coverage',
      'Proof of employment and 3-6 months financial records',
      'Invitation letter from the host in Norway (if applicable)'
    ],
    duration: '15-30 วันทำการ',
    durationEn: '15-30 working days',
    note: 'พิจารณาจากความน่าเชื่อถือของผู้สมัครและความสมเหตุสมผลของแผนการเดินทาง',
    noteEn: 'Approval depends on the applicant\'s credibility and the reasonableness of the travel plan.'
  },
  {
    id: 9,
    title: 'การหย่า / การแจ้งหย่าระหว่างประเทศ',
    titleEn: 'International Divorce & Registration',
    countries: ['th', 'no'],
    description: 'กรณีคู่สมรสไทย-นอร์เวย์หย่าร้าง ต้องแจ้งให้ทั้งสองประเทศรับทราบเพื่อปรับสถานะให้ถูกต้อง',
    descriptionEn: 'Thai-Norwegian couples who divorce must notify both countries to ensure their legal status is correctly updated.',
    steps: [
      { title: 'กรณีหย่าในนอร์เวย์: ยื่น Separasjon และ Skilsmisse ที่ Statsforvalteren', titleEn: 'If in Norway: Apply for Separation and Divorce at Statsforvalteren.' },
      { title: 'แปลและรับรองใบหย่านอร์เวย์เพื่อนำไปแจ้งที่อำเภอไทย', titleEn: 'Translate and legalize the Norwegian divorce certificate for Thai district registration.' },
      { title: 'กรณีหย่าในไทย: นำใบหย่าไทยแปลและรับรองเพื่อส่งแจ้ง Skatteetaten', titleEn: 'If in Thailand: Translate and legalize Thai divorce docs to notify Skatteetaten.' }
    ],
    docs: [
      'ใบสำคัญการหย่า (ต้นฉบับ)',
      'หนังสือเดินทางและบัตรประชาชน',
      'ทะเบียนสมรสฉบับเดิม'
    ],
    docsEn: [
      'Original Divorce Certificate',
      'Passports and ID cards',
      'Original Marriage Certificate'
    ],
    duration: 'ขึ้นอยู่กับกระบวนการศาลหรือหน่วยงาน',
    durationEn: 'Depends on court or agency processing times',
    note: 'กรณีมีบุตรหรือทรัพย์สิน ควรปรึกษาทนายความร่วมด้วย',
    noteEn: 'In cases involving children or assets, consulting a lawyer is recommended.'
  },
  {
    id: 10,
    title: 'การทำหนังสือมอบอำนาจในไทย จากนอร์เวย์',
    titleEn: 'Power of Attorney from Norway for Use in Thailand',
    countries: ['no', 'th'],
    description: 'คนไทยที่ต้องการมอบอำนาจให้ญาติในไทยดำเนินการแทน เช่น ซื้อขายที่ดิน หรือทำธุรกรรมธนาคาร สามารถทำผ่านสถานทูตไทยในออสโลได้',
    descriptionEn: 'Thai nationals in Norway can authorize relatives in Thailand for transactions like land sales or banking via the Royal Thai Embassy in Oslo.',
    steps: [
      { title: 'ดาวน์โหลดแบบฟอร์มหนังสือมอบอำนาจที่ตรงตามวัตถุประสงค์', titleEn: 'Download the specific Power of Attorney form for your purpose.' },
      { title: 'ลงนามต่อหน้าเจ้าหน้าที่ ณ สถานเอกอัครราชทูตไทย ณ กรุงออสโล', titleEn: 'Sign the document in person before an official at the Royal Thai Embassy in Oslo.' },
      { title: 'ส่งหนังสือมอบอำนาจที่รับรองแล้วกลับประเทศไทย', titleEn: 'Ship the legalized Power of Attorney back to Thailand.' }
    ],
    docs: [
      'หนังสือเดินทางไทยของผู้มอบ',
      'บัตรประชาชนไทย',
      'โฉนดที่ดิน หรือสมุดบัญชี (ตามเรื่องที่มอบอำนาจ)',
      'สำเนาบัตรประชาชนผู้รับมอบอำนาจในไทย'
    ],
    docsEn: [
      'Thai passport of the grantor',
      'Thai ID card',
      'Land title or Bank book (depending on the purpose)',
      'Copy of the representative\'s Thai ID card'
    ],
    duration: 'ดำเนินการที่สถานทูตในวันเดียว',
    durationEn: 'Processed at the embassy in one day',
    note: 'หนังสือมอบอำนาจส่วนใหญ่มีอายุใช้งาน 6 เดือน',
    noteEn: 'Most Power of Attorney documents are valid for 6 months.'
  },
  {
    id: 11,
    title: 'การส่งเอกสารกลับไทยอย่างปลอดภัย',
    titleEn: 'Securely Shipping Documents back to Thailand',
    countries: ['no', 'th'],
    description: 'ขั้นตอนการจัดส่งเอกสารสำคัญข้ามประเทศเพื่อป้องกันการสูญหายหรือเสียหาย',
    descriptionEn: 'Procedures for shipping critical documents internationally to prevent loss or damage.',
    steps: [
      { title: 'สแกนเอกสารเก็บสำรองเป็นไฟล์ดิจิทัลความละเอียดสูง', titleEn: 'Scan documents to create high-resolution digital backups.' },
      { title: 'แพ็กด้วยซองกันน้ำและประกบแผ่นแข็งป้องกันการพับ', titleEn: 'Pack in waterproof sleeves with rigid boards to prevent folding.' },
      { title: 'เลือกบริการส่งแบบ EMS (Posten) หรือ Courier (DHL/FedEx)', titleEn: 'Select EMS (Posten) or Couriers like DHL/FedEx.' }
    ],
    docs: [
      'หมายเลขติดตาม (Tracking Number)',
      'ลายเซ็นผู้รับปลายทาง (Proof of Delivery)'
    ],
    docsEn: [
      'Tracking Number',
      'Proof of Delivery/Signature'
    ],
    duration: '3-10 วันทำการ',
    durationEn: '3-10 working days',
    note: 'แนะนำให้ใช้บริการที่มีประกันและระบบติดตามสถานะตลอดเวลา',
    noteEn: 'Always use services with insurance and full tracking systems.'
  },
  {
    id: 12,
    title: 'คำถามที่พบบ่อย (FAQ)',
    titleEn: 'Frequently Asked Questions (FAQ)',
    countries: ['th', 'no'],
    description: 'รวบรวมคำถามสำคัญเกี่ยวกับการบริการและงานกงสุล',
    descriptionEn: 'A compilation of critical questions regarding consular services and our offerings.',
    steps: [
      { title: 'จำเป็นต้องเดินทางมาพบเจ้าหน้าที่ด้วยตัวเองหรือไม่?', titleEn: 'Do I need to visit in person?' },
      { title: 'ค่าบริการมีการคำนวณอย่างไร มีค่าใช้จ่ายแอบแฝงไหม?', titleEn: 'How are fees calculated? Any hidden costs?' },
      { title: 'ระบบการจัดเก็บข้อมูลลูกค้าปลอดภัยแค่ไหน?', titleEn: 'How safe is my data?' }
    ],
    docs: [
      'สามารถอ่านรายละเอียดเพิ่มเติมได้ที่ส่วน FAQ ท้ายหน้าแรก',
      'ติดต่อสอบถามเพิ่มเติมได้ทาง LINE ของเรา'
    ],
    docsEn: [
      'Read more details in the FAQ section at the bottom of the home page.',
      'Contact us via LINE for more information.'
    ],
    duration: 'ให้บริการตลอดเวลาทำการ',
    durationEn: 'Available during business hours',
    note: 'เราให้ความสำคัญกับความลับลูกค้าสูงสุดตามมาตรฐาน GDPR',
    noteEn: 'We prioritize client confidentiality according to GDPR standards.'
  }
];
