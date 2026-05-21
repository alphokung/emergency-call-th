// Thailand Emergency Hotlines Database
const EMERGENCY_NUMBERS = [
  // Medical
  {
    id: "1669",
    number: "1669",
    category: "medical",
    name: {
      th: "สถาบันการแพทย์ฉุกเฉินแห่งชาติ (สพฉ.)",
      en: "Ambulance (NIEMS 1669)"
    },
    desc: {
      th: "อุบัติเหตุร้ายแรง เจ็บป่วยฉุกเฉิน ทั่วประเทศ โทรฟรีตลอด 24 ชั่วโมง",
      en: "Severe injury, sudden illness, or accidents. Free 24/7 nationwide."
    },
    tags: {
      th: ["กู้ชีพ", "เจ็บป่วย", "โรงพยาบาล", "รถพยาบาล", "หมอ"],
      en: ["rescue", "ambulance", "hospital", "doctor", "health"]
    },
    isQuickCall: true
  },
  {
    id: "1554",
    number: "1554",
    category: "medical",
    name: {
      th: "หน่วยแพทย์กู้ชีวิต วชิรพยาบาล",
      en: "Vajira Hospital Rescue & Ambulance"
    },
    desc: {
      th: "บริการผู้ป่วยฉุกเฉินและรถพยาบาลในเขตกรุงเทพมหานคร",
      en: "Emergency ambulance service for patients in Bangkok metropolitan area."
    },
    tags: {
      th: ["กู้ชีพ", "เจ็บป่วย", "รถพยาบาล", "กรุงเทพ"],
      en: ["rescue", "ambulance", "bangkok"]
    },
    isQuickCall: false
  },
  {
    id: "1646",
    number: "1646",
    category: "medical",
    name: {
      th: "ศูนย์เอราวัณ (สำนักการแพทย์ กทม.)",
      en: "Erawan Medical Center (Bangkok)"
    },
    desc: {
      th: "เจ็บป่วยฉุกเฉินในเขตพื้นที่กรุงเทพมหานคร",
      en: "Medical emergency ambulance dispatch center inside Bangkok."
    },
    tags: {
      th: ["กู้ชีพ", "เจ็บป่วย", "รถพยาบาล", "กรุงเทพ"],
      en: ["rescue", "ambulance", "bangkok"]
    },
    isQuickCall: false
  },
  {
    id: "1367",
    number: "1367",
    category: "medical",
    name: {
      th: "ศูนย์พิษวิทยา คณะแพทยศาสตร์ศิริราชพยาบาล",
      en: "Siriraj Poison Center"
    },
    desc: {
      th: "ปรึกษาเรื่องสารพิษ ยาเกินขนาด สัตว์มีพิษกัด ตลอด 24 ชั่วโมง",
      en: "Consultation for toxic substance, drug overdose, or venomous bites 24/7."
    },
    tags: {
      th: ["สารพิษ", "ยาเกินขนาด", "งูกัด", "แมลงกัด"],
      en: ["poison", "overdose", "snake", "insect", "bite"]
    },
    isQuickCall: false
  },

  // Police & Safety
  {
    id: "191",
    number: "191",
    category: "police",
    name: {
      th: "ตำรวจ (แจ้งเหตุด่วนเหตุร้าย)",
      en: "General Police Emergency"
    },
    desc: {
      th: "แจ้งเหตุด่วนเหตุร้าย ทะเลาะวิวาท ความไม่ปลอดภัย คดีอาญา ทั่วประเทศ",
      en: "Report crimes, disturbances, safety threats, or road accidents nationwide."
    },
    tags: {
      th: ["ตำรวจ", "อุบัติเหตุ", "ขโมย", "ความปลอดภัย", "เหตุด่วน"],
      en: ["police", "crime", "theft", "accident", "safety"]
    },
    isQuickCall: true
  },
  {
    id: "1155",
    number: "1155",
    category: "police",
    name: {
      th: "ตำรวจท่องเที่ยว",
      en: "Tourist Police"
    },
    desc: {
      th: "ช่วยเหลือและอำนวยความสะดวกแก่นักท่องเที่ยว มีเจ้าหน้าที่สื่อสารภาษาอังกฤษตลอด 24 ชม.",
      en: "Assistance and security for tourists. English-speaking staff available 24/7."
    },
    tags: {
      th: ["ท่องเที่ยว", "ชาวต่างชาติ", "ตำรวจ", "แปลภาษา"],
      en: ["tourist", "foreigner", "police", "translator", "english"]
    },
    isQuickCall: false
  },
  {
    id: "1193",
    number: "1193",
    category: "police",
    name: {
      th: "ตำรวจทางหลวง",
      en: "Highway Police"
    },
    desc: {
      th: "แจ้งอุบัติเหตุ ขอความช่วยเหลือ หรือสอบถามเส้นทางบนทางหลวงแผ่นดิน",
      en: "Report accidents or request breakdown assistance on major intercity highways."
    },
    tags: {
      th: ["ทางหลวง", "รถเสีย", "อุบัติเหตุบนถนน", "เดินทาง"],
      en: ["highway", "car breakdown", "road accident", "travel"]
    },
    isQuickCall: false
  },
  {
    id: "1192",
    number: "1192",
    category: "police",
    name: {
      th: "ศูนย์ปราบปรามการโจรกรรมรถยนต์ (สายด่วนรถหาย)",
      en: "Lost & Stolen Vehicles Hotline"
    },
    desc: {
      th: "แจ้งเบาะแส คดีโจรกรรมรถยนต์ รถจักรยานยนต์ หรือแจ้งรถสูญหาย",
      en: "Report stolen cars, motorcycles, or report suspicious vehicle theft activities."
    },
    tags: {
      th: ["รถหาย", "ขโมยรถ", "มอเตอร์ไซค์หาย", "ตำรวจ"],
      en: ["stolen vehicle", "car theft", "stolen bike", "police"]
    },
    isQuickCall: false
  },
  {
    id: "1196",
    number: "1196",
    category: "police",
    name: {
      th: "ตำรวจน้ำ (อุบัติเหตุทางน้ำ)",
      en: "Water & Marine Police"
    },
    desc: {
      th: "แจ้งอุบัติเหตุทางเรือ หรือขอความช่วยเหลือทางน้ำและทะเล",
      en: "Report boating accidents or request emergency rescues in rivers and seas."
    },
    tags: {
      th: ["เรือล่ม", "ทางน้ำ", "ทะเล", "กู้ภัยทางน้ำ", "เรือ"],
      en: ["boat accident", "drowning", "sea rescue", "marine", "river"]
    },
    isQuickCall: false
  },

  // Fire & Disaster
  {
    id: "199",
    number: "199",
    category: "fire",
    name: {
      th: "ดับเพลิงและกู้ภัย",
      en: "Fire and Rescue Department"
    },
    desc: {
      th: "แจ้งเหตุเพลิงไหม้ สัตว์ร้ายหรือสิ่งมีพิษเข้าบ้าน บรรเทาสาธารณภัยเบื้องต้น",
      en: "Report fires, request wildlife removal (snakes, etc.), or local disaster response."
    },
    tags: {
      th: ["ไฟไหม้", "ดับเพลิง", "งูเข้าบ้าน", "กู้ภัย", "ผึ้งต่อ"],
      en: ["fire", "firefighters", "snake in house", "wasp", "rescue"]
    },
    isQuickCall: true
  },
  {
    id: "1784",
    number: "1784",
    category: "fire",
    name: {
      th: "กรมป้องกันและบรรเทาสาธารณภัย (ปภ.)",
      en: "Disaster Prevention & Mitigation"
    },
    desc: {
      th: "แจ้งเหตุอุทกภัย น้ำท่วม ดินถล่ม พายุ หรือสาธารณภัยธรรมชาติทุกรูปแบบ",
      en: "Report natural disasters like floods, landslides, storms, or severe weather."
    },
    tags: {
      th: ["น้ำท่วม", "พายุ", "แผ่นดินไหว", "ภัยธรรมชาติ", "ดินถล่ม"],
      en: ["flood", "storm", "earthquake", "natural disaster", "landslide"]
    },
    isQuickCall: false
  },

  // Social & Civilian Help
  {
    id: "1137",
    number: "1137",
    category: "public",
    name: {
      th: "วิทยุ จส.100 (แจ้งจราจรและอุบัติเหตุ)",
      en: "JS100 Traffic Radio Network"
    },
    desc: {
      th: "รายงานสภาพการจราจร แจ้งอุบัติเหตุ ขอความช่วยเหลือพิเศษ และตามหาของหาย",
      en: "Report road blocks, traffic conditions, request towing, or locate lost properties."
    },
    tags: {
      th: ["รถติด", "ของหาย", "รถยก", "วิทยุ", "จราจร"],
      en: ["traffic", "lost property", "towing", "radio", "road conditions"]
    },
    isQuickCall: false
  },
  {
    id: "1677",
    number: "1677",
    category: "public",
    name: {
      th: "วิทยุร่วมด้วยช่วยกัน",
      en: "Ruamduay Chuaykan Volunteer Network"
    },
    desc: {
      th: "ประสานงานขอความช่วยเหลือ ประชาชนช่วยประชาชน รถเสีย ลืมกุญแจ",
      en: "Civilian-to-civilian helper network. Towing assistance, vehicle issues, and keys."
    },
    tags: {
      th: ["ช่วยด้วย", "รถเสีย", "กุญแจหาย", "ประสานงาน", "จิตอาสา"],
      en: ["help", "car breakdown", "lockout", "volunteer", "assist"]
    },
    isQuickCall: false
  },
  {
    id: "1300",
    number: "1300",
    category: "public",
    name: {
      th: "ศูนย์ช่วยเหลือสังคม (พม.)",
      en: "Social Assistance Center"
    },
    desc: {
      th: "แจ้งเหตุความรุนแรงในครอบครัว เด็กและสตรีถูกทำร้าย คนไร้ที่พึ่ง หรือการค้ามนุษย์",
      en: "Report domestic violence, child abuse, homelessness, or human trafficking."
    },
    tags: {
      th: ["ทำร้ายร่างกาย", "เด็ก", "ผู้หญิง", "คนเร่ร่อน", "ความรุนแรง"],
      en: ["abuse", "child protection", "homeless", "domestic violence", "trafficking"]
    },
    isQuickCall: false
  },
  {
    id: "1323",
    number: "1323",
    category: "public",
    name: {
      th: "สายด่วนสุขภาพจิต กรมสุขภาพจิต",
      en: "Mental Health Support Hotline"
    },
    desc: {
      th: "บริการให้คำปรึกษาและบำบัดความเครียด ปัญหาทางจิตเวช ซึมเศร้า ฟรีตลอด 24 ชม.",
      en: "Free counseling for stress, depression, psychiatric symptoms, and crisis 24/7."
    },
    tags: {
      th: ["ซึมเศร้า", "ปรึกษา", "เครียด", "คิดสั้น", "สุขภาพจิต"],
      en: ["depression", "counseling", "stress", "suicide prevention", "mental health"]
    },
    isQuickCall: false
  },

  // Utilities
  {
    id: "1130",
    number: "1130",
    category: "utility",
    name: {
      th: "การไฟฟ้านครหลวง (กฟน.)",
      en: "Metropolitan Electricity Authority (MEA)"
    },
    desc: {
      th: "แจ้งไฟดับ ไฟฟ้าขัดข้อง หรืออุบัติเหตุสายไฟขาด ในเขตกทม. นนทบุรี และสมุทรปราการ",
      en: "Report power outages, short circuits, or fallen poles in Bangkok, Nonthaburi, and Samut Prakan."
    },
    tags: {
      th: ["ไฟดับ", "สายไฟขาด", "ไฟไหม้เสาไฟ", "ไฟฟ้า"],
      en: ["blackout", "power outage", "broken wire", "electricity", "bangkok"]
    },
    isQuickCall: false
  },
  {
    id: "1129",
    number: "1129",
    category: "utility",
    name: {
      th: "การไฟฟ้าส่วนภูมิภาค (กฟภ.)",
      en: "Provincial Electricity Authority (PEA)"
    },
    desc: {
      th: "แจ้งไฟฟ้าดับ ไฟฟ้าขัดข้อง หรือชำรุดเสียหาย ในพื้นที่จังหวัดอื่นๆ ทั่วประเทศ",
      en: "Report power outages or electrical hazards in all provinces outside Bangkok."
    },
    tags: {
      th: ["ไฟดับ", "สายไฟขาด", "ไฟฟ้าต่างจังหวัด", "กฟภ"],
      en: ["blackout", "power outage", "broken wire", "electricity", "province"]
    },
    isQuickCall: false
  },
  {
    id: "1125",
    number: "1125",
    category: "utility",
    name: {
      th: "การประปานครหลวง (กปน.)",
      en: "Metropolitan Waterworks Authority (MWA)"
    },
    desc: {
      th: "แจ้งท่อประปาแตก ท่อรั่ว น้ำไม่ไหล ในเขตกทม. นนทบุรี และสมุทรปราการ",
      en: "Report broken water pipes, leakage, or water outages in Bangkok, Nonthaburi, and Samut Prakan."
    },
    tags: {
      th: ["น้ำไม่ไหล", "ท่อประปาแตก", "น้ำประปา", "กปน"],
      en: ["no water", "broken pipe", "leakage", "waterworks", "bangkok"]
    },
    isQuickCall: false
  },
  {
    id: "1662",
    number: "1662",
    category: "utility",
    name: {
      th: "การประปาส่วนภูมิภาค (กปภ.)",
      en: "Provincial Waterworks Authority (PWA)"
    },
    desc: {
      th: "แจ้งท่อน้ำแตก น้ำประปาไม่ไหล ในพื้นที่จังหวัดอื่นๆ ทั่วประเทศ",
      en: "Report broken water mains or water outages in all provinces outside Bangkok."
    },
    tags: {
      th: ["น้ำไม่ไหล", "ท่อประปาแตก", "น้ำต่างจังหวัด", "กปภ"],
      en: ["no water", "broken pipe", "leakage", "waterworks", "province"]
    },
    isQuickCall: false
  }
];

