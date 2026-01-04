import { useState, useEffect } from "react";
import { X, Gift, Sparkles } from "lucide-react";
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

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !localStorage.getItem("popup_dismissed")) {
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill all fields",
        description: "Name and phone number are required",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Send lead to WhatsApp
    const message = encodeURIComponent(
      `🎁 New Lead from Website Popup!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || "Not provided"}\n\nThis lead claimed the 20% discount offer.`
    );
    
    // Open WhatsApp with the lead info
    window.open(`https://wa.me/918919400755?text=${message}`, "_blank");
    
    toast({
      title: "🎉 Offer Claimed!",
      description: "We'll contact you shortly with your 20% discount code!",
    });
    
    localStorage.setItem("popup_dismissed", "true");
    setIsOpen(false);
    setIsSubmitting(false);
  };

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
                type="tel"
                placeholder="WhatsApp Number * (e.g., +91 9876543210)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={15}
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email (Optional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={255}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Claiming..." : "🎁 Claim My 20% Discount"}
            </button>
          </form>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            ✅ No spam • ✅ Instant response • ✅ 24hr delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadCapturePopup;
