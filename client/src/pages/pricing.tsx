import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { FloatingElements } from "@/components/floating-elements";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "1,000 AI responses per month",
      "Basic integrations (Slack, Teams)",
      "Email support",
      "Meeting summaries",
      "Basic analytics",
    ],
    limitations: [
      "No WhatsApp integration",
      "No custom AI training",
      "Standard response time",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing teams that need more power",
    features: [
      "Up to 25 team members",
      "10,000 AI responses per month",
      "All integrations (Slack, Teams, WhatsApp, Zoom)",
      "Priority support",
      "Advanced meeting transcription",
      "Custom AI training",
      "Advanced analytics & insights",
      "Stealth mode",
      "Action item extraction",
    ],
    limitations: [
      "No custom integrations",
      "Standard security features",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited team members",
      "Unlimited AI responses",
      "All integrations + custom ones",
      "24/7 dedicated support",
      "Advanced security & compliance",
      "Custom AI model training",
      "Advanced admin controls",
      "SSO integration",
      "Custom reporting",
      "On-premise deployment option",
      "Dedicated customer success manager",
    ],
    limitations: [],
  },
];

const faqs = [
  {
    question: "What happens if I exceed my plan limits?",
    answer: "We'll notify you when you're approaching your limits. You can either upgrade your plan or wait for the next billing cycle. We never cut off service abruptly."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start."
  },
  {
    question: "What integrations are included?",
    answer: "Starter includes Slack and Teams. Pro adds WhatsApp and Zoom. Enterprise includes all integrations plus custom ones."
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually. Annual plans get a 20% discount. All plans include a 30-day money-back guarantee."
  },
];

export default function Pricing() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState<"demo" | "sales" | "support">("demo");

  const handlePlanSelect = (planName: string) => {
    if (planName === "Enterprise") {
      setContactFormType("sales");
    } else {
      setContactFormType("demo");
    }
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen">
      <FloatingElements />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-morphism">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Choose Your Plan
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Scale your AI-powered conversations with flexible pricing that grows with your team
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid lg:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative ${
                    plan.popular ? "rainbow-border p-0.5 rounded-3xl" : ""
                  }`}
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className={`glass-morphism p-8 rounded-3xl h-full ${
                    plan.popular ? "bg-gradient-to-br from-slate-900/90 to-slate-800/90" : ""
                  }`}>
                    {plan.popular && (
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-xs px-3 py-1 rounded-full inline-block mb-4">
                        <Star className="inline w-3 h-3 mr-1" />
                        MOST POPULAR
                      </div>
                    )}
                    
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold mb-2">
                        <span className={plan.popular ? "gradient-text-coral" : "gradient-text"}>
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-lg text-gray-400">{plan.period}</span>
                        )}
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-white mb-4">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className={`w-5 h-5 mt-0.5 ${
                              plan.popular ? "text-pink-400" : "text-cyan-400"
                            }`} />
                            <span className="text-gray-200 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.limitations.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <h4 className="font-semibold text-gray-400 mb-3 text-sm">Not included:</h4>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="text-gray-500 text-sm">
                                • {limitation}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <Button
                      onClick={() => handlePlanSelect(plan.name)}
                      className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white hover:scale-105"
                          : "glass-morphism border-white/20 text-white hover:bg-white/20"
                      }`}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Compare Plans
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 text-white font-semibold">Features</th>
                    <th className="text-center py-4 text-white font-semibold">Starter</th>
                    <th className="text-center py-4 text-white font-semibold">Pro</th>
                    <th className="text-center py-4 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-gray-300">Team members</td>
                    <td className="text-center py-3 text-gray-400">Up to 5</td>
                    <td className="text-center py-3 text-gray-400">Up to 25</td>
                    <td className="text-center py-3 text-gray-400">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-gray-300">AI responses/month</td>
                    <td className="text-center py-3 text-gray-400">1,000</td>
                    <td className="text-center py-3 text-gray-400">10,000</td>
                    <td className="text-center py-3 text-gray-400">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-gray-300">Slack & Teams</td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-gray-300">WhatsApp & Zoom</td>
                    <td className="text-center py-3 text-gray-500">—</td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-gray-300">Stealth Mode</td>
                    <td className="text-center py-3 text-gray-500">—</td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-gray-300">Custom AI Training</td>
                    <td className="text-center py-3 text-gray-500">—</td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-gray-300">Enterprise Security</td>
                    <td className="text-center py-3 text-gray-500">—</td>
                    <td className="text-center py-3 text-gray-500">—</td>
                    <td className="text-center py-3">
                      <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Pricing FAQ
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism p-6 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams using Nerai to transform their conversations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="rainbow-border p-0.5 rounded-full">
                <Button
                  onClick={() => handlePlanSelect("Pro")}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </Button>
              </div>
              
              <Button
                onClick={() => handlePlanSelect("Enterprise")}
                variant="outline"
                size="lg"
                className="glass-morphism border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        defaultType={contactFormType}
      />
    </div>
  );
}