// UI Language Strings
const UI_STRINGS = {
  th: {
    title: "สายด่วนฉุกเฉิน ประเทศไทย",
    subtitle: "โทรออกทันทีในคลิกเดียว เฉพาะหมายเลขที่จำเป็นเพื่อความปลอดภัย",
    searchPlaceholder: "ค้นหาหมายเลข, หน่วยงาน หรือคำสำคัญ...",
    foundResults: "พบ {count} หมายเลข",
    noResults: "ไม่พบข้อมูลที่ตรงกับการค้นหา",
    emptyStateDesc: "ลองพิมพ์คำสำคัญอื่น เช่น 'กู้ชีพ', 'ไฟดับ', 'งูกัด' หรือล้างการค้นหา",
    callBtn: "โทรเลย",
    bannerTitle: "คำแนะนำในสถานการณ์ฉุกเฉิน",
    bannerDesc: "ในกรณีวิกฤต เจ็บป่วยรุนแรง โทร 1669 ทันที เหตุร้ายประทุษร้าย โทร 191 สำหรับชาวต่างชาติ แนะนำโทร 1155 เพื่อความสะดวกในการสื่อสารภาษาอังกฤษตลอด 24 ชม.",
    disclaimer: "ข้อมูลนี้จัดทำขึ้นเพื่อสาธารณประโยชน์เท่านั้น การโทรหมายเลขฉุกเฉินโดยไม่มีเหตุอันควรหรือเจตนากลั่นแกล้งมีความผิดตามกฎหมายอาญา",
    quickCallTitle: "สายด่วนเร่งด่วนที่สุด",
    quickCallBadge: "ด่วนที่สุด",
    clearBtnLabel: "ล้างข้อความค้นหา",
    categories: {
      all: "ทั้งหมด",
      medical: "การแพทย์และกู้ชีพ",
      police: "ตำรวจและความปลอดภัย",
      fire: "ดับเพลิงและภัยพิบัติ",
      public: "บริการช่วยเหลือสังคม",
      utility: "สาธารณูปโภค"
    },
    announcementFound: "ค้นพบแล้ว {count} รายการ",
    announcementEmpty: "ไม่พบข้อมูลการค้นหาสำหรับ",
    developedBy: "พัฒนาโดย สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)",
    
    // 1669 Modal Strings
    modalTitle: "แจ้งเหตุฉุกเฉิน กู้ชีพ 1669",
    modalFastCall: "โทรสายด่วน 1669 ทันที",
    modalFastCallHint: "โทรออกตรงไปยังระบบกู้ชีพเพื่อความรวดเร็วสูงสุด",
    modalDivider: "หรือระบุรายละเอียดเพิ่มเติมเพื่อแจ้งเหตุ",
    modalPatientLabel: "ผู้ป่วยคือใคร?",
    modalPatientSelf: "ตัวเอง",
    modalPatientOthers: "ผู้อื่น",
    modalSymptomsLabel: "อาการ / ข้อมูลเพิ่มเติม",
    modalPhotoLabel: "แนบรูปถ่ายสถานที่หรือผู้ป่วย (ไม่บังคับ)",
    modalPhotoPlaceholder: "กดเพื่อเลือกรูปภาพ หรือถ่ายภาพ",
    modalPhotoHint: "รองรับไฟล์รูปถ่ายสูงสุด 5MB",
    modalLocationLabel: "ตำแหน่งปัจจุบัน (ตรวจจับอัตโนมัติ)",
    modalLocationSearching: "กำลังตรวจหาตำแหน่งพิกัด...",
    modalLocationAccuracy: "ละติจูด {lat}, ลองจิจูด {lng} (แม่นยำ ±{accuracy} ม.)",
    modalLocationDenied: "เข้าถึงตำแหน่งไม่ได้เนื่องจากไม่ได้รับสิทธิ์",
    modalLocationUnavailable: "อุปกรณ์ไม่รองรับการตรวจหาพิกัดตำแหน่ง",
    modalLocationTimeout: "การค้นหาตำแหน่งพิกัดหมดเวลา",
    modalCancelBtn: "ยกเลิก",
    modalSubmitBtn: "โทรและส่งข้อมูล",
    modalOtherSymptomPlaceholder: "ระบุอาการเพิ่มเติม..."
  },
  en: {
    title: "Thailand Emergency Hotlines",
    subtitle: "One-tap direct dialer for essential hotlines you may need",
    searchPlaceholder: "Search numbers, departments, keywords...",
    foundResults: "Found {count} hotlines",
    noResults: "No hotlines found matching your search",
    emptyStateDesc: "Try other keywords like 'rescue', 'blackout', 'snake' or clear your search query.",
    callBtn: "Call Now",
    bannerTitle: "Emergency Instructions",
    bannerDesc: "For critical medical emergencies, call 1669 immediately. For security threats, call 191. For foreigners, calling 1155 (Tourist Police) is highly recommended for 24/7 English support.",
    disclaimer: "Provided for public utility. Making non-emergency or malicious calls to emergency services is subject to prosecution under Thai law.",
    quickCallTitle: "Most Critical Hotlines",
    quickCallBadge: "CRITICAL",
    clearBtnLabel: "Clear search query",
    categories: {
      all: "All",
      medical: "Medical & Rescue",
      police: "Police & Security",
      fire: "Fire & Disaster",
      public: "Helplines & Social",
      utility: "Utilities"
    },
    announcementFound: "Found {count} hotlines matching your filters",
    announcementEmpty: "No hotlines found matching query",
    developedBy: "Developed by Digital Government Development Agency (Public Organization) (DGA)",
    
    // 1669 Modal Strings
    modalTitle: "Emergency Report - Rescue 1669",
    modalFastCall: "Call 1669 Hotline Directly",
    modalFastCallHint: "Direct voice call to rescue dispatch for maximum speed",
    modalDivider: "Or specify additional details to report",
    modalPatientLabel: "Who is the patient?",
    modalPatientSelf: "Myself",
    modalPatientOthers: "Others",
    modalSymptomsLabel: "Symptoms / Additional Info",
    modalPhotoLabel: "Attach Photo of Patient/Location (Optional)",
    modalPhotoPlaceholder: "Click to select or capture a photo",
    modalPhotoHint: "Supports photo upload up to 5MB",
    modalLocationLabel: "Current Location (Auto-detected)",
    modalLocationSearching: "Retrieving coordinates...",
    modalLocationAccuracy: "{lat}° N, {lng}° E — accuracy ±{accuracy} m",
    modalLocationDenied: "Location permission denied by user",
    modalLocationUnavailable: "Location info unavailable on this device",
    modalLocationTimeout: "Location retrieval timed out",
    modalCancelBtn: "Cancel",
    modalSubmitBtn: "Call & Send Info",
    modalOtherSymptomPlaceholder: "Specify other symptoms..."
  }
};

