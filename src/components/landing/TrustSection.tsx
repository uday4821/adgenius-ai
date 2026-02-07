import { forwardRef, memo } from "react";
import { Shield, CheckCircle, Lock, UserCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustSection = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useLanguage();

  const trustPoints = [
    {
      icon: Shield,
      title: t("trust.brandSafe.title"),
      description: t("trust.brandSafe.description"),
    },
    {
      icon: CheckCircle,
      title: t("trust.qualityChecked.title"),
      description: t("trust.qualityChecked.description"),
    },
    {
      icon: UserCheck,
      title: t("trust.humanVerified.title"),
      description: t("trust.humanVerified.description"),
    },
    {
      icon: Lock,
      title: t("trust.secureProcess.title"),
      description: t("trust.secureProcess.description"),
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-card/30 relative">
      <div className="absolute inset-0 neural-bg opacity-20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">{t("trust.badge")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            {t("trust.title")} <span className="text-gradient-reverse">{t("trust.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("trust.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card-gradient border border-border/50 hover:border-secondary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TrustSection.displayName = "TrustSection";

export default memo(TrustSection);
