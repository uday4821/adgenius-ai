import { forwardRef, memo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Clock, User, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getBlogPostTranslation } from "@/translations/blogTranslations";
// Ultra-realistic professional images
import modelProfessional from "@/assets/model-professional-realistic.jpg";
import modelFashion from "@/assets/model-luxury-fashion.jpg";
import modelCinematic from "@/assets/shortfilm-cinematic.jpg";
import modelRealestate from "@/assets/model-realestate-realistic.jpg";
import modelEcommerce from "@/assets/model-ecommerce-realistic.jpg";
import modelJewelry from "@/assets/model-jewelry-luxury.jpg";

const blogPosts = [
  {
    slug: "ai-video-ads-vs-traditional-agency",
    title: "AI Video Ads vs Traditional Agencies: Why Smart Businesses Are Switching",
    excerpt: "Discover why 10,000+ businesses are choosing AI-powered video ads over expensive traditional agencies. Learn about the 90% cost savings and faster delivery.",
    category: "AI Marketing",
    readTime: "5 min read",
    date: "January 3, 2026",
    image: modelProfessional
  },
  {
    slug: "how-to-create-viral-instagram-ads",
    title: "How to Create Viral Instagram Ads That Convert in 2026",
    excerpt: "Learn the secrets behind viral Instagram video ads. From hooks to CTAs, we reveal what makes viewers stop scrolling and start buying.",
    category: "Social Media",
    readTime: "7 min read",
    date: "January 2, 2026",
    image: modelFashion
  },
  {
    slug: "ai-short-films-future-of-brand-storytelling",
    title: "AI Short Films: The Future of Brand Storytelling",
    excerpt: "Hollywood-quality films at a fraction of the cost. Explore how AI is revolutionizing brand storytelling and why your competitors are already using it.",
    category: "AI Films",
    readTime: "6 min read",
    date: "January 1, 2026",
    image: modelCinematic
  },
  {
    slug: "real-estate-video-marketing-guide",
    title: "Complete Guide to Real Estate Video Marketing in India",
    excerpt: "Sell properties faster with video marketing. Learn how top real estate developers are using AI video ads to close deals in record time.",
    category: "Real Estate",
    readTime: "8 min read",
    date: "December 30, 2025",
    image: modelRealestate
  },
  {
    slug: "ecommerce-video-ads-boost-sales",
    title: "5 E-commerce Video Ad Strategies to 10x Your Sales",
    excerpt: "From product demos to testimonial videos, discover the video ad strategies that top D2C brands use to dominate their market.",
    category: "E-commerce",
    readTime: "6 min read",
    date: "December 28, 2025",
    image: modelEcommerce
  },
  {
    slug: "jewelry-fashion-video-advertising",
    title: "Luxury Jewelry & Fashion Video Advertising: A Complete Guide",
    excerpt: "Create stunning video ads that showcase your jewelry and fashion products in their best light. Tips from brands that achieved 5x ROAS.",
    category: "Luxury",
    readTime: "7 min read",
    date: "December 26, 2025",
    image: modelJewelry
  }
];

const Blog = forwardRef<HTMLElement>((_, ref) => {
  const { pathname } = useLocation();
  const { t, language } = useLanguage();
  
  // Scroll to top when navigating to blog page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Helper function to translate categories
  const translateCategory = (category: string) => {
    const categoryMap: Record<string, string> = {
      "AI Marketing": t("blog.category.aiMarketing"),
      "Social Media": t("blog.category.socialMedia"),
      "AI Films": t("blog.category.aiFilms"),
      "Real Estate": t("blog.category.realEstate"),
      "E-commerce": t("blog.category.ecommerce"),
      "Luxury": t("blog.category.luxury"),
    };
    return categoryMap[category] || category;
  };

  return (
    <>
      <Helmet>
        <title>AI Video Ads | Best AI Video Marketing Agency India 2025 | edgeaihub</title>
        <meta 
          name="description" 
          content="India's #1 AI video ad agency. Create viral Instagram Reels, Facebook ads & YouTube videos with AI. 1000+ ads delivered. 24-hour delivery. Free consultation." 
        />
        <meta name="keywords" content="AI video ads, AI video marketing, best AI video agency India, AI advertisement maker, AI video generator for business, Instagram Reels maker, Facebook video ads, YouTube ads AI, viral video ads, AI commercial production, video ad agency India, AI marketing agency, automated video ads, AI video content creator, professional video ads, social media video marketing, AI advertising India, video marketing 2025, ecommerce video ads, real estate video marketing, restaurant video ads, fashion video advertising" />
        <link rel="canonical" href="https://ai.edgeaihub.in/blog" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="edgeaihub" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        
        <meta property="og:title" content="AI Video Ads | Best AI Video Marketing Agency India | edgeaihub" />
        <meta property="og:description" content="India's #1 AI video ad agency. Create viral video ads with AI. 1000+ ads delivered across 5+ countries." />
        <meta property="og:url" content="https://ai.edgeaihub.in/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai.edgeaihub.in/og-image.jpg" />
        <meta property="og:site_name" content="edgeaihub" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Video Ads | Best AI Video Marketing Agency India" />
        <meta name="twitter:description" content="Create viral AI video ads. 1000+ ads delivered. 24-hour delivery." />
        <meta name="twitter:image" content="https://ai.edgeaihub.in/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "edgeaihub - AI Video Marketing Blog",
            "description": "Expert insights on AI video ads, digital marketing, and video advertising strategies",
            "url": "https://ai.edgeaihub.in/blog",
            "publisher": {
              "@type": "Organization",
              "name": "edgeaihub",
              "logo": { "@type": "ImageObject", "url": "https://ai.edgeaihub.in/og-image.jpg" }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": blogPosts.map((post, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `https://ai.edgeaihub.in/blog/${post.slug}`
              }))
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "edgeaihub",
            "url": "https://ai.edgeaihub.in",
            "logo": "https://ai.edgeaihub.in/og-image.jpg",
            "sameAs": ["https://www.instagram.com/edgeaihub", "https://www.facebook.com/edgeaihub"],
            "contactPoint": { "@type": "ContactPoint", "telephone": "+91-7207926206", "contactType": "sales" }
          })}
        </script>
      </Helmet>
      
      <main ref={ref} className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                📚 {t("blog.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t("blog.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t("blog.titleHighlight")}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("blog.subtitle")}
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
                      {translateCategory(post.category)}
                    </span>
                    
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {getBlogPostTranslation(post.slug, language)?.title || post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {getBlogPostTranslation(post.slug, language)?.excerpt || post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime.replace("min read", t("blog.minRead"))}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          edgeaihub
                        </span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        {t("blog.readArticle")} <ArrowRight className="w-4 h-4" />
                      </Link>
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
              {t("blog.ctaTitle")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("blog.ctaSubtitle")}
            </p>
            <a
              href="tel:+917207926206"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {t("common.call")}: +91 7207926206
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              📞 {t("common.call")}: +91 7207926206 • 📧 contact@edgeaihub.in
            </p>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
});

Blog.displayName = "Blog";

export default memo(Blog);
