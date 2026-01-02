import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatYouGet = () => {
  const features = [
    "30-second premium AI video ad",
    "Professional voiceover (if needed)",
    "Your brand colors & logo",
    "Trending music & sound effects",
    "Eye-catching text animations",
    "Hook-optimized opening",
    "Clear call-to-action ending",
    "Multi-platform ready formats",
    "Unlimited revisions guidance",
    "Commercial usage rights",
  ];

  const whatsappLink = "https://wa.me/918919400755?text=Hi%20EdgeAIHub!%20I%20want%20to%20get%20my%20AI%20video%20ad%20for%20₹199";

  return (
    <section className="py-20 md:py-32 bg-card/30 relative overflow-hidden" aria-labelledby="what-you-get-heading">
      <div className="absolute inset-0 neural-bg opacity-30" aria-hidden="true" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Unbeatable Value</span>
            <h2 id="what-you-get-heading" className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              What You Get for <span className="text-gradient">₹199</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Premium quality that agencies charge ₹50,000+ for. No hidden fees. No surprises.
            </p>
          </header>

          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-card to-background border border-border/50 relative">
            {/* Price Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-bold text-xl shadow-lg shadow-primary/30">
                Just ₹199
              </div>
            </div>

            <ul className="grid md:grid-cols-2 gap-4 mb-10 mt-6" role="list" aria-label="Features included in ₹199 package">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Guarantee */}
            <aside className="p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 mb-8" aria-label="Satisfaction guarantee">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Star className="w-5 h-5 text-primary fill-primary" aria-hidden="true" />
                <span className="font-display font-bold text-lg">100% Satisfaction Promise</span>
                <Star className="w-5 h-5 text-primary fill-primary" aria-hidden="true" />
              </div>
              <p className="text-center text-muted-foreground">
                Not happy with your ad? We'll work with you until it's perfect. Your success is our reputation.
              </p>
            </aside>

            {/* CTA */}
            <div className="text-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Get your AI video ad via WhatsApp">
                <Button variant="whatsapp" size="xl">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Get Your AI Ad Today
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                No payment needed upfront • Chat with us first
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