// Global State
let currentLang = localStorage.getItem("emergency_lang") || "th";
let activeCategory = "all";
let searchQuery = "";

// 1669 Modal State
let selectedPatient = "self"; // "self" or "others"
let selectedSymptoms = new Set();
let locationWatchId = null;
let currentCoords = null; // { lat, lng, accuracy }
let attachedPhotoData = null; // Base64 image data

// DOM Elements
const elements = {
  langThBtn: document.getElementById("lang-th"),
  langEnBtn: document.getElementById("lang-en"),
  mainTitle: document.getElementById("main-title"),
  mainSubtitle: document.getElementById("main-subtitle"),
  searchBar: document.getElementById("search-bar"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  infoBannerTitle: document.getElementById("info-banner-title"),
  infoBannerDesc: document.getElementById("info-banner-desc"),
  quickCallTitle: document.getElementById("quick-call-title"),
  quickCallsContainer: document.getElementById("quick-calls-container"),
  categoryList: document.getElementById("category-list"),
  resultsCount: document.getElementById("results-count"),
  numbersGrid: document.getElementById("numbers-grid"),
  emptyState: document.getElementById("empty-state"),
  emptyStateTitle: document.getElementById("empty-state-title"),
  emptyStateDesc: document.getElementById("empty-state-desc"),
  footerText: document.getElementById("footer-text"),
  footerDisclaimer: document.getElementById("footer-disclaimer"),
  a11yAnnouncer: document.getElementById("a11y-announcer"),
  
  // 1669 Modal elements
  modal1669: document.getElementById("modal-1669"),
  modalTitle: document.getElementById("modal-title"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalFastCallBtn: document.getElementById("modal-fast-call-btn"),
  fastCallText: document.getElementById("fast-call-text"),
  fastCallHint: document.getElementById("fast-call-hint"),
  modalDividerText: document.getElementById("modal-divider-text"),
  labelPatient: document.getElementById("label-patient"),
  patientSelf: document.getElementById("patient-self"),
  patientOthers: document.getElementById("patient-others"),
  textSelf: document.getElementById("text-self"),
  textOthers: document.getElementById("text-others"),
  labelSymptoms: document.getElementById("label-symptoms"),
  symptomChips: document.getElementById("symptom-chips"),
  labelPhoto: document.getElementById("label-photo"),
  photoUploaderTarget: document.getElementById("photo-uploader-target"),
  modalPhotoInput: document.getElementById("modal-photo-input"),
  uploaderText: document.getElementById("uploader-text"),
  uploaderHint: document.getElementById("uploader-hint"),
  photoPreviewWrapper: document.getElementById("photo-preview-wrapper"),
  photoPreviewImg: document.getElementById("photo-preview-img"),
  photoRemoveBtn: document.getElementById("photo-remove-btn"),
  textLocationLabel: document.getElementById("text-location-label"),
  locationCoords: document.getElementById("location-coords"),
  modalCancelBtn: document.getElementById("modal-cancel-btn"),
  modalSubmitBtn: document.getElementById("modal-submit-btn"),
  textSubmitBtn: document.getElementById("text-submit-btn"),
  otherSymptomInputGroup: document.getElementById("other-symptom-input-group"),
  otherSymptomText: document.getElementById("other-symptom-text")
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupLanguage(currentLang);
  setupEventListeners();
});

// Setup Language
function setupLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("emergency_lang", lang);
  
  // Toggle Language Selector Buttons State
  if (lang === "th") {
    elements.langThBtn.classList.add("active");
    elements.langEnBtn.classList.remove("active");
    document.documentElement.lang = "th";
  } else {
    elements.langThBtn.classList.remove("active");
    elements.langEnBtn.classList.add("active");
    document.documentElement.lang = "en";
  }
  
  // Translate Static UI Elements
  elements.mainTitle.textContent = UI_STRINGS[lang].title;
  elements.mainSubtitle.textContent = UI_STRINGS[lang].subtitle;
  elements.searchBar.placeholder = UI_STRINGS[lang].searchPlaceholder;
  elements.clearSearchBtn.setAttribute("aria-label", UI_STRINGS[lang].clearBtnLabel);
  elements.infoBannerTitle.textContent = UI_STRINGS[lang].bannerTitle;
  elements.infoBannerDesc.textContent = UI_STRINGS[lang].bannerDesc;
  elements.quickCallTitle.textContent = UI_STRINGS[lang].quickCallTitle;
  elements.footerDisclaimer.textContent = UI_STRINGS[lang].disclaimer;
  
  // Translate 1669 Modal UI Elements
  elements.modalTitle.textContent = UI_STRINGS[lang].modalTitle;
  elements.fastCallText.textContent = UI_STRINGS[lang].modalFastCall;
  elements.fastCallHint.textContent = UI_STRINGS[lang].modalFastCallHint;
  elements.modalDividerText.textContent = UI_STRINGS[lang].modalDivider;
  elements.labelPatient.textContent = UI_STRINGS[lang].modalPatientLabel;
  elements.textSelf.textContent = UI_STRINGS[lang].modalPatientSelf;
  elements.textOthers.textContent = UI_STRINGS[lang].modalPatientOthers;
  elements.labelSymptoms.textContent = UI_STRINGS[lang].modalSymptomsLabel;
  elements.labelPhoto.textContent = UI_STRINGS[lang].modalPhotoLabel;
  elements.uploaderText.textContent = UI_STRINGS[lang].modalPhotoPlaceholder;
  elements.uploaderHint.textContent = UI_STRINGS[lang].modalPhotoHint;
  elements.textLocationLabel.textContent = UI_STRINGS[lang].modalLocationLabel;
  elements.modalCancelBtn.textContent = UI_STRINGS[lang].modalCancelBtn;
  elements.textSubmitBtn.textContent = UI_STRINGS[lang].modalSubmitBtn;
  elements.otherSymptomText.placeholder = UI_STRINGS[lang].modalOtherSymptomPlaceholder;
  
  // Set current year dynamically in footer
  elements.footerText.innerHTML = `&copy; ${new Date().getFullYear()} ${UI_STRINGS[lang].title} | ${UI_STRINGS[lang].developedBy}`;

  // Rerender lists/tabs with new language
  renderCategories();
  renderQuickCards();
  renderList();
  
  // Render symptom chips and location coordinates
  renderSymptomChips();
  updateLocationDisplay();
}

