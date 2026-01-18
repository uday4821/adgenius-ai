import { Button } from "@/components/ui/button";
import { Mail, Film, Clapperboard, Star, Globe, Award, Play, Phone } from "lucide-react";
import shortfilmCinematic from "@/assets/shortfilm-cinematic.jpg";
import { useState, useRef } from "react";

const AIShortFilms = () => {
  const emailLink = "mailto:contact@edgeaihub.in?subject=AI%20Short%20Films%20Production%20Inquiry";
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const features = [
    {
      icon: Clapperboard,
      title: "Hollywood-Level Production",
      description: "Cinematic AI visuals rivaling million-dollar productions",
    },
    {
      icon: Globe,
      title: "Global Distribution Ready",
      description: "Perfect for YouTube, Netflix, OTT & film festivals",
    },
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "AI storytelling captivating audiences worldwide",
    },
    {
      icon: Star,
      title: "Brand Integration",
      description: "Seamlessly embed your brand in compelling narratives",
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
              <span className="text-sm font-medium">NEW: AI Short Films Production</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Hollywood-Quality
              <br />
              <span className="text-gradient-reverse">AI Short Films</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Take your brand global with <strong className="text-foreground">cinematic AI-generated short films</strong>. 
              Perfect for YouTube channels, Netflix-style content, brand documentaries, product stories, and international advertising campaigns.
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

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+917207926206">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call: +91 7207926206
                </Button>
              </a>
              <a href={emailLink}>
                <Button variant="glass" size="xl" className="w-full sm:w-auto">
                  <Mail className="w-5 h-5" />
                  Discuss Your Film Project
                </Button>
              </a>
            </div>
          </div>

          {/* Video/Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-purple">
              {!isPlaying ? (
                <>
                  <img 
                    src={shortfilmCinematic}
                    alt="AI Short Film Production - Professional Cinematic Quality by edgeaihub for Global Brands"
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <button 
                    onClick={handlePlayVideo}
                    className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                </>
              ) : null}
              
              <video 
                ref={videoRef}
                src="/videos/ai-shortfilm.mp4"
                className={`w-full aspect-video object-cover ${isPlaying ? 'block' : 'hidden'}`}
                controls
                playsInline
              />
              
              {/* Overlay Content */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Film className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">AI-Generated Cinema</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">Premium Short Films</h3>
                  <p className="text-sm text-muted-foreground">Cinematic storytelling for global brands</p>
                </div>
              )}
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
