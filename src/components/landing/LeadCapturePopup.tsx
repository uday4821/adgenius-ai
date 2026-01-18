import { useState, useEffect, useCallback, memo } from "react";
import { X, Gift, Sparkles, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user already dismissed or submitted
    const dismissed = localStorage.getItem("popup_dismissed");
    if (dismissed) return;

    // Show popup after 15 seconds or on scroll
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    let scrollTicking = false;
    const handleScroll = () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
          if (scrollPercent > 50 && !localStorage.getItem("popup_dismissed")) {
            setIsOpen(true);
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem("popup_dismissed", "true");
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name and email are required",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent("🎁 20% Discount Lead from Website Popup");
    const body = encodeURIComponent(
      `New Lead (20% Discount Claimed):\n\nName: ${formData.name}\nPhone: ${formData.phone || "Not provided"}\nEmail: ${formData.email}\n\n---\nThis lead claimed the 20% discount offer from the website popup.`
    );

    // Open email client
    window.location.href = `mailto:contact@edgeaihub.in?subject=${subject}&body=${body}`;
    
    toast({
      title: "🎉 Offer Claimed!",
      description: "Your email client is opening. Send the email to complete your inquiry!",
    });
    
    localStorage.setItem("popup_dismissed", "true");
    setIsOpen(false);
    setIsSubmitting(false);
  }, [formData, toast]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-gradient-to-br from-card via-card to-muted border border-border/50 rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            🔥 Exclusive 20% OFF!
          </h3>
          <p className="text-white/90 text-sm">
            First-time customers only • Limited spots today
          </p>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">Get AI Video Ads at ₹159 instead of ₹199!</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={100}
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={255}
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={15}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {isSubmitting ? "Claiming..." : "🎁 Claim My 20% Discount"}
            </button>
          </form>
          
          {/* Contact Info */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-center text-sm text-muted-foreground mb-2">
              Or contact us directly:
            </p>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">+91 7207926206</span>
              <span className="text-xs text-muted-foreground">(WhatsApp / Call)</span>
            </div>
          </div>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            ✅ No spam • ✅ Instant response • ✅ 24hr delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(LeadCapturePopup);
