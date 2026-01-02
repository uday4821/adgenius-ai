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
import modelLuxuryFashion from "@/assets/model-luxury-fashion.jpg";
import modelSkincare from "@/assets/model-skincare-beauty.jpg";
import modelDesigner from "@/assets/model-designer-fashion.jpg";
import modelEcommerce from "@/assets/model-ecommerce-realistic.jpg";
import modelRestaurant from "@/assets/model-restaurant-realistic.jpg";
import modelEducator from "@/assets/model-educator-realistic.jpg";
import modelRealestate from "@/assets/model-realestate-realistic.jpg";
import modelHealthcare from "@/assets/model-healthcare-realistic.jpg";
import modelProfessional from "@/assets/model-professional-realistic.jpg";
import modelAutomotive from "@/assets/model-automotive-realistic.jpg";
import modelTech from "@/assets/model-tech-realistic.jpg";
import modelEntertainment from "@/assets/model-entertainment-realistic.jpg";

const Industries = () => {
  const industries = [
    { 
      icon: ShoppingBag, 
      name: "E-commerce & D2C", 
      description: "Product launches, offers, brand videos",
      image: modelEcommerce,
      alt: "Professional E-commerce Model - AI Video Ads for Online Retail Brands India USA UK"
    },
    { 
      icon: Utensils, 
      name: "Restaurants & Cafes", 
      description: "Menu highlights, delivery promos",
      image: modelRestaurant,
      alt: "Restaurant Chef Model - AI Video Ads for Food Industry Hospitality Marketing"
    },
    { 
      icon: GraduationCap, 
      name: "Coaches & Educators", 
      description: "Course promos, testimonials",
      image: modelEducator,
      alt: "Professional Educator Model - AI Video Ads for EdTech Online Courses Coaching"
    },
    { 
      icon: Home, 
      name: "Real Estate", 
      description: "Property showcases, virtual tours",
      image: modelRealestate,
      alt: "Real Estate Agent Model - AI Video Ads for Property Marketing Luxury Homes"
    },
    { 
      icon: Heart, 
      name: "Healthcare & Wellness", 
      description: "Clinic promos, service highlights",
      image: modelHealthcare,
      alt: "Healthcare Professional Model - AI Video Ads for Medical Clinics Wellness Centers"
    },
    { 
      icon: Briefcase, 
      name: "Professional Services", 
      description: "Law firms, consultants, agencies",
      image: modelProfessional,
      alt: "Professional Lawyer Model - AI Video Ads for Law Firms Consulting Agencies"
    },
    { 
      icon: Car, 
      name: "Automotive", 
      description: "Dealerships, rentals, services",
      image: modelAutomotive,
      alt: "Automotive Model - AI Video Ads for Car Dealerships Luxury Vehicles Marketing"
    },
    { 
      icon: Sparkles, 
      name: "Startups & Tech", 
      description: "App demos, SaaS explainers",
      image: modelTech,
      alt: "Tech Professional Model - AI Video Ads for SaaS Startups App Marketing"
    },
    { 
      icon: Film, 
      name: "Entertainment & Media", 
      description: "Movie trailers, OTT promos, music videos",
      image: modelEntertainment,
      alt: "Entertainment Celebrity Model - AI Video Ads for Movies OTT Platforms Media Industry"
    },
  ];

  return (
    <section id="industries" className="py-20 md:py-32 bg-card/30 relative" aria-labelledby="industries-heading">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10">
        <header className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Universal Solution</span>
          <h2 id="industries-heading" className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Industries We <span className="text-gradient-reverse">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From local shops to global brands — our AI adapts to every industry.
          </p>
        </header>

        {/* Featured Model Images Grid - Premium Fashion & Beauty */}
        <div className="mb-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list" aria-label="Featured premium model images">
          <figure className="relative rounded-2xl overflow-hidden border border-border/50 glow-purple group">
            <img 
              src={modelLuxuryFashion}
              alt="Luxury Fashion Model - Premium AI Video Ads for Jewelry Brands India USA UK"
              className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width="400"
              height="533"
              fetchPriority="low"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-bold mb-1">Luxury & Jewelry</h3>
              <p className="text-sm text-muted-foreground">Diamonds • Gold • Fashion Jewelry • Watches</p>
            </figcaption>
          </figure>

          <figure className="relative rounded-2xl overflow-hidden border border-border/50 glow-purple group">
            <img 
              src={modelSkincare}
              alt="Beauty Skincare Model - AI Video Ads for Cosmetics Brands Global Advertising"
              className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width="400"
              height="533"
              fetchPriority="low"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-bold mb-1">Beauty & Skincare</h3>
              <p className="text-sm text-muted-foreground">Cosmetics • Skincare • Wellness • Spa</p>
            </figcaption>
          </figure>

          <figure className="relative rounded-2xl overflow-hidden border border-border/50 glow-purple group">
            <img 
              src={modelDesigner}
              alt="Designer Fashion Model - Premium AI Video Production for Fashion Brands Worldwide"
              className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width="400"
              height="533"
              fetchPriority="low"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-bold mb-1">Designer Fashion</h3>
              <p className="text-sm text-muted-foreground">Haute Couture • Bridal • Luxury Apparel</p>
            </figcaption>
          </figure>
        </div>

        {/* Industry Cards Grid with Images */}
        <nav aria-label="Industries served" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <article
              key={index}
              className="relative rounded-2xl overflow-hidden bg-card-gradient border border-border/50 hover:border-primary/50 group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Industry Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="192"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30" aria-hidden="true">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              {/* Industry Content */}
              <div className="p-6 pt-4">
                <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            </article>
          ))}
        </nav>

        <footer className="text-center mt-12">
          <p className="text-muted-foreground">
            Don't see your industry? <span className="text-primary font-medium">We create ads for any business worldwide.</span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Industries;
