import { X, Check, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyEdgeAIHub = () => {
  const { t } = useLanguage();

  const comparisons = [
    {
      type: "bad",
      title: t("whyUs.agencies.title"),
      points: [
        t("whyUs.agencies.point1"),
        t("whyUs.agencies.point2"),
        t("whyUs.agencies.point3"),
        t("whyUs.agencies.point4"),
      ],
    },
    {
      type: "bad",
      title: t("whyUs.freelancers.title"),
      points: [
        t("whyUs.freelancers.point1"),
        t("whyUs.freelancers.point2"),
        t("whyUs.freelancers.point3"),
        t("whyUs.freelancers.point4"),
      ],
    },
    {
      type: "bad",
      title: t("whyUs.genericAI.title"),
      points: [
        t("whyUs.genericAI.point1"),
        t("whyUs.genericAI.point2"),
        t("whyUs.genericAI.point3"),
        t("whyUs.genericAI.point4"),
      ],
    },
    {
      type: "good",
      title: "edgeaihub",
      points: [
        t("whyUs.edgeaihub.point1"),
        t("whyUs.edgeaihub.point2"),
        t("whyUs.edgeaihub.point3"),
        t("whyUs.edgeaihub.point4"),
      ],
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 relative" aria-labelledby="why-us-heading">
      <div className="absolute inset-0 neural-bg opacity-50" aria-hidden="true" />
      
      <div className="container relative z-10">
        <header className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("whyUs.badge")}</span>
          <h2 id="why-us-heading" className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            {t("whyUs.title")} <span className="text-gradient">edgeaihub</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("whyUs.subtitle")}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Comparison of video ad providers">
          {comparisons.map((item, index) => (
            <article
              key={index}
              role="listitem"
              className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                item.type === "good"
                  ? "bg-gradient-to-b from-primary/20 to-secondary/10 border-2 border-primary/50 glow-cyan"
                  : "bg-card-gradient border border-border/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                {item.type === "good" ? (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center" aria-hidden="true">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                )}
                <h3 className={`font-display font-bold text-lg ${item.type === "good" ? "text-primary" : ""}`}>
                  {item.title}
                </h3>
              </div>
              
              <ul className="space-y-3" aria-label={`${item.title} features`}>
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    {item.type === "good" ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <span className={item.type === "good" ? "text-foreground" : "text-muted-foreground"}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEdgeAIHub;
