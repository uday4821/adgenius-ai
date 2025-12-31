import { Button } from "@/components/ui/button";
import { MessageCircle, Film, Clapperboard, Star, Globe, Award } from "lucide-react";
import shortfilmHero from "@/assets/ai-shortfilm-hero.jpg";

const AIShortFilms = () => {
  const whatsappLink = "https://wa.me/918919400755?text=Hi%20EdgeAIHub!%20I'm%20interested%20in%20AI%20Short%20Films%20production";

  const features = [
    {
      icon: Clapperboard,
      title: "Hollywood-Level Production",
      description: "Cinematic AI-generated visuals that rival million-dollar productions",
    },
    {
      icon: Globe,
      title: "Global Distribution Ready",
      description: "Perfect for YouTube, OTT platforms, and international film festivals",
    },
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "AI storytelling that captivates audiences worldwide",
    },
    {
      icon: Star,
      title: "Brand Integration",
      description: "Seamlessly embed your brand story in compelling narratives",
    },
  ];

  return (
    <section id="ai-short-films" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 neural-bg" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Film className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">NEW: AI Short Films</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Hollywood-Quality
              <br />
              <span className="text-gradient-reverse">AI Short Films</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Take your brand global with <strong className="text-foreground">cinematic AI-generated short films</strong>. 
              Perfect for YouTube channels, brand documentaries, product stories, and international advertising campaigns.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 rounded-xl glass hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Discuss Your Film Project
              </Button>
            </a>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-purple">
              <img 
                src={shortfilmHero}
                alt="AI Short Film Production - Cinematic Quality by edgeaihub"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Film className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">AI-Generated</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-1">Premium Short Films</h3>
                <p className="text-sm text-muted-foreground">Cinematic storytelling for global brands</p>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full text-sm font-medium animate-float">
              <span className="text-secondary">🎬</span> Cinema Quality
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full text-sm font-medium animate-float" style={{ animationDelay: '-2s' }}>
              <span className="text-primary">🌍</span> Global Reach
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-6 rounded-2xl glass-strong">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100+", label: "Films Produced" },
              { value: "50M+", label: "Global Views" },
              { value: "25+", label: "Countries" },
              { value: "4K", label: "Resolution" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient-reverse">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShortFilms;
