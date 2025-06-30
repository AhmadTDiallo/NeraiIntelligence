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
import { fadeInUp, staggerChildren, hoverLift } from "@/lib/animations";

const features = [
  {
    icon: Zap,
    title: "Real-Time AI Responses",
    description: "Get instant, context-aware AI answers to any question without disrupting your conversation flow or switching apps.",
    color: "from-purple-500 to-cyan-500",
    highlights: ["Instant responses", "Context-aware", "No app switching"],
  },
  {
    icon: FileText,
    title: "Smart Meeting Transcription",
    description: "Automatically transcribe and intelligently summarize your video calls with key decisions, action items, and participant insights.",
    color: "from-cyan-500 to-pink-500",
    highlights: ["Auto transcription", "Key decisions", "Action items"],
  },
  {
    icon: Brain,
    title: "Session Memory",
    description: "Maintains context within individual conversations and meetings, ensuring relevant and informed AI responses throughout each session.",
    color: "from-pink-500 to-purple-500",
    highlights: ["Session context", "Informed responses", "Conversation continuity"],
  },
  {
    icon: Network,
    title: "Multi-Platform Integration",
    description: "Works seamlessly across Slack, Microsoft Teams, WhatsApp, and Zoom with native integration and consistent experience.",
    color: "from-cyan-500 to-purple-500",
    highlights: ["4 platforms", "Native integration", "Consistent UX"],
  },
  {
    icon: EyeOff,
    title: "Individual Stealth Mode",
    description: "Activate Nerai privately during meetings for personal AI assistance and explanations, completely invisible to other participants.",
    color: "from-purple-500 to-pink-500",
    highlights: ["Private activation", "Personal AI prompts", "Invisible to others"],
  },
  {
    icon: Combine,
    title: "Intelligent Summarization",
    description: "Generate comprehensive yet concise summaries of lengthy conversations, extracting key points and maintaining important context.",
    color: "from-cyan-500 to-pink-500",
    highlights: ["Smart extraction", "Key points", "Context preservation"],
  },
  {
    icon: CheckSquare,
    title: "Automated Action Tracking",
    description: "Automatically identify, extract, and organize action items from meetings with assignees, deadlines, and priority levels.",
    color: "from-pink-500 to-cyan-500",
    highlights: ["Auto identification", "Assignee tracking", "Priority levels"],
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Military-grade encryption, SOC 2 compliance, and zero data retention policies ensure your conversations remain private and secure.",
    color: "from-purple-500 to-cyan-500",
    highlights: ["Military encryption", "SOC 2 compliant", "Zero retention"],
  },
];

export function FeaturesSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

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
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to supercharge your team's productivity with AI-powered conversations
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
