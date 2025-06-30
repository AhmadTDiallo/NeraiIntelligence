import { motion } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, name: t('language.english'), flag: '🇺🇸' },
    { code: 'fr' as const, name: t('language.french'), flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <motion.button
        className="flex items-center space-x-2 glass-morphism px-3 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          className="absolute top-full right-0 mt-2 glass-morphism rounded-lg border border-white/20 overflow-hidden z-50 min-w-[140px]"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                language === lang.code ? 'bg-white/10' : ''
              }`}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              whileHover={{ x: 2 }}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm text-white font-medium">{lang.name}</span>
              {language === lang.code && (
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}