import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhyEdgeAIHub from "@/components/landing/WhyEdgeAIHub";
import AdTemplates from "@/components/landing/AdTemplates";
import ROISection from "@/components/landing/ROISection";
import WhatYouGet from "@/components/landing/WhatYouGet";
import SampleVideos from "@/components/landing/SampleVideos";
import Industries from "@/components/landing/Industries";
import AIShortFilms from "@/components/landing/AIShortFilms";
import HowItWorks from "@/components/landing/HowItWorks";
import GlobalReach from "@/components/landing/GlobalReach";
import TrustSection from "@/components/landing/TrustSection";
import UrgencySection from "@/components/landing/UrgencySection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Premium AI Video Ads ₹199 | AI Short Films | edgeaihub - #1 Global AI Advertising</title>
        <meta 
          name="description" 
          content="Get studio-quality 30-second AI video ads for just ₹199 + Hollywood-level AI Short Films. Trusted by 10,000+ businesses in 50+ countries. Fashion, jewelry, e-commerce, real estate ads. Fast 24hr delivery. Contact edgeaihub today!" 
        />
        <meta name="keywords" content="AI video ads, AI short films, AI advertising, affordable AI ads India, AI video production, AI fashion ads, AI jewelry ads, AI e-commerce ads, AI real estate ads, global AI advertising, premium video ads, conversion focused ads, viral video ads, social media ads, Instagram ads, Facebook ads, YouTube ads, AI movie production, cinematic AI videos, brand videos, product videos, AI generated videos" />
        <link rel="canonical" href="https://ai.edgeaihub.in" />
        <meta property="og:title" content="Premium AI Video Ads ₹199 | AI Short Films | edgeaihub" />
        <meta property="og:description" content="Get studio-quality AI video ads & cinematic AI short films. Trusted by 10,000+ businesses in 50+ countries. 24-hour delivery." />
        <meta property="og:url" content="https://ai.edgeaihub.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai.edgeaihub.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium AI Video Ads ₹199 | AI Short Films | edgeaihub" />
        <meta name="twitter:description" content="Get studio-quality AI video ads & AI short films. 24-hour delivery. Global service." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="edgeaihub" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-US, en-IN, hi-IN" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "edgeaihub",
            "url": "https://ai.edgeaihub.in",
            "logo": "https://ai.edgeaihub.in/logo.png",
            "description": "Premium AI Video Ads & AI Short Films for businesses worldwide at ₹199",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8919400755",
              "contactType": "customer service",
              "email": "contact@edgeaihub.in",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://www.instagram.com/edge_aihub",
              "https://www.facebook.com/edgeaihub",
              "https://www.edgeaihub.in"
            ],
            "areaServed": "Worldwide"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Video Advertising & AI Short Film Production",
            "provider": {
              "@type": "Organization",
              "name": "edgeaihub"
            },
            "offers": [
              {
                "@type": "Offer",
                "price": "199",
                "priceCurrency": "INR",
                "description": "30-second premium AI video ad"
              },
              {
                "@type": "Offer",
                "name": "AI Short Films",
                "description": "Hollywood-quality AI-generated short films for global brands"
              }
            ],
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Video Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Video Ads",
                    "description": "30-second premium AI video advertisements"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Short Films",
                    "description": "Cinematic AI-generated short films"
                  }
                }
              ]
            }
          })}
        </script>
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
                  "text": "Premium AI video ads start at just ₹199 for a 30-second video. This includes professional voiceover, trending music, text animations, and multi-platform formats."
                }
              },
              {
                "@type": "Question",
                "name": "What is the delivery time for AI video ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We deliver premium AI video ads within 24 hours of order confirmation."
                }
              },
              {
                "@type": "Question",
                "name": "Do you create AI short films?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We create Hollywood-quality AI short films for brands, YouTube channels, and international advertising campaigns."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve businesses in 50+ countries worldwide including India, USA, UK, Canada, Australia, UAE, Singapore, Germany, France, Japan, and more."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <WhyEdgeAIHub />
        <AdTemplates />
        <ROISection />
        <WhatYouGet />
        <SampleVideos />
        <AIShortFilms />
        <Industries />
        <HowItWorks />
        <GlobalReach />
        <TrustSection />
        <UrgencySection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
