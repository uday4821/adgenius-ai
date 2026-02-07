import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | edgeaihub</title>
        <meta name="description" content="Privacy Policy for edgeaihub - Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://ai.edgeaihub.in/privacy" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="py-20 pt-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: February 2026</p>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
                  <p>
                    At edgeaihub, we collect information you provide directly to us, such as when you contact us 
                    through our website, request a quote, or communicate with us via email or phone. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business information</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Communicate with you about products, services, and promotions</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                    Cookies are files with small amount of data which may include an anonymous unique identifier.
                  </p>
                  <p className="mt-4">
                    We may use third-party services such as Google Analytics, Meta Pixel, and TikTok Pixel to analyze website 
                    traffic and user behavior. These services may collect information about your online activities over time 
                    and across different websites.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Third-Party Advertising</h2>
                  <p>
                    We may use third-party advertising companies to serve ads when you visit our website. These companies may 
                    use cookies and similar technologies to collect information about your visits to this and other websites 
                    in order to provide relevant advertisements about goods and services that may interest you.
                  </p>
                  <p className="mt-4">
                    We use Google AdSense on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. 
                    You may opt out of personalized advertising by visiting{" "}
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Google Ads Settings
                    </a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect the security of your personal 
                    information. However, please note that no method of transmission over the Internet or electronic storage 
                    is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    <li><strong>Email:</strong> contact@edgeaihub.in</li>
                    <li><strong>Phone:</strong> +91 7207926206</li>
                    <li><strong>Address:</strong> 2nd Floor, SK Complex, Attibele-Anekal Road, Attibele, Bangalore - 562107</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
