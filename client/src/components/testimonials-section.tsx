import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/hooks/use-language";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const getTestimonials = (t: (key: string) => string) => [
  {
    content: t('testimonials.sarah.content'),
    author: "Sarah Chen",
    role: t('testimonials.sarah.role'),
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    content: t('testimonials.maria.content'),
    author: "Maria Rodriguez",
    role: t('testimonials.maria.role'),
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
  {
    content: t('testimonials.david.content'),
    author: "David Kim",
    role: t('testimonials.david.role'),
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    rating: 5,
  },
];

const companies = ["TECHCORP", "STARTUPXYZ", "INNOVATENOW", "FUTURETECH"];

export function TestimonialsSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { t } = useLanguage();
  const testimonials = getTestimonials(t);

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-20"
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="glass-morphism p-8 rounded-3xl hover-lift"
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author} portrait`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-gray-400 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-60 flex-wrap gap-4">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                className="text-xl font-bold text-gray-300"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 0.6 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
