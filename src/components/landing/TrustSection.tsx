import { Shield, CheckCircle, Lock, UserCheck } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Brand Safe",
      description: "Every ad is reviewed to ensure it aligns with your brand values and platform guidelines.",
    },
    {
      icon: CheckCircle,
      title: "Quality Checked",
      description: "Multi-layer quality assurance before delivery. No glitches, no errors, no compromises.",
    },
    {
      icon: UserCheck,
      title: "Human Verified",
      description: "AI creates, humans verify. The perfect blend of efficiency and quality control.",
    },
    {
      icon: Lock,
      title: "Secure Process",
      description: "Your business details and brand assets are handled with complete confidentiality.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card/30 relative">
      <div className="absolute inset-0 neural-bg opacity-20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Your Trust Matters</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Quality & <span className="text-gradient-reverse">Reliability</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We take your brand seriously. Every ad goes through rigorous checks.
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
};

export default TrustSection;
