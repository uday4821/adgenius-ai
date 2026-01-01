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
    <footer className="py-16 bg-card/50 border-t border-border/50 relative" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl font-bold text-gradient mb-4">edgeaihub</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Premium AI Video Ads at ₹199 + Hollywood-quality AI Short Films for global brands.
            </p>
            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Follow edgeaihub on Instagram"
                role="listitem"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href={facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Follow edgeaihub on Facebook"
                role="listitem"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Film className="w-4 h-4 text-primary" aria-hidden="true" />
              Our Services
            </h3>
            <ul className="space-y-2" role="list">
              {services.map((service, index) => (
                <li key={index} role="listitem">
                  <a 
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" aria-hidden="true" />
              Industries We Serve
            </h3>
            <ul className="space-y-2" role="list" aria-label="Industries served">
              {industries.map((industry, index) => (
                <li key={index} className="text-sm text-muted-foreground" role="listitem">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Contact us on WhatsApp: +91 8919400755"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">+91 8919400755</span>
              </a>
              <a 
                href={emailLink}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email us at contact@edgeaihub.in"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">contact@edgeaihub.in</span>
              </a>
              <a 
                href="https://www.edgeaihub.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our main website at edgeaihub.in"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">www.edgeaihub.in</span>
              </a>
            </div>
          </address>
        </div>

        {/* Keywords Bar for SEO */}
        <div className="mb-8 p-4 rounded-xl glass" aria-label="Related services and locations">
          <p className="text-xs text-muted-foreground text-center">
            <strong className="text-foreground">AI Video Ads</strong> • <strong className="text-foreground">AI Short Films</strong> • Fashion Ads • Jewelry Advertising • E-commerce Videos • Real Estate Ads • Product Videos • Brand Films • YouTube Ads • Instagram Reels • Facebook Ads • Viral Video Marketing • Global Advertising • India • USA • UK • UAE • Worldwide
          </p>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} edgeaihub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-2" aria-label="Service highlights">
            <span aria-hidden="true">⚡</span> <span className="text-primary">AI-Powered</span>
            <span className="text-muted-foreground/50" aria-hidden="true">•</span>
            <span aria-hidden="true">🎬</span> <span className="text-secondary">Cinema Quality</span>
            <span className="text-muted-foreground/50" aria-hidden="true">•</span>
            <span aria-hidden="true">🌍</span> <span className="text-primary">Global Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
