import { Globe, TrendingUp, Users, Zap } from "lucide-react";
import modelFashion from "@/assets/model-fashion-editorial.jpg";
import globalBusiness from "@/assets/global-business-team.jpg";

const GlobalReach = () => {
  const stats = [
    { icon: Globe, value: "5+", label: "Countries Served" },
    { icon: Users, value: "1,000+", label: "Ads Delivered" },
    { icon: TrendingUp, value: "50K+", label: "Views Generated" },
    { icon: Zap, value: "24hr", label: "Delivery Time" },
  ];

  const countries = [
    "India", "USA", "UK", "UAE", "Australia"
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Worldwide Impact</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Global Reach, <span className="text-gradient">Local Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Mumbai to Manhattan, our AI understands global advertising trends and local market nuances. 
            Designed for the <strong className="text-foreground">attention economy</strong>.
          </p>
        </div>

        {/* Featured Images Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Fashion Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border/50 glow-cyan">
              <img 
                src={modelFashion}
                alt="Global Fashion Advertising - Premium AI Video Ads for International Luxury Brands India"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-bold mb-1">Fashion & Luxury</h3>
                <p className="text-sm text-muted-foreground">Premium brand advertising worldwide</p>
              </div>
            </div>
          </div>

          {/* Business Image + Stats */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-border/50 glow-purple">
              <img 
                src={globalBusiness}
                alt="Global Business Advertising - Corporate AI Video Production for Fortune 500 Companies"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl glass text-center hover:border-primary/50 transition-all duration-300"
                >
                  <stat.icon className="w-7 h-7 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Serving businesses in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((country, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-muted/50 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {country}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              & growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
