import { X, Check, Zap } from "lucide-react";

const WhyEdgeAIHub = () => {
  const comparisons = [
    {
      type: "bad",
      title: "Traditional Agencies",
      points: [
        "₹50,000 - ₹5,00,000 per video",
        "2-4 weeks delivery time",
        "Endless revision cycles",
        "Complex contracts & commitments",
      ],
    },
    {
      type: "bad",
      title: "Freelancers",
      points: [
        "Inconsistent quality",
        "Unreliable timelines",
        "Limited creative options",
        "No scalability",
      ],
    },
    {
      type: "bad",
      title: "Generic AI Tools",
      points: [
        "Template-looking output",
        "No ad optimization",
        "Complex learning curve",
        "Poor conversion rates",
      ],
    },
    {
      type: "good",
      title: "edgeaihub",
      points: [
        "Just ₹199 per premium video",
        "24-hour delivery guaranteed",
        "Conversion-optimized templates",
        "Scale unlimited ads instantly",
      ],
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 neural-bg opacity-50" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Smart Choice</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Why <span className="text-gradient">edgeaihub</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agencies charge lakhs. Freelancers disappoint. Generic tools fail. 
            We deliver premium quality at ₹199.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                item.type === "good"
                  ? "bg-gradient-to-b from-primary/20 to-secondary/10 border-2 border-primary/50 glow-cyan"
                  : "bg-card-gradient border border-border/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                {item.type === "good" ? (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                )}
                <h3 className={`font-display font-bold text-lg ${item.type === "good" ? "text-primary" : ""}`}>
                  {item.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    {item.type === "good" ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className={item.type === "good" ? "text-foreground" : "text-muted-foreground"}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEdgeAIHub;
