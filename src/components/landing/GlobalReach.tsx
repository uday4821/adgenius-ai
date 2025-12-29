import { Globe, TrendingUp, Users, Zap } from "lucide-react";

const GlobalReach = () => {
  const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: TrendingUp, value: "1M+", label: "Views Generated" },
    { icon: Zap, value: "24hr", label: "Delivery Time" },
  ];

  const countries = [
    "India", "USA", "UK", "Canada", "Australia", "UAE", "Singapore", 
    "Germany", "France", "Netherlands", "Japan", "South Korea"
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass text-center hover:border-primary/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
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
              + 40 more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
