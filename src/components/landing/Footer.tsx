import { MessageCircle, Mail, Globe } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/918919400755";
  const emailLink = "mailto:contact@edgeaihub.in";

  return (
    <footer className="py-12 bg-card/50 border-t border-border/50 relative">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient mb-2">edgeaihub</h3>
            <p className="text-muted-foreground text-sm">
              Premium AI Video Ads at ₹199
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Transforming businesses with AI-powered advertising
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Get in touch</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">+91 8919400755</span>
              </a>
              <a 
                href={emailLink}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@edgeaihub.in</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-right">
            <a 
              href="https://www.edgeaihub.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              www.edgeaihub.in
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} edgeaihub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            AI-Powered • Conversion-Focused • Global Quality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
