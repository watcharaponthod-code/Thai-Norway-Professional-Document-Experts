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
    titleNo: 'Autentisering av thailandske dokumenter for bruk i Norge',
    countries: ['th', 'no'],
    description: 'เอกสารที่ออกในประเทศไทย เช่น สูติบัตร ทะเบียนบ้าน ใบรับรองความเป็นโสด หากต้องนำมาใช้ในประเทศนอร์เวย์ จะต้องผ่านการรับรองเอกสารอย่างถูกต้องก่อน มิฉะนั้นทางหน่วยงานนอร์เวย์จะไม่รับพิจารณา',
    descriptionEn: 'Documents issued in Thailand, such as birth certificates, house registrations, or single status certificates, must be properly authenticated before they can be used in Norway; otherwise, Norwegian authorities will not accept them.',
    descriptionNo: 'Dokumenter utstedt i Thailand, som fødselsattester, bostedsregistreringer eller sivilstandsattester, må være ordentlig autentisert før de kan brukes i Norge; ellers vil norske myndigheter ikke akseptere dem.',
    steps: [
      { title: 'ขอคัดสำเนาเอกสารต้นฉบับใหม่จากหน่วยงานราชการไทย (ฉบับล่าสุด อายุไม่เกิน 6 เดือน)', titleEn: 'Request a fresh original copy from Thai authorities (issued within the last 6 months).', titleNo: 'Be om en fersk originalkopi fra thailandske myndigheter (utstedt innen de siste 6 månedene).' },
      { title: 'แปลเอกสารจากภาษาไทยเป็นภาษาอังกฤษ โดยศูนย์แปลที่กรมการกงสุลรับรอง', titleEn: 'Translate the document from Thai to English via a center certified by the Department of Consular Affairs.', titleNo: 'Oversett dokumentet fra thai til engelsk via et senter sertifisert av Konsulæravdelingen.' },
      { title: 'นำเอกสารต้นฉบับ + คำแปล ไปรับรองที่ กรมการกงสุล กระทรวงการต่างประเทศไทย', titleEn: 'Submit the original and translation for legalization at the Department of Consular Affairs (MFA Thailand).', titleNo: 'Send inn originalen og oversettelsen for legalisering ved Konsulæravdelingen (thailandsk UD).' },
      { title: 'นำเอกสารที่ผ่านการรับรองจากกงสุลไทย ไปรับรองอีกชั้นที่ สถานเอกอัครราชทูตนอร์เวย์ ประจำกรุงเทพฯ', titleEn: 'Legalize the documents further at the Royal Norwegian Embassy in Bangkok.', titleNo: 'Legaliser dokumentene ytterligere ved den kongelige norske ambassaden i Bangkok.' }
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
    docsNo: [
      'Originalt offisielt dokument (utstedt innen 6 måneder)',
      'Kopi av ID-kort til dokumenteieren',
      'Kopi av passets fotoside',
      'Fullmakt (hvis aktuelt) med 10 THB stempelavgift',
      'Kopi av ID-kortet til den autoriserte representanten'
    ],
    duration: 'ประมาณ 2-3 สัปดาห์',
    durationEn: 'Approximately 2-3 weeks',
    durationNo: 'Omtrent 2-3 uker',
    note: 'กรมการกงสุลมีบริการรับรองด่วน (1 วัน) และแบบปกติ (3-5 วันทำการ)',
    noteEn: 'The Department of Consular Affairs offers express (1 day) and standard (3-5 working days) services.',
    noteNo: 'Konsulæravdelingen tilbyr ekspresstjenester (1 dag) og standardtjenester (3-5 virkedager).'
  },
  {
    id: 2,
    title: 'การรับรองเอกสารนอร์เวย์ เพื่อใช้ในประเทศไทย',
    titleEn: 'Authentication of Norwegian Documents for Use in Thailand',
    titleNo: 'Autentisering av norske dokumenter for bruk i Thailand',
    countries: ['no', 'th'],
    description: 'เอกสารที่ออกในประเทศนอร์เวย์ เช่น ทะเบียนสมรสนอร์เวย์ ใบรับรองความเป็นโสด ทะเบียนบ้าน หากต้องนำไปใช้ในประเทศไทย จะต้องผ่านขั้นตอนการรับรองหลายขั้น',
    descriptionEn: 'Documents issued in Norway, such as Norwegian marriage certificates, single status certificates, or residence certificates, must undergo several authentication steps before they can be used in Thailand.',
    descriptionNo: 'Dokumenter utstedt i Norge, som norske ekteskapsattester, sivilstandsattester eller bostedsattester, må gjennom flere autentiseringstrinn før de kan brukes i Thailand.',
    steps: [
      { title: 'ขอเอกสารต้นฉบับจากหน่วยงานนอร์เวย์ (Skatteetaten) โดยขอเป็น “ฉบับ 5 ภาษา” (Flerspråklig attest)', titleEn: 'Request the original document from Skatteetaten as a "5-language version" (Flerspråklig attest) if possible.', titleNo: 'Be om originaldokumentet fra Skatteetaten som en "5-språklig versjon" (Flerspråklig attest) hvis mulig.' },
      { title: 'กรณีไม่มีภาษาอังกฤษ: แปลเป็นภาษาอังกฤษหรือไทย โดยผู้แปลที่ได้รับการรับรองดุสิตนอร์เวย์', titleEn: 'If English is not included: Translate to English/Thai via a State Authorized Translator.', titleNo: 'Hvis engelsk ikke er inkludert: Oversett til engelsk/thai via en statsautorisert translatør.' },
      { title: 'รับตราประทับจาก Notary Public (Notarius Publicus) ที่ Tingrett ใกล้บ้าน', titleEn: 'Obtain a stamp from the Notary Public (Notarius Publicus) at your local Tingrett.', titleNo: 'Skaff et stempel fra Notarius Publicus ved din lokale Tingrett.' },
      { title: 'รับตราประทับจาก กระทรวงต่างประเทศนอร์เวย์ (UD - Utenriksdepartementet)', titleEn: 'Obtain an Apostille/stamp from the Norwegian Ministry of Foreign Affairs (UD).', titleNo: 'Skaff en Apostille/stempel fra det norske Utenriksdepartementet (UD).' },
      { title: 'รับตราประทับจาก สถานเอกอัครราชทูตไทย ณ กรุงออสโล', titleEn: 'Obtain final legalization from the Royal Thai Embassy in Oslo.', titleNo: 'Få endelig legalisering fra den kongelige thailandske ambassaden i Oslo.' }
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
    docsNo: [
      'Originalt norsk dokument (utstedt innen 6 måneder)',
      'Kopi av passet til dokumenteieren',
      'Kopi av norsk ID-kort',
      'Kopi av norsk bostedsattest'
    ],
    duration: '2-4 สัปดาห์',
    durationEn: '2-4 weeks',
    durationNo: '2-4 uker',
    note: 'เอกสารแบบ 5 ภาษา (Flerspråklig attest) ช่วยประหยัดทั้งค่าแปลและเวลาได้มาก',
    noteEn: 'The 5-language version (Flerspråklig attest) significantly saves time and translation costs.',
    noteNo: 'Den 5-språklige versjonen (Flerspråklig attest) sparer betydelig tid og oversettelseskostnader.'
  },
  {
    id: 3,
    title: 'การจดทะเบียนสมรสไทย-นอร์เวย์ (จดทะเบียนในประเทศไทย)',
    titleEn: 'Thai-Norwegian Marriage Registration (In Thailand)',
    titleNo: 'Thai-norsk ekteskapsregistrering (i Thailand)',
    countries: ['th', 'no'],
    description: 'กรณีที่คู่สมรสประสงค์จะจดทะเบียนสมรสในประเทศไทย โดยฝ่ายหนึ่งเป็นคนไทย อีกฝ่ายเป็นชาวนอร์เวย์',
    descriptionEn: 'Process for couples wishing to register their marriage in Thailand where one party is Thai and the other is Norwegian.',
    descriptionNo: 'Prosess for par som ønsker å registrere ekteskapet sitt i Thailand der den ene parten er thailandsk og den andre er norsk.',
    steps: [
      { title: 'ฝ่ายชาวนอร์เวย์ขอใบรับรองความเป็นโสด (Sivilstandsattest) จากนอร์เวย์', titleEn: 'Norwegian party requests a Single Status Certificate (Sivilstandsattest) from Norway.', titleNo: 'Den norske parten ber om en sivilstandsattest fra Norge.' },
      { title: 'ขอ “หนังสือรับรองให้ทำการสมรสได้” ณ สถานทูตนอร์เวย์ในกรุงเทพฯ', titleEn: 'Obtain an "Affirmation to Marry" from the Norwegian Embassy in Bangkok.', titleNo: 'Skaff en "Ekteskapsbekreftelse" fra den norske ambassaden i Bangkok.' },
      { title: 'นำหนังสือรับรองไปแปลเป็นภาษาไทยและรับรองที่กรมการกงสุล', titleEn: 'Translate the affirmation into Thai and legalize it at the Department of Consular Affairs.', titleNo: 'Oversett bekreftelsen til thai og legaliser den ved Konsulæravdelingen.' },
      { title: 'จดทะเบียนสมรสที่สำนักงานเขต/ที่ว่าการอำเภอ พร้อมพยานและล่าม', titleEn: 'Register the marriage at any District Office in Thailand with witnesses and an interpreter.', titleNo: 'Registrer ekteskapet ved ethvert distriktskontor i Thailand med vitner og en tolk.' }
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
    docsNo: [
      'Norsk pass',
      'Sivilstandsattest (innen 6 måneder)',
      'Original skilsmisseattest (hvis aktuelt)',
      'Thailandsk ID-kort og husregistrering',
      'Thailandsk sivilstandsattest'
    ],
    duration: 'ประมาณ 1-2 เดือน',
    durationEn: 'Approximately 1-2 months',
    durationNo: 'Omtrent 1-2 måneder',
    note: 'ฝ่ายชาวนอร์เวย์ต้องชี้แจงรายได้และที่อยู่ปัจจุบันเพื่อขอหนังสือรับรองที่สถานทูต',
    noteEn: 'The Norwegian party must provide proof of income and current address for the embassy affirmation.',
    noteNo: 'Den norske parten må fremlegge bevis på inntekt og nåværende adresse for ambassadens bekreftelse.'
  },
  {
    id: 4,
    title: 'การจดทะเบียนสมรสไทย-นอร์เวย์ (จดทะเบียนในประเทศนอร์เวย์)',
    titleEn: 'Thai-Norwegian Marriage Registration (In Norway)',
    titleNo: 'Thai-norsk ekteskapsregistrering (i Norge)',
    countries: ['no', 'th'],
    description: 'กรณีคู่สมรสประสงค์จะจดทะเบียนในนอร์เวย์ จะต้องผ่านขั้นตอน Prøvingsattest จากหน่วยงาน Skatteetaten ก่อน',
    descriptionEn: 'Couples wishing to marry in Norway must first obtain a Marriage Eligibility Certificate (Prøvingsattest) from Skatteetaten.',
    descriptionNo: 'Par som ønsker å gifte seg i Norge må først skaffe seg en prøvingsattest fra Skatteetaten.',
    steps: [
      { title: 'ฝ่ายชาวไทยขอใบรับรองความเป็นโสด แปล และรับรองจนถึงสถานทูตนอร์เวย์ในไทย', titleEn: 'Thai party obtains a Single Status Certificate, translates, and legalizes it up to the Norwegian Embassy in Bangkok.', titleNo: 'Den thailandske parten skaffer en sivilstandsattest, oversetter og legaliserer den opp til den norske ambassaden i Bangkok.' },
      { title: 'ยื่นคำร้องขอ Prøvingsattest ที่ Skatteetaten (ใช้เวลาประมาณ 2-3 สัปดาห์)', titleEn: 'Submit a Prøvingsattest application to Skatteetaten (takes approx. 2-3 weeks).', titleNo: 'Send en Prøvingsattest-søknad til Skatteetaten (tar ca. 2-3 uker).' },
      { title: 'นัดหมายจดทะเบียนสมรสที่ Tingrett หรือพิธีตามศาสนาเมื่อได้ใบ Prøvingsattest', titleEn: 'Schedule the marriage ceremony at Tingrett or a religious venue once the certificate is granted.', titleNo: 'Planlegg vielsen i Tingrett eller et religiøst sted når attesten er gitt.' }
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
    docsNo: [
      'Thailandsk sivilstandsattest (oversatt og legalisert)',
      'Thailandsk fødselsattest og husregistrering (oversatt og legalisert)',
      'Thailandsk pass',
      'Norsk bostedsattest'
    ],
    duration: 'ประมาณ 2-3 เดือน',
    durationEn: 'Approximately 2-3 months',
    durationNo: 'Omtrent 2-3 måneder',
    note: 'เอกสารฝ่ายไทยที่รับรองแล้วมีอายุการใช้งานในนอร์เวย์ 4 เดือน',
    noteEn: 'Certified Thai documents are generally valid for use in Norway for 4 months.',
    noteNo: 'Sertifiserte thailandske dokumenter er generelt gyldige for bruk i Norge i 4 måneder.'
  },
  {
    id: 5,
    title: 'การปรับสถานะสมรสในทะเบียนราษฎรไทย (หลังจดทะเบียนที่นอร์เวย์)',
    titleEn: 'Updating Thai Marital Status (After Marriage in Norway)',
    titleNo: 'Oppdatering av thailandsk sivilstatus (etter ekteskap i Norge)',
    countries: ['th', 'no'],
    description: 'เมื่อจดทะเบียนสมรสในนอร์เวย์แล้ว ควรไปแจ้งปรับสถานะเป็น “สมรส” ในทะเบียนราษฎรไทยเพื่อให้ข้อมูลถูกต้องตรงกัน',
    descriptionEn: 'After marrying in Norway, you should update your status to "Married" in the Thai Civil Registry for data consistency and future legal transactions.',
    descriptionNo: 'Etter å ha giftet deg i Norge, bør du oppdatere statusen din til "Gift" i det thailandske folkeregisteret for datakonsistens og fremtidige juridiske transaksjoner.',
    steps: [
      { title: 'ขอทะเบียนสมรสนอร์เวย์ฉบับ 5 ภาษา (Flerspråklig vigselsattest) จาก Skatteetaten', titleEn: 'Request a 5-language Norwegian marriage certificate from Skatteetaten.', titleNo: 'Be om en 5-språklig norsk vigselsattest fra Skatteetaten.' },
      { title: 'นำไปรับรองที่สถานเอกอัครราชทูตไทย ณ กรุงออสโล', titleEn: 'Legalize the certificate at the Royal Thai Embassy in Oslo.', titleNo: 'Legaliser attesten ved den kongelige thailandske ambassaden i Oslo.' },
      { title: 'นำไปรับรองคำแปลที่กรมการกงสุลในความดูแลของกระทรวงการต่างประเทศไทย', titleEn: 'Legalize the Thai translation at the Department of Consular Affairs (MFA Thailand).', titleNo: 'Legaliser den thailandske oversettelsen ved Konsulæravdelingen (thailandsk UD).' },
      { title: 'ยื่นเรื่องปรับข้อมูลที่สำนักงานเขต/อำเภอที่มีทะเบียนบ้านอยู่', titleEn: 'Submit documents at your registered District/District Office in Thailand.', titleNo: 'Send inn dokumenter på ditt registrerte distriktskontor i Thailand.' }
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
    docsNo: [
      'Norsk vigselsattest (flerspråklig versjon)',
      'Pass til begge ektefeller (bekreftede kopier)',
      'Thailandsk ID-kort og husregistrering',
      'Fullmakt (hvis du bruker en representant)'
    ],
    duration: '1-2 เดือน (กรณีส่งทางไปรษณีย์)',
    durationEn: '1-2 months (if processed by mail)',
    durationNo: '1-2 måneder (hvis behandlet via post)',
    note: 'สามารถทำเรื่องที่ไทยได้โดยไม่ต้องเดินทางกลับไทยด้วยการมอบอำนาจ',
    noteEn: 'This can be processed in Thailand via power of attorney without needing to travel there in person.',
    noteNo: 'Dette kan behandles i Thailand via fullmakt uten å måtte reise dit personlig.'
  },
  {
    id: 6,
    title: 'การแจ้งเกิดบุตรที่เกิดในนอร์เวย์ และเพิ่มชื่อในทะเบียนบ้านไทย',
    titleEn: 'Birth Notification in Norway & Thai House Registration',
    titleNo: 'Fødselsmelding i Norge og thailandsk husregistrering',
    countries: ['no', 'th'],
    description: 'บุตรที่เกิดในนอร์เวย์จากบิดาหรือมารดาคนไทย มีสิทธิได้รับสัญชาติไทย ควรแจ้งเกิดเพื่อทำสูติบัตรไทยและเพิ่มชื่อเข้าทะเบียนบ้าน',
    descriptionEn: 'Children born in Norway to a Thai parent are entitled to Thai citizenship. Parents should register the birth for a Thai birth certificate and house registration.',
    descriptionNo: 'Barn født i Norge av en thailandsk forelder har rett til thailandsk statsborgerskap. Foreldre bør registrere fødselen for en thailandsk fødselsattest og husregistrering.',
    steps: [
      { title: 'ขอใบเกิดนอร์เวย์ (Fødselsattest) และใบรับรองชื่อ (Navneattest) จาก Skatteetaten', titleEn: 'Obtain the Norwegian birth certificate and name certificate from Skatteetaten.', titleNo: 'Skaff den norske fødselsattesten og navneattesten fra Skatteetaten.' },
      { title: 'ขอ “สูติบัตรไทย” ณ สถานเอกอัครราชทูตไทย ณ กรุงออสโล', titleEn: 'Apply for a "Thai Birth Certificate" at the Royal Thai Embassy in Oslo.', titleNo: 'Søk om "Thailandsk fødselsattest" ved den kongelige thailandske ambassaden i Oslo.' },
      { title: 'ส่งสูติบัตรไทยกลับไทยเพื่อเพิ่มชื่อบุตรในทะเบียนบ้าน', titleEn: 'Send the Thai birth certificate to Thailand to add the child to the house registration.', titleNo: 'Send den thailandske fødselsattesten til Thailand for å legge barnet til husregistreringen.' }
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
    docsNo: [
      'Norsk fødselsattest (5-språklig versjon)',
      'Barnets navneattest (Navneattest)',
      'Foreldrenes pass (Notarius & UD-sertifisert)',
      'Foreldrenes ekteskapsregistrering (hvis aktuelt)',
      'Thailandsk forelders husregistrering'
    ],
    duration: 'เตรียมเอกสาร 2-3 สัปดาห์',
    durationEn: 'Preparation 2-3 weeks',
    durationNo: 'Forberedelse 2-3 uker',
    note: 'ควรแจ้งเกิดบุตรภายใน 1 ปีหลังคลอด',
    noteEn: 'Birth should ideally be registered within 1 year of delivery.',
    noteNo: 'Fødselen bør ideelt sett registreres innen 1 år etter fødselen.'
  },
  {
    id: 7,
    title: 'การขอวีซ่าประเทศไทย สำหรับคู่สมรส/บุตรชาวนอร์เวย์',
    titleEn: 'Thai Visa for Norwegian Spouses/Children',
    titleNo: 'Thailandsk visum for norske ektefeller/barn',
    countries: ['th', 'no'],
    description: 'ชาวนอร์เวย์ที่สมรสกับคนไทย หรือบุตรชาวนอร์เวย์ของคนไทย สามารถขอวีซ่าพำนักระยะยาวเพื่อติดตามครอบครัวได้',
    descriptionEn: 'Norwegians married to Thais or children of Thai parents can apply for long-term residency visas (Non-O) to stay with their family in Thailand.',
    descriptionNo: 'Nordmenn gift med thaier eller barn av thailandske foreldre kan søke om langtidsvisum (Non-O) for å bo med familien sin i Thailand.',
    steps: [
      { title: 'ประเมินประเภทวีซ่า (Non-O สมรส/ติดตามครอบครัว หรือ O-A เกษียณอายุ)', titleEn: 'Assess visa type (Non-O for marriage/family dependency or O-A for retirement).', titleNo: 'Vurder visumtype (Non-O for ekteskap/familieavhengighet eller O-A for pensjon).' },
      { title: 'เตรียมหลักฐานการเงิน (Statement) ตามเกณฑ์ที่กำหนด', titleEn: 'Prepare financial evidence (statements) according to official criteria.', titleNo: 'Forbered økonomisk bevis (kontoutskrifter) i henhold til offisielle kriterier.' },
      { title: 'ยื่นคำร้องขอวีซ่าผ่านระบบออนไลน์ของสถานทูตไทย', titleEn: 'Submit the visa application via the Royal Thai Embassy\'s online portal.', titleNo: 'Send inn visumsøknaden via den kongelige thailandske ambassadens nettportal.' }
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
    docsNo: [
      'Pass gyldig i minst 6 måneder',
      'Ekteskaps-/fødselsattester',
      'Økonomisk bevis (400 000 THB i thailandsk bank eller 40 000 THB/måned inntekt)',
      'Thailandsk ID og husregistrering for den thailandske ektefellen/forelderen'
    ],
    duration: 'ประมาณ 5-15 วันทำการ',
    durationEn: 'Approx. 5-15 working days',
    durationNo: 'Ca. 5-15 virkedager',
    note: 'กฎเกณฑ์วีซ่ามีการปรับเปลี่ยนบ่อย ควรตรวจสอบเกณฑ์การพิจารณาลาสุด',
    noteEn: 'Visa regulations change frequently; always check the latest criteria.',
    noteNo: 'Visumreglene endres ofte; sjekk alltid de siste kriteriene.'
  },
  {
    id: 8,
    title: 'การขอวีซ่าเชงเก้น (นอร์เวย์) สำหรับคนไทย',
    titleEn: 'Schengen Visa (Norway) for Thai Citizens',
    titleNo: 'Schengen-visum (Norge) for thailandske statsborgere',
    countries: ['no', 'th'],
    description: 'คนไทยที่ต้องการเดินทางไปนอร์เวย์เพื่อท่องเที่ยวหรือเยี่ยมญาติ จะต้องขอวีซ่าประเภท C ที่ศูนย์ VFS Global ในกรุงเทพฯ',
    descriptionEn: 'Thai nationals wishing to visit Norway for tourism or family visits must apply for a Category C visa at the VFS Global center in Bangkok.',
    descriptionNo: 'Thailandske statsborgere som ønsker å besøke Norge for turisme eller familiebesøk, må søke om et kategori C-visum ved VFS Global-senteret i Bangkok.',
    steps: [
      { title: 'กรอกใบสมัครออนไลน์ผ่าน Application Portal ของ UDI', titleEn: 'Fill out the online application via the UDI Application Portal.', titleNo: 'Fyll ut den elektroniske søknaden via UDIs søknadsportal.' },
      { title: 'จองนัดหมายที่ VFS Global กรุงเทพฯ เพื่อพิมพ์ลายนิ้วมือ', titleEn: 'Schedule an appointment at VFS Global Bangkok for biometrics.', titleNo: 'Bestill time hos VFS Global Bangkok for biometri.' },
      { title: 'ยื่นเอกสารและรอผลพิจารณาจากสถานทูตนอร์เวย์', titleEn: 'Submit documents and wait for the Norwegian Embassy\'s decision.', titleNo: 'Send inn dokumenter og vent på den norske ambassadens avgjørelse.' }
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
    docsNo: [
      'Pass + kopier av alle stemplede sider',
      'Reiseforsikring med min. €30 000 dekning',
      'Bevis på ansettelse og 3-6 måneders økonomiske poster',
      'Invitasjonsbrev fra verten i Norge (hvis aktuelt)'
    ],
    duration: '15-30 วันทำการ',
    durationEn: '15-30 working days',
    durationNo: '15-30 virkedager',
    note: 'พิจารณาจากความน่าเชื่อถือของผู้สมัครและความสมเหตุสมผลของแผนการเดินทาง',
    noteEn: 'Approval depends on the applicant\'s credibility and the reasonableness of the travel plan.',
    noteNo: 'Godkjenning avhenger av søkerens troverdighet og rimeligheten av reiseplanen.'
  },
  {
    id: 9,
    title: 'การหย่า / การแจ้งหย่าระหว่างประเทศ',
    titleEn: 'International Divorce & Registration',
    titleNo: 'Internasjonal skilsmisse og registrering',
    countries: ['th', 'no'],
    description: 'กรณีคู่สมรสไทย-นอร์เวย์หย่าร้าง ต้องแจ้งให้ทั้งสองประเทศรับทราบเพื่อปรับสถานะให้ถูกต้อง',
    descriptionEn: 'Thai-Norwegian couples who divorce must notify both countries to ensure their legal status is correctly updated.',
    descriptionNo: 'Thai-norske par som skiller seg, må varsle begge land for å sikre at deres juridiske status er riktig oppdatert.',
    steps: [
      { title: 'กรณีหย่าในนอร์เวย์: ยื่น Separasjon และ Skilsmisse ที่ Statsforvalteren', titleEn: 'If in Norway: Apply for Separation and Divorce at Statsforvalteren.', titleNo: 'Hvis i Norge: Søk om separasjon og skilsmisse hos Statsforvalteren.' },
      { title: 'แปลและรับรองใบหย่านอร์เวย์เพื่อนำไปแจ้งที่อำเภอไทย', titleEn: 'Translate and legalize the Norwegian divorce certificate for Thai district registration.', titleNo: 'Oversett og legaliser den norske skilsmisseattesten for thailandsk distriktsregistrering.' },
      { title: 'กรณีหย่าในไทย: นำใบหย่าไทยแปลและรับรองเพื่อส่งแจ้ง Skatteetaten', titleEn: 'If in Thailand: Translate and legalize Thai divorce docs to notify Skatteetaten.', titleNo: 'Hvis i Thailand: Oversett og legaliser thailandske skilsmissedokumenter for å varsle Skatteetaten.' }
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
    docsNo: [
      'Original skilsmisseattest',
      'Pass og ID-kort',
      'Original vigselsattest'
    ],
    duration: 'ขึ้นอยู่กับกระบวนการศาลหรือหน่วยงาน',
    durationEn: 'Depends on court or agency processing times',
    durationNo: 'Avhenger av domstols- eller byråets behandlingstider',
    note: 'กรณีมีบุตรหรือทรัพย์สิน ควรปรึกษาทนายความร่วมด้วย',
    noteEn: 'In cases involving children or assets, consulting a lawyer is recommended.',
    noteNo: 'I saker som involverer barn eller eiendeler, anbefales det å konsultere en advokat.'
  },
  {
    id: 10,
    title: 'การทำหนังสือมอบอำนาจในไทย จากนอร์เวย์',
    titleEn: 'Power of Attorney from Norway for Use in Thailand',
    titleNo: 'Fullmakt fra Norge for bruk i Thailand',
    countries: ['no', 'th'],
    description: 'คนไทยที่ต้องการมอบอำนาจให้ญาติในไทยดำเนินการแทน เช่น ซื้อขายที่ดิน หรือทำธุรกรรมธนาคาร สามารถทำผ่านสถานทูตไทยในออสโลได้',
    descriptionEn: 'Thai nationals in Norway can authorize relatives in Thailand for transactions like land sales or banking via the Royal Thai Embassy in Oslo.',
    descriptionNo: 'Thailandske statsborgere i Norge kan gi slektninger i Thailand fullmakt til transaksjoner som landsalg eller banktjenester via den kongelige thailandske ambassaden i Oslo.',
    steps: [
      { title: 'ดาวน์โหลดแบบฟอร์มหนังสือมอบอำนาจที่ตรงตามวัตถุประสงค์', titleEn: 'Download the specific Power of Attorney form for your purpose.', titleNo: 'Last ned det spesifikke fullmaktsskjemaet for ditt formål.' },
      { title: 'ลงนามต่อหน้าเจ้าหน้าที่ ณ สถานเอกอัครราชทูตไทย ณ กรุงออสโล', titleEn: 'Sign the document in person before an official at the Royal Thai Embassy in Oslo.', titleNo: 'Signer dokumentet personlig foran en tjenestemann ved den kongelige thailandske ambassaden i Oslo.' },
      { title: 'ส่งหนังสือมอบอำนาจที่รับรองแล้วกลับประเทศไทย', titleEn: 'Ship the legalized Power of Attorney back to Thailand.', titleNo: 'Send den legaliserte fullmakten tilbake til Thailand.' }
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
    docsNo: [
      'Thailandsk pass til giveren',
      'Thailandsk ID-kort',
      'Skjøte eller bankbok (avhengig av formålet)',
      'Kopi av representantens thailandske ID-kort'
    ],
    duration: 'ดำเนินการที่สถานทูตในวันเดียว',
    durationEn: 'Processed at the embassy in one day',
    durationNo: 'Behandles på ambassaden på én dag',
    note: 'หนังสือมอบอำนาจส่วนใหญ่มีอายุใช้งาน 6 เดือน',
    noteEn: 'Most Power of Attorney documents are valid for 6 months.',
    noteNo: 'De fleste fullmaktsdokumenter er gyldige i 6 måneder.'
  },
  {
    id: 11,
    title: 'การส่งเอกสารกลับไทยอย่างปลอดภัย',
    titleEn: 'Securely Shipping Documents back to Thailand',
    titleNo: 'Sikker forsendelse av dokumenter tilbake til Thailand',
    countries: ['no', 'th'],
    description: 'ขั้นตอนการจัดส่งเอกสารสำคัญข้ามประเทศเพื่อป้องกันการสูญหายหรือเสียหาย',
    descriptionEn: 'Procedures for shipping critical documents internationally to prevent loss or damage.',
    descriptionNo: 'Prosedyrer for internasjonal forsendelse av viktige dokumenter for å forhindre tap eller skade.',
    steps: [
      { title: 'สแกนเอกสารเก็บสำรองเป็นไฟล์ดิจิทัลความละเอียดสูง', titleEn: 'Scan documents to create high-resolution digital backups.', titleNo: 'Skann dokumenter for å lage høyoppløselige digitale sikkerhetskopier.' },
      { title: 'แพ็กด้วยซองกันน้ำและประกบแผ่นแข็งป้องกันการพับ', titleEn: 'Pack in waterproof sleeves with rigid boards to prevent folding.', titleNo: 'Pakk i vanntette ermer med stive plater for å forhindre bretting.' },
      { title: 'เลือกบริการส่งแบบ EMS (Posten) หรือ Courier (DHL/FedEx)', titleEn: 'Select EMS (Posten) or Couriers like DHL/FedEx.', titleNo: 'Velg EMS (Posten) eller budfirmaer som DHL/FedEx.' }
    ],
    docs: [
      'หมายเลขติดตาม (Tracking Number)',
      'ลายเซ็นผู้รับปลายทาง (Proof of Delivery)'
    ],
    docsEn: [
      'Tracking Number',
      'Proof of Delivery/Signature'
    ],
    docsNo: [
      'Sporingsnummer',
      'Leveringsbevis/Signatur'
    ],
    duration: '3-10 วันทำการ',
    durationEn: '3-10 working days',
    durationNo: '3-10 virkedager',
    note: 'แนะนำให้ใช้บริการที่มีประกันและระบบติดตามสถานะตลอดเวลา',
    noteEn: 'Always use services with insurance and full tracking systems.',
    noteNo: 'Bruk alltid tjenester med forsikring og fullstendige sporingssystemer.'
  },
  {
    id: 12,
    title: 'คำถามที่พบบ่อย (FAQ)',
    titleEn: 'Frequently Asked Questions (FAQ)',
    titleNo: 'Ofte stilte spørsmål (FAQ)',
    countries: ['th', 'no'],
    description: 'รวบรวมคำถามสำคัญเกี่ยวกับการบริการและงานกงสุล',
    descriptionEn: 'A compilation of critical questions regarding consular services and our offerings.',
    descriptionNo: 'En samling av viktige spørsmål angående konsulære tjenester og våre tilbud.',
    steps: [
      { title: 'จำเป็นต้องเดินทางมาพบเจ้าหน้าที่ด้วยตัวเองหรือไม่?', titleEn: 'Do I need to visit in person?', titleNo: 'Må jeg møte personlig?' },
      { title: 'ค่าบริการมีการคำนวณอย่างไร มีค่าใช้จ่ายแอบแฝงไหม?', titleEn: 'How are fees calculated? Any hidden costs?', titleNo: 'Hvordan beregnes gebyrer? Eventuelle skjulte kostnader?' },
      { title: 'ระบบการจัดเก็บข้อมูลลูกค้าปลอดภัยแค่ไหน?', titleEn: 'How safe is my data?', titleNo: 'Hvor trygge er dataene mine?' }
    ],
    docs: [
      'สามารถอ่านรายละเอียดเพิ่มเติมได้ที่ส่วน FAQ ท้ายหน้าแรก',
      'ติดต่อสอบถามเพิ่มเติมได้ทาง LINE ของเรา'
    ],
    docsEn: [
      'Read more details in the FAQ section at the bottom of the home page.',
      'Contact us via LINE for more information.'
    ],
    docsNo: [
      'Les flere detaljer i FAQ-delen nederst på hjemmesiden.',
      'Kontakt oss via LINE for mer informasjon.'
    ],
    duration: 'ให้บริการตลอดเวลาทำการ',
    durationEn: 'Available during business hours',
    durationNo: 'Tilgjengelig i åpningstiden',
    note: 'เราให้ความสำคัญกับความลับลูกค้าสูงสุดตามมาตรฐาน GDPR',
    noteEn: 'We prioritize client confidentiality according to GDPR standards.',
    noteNo: 'Vi prioriterer kundekonfidensialitet i henhold til GDPR-standarder.'
  }
];
