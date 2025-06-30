import { motion } from "framer-motion";
import { 
  Zap, 
  FileText, 
  Brain, 
  Network, 
  EyeOff, 
  Combine, 
  CheckSquare, 
  Shield 
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/hooks/use-language";
import { fadeInUp, staggerChildren, hoverLift } from "@/lib/animations";

const getFeatures = (t: (key: string) => string) => [
  {
    icon: Zap,
    title: t('features.realtime.title'),
    description: t('features.realtime.description'),
    color: "from-purple-500 to-cyan-500",
    highlights: [t('features.realtime.highlight1'), t('features.realtime.highlight2'), t('features.realtime.highlight3')],
  },
  {
    icon: FileText,
    title: t('features.transcription.title'),
    description: t('features.transcription.description'),
    color: "from-cyan-500 to-pink-500",
    highlights: [t('features.transcription.highlight1'), t('features.transcription.highlight2'), t('features.transcription.highlight3')],
  },
  {
    icon: Brain,
    title: t('features.memory.title'),
    description: t('features.memory.description'),
    color: "from-pink-500 to-purple-500",
    highlights: [t('features.memory.highlight1'), t('features.memory.highlight2'), t('features.memory.highlight3')],
  },
  {
    icon: Network,
    title: t('features.platform.title'),
    description: t('features.platform.description'),
    color: "from-cyan-500 to-purple-500",
    highlights: [t('features.platform.highlight1'), t('features.platform.highlight2'), t('features.platform.highlight3')],
  },
  {
    icon: EyeOff,
    title: t('features.stealth.title'),
    description: t('features.stealth.description'),
    color: "from-purple-500 to-pink-500",
    highlights: [t('features.stealth.highlight1'), t('features.stealth.highlight2'), t('features.stealth.highlight3')],
  },
  {
    icon: Combine,
    title: t('features.summaries.title'),
    description: t('features.summaries.description'),
    color: "from-cyan-500 to-pink-500",
    highlights: [t('features.summaries.highlight1'), t('features.summaries.highlight2'), t('features.summaries.highlight3')],
  },
  {
    icon: CheckSquare,
    title: t('features.actions.title'),
    description: t('features.actions.description'),
    color: "from-pink-500 to-cyan-500",
    highlights: [t('features.actions.highlight1'), t('features.actions.highlight2'), t('features.actions.highlight3')],
  },
  {
    icon: Shield,
    title: t('features.security.title'),
    description: t('features.security.description'),
    color: "from-purple-500 to-cyan-500",
    highlights: [t('features.security.highlight1'), t('features.security.highlight2'), t('features.security.highlight3')],
  },
];

export function FeaturesSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { t } = useLanguage();
  const features = getFeatures(t);

  return (
    <section id="features" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-morphism-white p-8 rounded-3xl hover-lift group cursor-pointer"
              variants={fadeInUp}
              custom={index}
              {...hoverLift}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gray-100 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-200 leading-relaxed mb-4 group-hover:text-white transition-colors">
                {feature.description}
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <span 
                    key={highlightIndex}
                    className="text-xs px-3 py-1 bg-white/20 text-gray-200 rounded-full border border-white/30 group-hover:bg-white/30 group-hover:text-white transition-all duration-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
