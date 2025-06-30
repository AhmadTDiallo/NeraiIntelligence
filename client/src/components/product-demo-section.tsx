import { motion } from "framer-motion";
import { SiSlack, SiWhatsapp, SiZoom } from "react-icons/si";
import { MessageCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/hooks/use-language";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const getDemos = (t: (key: string) => string) => [
  {
    icon: SiSlack,
    title: t('demo.slack.title'),
    description: t('demo.slack.description'),
    color: "text-purple-400",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
    alt: "Modern Slack interface showing team collaboration",
  },
  {
    icon: MessageCircle,
    title: t('demo.teams.title'),
    description: t('demo.teams.description'),
    color: "text-cyan-400",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Professional video conference meeting",
  },
  {
    icon: SiWhatsapp,
    title: t('demo.whatsapp.title'),
    description: t('demo.whatsapp.description'),
    color: "text-pink-400",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "Business professionals using mobile devices",
  },
  {
    icon: SiZoom,
    title: t('demo.zoom.title'),
    description: t('demo.zoom.description'),
    color: "text-purple-400",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Professional workspace with video conferencing setup",
  },
];

export function ProductDemoSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { t } = useLanguage();
  const demos = getDemos(t);

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-teal">
            {t('demo.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              className="glass-morphism p-8 rounded-3xl hover-lift"
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              initial="initial"
              animate={isVisible ? "animate" : "initial"}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <demo.icon className={`text-2xl ${demo.color}`} />
                <h3 className="text-2xl font-semibold text-white">{demo.title}</h3>
              </div>
              
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img 
                  src={demo.image} 
                  alt={demo.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {demo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
