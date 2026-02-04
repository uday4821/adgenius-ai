import { Mail, FileText, Video } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      icon: Mail,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      color: "primary",
    },
    {
      number: "02",
      icon: FileText,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
      color: "secondary",
    },
    {
      number: "03",
      icon: Video,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      color: "primary",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 neural-bg opacity-30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("howItWorks.badge")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            {t("howItWorks.title")} <span className="text-gradient">{t("howItWorks.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-secondary/50 z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="inline-block mb-6">
                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${
                    step.color === "primary" 
                      ? "from-primary/20 to-primary/5 border-primary/30" 
                      : "from-secondary/20 to-secondary/5 border-secondary/30"
                  } border flex items-center justify-center relative`}>
                    <step.icon className={`w-12 h-12 ${step.color === "primary" ? "text-primary" : "text-secondary"}`} />
                    <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full ${
                      step.color === "primary" ? "bg-primary" : "bg-secondary"
                    } flex items-center justify-center text-sm font-bold text-primary-foreground`}>
                      {step.number}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
