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
    developedBy: "พัฒนาโดย สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)"
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
    developedBy: "Developed by Digital Government Development Agency (Public Organization) (DGA)"
  }
};

// Global State
let currentLang = localStorage.getItem("emergency_lang") || "th";
let activeCategory = "all";
let searchQuery = "";

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
  a11yAnnouncer: document.getElementById("a11y-announcer")
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
  
  // Set current year dynamically in footer
  elements.footerText.innerHTML = `&copy; ${new Date().getFullYear()} ${UI_STRINGS[lang].title} | ${UI_STRINGS[lang].developedBy}`;

  // Rerender lists/tabs with new language
  renderCategories();
  renderQuickCards();
  renderList();
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
}
