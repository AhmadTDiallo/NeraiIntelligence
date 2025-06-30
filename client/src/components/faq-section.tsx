import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const faqs = [
  {
    question: "How does Nerai integrate with existing platforms?",
    answer: "Nerai connects seamlessly through official APIs and webhooks. Setup takes just a few minutes with our guided installation process."
  },
  {
    question: "Is my data secure with Nerai?",
    answer: "Yes, we use bank-level encryption and never store your conversation data. Everything is processed in real-time and discarded immediately after."
  },
  {
    question: "Can I use Nerai without others knowing?",
    answer: "Absolutely! Stealth Mode allows you to get AI assistance privately without any visible indication to other participants."
  },
  {
    question: "What languages does Nerai support?",
    answer: "Nerai supports 40+ languages including English, Spanish, French, German, Japanese, Chinese, and many more."
  },
  {
    question: "How accurate are the meeting transcriptions?",
    answer: "Our AI achieves 95%+ accuracy in transcription across multiple languages and accents, with continuous learning to improve over time."
  },
  {
    question: "Can I customize Nerai's responses?",
    answer: "Yes, you can train Nerai with your company's specific terminology, tone, and preferences to ensure responses align with your brand voice."
  },
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      className="glass-morphism rounded-2xl overflow-hidden"
      variants={fadeInUp}
      custom={index}
    >
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
        onClick={onToggle}
      >
        <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-coral">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
