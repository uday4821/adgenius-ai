import { TrendingUp, Target, Layers, Palette } from "lucide-react";
import modelJewelry from "@/assets/model-jewelry-luxury.jpg";

const AdTemplates = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Trend-Optimized",
      description: "Templates based on latest viral ad formats that capture attention in the first 3 seconds.",
    },
    {
      icon: Target,
      title: "Conversion-Focused",
      description: "Every frame designed to drive action — clicks, calls, and conversions.",
    },
    {
      icon: Layers,
      title: "Multi-Platform Ready",
      description: "Optimized for Instagram, Facebook, YouTube, LinkedIn, and all major ad platforms.",
    },
    {
      icon: Palette,
      title: "Brand Customizable",
      description: "Your colors, your logo, your message — seamlessly integrated into premium templates.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Secret Weapon</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              High-Quality <span className="text-gradient-reverse">AI Ad Templates</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't use generic AI. Our proprietary templates are crafted from analyzing 
              <strong className="text-foreground"> 100,000+ top-performing ads</strong> across industries. 
              Every template is engineered for maximum engagement and conversions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl glass hover:bg-muted/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-cyan">
              <img 
                src={modelJewelry}
                alt="Premium AI Video Advertising Templates - Luxury Jewelry Fashion E-commerce Ads India"
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
                width="582"
                height="582"
                fetchPriority="low"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold mb-2">500+ Premium Templates</h3>
                  <p className="text-muted-foreground">Jewelry • Fashion • Luxury • E-commerce</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full text-sm font-medium animate-float" aria-hidden="true">
              <span className="text-primary">★</span> 4.9/5 Rating
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full text-sm font-medium animate-float" style={{ animationDelay: '-2s' }} aria-hidden="true">
              <span className="text-secondary">⚡</span> AI-Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdTemplates;
