import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/hooks/use-language";
import { fadeInUp, staggerChildren } from "@/lib/animations";

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
}

function Counter({ from, to, suffix = "", duration = 2 }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.span>
      {rounded.get()}
      {suffix}
    </motion.span>
  );
}

const getStatistics = (t: (key: string) => string) => [
  {
    value: 10000,
    suffix: "+",
    label: t('stats.activeTeams'),
    color: "text-purple-400",
  },
  {
    value: 500000,
    suffix: "+",
    label: t('stats.messagesProcessed'),
    color: "text-cyan-400",
  },
  {
    value: 95,
    suffix: "%",
    label: t('stats.userSatisfaction'),
    color: "text-pink-400",
  },
  {
    value: 40,
    suffix: "%",
    label: t('stats.timeSaved'),
    color: "text-purple-400",
  },
];

export function StatisticsSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { t } = useLanguage();
  const statistics = getStatistics(t);

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text-coral"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t('stats.title')}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-morphism p-8 rounded-3xl hover-lift"
              variants={fadeInUp}
              custom={index}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {isVisible && (
                  <Counter
                    from={0}
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={2 + index * 0.2}
                  />
                )}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
