import { motion } from "framer-motion";
import { Play, MessageSquare, Video, Users, Zap, MessageCircle, Globe, CheckSquare } from "lucide-react";
import { SiSlack, SiWhatsapp, SiZoom } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { fadeInUp, staggerChildren, hoverLift } from "@/lib/animations";

interface HeroSectionProps {
  onTryNowClick: () => void;
  onWatchDemoClick: () => void;
}

export function HeroSection({ onTryNowClick, onWatchDemoClick }: HeroSectionProps) {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { displayedText } = useTypingAnimation({
    text: "Meeting summary ready! 🎯",
    speed: 100,
    delay: 3000,
  });

  const platforms = [
    { icon: SiSlack, name: "Slack", color: "text-purple-400" },
    { icon: MessageCircle, name: "Teams", color: "text-cyan-400" },
    { icon: SiWhatsapp, name: "WhatsApp", color: "text-pink-400" },
    { icon: SiZoom, name: "Zoom", color: "text-purple-400" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="mb-8"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            <span className="block gradient-text animate-gradient">
              AI That Lives Inside
            </span>
            <span className="block gradient-text-coral">
              Your Conversations
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Nerai answers questions, summarizes meetings, and gives your team memory — across chat, calls, and platforms
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={fadeInUp}
          >
            <motion.div className="rainbow-border p-0.5 rounded-full" {...hoverLift}>
              <Button
                onClick={onTryNowClick}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-full border-0"
              >
                Try Nerai Now
              </Button>
            </motion.div>
            
            <motion.div {...hoverLift}>
              <Button
                onClick={onWatchDemoClick}
                variant="outline"
                size="lg"
                className="glass-morphism text-white font-semibold text-lg px-8 py-4 rounded-full border-white/20 hover:bg-white/20"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Platform Integration Icons */}
          <motion.div 
            className="flex justify-center items-center space-x-8 mb-16 flex-wrap gap-4"
            variants={staggerChildren}
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="text-center"
                variants={fadeInUp}
                custom={index}
              >
                <motion.div 
                  className="w-16 h-16 glass-morphism rounded-2xl flex items-center justify-center mb-2 hover-lift"
                  whileHover={{ scale: 1.1 }}
                >
                  <platform.icon className={`text-2xl ${platform.color}`} />
                </motion.div>
                <span className="text-sm text-gray-400">{platform.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Product Demo Mockup */}
        <motion.div 
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {/* Main Dashboard Container */}
          <div className="glass-morphism-white rounded-3xl p-8 hover-lift relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Dashboard Interface */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm border border-white/10">
              {/* Animated Background Lines */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                  animate={{ x: [-100, window.innerWidth || 1200] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
                  animate={{ x: [100, -(window.innerWidth || 1200)] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Nerai AI Dashboard</h3>
                    <p className="text-sm text-gray-400">Real-time conversation intelligence</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="flex items-center space-x-2 glass-morphism px-3 py-1 rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Live Processing</span>
                  </motion.div>
                  <div className="text-sm text-gray-400">4 platforms active</div>
                </div>
              </div>

              {/* Enhanced Interface Elements */}
              <div className="grid lg:grid-cols-3 gap-6 relative z-10">
                {/* Real-time Activity */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                    Live Conversations
                  </h4>
                  <div className="space-y-3">
                    {[
                      { team: "Marketing Team", platform: "Slack", time: "2 min ago", icon: Users, color: "from-blue-500 to-purple-500" },
                      { team: "Product Standup", platform: "Zoom", time: "5 min ago", icon: Video, color: "from-green-500 to-cyan-500" },
                      { team: "Customer Support", platform: "Teams", time: "8 min ago", icon: MessageCircle, color: "from-orange-500 to-pink-500" }
                    ].map((conv, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-start space-x-3 glass-morphism p-3 rounded-xl hover:bg-white/10 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                      >
                        <div className={`w-8 h-8 bg-gradient-to-r ${conv.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <conv.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white truncate">{conv.team}</div>
                          <div className="text-xs text-gray-400">{conv.platform} • {conv.time}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-purple-400" />
                    AI Performance
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "1,247", label: "Questions Answered", color: "text-cyan-400" },
                      { value: "156", label: "Meetings Processed", color: "text-purple-400" },
                      { value: "98.3%", label: "Accuracy Rate", color: "text-green-400" },
                      { value: "2.1s", label: "Avg Response", color: "text-pink-400" }
                    ].map((stat, idx) => (
                      <motion.div 
                        key={idx}
                        className="glass-morphism p-4 rounded-xl text-center hover:scale-105 transition-transform"
                        whileHover={{ y: -2 }}
                      >
                        <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Platform Status */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-green-400" />
                    Platform Status
                  </h4>
                  <div className="space-y-3">
                    {platforms.map((platform, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center justify-between glass-morphism p-3 rounded-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <platform.icon className={`text-lg ${platform.color}`} />
                          <span className="text-sm text-white font-medium">{platform.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-400">Active</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating AI Responses */}
            <motion.div
              className="absolute -top-4 right-8 glass-morphism-white p-5 rounded-2xl max-w-xs shadow-2xl border border-white/20"
              animate={{
                y: [-8, 8, -8],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 text-white" />
                </motion.div>
                <div>
                  <span className="text-sm font-semibold text-white">Nerai AI</span>
                  <div className="text-xs text-gray-300">Stealth Mode Active</div>
                </div>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {displayedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </p>
              <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-white/10">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Private to you</span>
              </div>
            </motion.div>

            {/* Additional floating notification */}
            <motion.div
              className="absolute bottom-8 left-8 glass-morphism p-4 rounded-xl max-w-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <CheckSquare className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">Action Items Extracted</span>
              </div>
              <p className="text-xs text-gray-300">3 tasks assigned, 2 deadlines set</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
