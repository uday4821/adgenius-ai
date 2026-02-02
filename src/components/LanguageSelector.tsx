import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, languages, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  variant?: "default" | "compact";
}

const LanguageSelector = ({ variant = "default" }: LanguageSelectorProps) => {
  const { language, setLanguage, currentLanguageInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Group languages by region
  const indianLanguages = languages.filter(l => 
    ["hi", "kn", "te", "ta", "ml", "mr", "gu", "bn", "pa"].includes(l.code)
  );
  const internationalLanguages = languages.filter(l => 
    !["hi", "kn", "te", "ta", "ml", "mr", "gu", "bn", "pa", "en"].includes(l.code)
  );
  const english = languages.find(l => l.code === "en")!;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
          "glass hover:bg-muted/50 border border-border/50 hover:border-primary/50",
          variant === "compact" && "px-2 py-1.5"
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
        <span className="text-sm font-medium hidden sm:inline">
          {currentLanguageInfo.flag} {currentLanguageInfo.code.toUpperCase()}
        </span>
        <span className="text-sm font-medium sm:hidden">
          {currentLanguageInfo.flag}
        </span>
        <ChevronDown 
          className={cn(
            "w-3 h-3 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
          aria-hidden="true" 
        />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-72 max-h-96 overflow-y-auto rounded-xl glass-strong border border-border/50 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          role="listbox"
          aria-label="Language options"
        >
          <div className="p-2">
            {/* English - First */}
            <button
              onClick={() => handleSelect(english.code)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                language === english.code 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-muted/50"
              )}
              role="option"
              aria-selected={language === english.code}
            >
              <span className="text-lg">{english.flag}</span>
              <div className="flex-1 text-left">
                <span className="font-medium text-sm">{english.name}</span>
              </div>
              {language === english.code && (
                <Check className="w-4 h-4 text-primary" aria-hidden="true" />
              )}
            </button>

            {/* Indian Languages */}
            <div className="mt-2 pt-2 border-t border-border/30">
              <span className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Indian Languages
              </span>
              <div className="mt-1 grid grid-cols-2 gap-1">
                {indianLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-left",
                      language === lang.code 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted/50"
                    )}
                    role="option"
                    aria-selected={language === lang.code}
                  >
                    <span className="text-sm">{lang.flag}</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-xs block truncate">{lang.nativeName}</span>
                    </div>
                    {language === lang.code && (
                      <Check className="w-3 h-3 text-primary flex-shrink-0" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* International Languages */}
            <div className="mt-2 pt-2 border-t border-border/30">
              <span className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                International
              </span>
              <div className="mt-1 grid grid-cols-2 gap-1">
                {internationalLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-left",
                      language === lang.code 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted/50"
                    )}
                    role="option"
                    aria-selected={language === lang.code}
                  >
                    <span className="text-sm">{lang.flag}</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-xs block truncate">{lang.nativeName}</span>
                    </div>
                    {language === lang.code && (
                      <Check className="w-3 h-3 text-primary flex-shrink-0" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
