import { ArrowRight, TrendingUp, Lightbulb, BarChart3, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ROISection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Lightbulb,
      title: t("roi.step1.title"),
      description: t("roi.step1.description"),
      color: "primary",
    },
    {
      icon: Target,
      title: t("roi.step2.title"),
      description: t("roi.step2.description"),
      color: "secondary",
    },
    {
      icon: BarChart3,
      title: t("roi.step3.title"),
      description: t("roi.step3.description"),
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: t("roi.step4.title"),
      description: t("roi.step4.description"),
      color: "secondary",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 neural-bg opacity-30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("roi.badge")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            {t("roi.title")} <span className="text-gradient">{t("roi.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("roi.subtitle").split(t("roi.subtitleBold"))[0]}
            <strong className="text-foreground">{t("roi.subtitleBold")}</strong>
            {t("roi.subtitle").split(t("roi.subtitleBold"))[1]}
          </p>
        </div>

        {/* Flow Chart */}
        <div className="grid md:grid-cols-4 gap-4 md:gap-2 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center">
              <div className="flex-1 p-6 rounded-2xl bg-card-gradient border border-border/50 text-center hover:border-primary/50 transition-all duration-300">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${
                  step.color === "primary" ? "from-primary/20 to-primary/5" : "from-secondary/20 to-secondary/5"
                } flex items-center justify-center`}>
                  <step.icon className={`w-7 h-7 ${step.color === "primary" ? "text-primary" : "text-secondary"}`} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result Card */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/30 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              {t("roi.result.title")} <span className="text-gradient">{t("roi.result.highlight")}</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("roi.result.description").split(t("roi.result.lowerCost"))[0]}
              <strong className="text-foreground">{t("roi.result.lowerCost")}</strong>
              {t("roi.result.description").split(t("roi.result.lowerCost"))[1]?.split(t("roi.result.engagement"))[0]}
              <strong className="text-foreground">{t("roi.result.engagement")}</strong>
              {t("roi.result.description").split(t("roi.result.engagement"))[1]}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-primary">{t("roi.investment")}</div>
                <div className="text-sm text-muted-foreground">{t("roi.investmentLabel")}</div>
              </div>
              <div className="text-2xl font-bold text-muted-foreground">=</div>
              <div>
                <div className="text-3xl font-display font-bold text-secondary">{t("roi.returns")}</div>
                <div className="text-sm text-muted-foreground">{t("roi.returnsLabel")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
