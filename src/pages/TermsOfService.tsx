import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | edgeaihub</title>
        <meta name="description" content="Terms of Service for edgeaihub - Read our terms and conditions for using our AI video advertising services." />
        <link rel="canonical" href="https://ai.edgeaihub.in/terms" />
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

              <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: February 2026</p>
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the edgeaihub website and services, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services Description</h2>
                  <p>
                    edgeaihub provides AI-powered video advertising services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>AI video ad creation and production</li>
                    <li>AI short film production</li>
                    <li>Brand video content creation</li>
                    <li>Social media video ads</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Intellectual Property</h2>
                  <p>
                    Upon full payment, clients receive full rights to use the delivered video content for their intended 
                    commercial purposes. edgeaihub retains the right to showcase completed work in our portfolio unless 
                    otherwise agreed in writing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Payment Terms</h2>
                  <p>
                    Payment terms will be communicated during the quotation process. We accept various payment methods 
                    including UPI, bank transfer, PayPal, and credit cards. Specific terms may vary based on the project scope.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Delivery and Revisions</h2>
                  <p>
                    We aim to deliver projects within the agreed timeframe, typically 24 hours for standard video ads. 
                    Revision policies will be communicated with each project proposal.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
                  <p>
                    edgeaihub shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                    resulting from your use of our services or any related communications.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Modifications</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Continued use of our services after any 
                    modifications indicates acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, please contact us:
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

export default TermsOfService;
