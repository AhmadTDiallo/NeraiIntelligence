import { useState } from "react";
import { FloatingElements } from "@/components/floating-elements";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProductDemoSection } from "@/components/product-demo-section";
import { StatisticsSection } from "@/components/statistics-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState<"demo" | "sales" | "support">("demo");

  const handleCTAClick = () => {
    setContactFormType("demo");
    setIsContactFormOpen(true);
  };

  const handleWatchDemo = () => {
    // In a real app, this would open a video modal or navigate to a demo page
    setContactFormType("demo");
    setIsContactFormOpen(true);
  };

  const handlePlanSelect = (plan: string) => {
    if (plan === "Enterprise") {
      setContactFormType("sales");
    } else {
      setContactFormType("demo");
    }
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen">
      <FloatingElements />
      
      <Navigation onCTAClick={handleCTAClick} />
      
      <main>
        <HeroSection 
          onTryNowClick={handleCTAClick}
          onWatchDemoClick={handleWatchDemo}
        />
        
        <FeaturesSection />
        
        <ProductDemoSection />
        
        <StatisticsSection />
        
        <PricingSection onPlanSelect={handlePlanSelect} />
        
        <TestimonialsSection />
        
        <FAQSection />
        
        {/* Final CTA Section */}
        <section className="py-32 relative" id="about">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Ready to Transform Your Conversations?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of teams already using Nerai to work smarter, faster, and more efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="rainbow-border p-0.5 rounded-full">
                <button
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-10 py-5 rounded-full text-white font-semibold text-xl transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </button>
              </div>
              
              <button
                onClick={() => {
                  setContactFormType("sales");
                  setIsContactFormOpen(true);
                }}
                className="glass-morphism px-10 py-5 rounded-full text-white font-semibold text-xl hover:bg-white/20 transition-all duration-300"
              >
                Request Demo
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-8">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        defaultType={contactFormType}
      />
    </div>
  );
}
