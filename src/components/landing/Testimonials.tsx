import { memo } from "react";
import { Star, Quote, Phone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import testimonialPriya from "@/assets/testimonial-priya.jpg";
import testimonialRajesh from "@/assets/testimonial-rajesh.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialAhmed from "@/assets/testimonial-ahmed.jpg";
import testimonialMeena from "@/assets/testimonial-meena.jpg";
import testimonialDavid from "@/assets/testimonial-david.jpg";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fashion Brand Owner",
    location: "Mumbai, India",
    rating: 5,
    text: "Got 10x more engagement on my Instagram ads! The AI video was so professional that my customers thought I hired a big agency. Absolutely worth it!",
    result: "10x Engagement",
    image: testimonialPriya
  },
  {
    name: "Rajesh Kumar",
    role: "Real Estate Developer",
    location: "Bangalore, India",
    rating: 5,
    text: "Sold 3 properties in first week after running the AI video ad. The quality is unbelievable for this price. My competition is clueless!",
    result: "3 Sales in 1 Week",
    image: testimonialRajesh
  },
  {
    name: "Sarah Johnson",
    role: "E-commerce Founder",
    location: "New York, USA",
    rating: 5,
    text: "I was skeptical at first but the results speak for themselves. 40% increase in conversions and the ad was delivered in just 18 hours!",
    result: "40% More Conversions",
    image: testimonialSarah
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Restaurant Chain Owner",
    location: "Dubai, UAE",
    rating: 5,
    text: "We opened 2 new locations and edgeaihub created stunning video ads for each. The ROI was incredible - 5x return on ad spend!",
    result: "5x ROAS",
    image: testimonialAhmed
  },
  {
    name: "Meena Patel",
    role: "Jewelry Designer",
    location: "Surat, India",
    rating: 5,
    text: "My luxury jewelry brand needed premium content. edgeaihub delivered Hollywood-quality videos at a fraction of what agencies charge. Orders doubled!",
    result: "2x Orders",
    image: testimonialMeena
  },
  {
    name: "David Chen",
    role: "Tech Startup CEO",
    location: "Singapore",
    rating: 5,
    text: "Fast, professional, and incredibly affordable. The AI short film they created for our product launch went viral on LinkedIn. 50K+ views!",
    result: "50K+ Views",
    image: testimonialDavid
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden" id="testimonials">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            ⭐ REAL RESULTS FROM REAL CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">10,000+</span> Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients are saying about their AI video ads experience
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Result Badge */}
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                📈 {testimonial.result}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground/70">{testimonial.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to get results like these?</p>
          <a
            href="tel:+917207926206"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call: +91 7207926206
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            📧 Email: contact@edgeaihub.in
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
