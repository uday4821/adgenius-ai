import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

// Lazy load below-the-fold components for better initial load performance
const WhyEdgeAIHub = lazy(() => import("@/components/landing/WhyEdgeAIHub"));
const AdTemplates = lazy(() => import("@/components/landing/AdTemplates"));
const ROISection = lazy(() => import("@/components/landing/ROISection"));
const WhatYouGet = lazy(() => import("@/components/landing/WhatYouGet"));
const SampleVideos = lazy(() => import("@/components/landing/SampleVideos"));
const Industries = lazy(() => import("@/components/landing/Industries"));
const AIShortFilms = lazy(() => import("@/components/landing/AIShortFilms"));
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks"));
const GlobalReach = lazy(() => import("@/components/landing/GlobalReach"));
const TrustSection = lazy(() => import("@/components/landing/TrustSection"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const FinalCTA = lazy(() => import("@/components/landing/FinalCTA"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const SocialShareButtons = lazy(() => import("@/components/landing/SocialShareButtons"));

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Premium AI Video Ads | AI Short Films | edgeaihub - #1 Global AI Advertising</title>
        <meta 
          name="description" 
          content="Get studio-quality 30-second AI video ads + Hollywood-level AI Short Films. Trusted by 10,000+ businesses in 50+ countries. Fashion, jewelry, e-commerce, real estate ads. Fast 24hr delivery. Contact edgeaihub today!" 
        />
        <meta name="keywords" content="AI video ads, AI short films, AI advertising, affordable AI ads India, AI video production, AI fashion ads, AI jewelry ads, AI e-commerce ads, AI real estate ads, global AI advertising, premium video ads, conversion focused ads, viral video ads, social media ads, Instagram ads, Facebook ads, YouTube ads, AI movie production, cinematic AI videos, brand videos, product videos, AI generated videos, video marketing India, digital marketing agency, promotional videos, corporate videos, startup videos" />
        <link rel="canonical" href="https://ai.edgeaihub.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Premium AI Video Ads | AI Short Films | edgeaihub" />
        <meta property="og:description" content="Get studio-quality AI video ads & cinematic AI short films. Trusted by 10,000+ businesses in 50+ countries. 24-hour delivery." />
        <meta property="og:url" content="https://ai.edgeaihub.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai.edgeaihub.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="edgeaihub - Premium AI Video Ads Service" />
        <meta property="og:site_name" content="edgeaihub" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium AI Video Ads | AI Short Films | edgeaihub" />
        <meta name="twitter:description" content="Get studio-quality AI video ads & AI short films. 24-hour delivery. Global service." />
        <meta name="twitter:image" content="https://ai.edgeaihub.in/og-image.jpg" />
        <meta name="twitter:site" content="@edgeaihub" />
        <meta name="twitter:creator" content="@edgeaihub" />
        
        {/* Crawling & Indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Author & Geo */}
        <meta name="author" content="edgeaihub" />
        <meta name="publisher" content="edgeaihub" />
        <meta name="copyright" content="edgeaihub" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-US, en-IN, hi-IN" />
        
        {/* Theme & App */}
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="msapplication-TileColor" content="#0a0a0f" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Performance Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://ai.edgeaihub.in/#organization",
            "name": "edgeaihub",
            "url": "https://ai.edgeaihub.in",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ai.edgeaihub.in/logo.png",
              "width": 512,
              "height": 512
            },
            "description": "Premium AI Video Ads & AI Short Films for businesses worldwide",
            "foundingDate": "2024",
            "founder": {
              "@type": "Person",
              "name": "edgeaihub Team"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-8919400755",
                "contactType": "customer service",
                "email": "contact@edgeaihub.in",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": "Worldwide"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-8919400755",
                "contactType": "sales",
                "email": "contact@edgeaihub.in",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "sameAs": [
              "https://www.instagram.com/edge_aihub",
              "https://www.facebook.com/edgeaihub",
              "https://www.edgeaihub.in"
            ],
            "areaServed": {
              "@type": "GeoShape",
              "name": "Worldwide"
            },
            "slogan": "Premium AI Video Ads for Your Business"
          })}
        </script>
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://ai.edgeaihub.in/#service",
            "serviceType": "AI Video Advertising & AI Short Film Production",
            "name": "AI Video Ads & Short Films",
            "description": "Premium AI-powered video advertisements and cinematic short films for businesses",
            "provider": {
              "@type": "Organization",
              "@id": "https://ai.edgeaihub.in/#organization"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Premium AI Video Ad",
                "description": "30-second premium AI video ad with professional voiceover and music",
                "availability": "https://schema.org/InStock",
                "url": "https://ai.edgeaihub.in"
              },
              {
                "@type": "Offer",
                "name": "AI Short Films",
                "description": "Hollywood-quality AI-generated short films for global brands and campaigns",
                "url": "https://ai.edgeaihub.in/#ai-short-films"
              }
            ],
            "areaServed": "Worldwide",
            "audience": {
              "@type": "Audience",
              "audienceType": "Businesses, Brands, Entrepreneurs, Startups"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Video Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Video Ads",
                    "description": "30-second premium AI video advertisements for social media and digital marketing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Short Films",
                    "description": "Cinematic AI-generated short films for brands and entertainment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Videos",
                    "description": "AI-powered brand storytelling videos"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does an AI video ad cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer affordable premium AI video ads for 30-second videos. This includes professional voiceover, trending music, text animations, and multi-platform formats optimized for Instagram, Facebook, YouTube, and more. Contact us for pricing."
                }
              },
              {
                "@type": "Question",
                "name": "What is the delivery time for AI video ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We deliver premium AI video ads within 24 hours of order confirmation. Rush delivery options are also available for urgent requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Do you create AI short films?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We create Hollywood-quality AI short films for brands, YouTube channels, international advertising campaigns, and entertainment purposes. Our AI filmmaking technology produces cinematic content at a fraction of traditional production costs."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve businesses in 50+ countries worldwide including India, USA, UK, Canada, Australia, UAE, Singapore, Germany, France, Japan, South Korea, Brazil, and more. Our global team delivers premium AI video content to clients everywhere."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you create AI video ads for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We create AI video ads for all industries including Fashion & Jewelry, E-commerce, Real Estate, Restaurants, Healthcare, Education, Automotive, Technology, Entertainment, and Professional Services."
                }
              }
            ]
          })}
        </script>
        
        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://ai.edgeaihub.in/#website",
            "url": "https://ai.edgeaihub.in",
            "name": "edgeaihub - Premium AI Video Ads",
            "description": "Get studio-quality AI video ads for your business",
            "publisher": {
              "@type": "Organization",
              "@id": "https://ai.edgeaihub.in/#organization"
            },
            "inLanguage": "en-US"
          })}
        </script>
        
        {/* LocalBusiness Schema for Indian Market */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://ai.edgeaihub.in/#localbusiness",
            "name": "edgeaihub",
            "description": "Premium AI Video Ads & AI Short Films Production Company",
            "url": "https://ai.edgeaihub.in",
            "telephone": "+91-8919400755",
            "email": "contact@edgeaihub.in",
            "priceRange": "Affordable",
            "currenciesAccepted": "INR, USD, GBP, EUR, AED",
            "paymentAccepted": "UPI, Bank Transfer, PayPal",
            "areaServed": ["India", "USA", "UK", "UAE", "Australia", "Canada", "Singapore", "Germany", "France", "Japan"],
            "serviceArea": {
              "@type": "GeoShape",
              "name": "Worldwide"
            }
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen bg-background" role="main">
        <a href="#hero-heading" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
          Skip to main content
        </a>
        <Suspense fallback={null}>
          <SocialShareButtons />
        </Suspense>
        <Navbar />
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <WhyEdgeAIHub />
          <AdTemplates />
          <ROISection />
          <WhatYouGet />
          <SampleVideos />
          <AIShortFilms />
          <Industries />
          <HowItWorks />
          <GlobalReach />
          <Testimonials />
          <TrustSection />
          <FinalCTA />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
