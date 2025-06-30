import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeInUp, staggerChildren, hoverLift } from "@/lib/animations";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaVariant?: "default" | "outline";
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for small teams",
    features: [
      "Up to 5 team members",
      "1,000 AI responses/month",
      "Basic integrations",
      "Email support",
    ],
    ctaText: "Get Started",
    ctaVariant: "outline",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing teams",
    features: [
      "Up to 25 team members",
      "10,000 AI responses/month",
      "All integrations",
      "Priority support",
      "Advanced analytics",
    ],
    popular: true,
    ctaText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited AI responses",
      "Custom integrations",
      "24/7 dedicated support",
      "Enterprise security",
    ],
    ctaText: "Contact Sales",
    ctaVariant: "outline",
  },
];

interface PricingCardProps {
  tier: PricingTier;
  index: number;
  onCTAClick: (tier: string) => void;
}

function PricingCard({ tier, index, onCTAClick }: PricingCardProps) {
  return (
    <motion.div
      className={`relative ${
        tier.popular ? "rainbow-border p-0.5 rounded-3xl" : ""
      }`}
      variants={fadeInUp}
      custom={index}
      {...hoverLift}
    >
      <div className={`glass-morphism p-8 rounded-3xl h-full ${
        tier.popular ? "bg-gradient-to-br from-slate-900/90 to-slate-800/90" : ""
      }`}>
        {tier.popular && (
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-xs px-3 py-1 rounded-full inline-block mb-4 text-center">
            <Star className="inline w-3 h-3 mr-1" />
            MOST POPULAR
          </div>
        )}
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">{tier.name}</h3>
          <div className="text-4xl font-bold mb-2">
            <span className={`${
              tier.popular 
                ? "bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent" 
                : "gradient-text"
            }`}>
              {tier.price}
            </span>
            {tier.period && (
              <span className="text-lg text-gray-400">{tier.period}</span>
            )}
          </div>
          <p className="text-gray-300">{tier.description}</p>
        </div>
        
        <ul className="space-y-4 mb-8 flex-grow">
          {tier.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center space-x-3">
              <Check className={`w-5 h-5 ${
                tier.popular ? "text-pink-400" : "text-cyan-400"
              }`} />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          onClick={() => onCTAClick(tier.name)}
          variant={tier.ctaVariant}
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
            tier.popular
              ? "bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white hover:scale-105"
              : tier.ctaVariant === "outline"
              ? "glass-morphism border-white/20 text-white hover:bg-white/20"
              : "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white hover:scale-105"
          }`}
        >
          {tier.ctaText}
        </Button>
      </div>
    </motion.div>
  );
}

interface PricingSectionProps {
  onPlanSelect: (plan: string) => void;
}

export function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="pricing" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-teal">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your team's needs
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              index={index}
              onCTAClick={onPlanSelect}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
