import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = 
  | "en" | "hi" | "kn" | "te" | "ta" | "ml" | "mr" | "gu" | "bn" | "pa" 
  | "es" | "fr" | "de" | "ar" | "zh" | "ja" | "ko" | "pt" | "ru" | "it";

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageInfo[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇮🇳" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇧🇷" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  currentLanguageInfo: LanguageInfo;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("edgeaihub-language");
      if (saved && languages.some(l => l.code === saved)) {
        return saved as Language;
      }
      // Detect browser language
      const browserLang = navigator.language.split("-")[0] as Language;
      if (languages.some(l => l.code === browserLang)) {
        return browserLang;
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("edgeaihub-language", lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const currentLanguageInfo = languages.find(l => l.code === language) || languages[0];

  const t = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || getTranslations("en")[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentLanguageInfo }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const getTranslations = (lang: Language): Record<string, string> => {
  const translations: Record<Language, Record<string, string>> = {
    en: {
      // Navbar
      "nav.whyUs": "Why Us",
      "nav.samples": "Samples",
      "nav.aiShortFilms": "AI Short Films",
      "nav.howItWorks": "How It Works",
      "nav.blog": "Blog",
      // Hero
      "hero.badge.aiPowered": "AI-Powered",
      "hero.badge.conversionFocused": "Conversion-Focused",
      "hero.badge.globalQuality": "Global Quality",
      "hero.badge.fastDelivery": "Fast Delivery",
      "hero.title1": "Premium AI Video Ads",
      "hero.title2": "For Your Business",
      "hero.subtitle": "Stop wasting lakhs on agencies. Get studio-quality 30-second video ads powered by cutting-edge AI — faster, smarter, and at a fraction of the cost.",
      "hero.trust": "Trusted by 10,000+ businesses across India & worldwide",
      "hero.emailBtn": "Contact via Email",
      "hero.callBtn": "Call",
      "hero.stats.adsCreated": "Ads Created",
      "hero.stats.fastDelivery": "Fast Delivery",
      "hero.stats.countries": "Countries Served",
      "hero.stats.satisfaction": "Satisfaction",
      // CTA
      "cta.title1": "Your Competitors Are Already",
      "cta.title2": "Using AI Ads",
      "cta.subtitle": "Every day you wait, you lose customers to businesses with better video content.",
      "cta.contact": "Contact us today for premium AI video ads.",
      "cta.whyChoose": "Why Choose edgeaihub?",
      "cta.point1": "Agencies charge lakhs — we're affordable",
      "cta.point2": "Weeks of waiting — we deliver in 24 hours",
      "cta.point3": "Inconsistent quality — we guarantee premium output",
      "cta.point4": "Complex processes — we make it effortless",
      // Footer
      "footer.tagline": "Premium AI Video Ads",
      "footer.description": "India's #1 AI-powered video advertising agency. Creating stunning video ads that convert viewers into customers.",
      "footer.quickLinks": "Quick Links",
      "footer.contact": "Contact",
      "footer.office": "Office",
      "footer.rights": "All rights reserved.",
      // Common
      "common.call": "Call",
      "common.email": "Email",
    },
    hi: {
      "nav.whyUs": "हमें क्यों चुनें",
      "nav.samples": "नमूने",
      "nav.aiShortFilms": "AI शॉर्ट फिल्म्स",
      "nav.howItWorks": "कैसे काम करता है",
      "nav.blog": "ब्लॉग",
      "hero.badge.aiPowered": "AI-संचालित",
      "hero.badge.conversionFocused": "रूपांतरण-केंद्रित",
      "hero.badge.globalQuality": "वैश्विक गुणवत्ता",
      "hero.badge.fastDelivery": "तेज़ डिलीवरी",
      "hero.title1": "प्रीमियम AI वीडियो विज्ञापन",
      "hero.title2": "आपके व्यवसाय के लिए",
      "hero.subtitle": "एजेंसियों पर लाखों खर्च करना बंद करें। AI द्वारा संचालित स्टूडियो-गुणवत्ता वाले 30-सेकंड के वीडियो विज्ञापन प्राप्त करें।",
      "hero.trust": "भारत और दुनिया भर में 10,000+ व्यवसायों द्वारा विश्वसनीय",
      "hero.emailBtn": "ईमेल से संपर्क करें",
      "hero.callBtn": "कॉल करें",
      "hero.stats.adsCreated": "विज्ञापन बनाए गए",
      "hero.stats.fastDelivery": "तेज़ डिलीवरी",
      "hero.stats.countries": "देश सेवित",
      "hero.stats.satisfaction": "संतुष्टि",
      "cta.title1": "आपके प्रतियोगी पहले से ही",
      "cta.title2": "AI विज्ञापनों का उपयोग कर रहे हैं",
      "cta.subtitle": "हर दिन जब आप इंतजार करते हैं, आप ग्राहकों को बेहतर वीडियो सामग्री वाले व्यवसायों से खो देते हैं।",
      "cta.contact": "प्रीमियम AI वीडियो विज्ञापनों के लिए आज ही संपर्क करें।",
      "cta.whyChoose": "edgeaihub क्यों चुनें?",
      "cta.point1": "एजेंसियां लाखों लेती हैं — हम किफायती हैं",
      "cta.point2": "हफ्तों का इंतजार — हम 24 घंटों में डिलीवर करते हैं",
      "cta.point3": "असंगत गुणवत्ता — हम प्रीमियम आउटपुट की गारंटी देते हैं",
      "cta.point4": "जटिल प्रक्रियाएं — हम इसे आसान बनाते हैं",
      "footer.tagline": "प्रीमियम AI वीडियो विज्ञापन",
      "footer.description": "भारत की #1 AI-संचालित वीडियो विज्ञापन एजेंसी।",
      "footer.quickLinks": "त्वरित लिंक",
      "footer.contact": "संपर्क",
      "footer.office": "कार्यालय",
      "footer.rights": "सर्वाधिकार सुरक्षित।",
      "common.call": "कॉल",
      "common.email": "ईमेल",
    },
    kn: {
      "nav.whyUs": "ನಮ್ಮನ್ನು ಏಕೆ",
      "nav.samples": "ಮಾದರಿಗಳು",
      "nav.aiShortFilms": "AI ಶಾರ್ಟ್ ಫಿಲ್ಮ್ಸ್",
      "nav.howItWorks": "ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
      "nav.blog": "ಬ್ಲಾಗ್",
      "hero.badge.aiPowered": "AI-ಚಾಲಿತ",
      "hero.badge.conversionFocused": "ಪರಿವರ್ತನೆ-ಕೇಂದ್ರಿತ",
      "hero.badge.globalQuality": "ಜಾಗತಿಕ ಗುಣಮಟ್ಟ",
      "hero.badge.fastDelivery": "ವೇಗದ ವಿತರಣೆ",
      "hero.title1": "ಪ್ರೀಮಿಯಂ AI ವೀಡಿಯೊ ಜಾಹೀರಾತುಗಳು",
      "hero.title2": "ನಿಮ್ಮ ವ್ಯಾಪಾರಕ್ಕಾಗಿ",
      "hero.subtitle": "ಏಜೆನ್ಸಿಗಳಿಗೆ ಲಕ್ಷಗಳನ್ನು ವ್ಯರ್ಥ ಮಾಡುವುದನ್ನು ನಿಲ್ಲಿಸಿ। AI ನಿಂದ ಚಾಲಿತ ಸ್ಟುಡಿಯೋ-ಗುಣಮಟ್ಟದ ವೀಡಿಯೊ ಜಾಹೀರಾತುಗಳನ್ನು ಪಡೆಯಿರಿ।",
      "hero.trust": "ಭಾರತ ಮತ್ತು ವಿಶ್ವಾದ್ಯಂತ 10,000+ ವ್ಯಾಪಾರಗಳಿಂದ ವಿಶ್ವಾಸಾರ್ಹ",
      "hero.emailBtn": "ಇಮೇಲ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ",
      "hero.callBtn": "ಕರೆ ಮಾಡಿ",
      "hero.stats.adsCreated": "ಜಾಹೀರಾತುಗಳು ರಚಿಸಲಾಗಿದೆ",
      "hero.stats.fastDelivery": "ವೇಗದ ವಿತರಣೆ",
      "hero.stats.countries": "ದೇಶಗಳಿಗೆ ಸೇವೆ",
      "hero.stats.satisfaction": "ತೃಪ್ತಿ",
      "cta.title1": "ನಿಮ್ಮ ಪ್ರತಿಸ್ಪರ್ಧಿಗಳು ಈಗಾಗಲೇ",
      "cta.title2": "AI ಜಾಹೀರಾತುಗಳನ್ನು ಬಳಸುತ್ತಿದ್ದಾರೆ",
      "cta.subtitle": "ನೀವು ಕಾಯುವ ಪ್ರತಿ ದಿನ, ನೀವು ಉತ್ತಮ ವೀಡಿಯೊ ವಿಷಯವಿರುವ ವ್ಯಾಪಾರಗಳಿಗೆ ಗ್ರಾಹಕರನ್ನು ಕಳೆದುಕೊಳ್ಳುತ್ತೀರಿ।",
      "cta.contact": "ಪ್ರೀಮಿಯಂ AI ವೀಡಿಯೊ ಜಾಹೀರಾತುಗಳಿಗಾಗಿ ಇಂದೇ ಸಂಪರ್ಕಿಸಿ।",
      "cta.whyChoose": "edgeaihub ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",
      "cta.point1": "ಏಜೆನ್ಸಿಗಳು ಲಕ್ಷಗಳನ್ನು ವಿಧಿಸುತ್ತವೆ — ನಾವು ಕೈಗೆಟುಕುವ ಬೆಲೆಯಲ್ಲಿದ್ದೇವೆ",
      "cta.point2": "ವಾರಗಳ ಕಾಯುವಿಕೆ — ನಾವು 24 ಗಂಟೆಗಳಲ್ಲಿ ತಲುಪಿಸುತ್ತೇವೆ",
      "cta.point3": "ಅಸಮಂಜಸ ಗುಣಮಟ್ಟ — ನಾವು ಪ್ರೀಮಿಯಂ ಔಟ್ಪುಟ್ ಖಾತರಿ ನೀಡುತ್ತೇವೆ",
      "cta.point4": "ಸಂಕೀರ್ಣ ಪ್ರಕ್ರಿಯೆಗಳು — ನಾವು ಅದನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತೇವೆ",
      "footer.tagline": "ಪ್ರೀಮಿಯಂ AI ವೀಡಿಯೊ ಜಾಹೀರಾತುಗಳು",
      "footer.description": "ಭಾರತದ #1 AI-ಚಾಲಿತ ವೀಡಿಯೊ ಜಾಹೀರಾತು ಏಜೆನ್ಸಿ।",
      "footer.quickLinks": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
      "footer.contact": "ಸಂಪರ್ಕ",
      "footer.office": "ಕಚೇರಿ",
      "footer.rights": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ।",
      "common.call": "ಕರೆ",
      "common.email": "ಇಮೇಲ್",
    },
    te: {
      "nav.whyUs": "మేమే ఎందుకు",
      "nav.samples": "నమూనాలు",
      "nav.aiShortFilms": "AI షార్ట్ ఫిల్మ్స్",
      "nav.howItWorks": "ఎలా పని చేస్తుంది",
      "nav.blog": "బ్లాగ్",
      "hero.badge.aiPowered": "AI-ఆధారిత",
      "hero.badge.conversionFocused": "మార్పిడి-కేంద్రీకృత",
      "hero.badge.globalQuality": "గ్లోబల్ నాణ్యత",
      "hero.badge.fastDelivery": "వేగవంతమైన డెలివరీ",
      "hero.title1": "ప్రీమియం AI వీడియో యాడ్స్",
      "hero.title2": "మీ వ్యాపారం కోసం",
      "hero.subtitle": "ఏజెన్సీలకు లక్షలు వృధా చేయడం ఆపండి। AI ద్వారా నడిచే స్టూడియో-నాణ్యత వీడియో యాడ్స్ పొందండి।",
      "hero.trust": "భారతదేశం మరియు ప్రపంచవ్యాప్తంగా 10,000+ వ్యాపారాలు విశ్వసిస్తాయి",
      "hero.emailBtn": "ఇమెయిల్ ద్వారా సంప్రదించండి",
      "hero.callBtn": "కాల్ చేయండి",
      "hero.stats.adsCreated": "యాడ్స్ సృష్టించబడ్డాయి",
      "hero.stats.fastDelivery": "వేగవంతమైన డెలివరీ",
      "hero.stats.countries": "దేశాలకు సేవలు",
      "hero.stats.satisfaction": "సంతృప్తి",
      "cta.title1": "మీ పోటీదారులు ఇప్పటికే",
      "cta.title2": "AI యాడ్స్ ఉపయోగిస్తున్నారు",
      "cta.subtitle": "మీరు వేచి ఉన్న ప్రతి రోజు, మెరుగైన వీడియో కంటెంట్ ఉన్న వ్యాపారాలకు కస్టమర్లను కోల్పోతారు。",
      "cta.contact": "ప్రీమియం AI వీడియో యాడ్స్ కోసం ఈరోజే సంప్రదించండి.",
      "cta.whyChoose": "edgeaihub ఎందుకు ఎంచుకోవాలి?",
      "cta.point1": "ఏజెన్సీలు లక్షలు వసూలు చేస్తాయి — మేము సరసమైన ధరలో అందిస్తాము",
      "cta.point2": "వారాల నిరీక్షణ — మేము 24 గంటల్లో డెలివర్ చేస్తాము",
      "cta.point3": "అస్థిర నాణ్యత — మేము ప్రీమియం అవుట్‌పుట్ హామీ ఇస్తాము",
      "cta.point4": "సంక్లిష్ట ప్రక్రియలు — మేము దాన్ని సులభం చేస్తాము",
      "footer.tagline": "ప్రీమియం AI వీడియో యాడ్స్",
      "footer.description": "భారతదేశంలో #1 AI-ఆధారిత వీడియో అడ్వర్టైజింగ్ ఏజెన్సీ.",
      "footer.quickLinks": "త్వరిత లింక్‌లు",
      "footer.contact": "సంప్రదించండి",
      "footer.office": "కార్యాలయం",
      "footer.rights": "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
      "common.call": "కాల్",
      "common.email": "ఇమెయిల్",
    },
    ta: {
      "nav.whyUs": "ஏன் நாம்",
      "nav.samples": "மாதிரிகள்",
      "nav.aiShortFilms": "AI குறும்படங்கள்",
      "nav.howItWorks": "எப்படி வேலை செய்கிறது",
      "nav.blog": "வலைப்பதிவு",
      "hero.badge.aiPowered": "AI-இயக்கப்படும்",
      "hero.badge.conversionFocused": "மாற்றம்-மையம்",
      "hero.badge.globalQuality": "உலகளாவிய தரம்",
      "hero.badge.fastDelivery": "விரைவான விநியோகம்",
      "hero.title1": "பிரீமியம் AI வீடியோ விளம்பரங்கள்",
      "hero.title2": "உங்கள் வணிகத்திற்காக",
      "hero.subtitle": "ஏஜென்சிகளுக்கு லட்சங்களை வீணடிப்பதை நிறுத்துங்கள். AI மூலம் இயக்கப்படும் ஸ்டுடியோ-தர வீடியோ விளம்பரங்களைப் பெறுங்கள்.",
      "hero.trust": "இந்தியா மற்றும் உலகம் முழுவதும் 10,000+ வணிகங்கள் நம்புகின்றன",
      "hero.emailBtn": "மின்னஞ்சல் வழியாக தொடர்பு கொள்ளுங்கள்",
      "hero.callBtn": "அழைக்கவும்",
      "hero.stats.adsCreated": "விளம்பரங்கள் உருவாக்கப்பட்டன",
      "hero.stats.fastDelivery": "விரைவான விநியோகம்",
      "hero.stats.countries": "நாடுகளுக்கு சேவை",
      "hero.stats.satisfaction": "திருப்தி",
      "cta.title1": "உங்கள் போட்டியாளர்கள் ஏற்கனவே",
      "cta.title2": "AI விளம்பரங்களைப் பயன்படுத்துகிறார்கள்",
      "cta.subtitle": "நீங்கள் காத்திருக்கும் ஒவ்வொரு நாளும், சிறந்த வீடியோ உள்ளடக்கம் கொண்ட வணிகங்களுக்கு வாடிக்கையாளர்களை இழக்கிறீர்கள்.",
      "cta.contact": "பிரீமியம் AI வீடியோ விளம்பரங்களுக்கு இன்றே தொடர்பு கொள்ளுங்கள்.",
      "cta.whyChoose": "edgeaihub ஏன் தேர்வு செய்ய வேண்டும்?",
      "cta.point1": "ஏஜென்சிகள் லட்சங்கள் வசூலிக்கின்றன — நாங்கள் மலிவானவர்கள்",
      "cta.point2": "வாரங்கள் காத்திருப்பு — நாங்கள் 24 மணி நேரத்தில் வழங்குகிறோம்",
      "cta.point3": "சீரற்ற தரம் — நாங்கள் பிரீமியம் வெளியீட்டை உத்தரவாதம் செய்கிறோம்",
      "cta.point4": "சிக்கலான செயல்முறைகள் — நாங்கள் அதை எளிதாக்குகிறோம்",
      "footer.tagline": "பிரீமியம் AI வீடியோ விளம்பரங்கள்",
      "footer.description": "இந்தியாவின் #1 AI-இயக்கப்படும் வீடியோ விளம்பர நிறுவனம்.",
      "footer.quickLinks": "விரைவு இணைப்புகள்",
      "footer.contact": "தொடர்பு",
      "footer.office": "அலுவலகம்",
      "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      "common.call": "அழைப்பு",
      "common.email": "மின்னஞ்சல்",
    },
    ml: {
      "nav.whyUs": "എന്തുകൊണ്ട് ഞങ്ങൾ",
      "nav.samples": "സാമ്പിളുകൾ",
      "nav.aiShortFilms": "AI ഷോർട്ട് ഫിലിമുകൾ",
      "nav.howItWorks": "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
      "nav.blog": "ബ്ലോഗ്",
      "hero.title1": "പ്രീമിയം AI വീഡിയോ പരസ്യങ്ങൾ",
      "hero.title2": "നിങ്ങളുടെ ബിസിനസിനായി",
      "footer.tagline": "പ്രീമിയം AI വീഡിയോ പരസ്യങ്ങൾ",
      "footer.quickLinks": "ദ്രുത ലിങ്കുകൾ",
      "footer.contact": "ബന്ധപ്പെടുക",
      "footer.office": "ഓഫീസ്",
      "common.call": "വിളിക്കുക",
      "common.email": "ഇമെയിൽ",
    },
    mr: {
      "nav.whyUs": "आम्हाला का",
      "nav.samples": "नमुने",
      "nav.aiShortFilms": "AI शॉर्ट फिल्म्स",
      "nav.howItWorks": "कसे काम करते",
      "nav.blog": "ब्लॉग",
      "hero.title1": "प्रीमियम AI व्हिडिओ जाहिराती",
      "hero.title2": "तुमच्या व्यवसायासाठी",
      "footer.tagline": "प्रीमियम AI व्हिडिओ जाहिराती",
      "footer.quickLinks": "द्रुत दुवे",
      "footer.contact": "संपर्क",
      "footer.office": "कार्यालय",
      "common.call": "कॉल",
      "common.email": "ईमेल",
    },
    gu: {
      "nav.whyUs": "અમને કેમ",
      "nav.samples": "નમૂનાઓ",
      "nav.aiShortFilms": "AI શોર્ટ ફિલ્મ્સ",
      "nav.howItWorks": "કેવી રીતે કામ કરે છે",
      "nav.blog": "બ્લોગ",
      "hero.title1": "પ્રીમિયમ AI વિડિયો જાહેરાતો",
      "hero.title2": "તમારા વ્યવસાય માટે",
      "footer.tagline": "પ્રીમિયમ AI વિડિયો જાહેરાતો",
      "footer.quickLinks": "ઝડપી લિંક્સ",
      "footer.contact": "સંપર્ક",
      "footer.office": "ઓફિસ",
      "common.call": "કૉલ",
      "common.email": "ઈમેલ",
    },
    bn: {
      "nav.whyUs": "কেন আমরা",
      "nav.samples": "নমুনা",
      "nav.aiShortFilms": "AI শর্ট ফিল্মস",
      "nav.howItWorks": "কিভাবে কাজ করে",
      "nav.blog": "ব্লগ",
      "hero.title1": "প্রিমিয়াম AI ভিডিও বিজ্ঞাপন",
      "hero.title2": "আপনার ব্যবসার জন্য",
      "footer.tagline": "প্রিমিয়াম AI ভিডিও বিজ্ঞাপন",
      "footer.quickLinks": "দ্রুত লিঙ্ক",
      "footer.contact": "যোগাযোগ",
      "footer.office": "অফিস",
      "common.call": "কল",
      "common.email": "ইমেইল",
    },
    pa: {
      "nav.whyUs": "ਸਾਨੂੰ ਕਿਉਂ",
      "nav.samples": "ਨਮੂਨੇ",
      "nav.aiShortFilms": "AI ਸ਼ਾਰਟ ਫਿਲਮਾਂ",
      "nav.howItWorks": "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
      "nav.blog": "ਬਲੌਗ",
      "hero.title1": "ਪ੍ਰੀਮੀਅਮ AI ਵੀਡੀਓ ਇਸ਼ਤਿਹਾਰ",
      "hero.title2": "ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਲਈ",
      "footer.tagline": "ਪ੍ਰੀਮੀਅਮ AI ਵੀਡੀਓ ਇਸ਼ਤਿਹਾਰ",
      "footer.quickLinks": "ਤੇਜ਼ ਲਿੰਕ",
      "footer.contact": "ਸੰਪਰਕ",
      "footer.office": "ਦਫ਼ਤਰ",
      "common.call": "ਕਾਲ",
      "common.email": "ਈਮੇਲ",
    },
    es: {
      "nav.whyUs": "Por Qué Nosotros",
      "nav.samples": "Muestras",
      "nav.aiShortFilms": "Cortometrajes IA",
      "nav.howItWorks": "Cómo Funciona",
      "nav.blog": "Blog",
      "hero.badge.aiPowered": "Impulsado por IA",
      "hero.badge.conversionFocused": "Enfocado en Conversión",
      "hero.badge.globalQuality": "Calidad Global",
      "hero.badge.fastDelivery": "Entrega Rápida",
      "hero.title1": "Anuncios de Video IA Premium",
      "hero.title2": "Para Tu Negocio",
      "hero.subtitle": "Deja de desperdiciar en agencias. Obtén anuncios de video de calidad de estudio impulsados por IA de vanguardia.",
      "hero.trust": "Confiado por más de 10,000 empresas en India y el mundo",
      "hero.emailBtn": "Contactar por Email",
      "hero.callBtn": "Llamar",
      "footer.tagline": "Anuncios de Video IA Premium",
      "footer.quickLinks": "Enlaces Rápidos",
      "footer.contact": "Contacto",
      "footer.office": "Oficina",
      "footer.rights": "Todos los derechos reservados.",
      "common.call": "Llamar",
      "common.email": "Email",
    },
    fr: {
      "nav.whyUs": "Pourquoi Nous",
      "nav.samples": "Échantillons",
      "nav.aiShortFilms": "Courts Métrages IA",
      "nav.howItWorks": "Comment Ça Marche",
      "nav.blog": "Blog",
      "hero.title1": "Publicités Vidéo IA Premium",
      "hero.title2": "Pour Votre Entreprise",
      "footer.tagline": "Publicités Vidéo IA Premium",
      "footer.quickLinks": "Liens Rapides",
      "footer.contact": "Contact",
      "footer.office": "Bureau",
      "footer.rights": "Tous droits réservés.",
      "common.call": "Appeler",
      "common.email": "Email",
    },
    de: {
      "nav.whyUs": "Warum Wir",
      "nav.samples": "Beispiele",
      "nav.aiShortFilms": "KI Kurzfilme",
      "nav.howItWorks": "Wie Es Funktioniert",
      "nav.blog": "Blog",
      "hero.title1": "Premium KI Video-Werbung",
      "hero.title2": "Für Ihr Unternehmen",
      "footer.tagline": "Premium KI Video-Werbung",
      "footer.quickLinks": "Schnelllinks",
      "footer.contact": "Kontakt",
      "footer.office": "Büro",
      "footer.rights": "Alle Rechte vorbehalten.",
      "common.call": "Anrufen",
      "common.email": "E-Mail",
    },
    ar: {
      "nav.whyUs": "لماذا نحن",
      "nav.samples": "عينات",
      "nav.aiShortFilms": "أفلام قصيرة بالذكاء الاصطناعي",
      "nav.howItWorks": "كيف يعمل",
      "nav.blog": "مدونة",
      "hero.title1": "إعلانات فيديو بالذكاء الاصطناعي",
      "hero.title2": "لعملك",
      "footer.tagline": "إعلانات فيديو بالذكاء الاصطناعي",
      "footer.quickLinks": "روابط سريعة",
      "footer.contact": "اتصل",
      "footer.office": "المكتب",
      "footer.rights": "جميع الحقوق محفوظة.",
      "common.call": "اتصل",
      "common.email": "بريد إلكتروني",
    },
    zh: {
      "nav.whyUs": "为什么选择我们",
      "nav.samples": "样品",
      "nav.aiShortFilms": "AI短片",
      "nav.howItWorks": "如何运作",
      "nav.blog": "博客",
      "hero.title1": "优质AI视频广告",
      "hero.title2": "为您的企业",
      "footer.tagline": "优质AI视频广告",
      "footer.quickLinks": "快速链接",
      "footer.contact": "联系",
      "footer.office": "办公室",
      "footer.rights": "版权所有。",
      "common.call": "致电",
      "common.email": "邮箱",
    },
    ja: {
      "nav.whyUs": "なぜ私たちを",
      "nav.samples": "サンプル",
      "nav.aiShortFilms": "AIショートフィルム",
      "nav.howItWorks": "仕組み",
      "nav.blog": "ブログ",
      "hero.title1": "プレミアムAI動画広告",
      "hero.title2": "あなたのビジネスのために",
      "footer.tagline": "プレミアムAI動画広告",
      "footer.quickLinks": "クイックリンク",
      "footer.contact": "連絡先",
      "footer.office": "オフィス",
      "footer.rights": "全著作権所有。",
      "common.call": "電話",
      "common.email": "メール",
    },
    ko: {
      "nav.whyUs": "왜 우리인가",
      "nav.samples": "샘플",
      "nav.aiShortFilms": "AI 단편 영화",
      "nav.howItWorks": "작동 방식",
      "nav.blog": "블로그",
      "hero.title1": "프리미엄 AI 비디오 광고",
      "hero.title2": "당신의 비즈니스를 위해",
      "footer.tagline": "프리미엄 AI 비디오 광고",
      "footer.quickLinks": "빠른 링크",
      "footer.contact": "연락처",
      "footer.office": "사무실",
      "footer.rights": "모든 권리 보유.",
      "common.call": "전화",
      "common.email": "이메일",
    },
    pt: {
      "nav.whyUs": "Por Que Nós",
      "nav.samples": "Amostras",
      "nav.aiShortFilms": "Curtas de IA",
      "nav.howItWorks": "Como Funciona",
      "nav.blog": "Blog",
      "hero.title1": "Anúncios de Vídeo IA Premium",
      "hero.title2": "Para o Seu Negócio",
      "footer.tagline": "Anúncios de Vídeo IA Premium",
      "footer.quickLinks": "Links Rápidos",
      "footer.contact": "Contato",
      "footer.office": "Escritório",
      "footer.rights": "Todos os direitos reservados.",
      "common.call": "Ligar",
      "common.email": "E-mail",
    },
    ru: {
      "nav.whyUs": "Почему Мы",
      "nav.samples": "Образцы",
      "nav.aiShortFilms": "ИИ Короткометражки",
      "nav.howItWorks": "Как Это Работает",
      "nav.blog": "Блог",
      "hero.title1": "Премиум ИИ Видеореклама",
      "hero.title2": "Для Вашего Бизнеса",
      "footer.tagline": "Премиум ИИ Видеореклама",
      "footer.quickLinks": "Быстрые Ссылки",
      "footer.contact": "Контакт",
      "footer.office": "Офис",
      "footer.rights": "Все права защищены.",
      "common.call": "Звонок",
      "common.email": "Эл. почта",
    },
    it: {
      "nav.whyUs": "Perché Noi",
      "nav.samples": "Campioni",
      "nav.aiShortFilms": "Cortometraggi IA",
      "nav.howItWorks": "Come Funziona",
      "nav.blog": "Blog",
      "hero.title1": "Annunci Video IA Premium",
      "hero.title2": "Per la Tua Attività",
      "footer.tagline": "Annunci Video IA Premium",
      "footer.quickLinks": "Link Rapidi",
      "footer.contact": "Contatto",
      "footer.office": "Ufficio",
      "footer.rights": "Tutti i diritti riservati.",
      "common.call": "Chiama",
      "common.email": "Email",
    },
  };
  
  return translations[lang] || translations.en;
};
