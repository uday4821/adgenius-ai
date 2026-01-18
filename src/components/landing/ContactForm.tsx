import { useState, memo } from "react";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  variant?: "default" | "compact";
  className?: string;
}

const ContactForm = ({ variant = "default", className = "" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
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
    const subject = encodeURIComponent("New Lead from edgeaihub Website");
    const body = encodeURIComponent(
      `New Lead Details:\n\nName: ${formData.name}\nPhone: ${formData.phone || "Not provided"}\nEmail: ${formData.email}\nMessage: ${formData.message || "No message"}\n\n---\nSent from edgeaihub.in`
    );

    // Open email client
    window.location.href = `mailto:contact@edgeaihub.in?subject=${subject}&body=${body}`;

    toast({
      title: "📧 Opening Email Client",
      description: "Your email client is opening. Please send the email to complete your inquiry!",
    });

    // Reset form after small delay
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
        <input
          type="text"
          placeholder="Your Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          maxLength={100}
          required
        />
        <input
          type="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          maxLength={255}
          required
        />
        <input
          type="tel"
          placeholder="Phone (Optional)"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          maxLength={15}
        />
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    );
  }

  return (
    <div className={`p-6 md:p-8 rounded-3xl glass-strong ${className}`}>
      <div className="flex items-center gap-2 justify-center mb-6">
        <Sparkles className="w-5 h-5 text-primary" />
        <span className="font-display font-semibold text-lg">Contact Us</span>
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
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            maxLength={15}
          />
        </div>

        <div>
          <textarea
            placeholder="Your Message (Optional)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            rows={3}
            maxLength={500}
          />
        </div>

        <Button
          type="submit"
          variant="hero"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          <Mail className="w-5 h-5" />
          {isSubmitting ? "Sending..." : "Send Email Inquiry"}
        </Button>
      </form>

      {/* Contact Info */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <p className="text-center text-sm text-muted-foreground mb-4">
          Or contact us directly:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+917207926206"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:border-primary/50 transition-all"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">+91 7207926206</span>
          </a>
          <a
            href="mailto:contact@edgeaihub.in"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:border-primary/50 transition-all"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">contact@edgeaihub.in</span>
          </a>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3">
          📞 Call or WhatsApp: +91 7207926206
        </p>
      </div>
    </div>
  );
};

export default memo(ContactForm);