// Render Category Navigation Tabs
function renderCategories() {
  elements.categoryList.innerHTML = "";
  
  const categoriesKeys = Object.keys(UI_STRINGS[currentLang].categories);
  
  categoriesKeys.forEach(catKey => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = `category-tab ${activeCategory === catKey ? "active" : ""}`;
    button.textContent = UI_STRINGS[currentLang].categories[catKey];
    button.setAttribute("data-category", catKey);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", activeCategory === catKey ? "true" : "false");
    
    button.addEventListener("click", () => {
      activeCategory = catKey;
      document.querySelectorAll(".category-tab").forEach(tab => {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      renderList();
    });
    
    li.appendChild(button);
    elements.categoryList.appendChild(li);
  });
}

// Render Quick Critical Cards at the Top
function renderQuickCards() {
  elements.quickCallsContainer.innerHTML = "";
  
  const quickNumbers = EMERGENCY_NUMBERS.filter(num => num.isQuickCall);
  
  quickNumbers.forEach(item => {
    const a = document.createElement("a");
    a.href = `tel:${item.number}`;
    a.className = `quick-card ${item.category}`;
    a.setAttribute("aria-label", `${UI_STRINGS[currentLang].quickCallBadge}: ${item.number} ${item.name[currentLang]}`);
    
    a.innerHTML = `
      <div class="quick-card-info">
        <span class="quick-card-label">${UI_STRINGS[currentLang].quickCallBadge}</span>
        <span class="quick-card-dept">${item.name[currentLang]}</span>
        <span class="quick-card-number">${item.number}</span>
      </div>
      <div class="quick-card-call-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.79.046-1.07.046-8.284 0-15-6.716-15-15 0-.28.015-.633.046-1.07A1 1 0 0 1 5.044 3H8.58a1 1 0 0 1 .979.796c.19.78.497 1.52.91 2.2a1 1 0 0 1-.225 1.175L8.217 9.2a13.06 13.06 0 0 0 6.583 6.583l2.03-2.03a1 1 0 0 1 1.175-.226c.68.413 1.42.72 2.2.91a1 1 0 0 1 .796.979v-.016z"/>
        </svg>
      </div>
    `;
    elements.quickCallsContainer.appendChild(a);
  });
}

// Core Filtering Logic
function getFilteredNumbers() {
  return EMERGENCY_NUMBERS.filter(item => {
    // 1. Category check
    if (activeCategory !== "all" && item.category !== activeCategory) {
      return false;
    }
    
    // 2. Search check
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      
      const matchNumber = item.number.includes(query);
      const matchNameTH = item.name.th.toLowerCase().includes(query);
      const matchNameEN = item.name.en.toLowerCase().includes(query);
      const matchDescTH = item.desc.th.toLowerCase().includes(query);
      const matchDescEN = item.desc.en.toLowerCase().includes(query);
      
      // Match in tags
      const matchTagsTH = item.tags.th.some(tag => tag.toLowerCase().includes(query));
      const matchTagsEN = item.tags.en.some(tag => tag.toLowerCase().includes(query));
      
      return matchNumber || matchNameTH || matchNameEN || matchDescTH || matchDescEN || matchTagsTH || matchTagsEN;
    }
    
    return true;
  });
}

