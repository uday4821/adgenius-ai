import { 
  ShoppingBag, 
  Utensils, 
  GraduationCap, 
  Home, 
  Heart, 
  Briefcase, 
  Car, 
  Sparkles,
  Film
} from "lucide-react";
import modelEcommerce from "@/assets/model-ecommerce.jpg";

const Industries = () => {
  const industries = [
    { icon: ShoppingBag, name: "E-commerce & D2C", description: "Product launches, offers, brand videos" },
    { icon: Utensils, name: "Restaurants & Cafes", description: "Menu highlights, delivery promos" },
    { icon: GraduationCap, name: "Coaches & Educators", description: "Course promos, testimonials" },
    { icon: Home, name: "Real Estate", description: "Property showcases, virtual tours" },
    { icon: Heart, name: "Healthcare & Wellness", description: "Clinic promos, service highlights" },
    { icon: Briefcase, name: "Professional Services", description: "Law firms, consultants, agencies" },
    { icon: Car, name: "Automotive", description: "Dealerships, rentals, services" },
    { icon: Sparkles, name: "Startups & Tech", description: "App demos, SaaS explainers" },
    { icon: Film, name: "Entertainment & Media", description: "Movie trailers, OTT promos, music videos" },
  ];

  return (
    <section className="py-20 md:py-32 bg-card/30 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Universal Solution</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Industries We <span className="text-gradient-reverse">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From local shops to global brands — our AI adapts to every industry.
          </p>
        </div>

        {/* Featured Industry Image */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-purple">
            <img 
              src={modelEcommerce}
              alt="E-commerce Jewelry Fashion Advertising - Premium AI Video Ads"
              className="w-full aspect-[21/9] object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-display text-2xl md:text-4xl font-bold mb-2">Premium Brand Advertising</h3>
                <p className="text-muted-foreground">Jewelry • Fashion • Luxury • E-commerce</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card-gradient border border-border/50 hover:border-primary/50 text-center group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <industry.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold mb-2">{industry.name}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don't see your industry? <span className="text-primary font-medium">We create ads for any business worldwide.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
