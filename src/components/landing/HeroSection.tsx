import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Sparkles, Zap, Globe, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/918919400755?text=Hi%20EdgeAIHub!%20I%20want%20to%20get%20my%20AI%20video%20ad%20for%20₹199";
  const emailLink = "mailto:contact@edgeaihub.in?subject=AI%20Video%20Ad%20Inquiry";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Neural Background Effects */}
      <div className="absolute inset-0 neural-bg" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-slide-up">
            <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              AI-Powered
            </span>
            <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary" />
              Conversion-Focused
            </span>
            <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              Global Quality
            </span>
            <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              Fast Delivery
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up-delay-1">
            Premium AI Video Ads
            <br />
            <span className="text-gradient">Just ₹199</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-slide-up-delay-2">
            Stop wasting lakhs on agencies. Get <strong className="text-foreground">studio-quality 30-second video ads</strong> powered by cutting-edge AI — faster, smarter, and at a fraction of the cost.
          </p>

          {/* Value Proposition */}
          <p className="text-lg text-primary font-medium mb-10 animate-slide-up-delay-3">
            Trusted by 10,000+ businesses across India & worldwide
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up-delay-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Chat with Us on WhatsApp
              </Button>
            </a>
            <a href={emailLink}>
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                <Mail className="w-5 h-5" />
                Contact via Email
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "10,000+", label: "Ads Created" },
              { value: "₹199", label: "Per Video" },
              { value: "24hrs", label: "Delivery Time" },
              { value: "50+", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index} className="glass-strong p-4 rounded-2xl text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