// Render Results Grid List
function renderList() {
  const filtered = getFilteredNumbers();
  
  // Update Results Count Text
  const countTemplate = UI_STRINGS[currentLang].foundResults;
  elements.resultsCount.textContent = countTemplate.replace("{count}", filtered.length);
  
  // Handle empty state display
  if (filtered.length === 0) {
    elements.emptyState.style.display = "flex";
    elements.numbersGrid.style.display = "none";
    elements.emptyStateTitle.textContent = UI_STRINGS[currentLang].noResults;
    elements.emptyStateDesc.textContent = UI_STRINGS[currentLang].emptyStateDesc;
    
    // VoiceOver / Screen reader announcement
    announceA11y(`${UI_STRINGS[currentLang].announcementEmpty} "${searchQuery}"`);
    return;
  }
  
  elements.emptyState.style.display = "none";
  elements.numbersGrid.style.display = "grid";
  elements.numbersGrid.innerHTML = "";
  
  // VoiceOver Announcement
  if (searchQuery.trim() !== "") {
    announceA11y(`${UI_STRINGS[currentLang].announcementFound.replace("{count}", filtered.length)}`);
  }
  
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = `number-card ${item.category}`;
    
    // Icon based on category
    let catIcon = "";
    if (item.category === "medical") {
      catIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3z"/></svg>`;
    } else if (item.category === "police") {
      catIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
    } else if (item.category === "fire") {
      catIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
    }
    
    const categoryLabel = UI_STRINGS[currentLang].categories[item.category];
    
    card.innerHTML = `
      <div class="number-card-top">
        <div class="number-card-main">
          <span class="badge ${item.category}" aria-label="Category: ${categoryLabel}">
            ${categoryLabel}
          </span>
          <h2 class="number-card-title">${item.name[currentLang]}</h2>
          <p class="number-card-desc">${item.desc[currentLang]}</p>
        </div>
        <div class="number-card-hotline" aria-label="Phone number: ${item.number}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          ${item.number}
        </div>
      </div>
      <a href="tel:${item.number}" class="btn-call" aria-label="Call ${item.name[currentLang]} at ${item.number}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.79.046-1.07.046-8.284 0-15-6.716-15-15 0-.28.015-.633.046-1.07A1 1 0 0 1 5.044 3H8.58a1 1 0 0 1 .979.796c.19.78.497 1.52.91 2.2a1 1 0 0 1-.225 1.175L8.217 9.2a13.06 13.06 0 0 0 6.583 6.583l2.03-2.03a1 1 0 0 1 1.175-.226c.68.413 1.42.72 2.2.91a1 1 0 0 1 .796.979v-.016z"/>
        </svg>
        <span>${UI_STRINGS[currentLang].callBtn}</span>
      </a>
    `;
    
    elements.numbersGrid.appendChild(card);
  });
}

