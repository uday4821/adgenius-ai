import { forwardRef, memo } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, Instagram, Facebook, Film, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const emailLink = "mailto:contact@edgeaihub.in";
  const instagramLink = "https://www.instagram.com/edge_aihub?igsh=MW4zZzBtZWFpbnI0MQ==";
  const facebookLink = "https://www.facebook.com/edgeaihub/";
  const { t } = useLanguage();

  const services = [
    { name: t("footer.services.videoAds"), href: "#samples" },
    { name: t("footer.services.shortFilms"), href: "#ai-short-films" },
    { name: t("footer.services.brandVideos"), href: "#samples" },
    { name: t("footer.services.productAds"), href: "#samples" },
  ];

  const industries = [
    t("footer.industries.fashion"),
    t("footer.industries.ecommerce"),
    t("footer.industries.realestate"),
    t("footer.industries.education"),
    t("footer.industries.restaurants"),
    t("footer.industries.healthcare"),
  ];

  return (
    <footer ref={ref} className="py-16 bg-card/50 border-t border-border/50 relative" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl font-bold text-gradient mb-4">edgeaihub</h2>
            <p className="text-muted-foreground text-sm mb-4">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Follow edgeaihub on Instagram"
                role="listitem"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href={facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Follow edgeaihub on Facebook"
                role="listitem"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Film className="w-4 h-4 text-primary" aria-hidden="true" />
              {t("footer.ourServices")}
            </h3>
            <ul className="space-y-2" role="list">
              {services.map((service, index) => (
                <li key={index} role="listitem">
                  <a 
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" aria-hidden="true" />
              {t("footer.industriesWeServe")}
            </h3>
            <ul className="space-y-2" role="list" aria-label="Industries served">
              {industries.map((industry, index) => (
                <li key={index} className="text-sm text-muted-foreground" role="listitem">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="font-semibold text-foreground mb-4">{t("footer.getInTouch")}</h3>
            <div className="space-y-3">
              <a 
                href="tel:+917207926206"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Call us: +91 7207926206"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">+91 7207926206</span>
              </a>
              <p className="flex items-center gap-2 text-xs text-muted-foreground/70 ml-6">
                ({t("footer.businessHours")})
              </p>
              <a 
                href={emailLink}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email us at contact@edgeaihub.in"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">contact@edgeaihub.in</span>
              </a>
              <a 
                href="https://www.edgeaihub.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our main website at edgeaihub.in"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">www.edgeaihub.in</span>
              </a>
              
              {/* Office Address */}
              <div className="pt-3 mt-3 border-t border-border/30">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">📍 {t("footer.office")}:</strong><br />
                  2nd Floor, SK Complex,<br />
                  Attibele-Anekal Road,<br />
                  Attibele, Bangalore - 562107
                </p>
              </div>
            </div>
          </address>
        </div>

        {/* Keywords Bar for SEO */}
        <div className="mb-8 p-4 rounded-xl glass" aria-label="Related services and locations">
          <p className="text-xs text-muted-foreground text-center">
            <strong className="text-foreground">{t("footer.services.videoAds")}</strong> • <strong className="text-foreground">{t("footer.services.shortFilms")}</strong> • {t("footer.industries.fashion")} • {t("footer.industries.ecommerce")} • {t("footer.industries.realestate")} • YouTube Ads • Instagram Reels • Facebook Ads • {t("footer.globalService")}
          </p>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} edgeaihub. {t("footer.rights")}
            </p>
            <nav className="flex items-center gap-4 text-xs text-muted-foreground" aria-label="Legal links">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span aria-hidden="true">•</span>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </nav>
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-2" aria-label="Service highlights">
            <span aria-hidden="true">⚡</span> <span className="text-primary">{t("footer.aiPowered")}</span>
            <span className="text-muted-foreground/50" aria-hidden="true">•</span>
            <span aria-hidden="true">🎬</span> <span className="text-secondary">{t("footer.cinemaQuality")}</span>
            <span className="text-muted-foreground/50" aria-hidden="true">•</span>
            <span aria-hidden="true">🌍</span> <span className="text-primary">{t("footer.globalService")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default memo(Footer);
