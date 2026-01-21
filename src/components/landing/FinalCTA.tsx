import { forwardRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";

const FinalCTA = forwardRef<HTMLElement>((_, ref) => {
  const emailLink = "mailto:contact@edgeaihub.in?subject=Ready%20for%20AI%20Video%20Ad";

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 neural-bg" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">The Future of Video Advertising</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Competitors Are Already 
            <br />
            <span className="text-gradient">Using AI Ads</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every day you wait, you lose customers to businesses with better video content. 
            <strong className="text-foreground"> Contact us today for premium AI video ads.</strong>
          </p>

          <div className="p-8 rounded-3xl glass-strong mb-10 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4">Why Choose edgeaihub?</h3>
            <ul className="text-left space-y-3 mb-6">
              {[
                "Agencies charge lakhs — we're affordable",
                "Weeks of waiting — we deliver in 24 hours",
                "Inconsistent quality — we guarantee premium output",
                "Complex processes — we make it effortless",
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto mb-8">
            <ContactForm variant="compact" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="tel:+917207926206">
              <Button variant="hero" size="xl" className="text-lg">
                <Phone className="w-6 h-6" />
                Call: +91 7207926206
              </Button>
            </a>
            <a href={emailLink}>
              <Button variant="glass" size="xl" className="text-lg">
                <Mail className="w-6 h-6" />
                Contact via Email
              </Button>
            </a>
          </div>

          <p className="text-muted-foreground">
            📞 Call: <strong className="text-foreground">+91 7207926206</strong> • 📧 <strong className="text-foreground">contact@edgeaihub.in</strong> • No commitments. Just start a conversation.
          </p>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = "FinalCTA";

export default memo(FinalCTA);
