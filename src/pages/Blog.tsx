import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Clock, User } from "lucide-react";

const blogPosts = [
  {
    slug: "ai-video-ads-vs-traditional-agency",
    title: "AI Video Ads vs Traditional Agencies: Why Smart Businesses Are Switching",
    excerpt: "Discover why 10,000+ businesses are choosing AI-powered video ads over expensive traditional agencies. Learn about the 90% cost savings and faster delivery.",
    category: "AI Marketing",
    readTime: "5 min read",
    date: "January 3, 2026",
    image: "/assets/model-professional-realistic.jpg"
  },
  {
    slug: "how-to-create-viral-instagram-ads",
    title: "How to Create Viral Instagram Ads That Convert in 2026",
    excerpt: "Learn the secrets behind viral Instagram video ads. From hooks to CTAs, we reveal what makes viewers stop scrolling and start buying.",
    category: "Social Media",
    readTime: "7 min read",
    date: "January 2, 2026",
    image: "/assets/model-fashion-1.jpg"
  },
  {
    slug: "ai-short-films-future-of-brand-storytelling",
    title: "AI Short Films: The Future of Brand Storytelling",
    excerpt: "Hollywood-quality films at a fraction of the cost. Explore how AI is revolutionizing brand storytelling and why your competitors are already using it.",
    category: "AI Films",
    readTime: "6 min read",
    date: "January 1, 2026",
    image: "/assets/shortfilm-cinematic.jpg"
  },
  {
    slug: "real-estate-video-marketing-guide",
    title: "Complete Guide to Real Estate Video Marketing in India",
    excerpt: "Sell properties faster with video marketing. Learn how top real estate developers are using AI video ads to close deals in record time.",
    category: "Real Estate",
    readTime: "8 min read",
    date: "December 30, 2025",
    image: "/assets/model-realestate-realistic.jpg"
  },
  {
    slug: "ecommerce-video-ads-boost-sales",
    title: "5 E-commerce Video Ad Strategies to 10x Your Sales",
    excerpt: "From product demos to testimonial videos, discover the video ad strategies that top D2C brands use to dominate their market.",
    category: "E-commerce",
    readTime: "6 min read",
    date: "December 28, 2025",
    image: "/assets/model-ecommerce-realistic.jpg"
  },
  {
    slug: "jewelry-fashion-video-advertising",
    title: "Luxury Jewelry & Fashion Video Advertising: A Complete Guide",
    excerpt: "Create stunning video ads that showcase your jewelry and fashion products in their best light. Tips from brands that achieved 5x ROAS.",
    category: "Luxury",
    readTime: "7 min read",
    date: "December 26, 2025",
    image: "/assets/model-jewelry-luxury.jpg"
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Marketing Blog | Tips & Guides | edgeaihub</title>
        <meta 
          name="description" 
          content="Learn AI video marketing strategies, tips, and guides. Discover how to create viral video ads, boost conversions, and grow your business with AI-powered content." 
        />
        <meta name="keywords" content="AI video marketing, video ad tips, Instagram ads guide, AI advertising blog, video marketing strategies, social media video tips" />
        <link rel="canonical" href="https://ai.edgeaihub.in/blog" />
        
        <meta property="og:title" content="AI Video Marketing Blog | edgeaihub" />
        <meta property="og:description" content="Learn AI video marketing strategies and tips to grow your business." />
        <meta property="og:url" content="https://ai.edgeaihub.in/blog" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "edgeaihub Blog",
            "description": "AI Video Marketing Tips, Strategies & Guides",
            "url": "https://ai.edgeaihub.in/blog",
            "publisher": {
              "@type": "Organization",
              "name": "edgeaihub"
            }
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                📚 KNOWLEDGE HUB
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                AI Video Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert tips, strategies, and guides to help you create viral video ads and grow your business
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="group bg-card/50 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>
                    
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          edgeaihub
                        </span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Create Your Own Viral Video Ad?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a premium AI video ad for just ₹199 • 24-hour delivery
            </p>
            <a
              href="https://wa.me/918919400755?text=Hi%20edgeaihub!%20I%20read%20your%20blog%20and%20want%20to%20create%20an%20AI%20video%20ad!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              💬 Get Started on WhatsApp
            </a>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Blog;