// Live Region announcements for Screen Readers
function announceA11y(text) {
  elements.a11yAnnouncer.textContent = text;
  // Clear after delay so next announcement triggers correctly
  setTimeout(() => {
    elements.a11yAnnouncer.textContent = "";
  }, 3000);
}

// Event Listeners Setup
function setupEventListeners() {
  // Language selectors
  elements.langThBtn.addEventListener("click", () => setupLanguage("th"));
  elements.langEnBtn.addEventListener("click", () => setupLanguage("en"));
  
  // Search bar typing
  elements.searchBar.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    
    // Toggle clean search button visibility
    if (searchQuery.length > 0) {
      elements.clearSearchBtn.style.display = "flex";
    } else {
      elements.clearSearchBtn.style.display = "none";
    }
    
    renderList();
  });
  
  // Clear search button
  elements.clearSearchBtn.addEventListener("click", () => {
    elements.searchBar.value = "";
    searchQuery = "";
    elements.clearSearchBtn.style.display = "none";
    elements.searchBar.focus();
    renderList();
  });
  
  // Keyboard Shortcut: press '/' to focus search input
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== elements.searchBar) {
      e.preventDefault();
      elements.searchBar.focus();
      elements.searchBar.select();
    }
  });

  // Intercept calling 1669 clicks
  document.addEventListener("click", (e) => {
    const callLink = e.target.closest('a[href^="tel:1669"]');
    if (callLink) {
      if (callLink.id === "modal-fast-call-btn") {
        close1669Modal();
        return; // Allow direct dial action
      }
      e.preventDefault();
      open1669Modal();
    }
  });

  // Modal Cancel and Close Buttons
  elements.modalCloseBtn.addEventListener("click", close1669Modal);
  elements.modalCancelBtn.addEventListener("click", close1669Modal);
  elements.modal1669.addEventListener("click", (e) => {
    if (e.target === elements.modal1669) {
      close1669Modal();
    }
  });

  // Patient Selection buttons
  elements.patientSelf.addEventListener("click", () => {
    selectedPatient = "self";
    elements.patientSelf.classList.add("active");
    elements.patientSelf.setAttribute("aria-pressed", "true");
    elements.patientOthers.classList.remove("active");
    elements.patientOthers.setAttribute("aria-pressed", "false");
  });
  
  elements.patientOthers.addEventListener("click", () => {
    selectedPatient = "others";
    elements.patientOthers.classList.add("active");
    elements.patientOthers.setAttribute("aria-pressed", "true");
    elements.patientSelf.classList.remove("active");
    elements.patientSelf.setAttribute("aria-pressed", "false");
  });

  // Photo Uploader Input and remove btn
  elements.photoUploaderTarget.addEventListener("click", (e) => {
    if (e.target !== elements.modalPhotoInput && e.target !== elements.photoRemoveBtn && !elements.photoRemoveBtn.contains(e.target)) {
      elements.modalPhotoInput.click();
    }
  });

  elements.modalPhotoInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handlePhotoUpload(e.target.files[0]);
    }
  });
  
  elements.photoRemoveBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent file input click from triggering
    attachedPhotoData = null;
    elements.modalPhotoInput.value = "";
    elements.photoPreviewWrapper.style.display = "none";
    elements.photoPreviewImg.src = "";
    elements.photoUploaderTarget.querySelector(".photo-uploader-content").style.display = "flex";
  });

  // Submit Action Button
  elements.modalSubmitBtn.addEventListener("click", () => {
    // Compile details
    const reportData = {
      patient: selectedPatient,
      symptoms: Array.from(selectedSymptoms),
      other_symptoms_detail: selectedSymptoms.has("others") ? elements.otherSymptomText.value.trim() : "",
      location: currentCoords ? {
        latitude: currentCoords.lat,
        longitude: currentCoords.lng,
        accuracy_meters: currentCoords.accuracy
      } : "not_available",
      photo_attached: attachedPhotoData ? "yes (base64 image)" : "no"
    };
    
    console.log("🚑 EMERGENCY 1669 REPORT PAYLOAD:", reportData);
    
    let alertMsg = "";
    if (currentLang === "th") {
      let symptomsText = reportData.symptoms.map(s => SYMPTOMS_DATA.find(x => x.id === s).th).join(", ");
      if (selectedSymptoms.has("others") && reportData.other_symptoms_detail) {
        symptomsText += ` (${reportData.other_symptoms_detail})`;
      }
      alertMsg = `ส่งข้อมูลกู้ชีพ 1669:\n` +
                 `- ผู้ป่วย: ${selectedPatient === "self" ? "ตัวเอง" : "ผู้อื่น"}\n` +
                 `- อาการ: ${symptomsText || "ไม่ระบุ"}\n` +
                 `- พิกัด: ${currentCoords ? `${currentCoords.lat}, ${currentCoords.lng} (±${currentCoords.accuracy} ม.)` : "ไม่พบพิกัด"}\n` +
                 `- รูปถ่าย: ${attachedPhotoData ? "แนบแล้ว" : "ไม่ได้แนบ"}\n\n` +
                 `ระบบจะเริ่มทำการโทรออกไปยังหมายเลข 1669 ทันที`;
    } else {
      let symptomsText = reportData.symptoms.map(s => SYMPTOMS_DATA.find(x => x.id === s).en).join(", ");
      if (selectedSymptoms.has("others") && reportData.other_symptoms_detail) {
        symptomsText += ` (${reportData.other_symptoms_detail})`;
      }
      alertMsg = `Sending 1669 Rescue Info:\n` +
                 `- Patient: ${selectedPatient === "self" ? "Myself" : "Others"}\n` +
                 `- Symptoms: ${symptomsText || "None"}\n` +
                 `- Coordinates: ${currentCoords ? `${currentCoords.lat}, ${currentCoords.lng} (±${currentCoords.accuracy}m)` : "Not detected"}\n` +
                 `- Photo: ${attachedPhotoData ? "Attached" : "None"}\n\n` +
                 `The device will now dial the 1669 hotline.`;
    }
    
    alert(alertMsg);
    
    close1669Modal();
    window.location.href = "tel:1669";
  });
}

