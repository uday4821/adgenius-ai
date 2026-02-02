import { forwardRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = forwardRef<HTMLElement>((_, ref) => {
  const emailLink = "mailto:contact@edgeaihub.in?subject=Ready%20for%20AI%20Video%20Ad";
  const { t } = useLanguage();

  const points = [
    t("cta.point1"),
    t("cta.point2"),
    t("cta.point3"),
    t("cta.point4"),
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 neural-bg" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t("cta.badge")}</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("cta.title1")}
            <br />
            <span className="text-gradient">{t("cta.title2")}</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t("cta.subtitle")}
            <strong className="text-foreground"> {t("cta.contact")}</strong>
          </p>

          <div className="p-8 rounded-3xl glass-strong mb-10 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4">{t("cta.whyChoose")}</h3>
            <ul className="text-left space-y-3 mb-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto mb-8">
            <ContactForm variant="compact" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="tel:+917207926206">
              <Button variant="hero" size="xl" className="text-lg">
                <Phone className="w-6 h-6" />
                {t("common.call")}: +91 7207926206
              </Button>
            </a>
            <a href={emailLink}>
              <Button variant="glass" size="xl" className="text-lg">
                <Mail className="w-6 h-6" />
                {t("hero.emailBtn")}
              </Button>
            </a>
          </div>

          <p className="text-muted-foreground">
            📞 {t("common.call")}: <strong className="text-foreground">+91 7207926206</strong> • 📧 <strong className="text-foreground">contact@edgeaihub.in</strong> • {t("cta.noCommitments")}
          </p>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = "FinalCTA";

export default memo(FinalCTA);
