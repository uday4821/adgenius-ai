import { MessageCircle, Mail, Globe, Instagram, Facebook, Film, Sparkles } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/918919400755";
  const emailLink = "mailto:contact@edgeaihub.in";
  const instagramLink = "https://www.instagram.com/edge_aihub?igsh=MW4zZzBtZWFpbnI0MQ==";
  const facebookLink = "https://www.facebook.com/edgeaihub/";

  const services = [
    { name: "AI Video Ads", href: "#samples" },
    { name: "AI Short Films", href: "#ai-short-films" },
    { name: "Brand Videos", href: "#samples" },
    { name: "Product Ads", href: "#samples" },
  ];

  const industries = [
    "Fashion & Jewelry",
    "E-commerce",
    "Real Estate",
    "Education",
    "Restaurants",
    "Healthcare",
  ];

  return (
    <footer className="py-16 bg-card/50 border-t border-border/50 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient mb-4">edgeaihub</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Premium AI Video Ads at ₹199 + Hollywood-quality AI Short Films for global brands.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Film className="w-4 h-4 text-primary" />
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              Industries We Serve
            </h4>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">+91 8919400755</span>
              </a>
              <a 
                href={emailLink}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@edgeaihub.in</span>
              </a>
              <a 
                href="https://www.edgeaihub.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">www.edgeaihub.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Keywords Bar for SEO */}
        <div className="mb-8 p-4 rounded-xl glass">
          <p className="text-xs text-muted-foreground text-center">
            <strong className="text-foreground">AI Video Ads</strong> • <strong className="text-foreground">AI Short Films</strong> • Fashion Ads • Jewelry Advertising • E-commerce Videos • Real Estate Ads • Product Videos • Brand Films • YouTube Ads • Instagram Reels • Facebook Ads • Viral Video Marketing • Global Advertising • India • USA • UK • UAE • Worldwide
          </p>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} edgeaihub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <span className="text-primary">⚡</span> AI-Powered
            <span className="text-muted-foreground/50">•</span>
            <span className="text-secondary">🎬</span> Cinema Quality
            <span className="text-muted-foreground/50">•</span>
            <span className="text-primary">🌍</span> Global Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
