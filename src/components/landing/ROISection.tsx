import { ArrowRight, TrendingUp, DollarSign, BarChart3, Target } from "lucide-react";

const ROISection = () => {
  const steps = [
    {
      icon: DollarSign,
      title: "₹199 Investment",
      description: "Create premium video ads at minimal cost — test multiple creatives rapidly.",
      color: "primary",
    },
    {
      icon: Target,
      title: "Better Creatives",
      description: "AI-optimized visuals and hooks that grab attention in the first 3 seconds.",
      color: "secondary",
    },
    {
      icon: BarChart3,
      title: "Higher CTR",
      description: "Quality creatives = higher click-through rates on every ad platform.",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Lower Ad Costs",
      description: "Better performance = lower CPC = more conversions per rupee spent.",
      color: "secondary",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 neural-bg opacity-30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Math Makes Sense</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Transform ₹199 Into <span className="text-gradient">₹1,00,000+ ROI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Smart business owners understand: <strong className="text-foreground">better creatives = better performance = higher profits</strong>. 
            Here's how edgeaihub multiplies your returns.
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
              Result: <span className="text-gradient">10x - 100x Return on Your ₹199</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Businesses using edgeaihub report <strong className="text-foreground">50-70% lower cost per acquisition</strong> and 
              <strong className="text-foreground"> 3x higher engagement rates</strong> compared to traditional video production.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-primary">₹199</div>
                <div className="text-sm text-muted-foreground">Your Investment</div>
              </div>
              <div className="text-2xl font-bold text-muted-foreground">=</div>
              <div>
                <div className="text-3xl font-display font-bold text-secondary">₹1L+</div>
                <div className="text-sm text-muted-foreground">Potential Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
