import { Clock, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const UrgencySection = () => {
  const emailLink = "mailto:contact@edgeaihub.in?subject=Urgent%20-%20AI%20Video%20Ad%20Inquiry";

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Urgent Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      <div className="absolute inset-0 neural-bg opacity-50" />
      
      {/* Animated Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary animate-gradient" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <span className="text-xl font-display font-bold text-destructive">Limited Daily Capacity</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Don't Wait — <span className="text-gradient">Spots Fill Fast</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We maintain quality by limiting daily orders. <strong className="text-foreground">High demand</strong> means 
            slots fill up quickly. Secure yours now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full glass">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">24-Hour Delivery</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full glass">
              <Users className="w-5 h-5 text-secondary" />
              <span className="font-medium">Limited Slots Today</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+917207926206">
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" />
                Call Now: +91 7207926206
              </Button>
            </a>
            <a href={emailLink}>
              <Button variant="glass" size="xl">
                <Mail className="w-5 h-5" />
                Contact Our AI Ad Experts
              </Button>
            </a>
          </div>

          <p className="text-muted-foreground mt-6">
            📞 WhatsApp / Call: <strong className="text-foreground">+91 7207926206</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
