import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhyEdgeAIHub from "@/components/landing/WhyEdgeAIHub";
import AdTemplates from "@/components/landing/AdTemplates";
import ROISection from "@/components/landing/ROISection";
import WhatYouGet from "@/components/landing/WhatYouGet";
import SampleVideos from "@/components/landing/SampleVideos";
import Industries from "@/components/landing/Industries";
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
        <title>Premium AI Video Ads for ₹199 | edgeaihub - #1 AI Advertising India</title>
        <meta 
          name="description" 
          content="Get studio-quality 30-second AI video ads for just ₹199. Trusted by 10,000+ businesses in India & worldwide. Fast delivery, conversion-focused, multi-platform ready. Contact edgeaihub today!" 
        />
        <meta name="keywords" content="AI video ads, AI ads for business, AI advertising services, affordable AI ads, 30 second video ads, AI ads India, AI ads for small business, global AI advertising solutions" />
        <link rel="canonical" href="https://ai.edgeaihub.in" />
        <meta property="og:title" content="Premium AI Video Ads for ₹199 | edgeaihub" />
        <meta property="og:description" content="Get studio-quality AI video ads at a fraction of agency prices. 24-hour delivery. Trusted by 10,000+ businesses." />
        <meta property="og:url" content="https://ai.edgeaihub.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium AI Video Ads for ₹199 | edgeaihub" />
        <meta name="twitter:description" content="Get studio-quality AI video ads at a fraction of agency prices. 24-hour delivery." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "edgeaihub",
            "url": "https://ai.edgeaihub.in",
            "logo": "https://ai.edgeaihub.in/logo.png",
            "description": "Premium AI Video Ads for businesses at ₹199",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8919400755",
              "contactType": "customer service",
              "email": "contact@edgeaihub.in"
            },
            "sameAs": [
              "https://www.edgeaihub.in"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Video Advertising",
            "provider": {
              "@type": "Organization",
              "name": "edgeaihub"
            },
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "INR",
              "description": "30-second premium AI video ad"
            },
            "areaServed": "Worldwide"
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