// Symptoms Dataset for the 1669 Modal
const SYMPTOMS_DATA = [
  { id: "accident", th: "อุบัติเหตุ", en: "Accident", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.27-3.82c.1-.3.38-.51.7-.51h10.05c.32 0 .61.21.7.51L19 11H5z"/></svg>` },
  { id: "stroke", th: "เส้นเลือดในสมองแตก", en: "Stroke / Brain bleed", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z"/></svg>` },
  { id: "seizure", th: "ลมชัก", en: "Seizure", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10 5h-7.67l-2.03-3.03C12.11 7.69 11.75 7.5 11.36 7.5h-.01c-.39 0-.75.19-.94.47L7.66 12H2v2h6.64l1.63-2.45L12 14.88V22h2v-8.15l-2.22-3.33L15 13h7v-2z"/></svg>` },
  { id: "fever", th: "ไข้สูง", en: "High Fever", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-3-9c.55 0 1 .45 1 1v3h-2V5c0-.55.45-1 1-1z"/></svg>` },
  { id: "female", th: "เพศหญิง", en: "Female", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2c-2.76 0-5 2.24-5 5 0 2.05 1.23 3.81 3 4.58V14H9.5v2H10v3h4v-3h.5v-2H14v-2.42c1.77-.77 3-2.53 3-4.58 0-2.76-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>` },
  { id: "male", th: "เพศชาย", en: "Male", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8-8h-6v2h3.59L13 8.59c-.83-.37-1.75-.59-2.73-.59C6.46 8 3.5 10.96 3.5 14.73 3.5 18.5 6.46 21.46 10.23 21.46c3.77 0 6.73-2.96 6.73-6.73 0-.98-.22-1.9-.59-2.73L20 8.41V12h2V2z"/></svg>` },
  { id: "others", th: "อื่นๆ", en: "Others", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>` }
];

// Render Symptom Chips dynamically inside modal
function renderSymptomChips() {
  if (!elements.symptomChips) return;
  elements.symptomChips.innerHTML = "";
  
  SYMPTOMS_DATA.forEach(symptom => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `symptom-chip ${selectedSymptoms.has(symptom.id) ? "active" : ""}`;
    btn.setAttribute("data-tag", symptom.id);
    btn.setAttribute("aria-pressed", selectedSymptoms.has(symptom.id) ? "true" : "false");
    
    const labelText = currentLang === "th" ? symptom.th : symptom.en;
    btn.innerHTML = `
      ${symptom.icon}
      <span>${labelText}</span>
    `;
    
    btn.addEventListener("click", () => {
      if (selectedSymptoms.has(symptom.id)) {
        selectedSymptoms.delete(symptom.id);
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      } else {
        selectedSymptoms.add(symptom.id);
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      }
      
      // If others chip clicked, show/hide the custom symptom textbox
      if (symptom.id === "others") {
        if (selectedSymptoms.has("others")) {
          elements.otherSymptomInputGroup.style.display = "block";
          elements.otherSymptomText.focus();
        } else {
          elements.otherSymptomInputGroup.style.display = "none";
          elements.otherSymptomText.value = "";
        }
      }
    });
    
    elements.symptomChips.appendChild(btn);
  });
}

// 1669 Modal Handlers
function open1669Modal() {
  document.body.classList.add("modal-open");
  elements.modal1669.style.display = "flex";
  
  // Reset fields to default
  selectedPatient = "self";
  elements.patientSelf.classList.add("active");
  elements.patientSelf.setAttribute("aria-pressed", "true");
  elements.patientOthers.classList.remove("active");
  elements.patientOthers.setAttribute("aria-pressed", "false");
  
  selectedSymptoms.clear();
  renderSymptomChips();
  
  elements.otherSymptomInputGroup.style.display = "none";
  elements.otherSymptomText.value = "";
  
  // Reset photo input uploader
  attachedPhotoData = null;
  elements.modalPhotoInput.value = "";
  elements.photoPreviewWrapper.style.display = "none";
  elements.photoPreviewImg.src = "";
  elements.photoUploaderTarget.querySelector(".photo-uploader-content").style.display = "flex";
  
  // Geolocation trigger
  currentCoords = null;
  updateLocationDisplay();
  startGeolocation();
}

function close1669Modal() {
  document.body.classList.remove("modal-open");
  elements.modal1669.style.display = "none";
  stopGeolocation();
}

// Geolocation functions
function startGeolocation() {
  if (!navigator.geolocation) {
    elements.locationCoords.textContent = UI_STRINGS[currentLang].modalLocationUnavailable;
    return;
  }
  
  elements.locationCoords.textContent = UI_STRINGS[currentLang].modalLocationSearching;
  
  // Get initial fast coordinates
  navigator.geolocation.getCurrentPosition(
    (position) => {
      currentCoords = {
        lat: position.coords.latitude.toFixed(6),
        lng: position.coords.longitude.toFixed(6),
        accuracy: Math.round(position.coords.accuracy)
      };
      updateLocationDisplay();
    },
    (error) => {
      handleLocationError(error);
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );
  
  // Watch location coordinates live
  locationWatchId = navigator.geolocation.watchPosition(
    (position) => {
      currentCoords = {
        lat: position.coords.latitude.toFixed(6),
        lng: position.coords.longitude.toFixed(6),
        accuracy: Math.round(position.coords.accuracy)
      };
      updateLocationDisplay();
    },
    (error) => {
      if (!currentCoords) {
        handleLocationError(error);
      }
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function stopGeolocation() {
  if (locationWatchId !== null) {
    navigator.geolocation.clearWatch(locationWatchId);
    locationWatchId = null;
  }
}

function handleLocationError(error) {
  let msg = "";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      msg = UI_STRINGS[currentLang].modalLocationDenied;
      break;
    case error.POSITION_UNAVAILABLE:
      msg = UI_STRINGS[currentLang].modalLocationUnavailable;
      break;
    case error.TIMEOUT:
      msg = UI_STRINGS[currentLang].modalLocationTimeout;
      break;
    default:
      msg = error.message;
  }
  elements.locationCoords.textContent = msg;
}

function updateLocationDisplay() {
  if (!currentCoords) {
    if (elements.locationCoords.textContent === "") {
      elements.locationCoords.textContent = UI_STRINGS[currentLang].modalLocationSearching;
    }
    return;
  }
  
  const template = UI_STRINGS[currentLang].modalLocationAccuracy;
  elements.locationCoords.textContent = template
    .replace("{lat}", currentCoords.lat)
    .replace("{lng}", currentCoords.lng)
    .replace("{accuracy}", currentCoords.accuracy);
}

// File photo upload handling
function handlePhotoUpload(file) {
  if (!file) return;
  
  if (file.size > 5 * 1024 * 1024) {
    alert(currentLang === "th" ? "ขนาดรูปภาพห้ามเกิน 5MB" : "Image size must not exceed 5MB");
    elements.modalPhotoInput.value = "";
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    attachedPhotoData = e.target.result;
    elements.photoPreviewImg.src = attachedPhotoData;
    elements.photoPreviewWrapper.style.display = "flex";
    elements.photoUploaderTarget.querySelector(".photo-uploader-content").style.display = "none";
  };
  reader.readAsDataURL(file);
}
