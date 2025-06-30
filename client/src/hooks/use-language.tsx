import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translation {
  [key: string]: string;
}

interface Translations {
  en: Translation;
  fr: Translation;
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.tryNow': 'Try Nerai Now',
    'nav.backHome': 'Back to Home',

    // Hero Section
    'hero.title1': 'AI That Lives Inside',
    'hero.title2': 'Your Conversations',
    'hero.subtitle': 'Nerai answers questions, summarizes meetings, and gives your team memory — across chat, calls, and platforms',
    'hero.tryNow': 'Try Nerai Now',
    'hero.watchDemo': 'Watch Demo',
    'hero.dashboardTitle': 'Nerai AI Dashboard',
    'hero.dashboardSubtitle': 'Real-time conversation intelligence',
    'hero.liveProcessing': 'Live Processing',
    'hero.platformsActive': 'platforms active',
    'hero.liveConversations': 'Live Conversations',
    'hero.aiPerformance': 'AI Performance',
    'hero.platformStatus': 'Platform Status',
    'hero.questionsAnswered': 'Questions Answered',
    'hero.meetingsProcessed': 'Meetings Processed',
    'hero.accuracyRate': 'Accuracy Rate',
    'hero.avgResponse': 'Avg Response',
    'hero.active': 'Active',
    'hero.stealthMode': 'Stealth Mode Active',
    'hero.privateToYou': 'Private to you',
    'hero.actionItemsExtracted': 'Action Items Extracted',
    'hero.tasksAssigned': 'tasks assigned, 2 deadlines set',

    // Teams and platforms
    'team.marketing': 'Marketing Team',
    'team.product': 'Product Standup',
    'team.support': 'Customer Support',
    'platform.slack': 'Slack',
    'platform.teams': 'Teams',
    'platform.whatsapp': 'WhatsApp',
    'platform.zoom': 'Zoom',

    // Features Section
    'features.title': 'Powerful Features',
    'features.subtitle': 'Everything you need to supercharge your team\'s productivity with AI-powered conversations',
    'features.realtime.title': 'Real-Time AI Responses',
    'features.realtime.description': 'Get instant, context-aware AI answers to any question without disrupting your conversation flow or switching apps.',
    'features.realtime.highlight1': 'Instant responses',
    'features.realtime.highlight2': 'Context-aware',
    'features.realtime.highlight3': 'No app switching',
    'features.transcription.title': 'Smart Meeting Transcription',
    'features.transcription.description': 'Automatically transcribe and intelligently summarize your video calls with key decisions, action items, and participant insights.',
    'features.transcription.highlight1': 'Auto transcription',
    'features.transcription.highlight2': 'Key decisions',
    'features.transcription.highlight3': 'Action items',
    'features.memory.title': 'Session Memory',
    'features.memory.description': 'Maintains context within individual conversations and meetings, ensuring relevant and informed AI responses throughout each session.',
    'features.memory.highlight1': 'Session context',
    'features.memory.highlight2': 'Informed responses',
    'features.memory.highlight3': 'Conversation continuity',
    'features.platform.title': 'Multi-Platform Integration',
    'features.platform.description': 'Works seamlessly across Slack, Microsoft Teams, WhatsApp, and Zoom with native integration and consistent experience.',
    'features.platform.highlight1': '4 platforms',
    'features.platform.highlight2': 'Native integration',
    'features.platform.highlight3': 'Consistent UX',
    'features.stealth.title': 'Individual Stealth Mode',
    'features.stealth.description': 'Activate Nerai privately during meetings for personal AI assistance and explanations, completely invisible to other participants.',
    'features.stealth.highlight1': 'Private activation',
    'features.stealth.highlight2': 'Personal AI prompts',
    'features.stealth.highlight3': 'Invisible to others',
    'features.summaries.title': 'Intelligent Summarization',
    'features.summaries.description': 'Generate comprehensive yet concise summaries of lengthy conversations, extracting key points and maintaining important context.',
    'features.summaries.highlight1': 'Smart extraction',
    'features.summaries.highlight2': 'Key points',
    'features.summaries.highlight3': 'Context preservation',
    'features.actions.title': 'Automated Action Tracking',
    'features.actions.description': 'Automatically identify, extract, and organize action items from meetings with assignees, deadlines, and priority levels.',
    'features.actions.highlight1': 'Auto identification',
    'features.actions.highlight2': 'Assignee tracking',
    'features.actions.highlight3': 'Priority levels',
    'features.security.title': 'Enterprise-Grade Security',
    'features.security.description': 'Military-grade encryption, SOC 2 compliance, and zero data retention policies ensure your conversations remain private and secure.',
    'features.security.highlight1': 'Military encryption',
    'features.security.highlight2': 'SOC 2 compliant',
    'features.security.highlight3': 'Zero retention',

    // Product Demo Section
    'demo.title': 'See Nerai in Action',
    'demo.subtitle': 'Experience how Nerai seamlessly integrates into your existing workflow',
    'demo.slack.title': 'Slack Integration',
    'demo.slack.description': 'Get instant answers and summaries directly in your Slack channels without disrupting the conversation flow.',
    'demo.teams.title': 'Microsoft Teams',
    'demo.teams.description': 'Automatically transcribe and summarize Teams meetings, extracting key decisions and action items.',
    'demo.whatsapp.title': 'WhatsApp Business',
    'demo.whatsapp.description': 'Bring AI assistance to your WhatsApp Business conversations for quick responses and context.',
    'demo.zoom.title': 'Zoom Meetings',
    'demo.zoom.description': 'Live meeting assistance with real-time transcription, note-taking, and intelligent insights.',

    // Statistics Section
    'stats.title': 'Trusted by Teams Worldwide',
    'stats.activeTeams': 'Active Teams',
    'stats.messagesProcessed': 'Messages Processed',
    'stats.userSatisfaction': 'User Satisfaction',
    'stats.timeSaved': 'Time Saved',

    // Pricing Section
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that fits your team\'s needs',
    'pricing.starter': 'Starter',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Enterprise',
    'pricing.popular': 'MOST POPULAR',
    'pricing.getStarted': 'Get Started',
    'pricing.startTrial': 'Start Free Trial',
    'pricing.contactSales': 'Contact Sales',

    // Testimonials Section
    'testimonials.title': 'What Teams Are Saying',
    'testimonials.trusted': 'Trusted by innovative companies worldwide',
    'testimonials.sarah.content': 'Nerai has completely transformed how our remote team collaborates. We never miss important details from meetings anymore.',
    'testimonials.sarah.role': 'VP of Product, TechCorp',
    'testimonials.maria.content': 'The stealth mode feature is a game-changer. I can get AI help during client calls without anyone knowing.',
    'testimonials.maria.role': 'Sales Director, StartupXYZ',
    'testimonials.david.content': 'Our productivity increased by 40% after implementing Nerai. It\'s like having a super-smart assistant in every conversation.',
    'testimonials.david.role': 'CTO, InnovateNow',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How does Nerai integrate with existing platforms?',
    'faq.a1': 'Nerai connects seamlessly through official APIs and webhooks. Setup takes just a few minutes with our guided installation process.',
    'faq.q2': 'Is my data secure with Nerai?',
    'faq.a2': 'Yes, we use bank-level encryption and never store your conversation data. Everything is processed in real-time and discarded immediately after.',
    'faq.q3': 'Can I use Nerai without others knowing?',
    'faq.a3': 'Absolutely! Stealth Mode allows you to get AI assistance privately without any visible indication to other participants.',
    'faq.q4': 'What languages does Nerai support?',
    'faq.a4': 'Nerai currently supports English, Spanish, French, German, Portuguese, and Italian, with more languages being added regularly.',
    'faq.q5': 'How accurate are the meeting summaries?',
    'faq.a5': 'Our AI achieves 95%+ accuracy in meeting transcription and summary generation, continuously improving through machine learning.',

    // Footer
    'footer.description': 'AI that lives inside your conversations, making every interaction smarter and more productive.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.copyright': '2024 Nerai AI. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Final CTA
    'cta.title': 'Ready to Transform Your Conversations?',
    'cta.subtitle': 'Join thousands of teams already using Nerai to work smarter, faster, and more efficiently.',
    'cta.startTrial': 'Start Free Trial',
    'cta.requestDemo': 'Request Demo',
    'cta.notice': 'No credit card required • 14-day free trial • Cancel anytime',

    // Contact Form
    'contact.title': 'Get in Touch',
    'contact.interested': 'I\'m interested in',
    'contact.demo': 'Requesting a demo',
    'contact.sales': 'Speaking with sales',
    'contact.support': 'Getting support',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company (Optional)',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.companyPlaceholder': 'Your company name',
    'contact.messagePlaceholder': 'Tell us about your needs...',
    'contact.sending': 'Sending...',
    'contact.send': 'Send Message',
    'contact.thankYou': 'Thank You!',
    'contact.received': 'We\'ve received your message and will get back to you soon.',

    // Language Selector
    'language.english': 'English',
    'language.french': 'Français',
  },
  fr: {
    // Navigation
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.about': 'À propos',
    'nav.tryNow': 'Essayer Nerai',
    'nav.backHome': 'Retour à l\'accueil',

    // Hero Section
    'hero.title1': 'IA qui vit dans',
    'hero.title2': 'vos conversations',
    'hero.subtitle': 'Nerai répond aux questions, résume les réunions et donne une mémoire à votre équipe — dans tous vos chats et appels',
    'hero.tryNow': 'Essayer Nerai',
    'hero.watchDemo': 'Voir la démo',
    'hero.dashboardTitle': 'Tableau de bord Nerai AI',
    'hero.dashboardSubtitle': 'Intelligence conversationnelle en temps réel',
    'hero.liveProcessing': 'Traitement en direct',
    'hero.platformsActive': 'plateformes actives',
    'hero.liveConversations': 'Conversations en direct',
    'hero.aiPerformance': 'Performance IA',
    'hero.platformStatus': 'État des plateformes',
    'hero.questionsAnswered': 'Questions répondues',
    'hero.meetingsProcessed': 'Réunions traitées',
    'hero.accuracyRate': 'Taux de précision',
    'hero.avgResponse': 'Réponse moy.',
    'hero.active': 'Actif',
    'hero.stealthMode': 'Mode furtif actif',
    'hero.privateToYou': 'Privé pour vous',
    'hero.actionItemsExtracted': 'Actions extraites',
    'hero.tasksAssigned': 'tâches assignées, 2 échéances fixées',

    // Teams and platforms
    'team.marketing': 'Équipe marketing',
    'team.product': 'Standup produit',
    'team.support': 'Support client',
    'platform.slack': 'Slack',
    'platform.teams': 'Teams',
    'platform.whatsapp': 'WhatsApp',
    'platform.zoom': 'Zoom',

    // Features Section
    'features.title': 'Fonctionnalités puissantes',
    'features.subtitle': 'Tout ce dont vous avez besoin pour booster la productivité de votre équipe avec des conversations alimentées par l\'IA',
    'features.realtime.title': 'Réponses IA en temps réel',
    'features.realtime.description': 'Obtenez des réponses IA instantanées et contextuelles à toute question sans perturber votre flux de conversation.',
    'features.realtime.highlight1': 'Réponses instantanées',
    'features.realtime.highlight2': 'Contextuel',
    'features.realtime.highlight3': 'Sans changer d\'app',
    'features.transcription.title': 'Transcription intelligente',
    'features.transcription.description': 'Transcrivez et résumez automatiquement vos appels vidéo avec les décisions clés et points d\'action.',
    'features.transcription.highlight1': 'Transcription auto',
    'features.transcription.highlight2': 'Décisions clés',
    'features.transcription.highlight3': 'Points d\'action',
    'features.memory.title': 'Mémoire de session',
    'features.memory.description': 'Maintient le contexte dans les conversations individuelles, assurant des réponses IA pertinentes tout au long de chaque session.',
    'features.memory.highlight1': 'Contexte de session',
    'features.memory.highlight2': 'Réponses informées',
    'features.memory.highlight3': 'Continuité de conversation',
    'features.platform.title': 'Intégration multi-plateforme',
    'features.platform.description': 'Fonctionne parfaitement sur Slack, Microsoft Teams, WhatsApp et Zoom avec une intégration native.',
    'features.platform.highlight1': '4 plateformes',
    'features.platform.highlight2': 'Intégration native',
    'features.platform.highlight3': 'UX cohérente',
    'features.stealth.title': 'Mode furtif individuel',
    'features.stealth.description': 'Activez Nerai en privé pendant les réunions pour une assistance IA personnelle, complètement invisible aux autres participants.',
    'features.stealth.highlight1': 'Activation privée',
    'features.stealth.highlight2': 'Prompts IA personnels',
    'features.stealth.highlight3': 'Invisible aux autres',
    'features.summaries.title': 'Résumé intelligent',
    'features.summaries.description': 'Générez des résumés complets mais concis de longues conversations, en extrayant les points clés.',
    'features.summaries.highlight1': 'Extraction intelligente',
    'features.summaries.highlight2': 'Points clés',
    'features.summaries.highlight3': 'Préservation contexte',
    'features.actions.title': 'Suivi automatique des actions',
    'features.actions.description': 'Identifiez, extrayez et organisez automatiquement les éléments d\'action des réunions avec assignés et échéances.',
    'features.actions.highlight1': 'Identification auto',
    'features.actions.highlight2': 'Suivi assignés',
    'features.actions.highlight3': 'Niveaux priorité',
    'features.security.title': 'Sécurité de niveau entreprise',
    'features.security.description': 'Chiffrement militaire, conformité SOC 2 et politiques de non-rétention garantissent la confidentialité.',
    'features.security.highlight1': 'Chiffrement militaire',
    'features.security.highlight2': 'Conforme SOC 2',
    'features.security.highlight3': 'Zéro rétention',

    // Product Demo Section
    'demo.title': 'Voir Nerai en action',
    'demo.subtitle': 'Découvrez comment Nerai s\'intègre parfaitement dans votre workflow existant',
    'demo.slack.title': 'Intégration Slack',
    'demo.slack.description': 'Obtenez des réponses et résumés instantanés directement dans vos canaux Slack sans perturber le flux.',
    'demo.teams.title': 'Microsoft Teams',
    'demo.teams.description': 'Transcrivez et résumez automatiquement les réunions Teams, en extrayant les décisions clés.',
    'demo.whatsapp.title': 'WhatsApp Business',
    'demo.whatsapp.description': 'Apportez l\'assistance IA à vos conversations WhatsApp Business pour des réponses rapides.',
    'demo.zoom.title': 'Réunions Zoom',
    'demo.zoom.description': 'Assistance de réunion en direct avec transcription temps réel et insights intelligents.',

    // Statistics Section
    'stats.title': 'Adopté par des équipes du monde entier',
    'stats.activeTeams': 'Équipes actives',
    'stats.messagesProcessed': 'Messages traités',
    'stats.userSatisfaction': 'Satisfaction utilisateur',
    'stats.timeSaved': 'Temps économisé',

    // Pricing Section
    'pricing.title': 'Tarification simple et transparente',
    'pricing.subtitle': 'Choisissez le plan qui correspond aux besoins de votre équipe',
    'pricing.starter': 'Débutant',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Entreprise',
    'pricing.popular': 'LE PLUS POPULAIRE',
    'pricing.getStarted': 'Commencer',
    'pricing.startTrial': 'Essai gratuit',
    'pricing.contactSales': 'Contacter les ventes',

    // Testimonials Section
    'testimonials.title': 'Ce que disent les équipes',
    'testimonials.trusted': 'Adopté par des entreprises innovantes du monde entier',
    'testimonials.sarah.content': 'Nerai a complètement transformé la collaboration de notre équipe distante. Nous ne manquons plus jamais les détails importants des réunions.',
    'testimonials.sarah.role': 'VP Produit, TechCorp',
    'testimonials.maria.content': 'La fonction mode furtif change la donne. Je peux obtenir de l\'aide IA pendant les appels clients sans que personne ne le sache.',
    'testimonials.maria.role': 'Directrice des ventes, StartupXYZ',
    'testimonials.david.content': 'Notre productivité a augmenté de 40% après avoir implémenté Nerai. C\'est comme avoir un assistant super intelligent dans chaque conversation.',
    'testimonials.david.role': 'CTO, InnovateNow',

    // FAQ Section
    'faq.title': 'Questions fréquemment posées',
    'faq.q1': 'Comment Nerai s\'intègre-t-il aux plateformes existantes ?',
    'faq.a1': 'Nerai se connecte facilement via les APIs officielles et webhooks. L\'installation ne prend que quelques minutes avec notre processus guidé.',
    'faq.q2': 'Mes données sont-elles sécurisées avec Nerai ?',
    'faq.a2': 'Oui, nous utilisons un chiffrement de niveau bancaire et ne stockons jamais vos données de conversation. Tout est traité en temps réel puis supprimé.',
    'faq.q3': 'Puis-je utiliser Nerai sans que les autres le sachent ?',
    'faq.a3': 'Absolument ! Le mode furtif vous permet d\'obtenir une assistance IA en privé sans aucune indication visible pour les autres participants.',
    'faq.q4': 'Quelles langues Nerai supporte-t-il ?',
    'faq.a4': 'Nerai supporte actuellement l\'anglais, l\'espagnol, le français, l\'allemand, le portugais et l\'italien, avec d\'autres langues ajoutées régulièrement.',
    'faq.q5': 'Quelle est la précision des résumés de réunion ?',
    'faq.a5': 'Notre IA atteint 95%+ de précision dans la transcription et génération de résumés de réunions, s\'améliorant continuellement grâce à l\'apprentissage automatique.',

    // Footer
    'footer.description': 'IA qui vit dans vos conversations, rendant chaque interaction plus intelligente et productive.',
    'footer.product': 'Produit',
    'footer.company': 'Entreprise',
    'footer.support': 'Support',
    'footer.copyright': '2024 Nerai AI. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',

    // Final CTA
    'cta.title': 'Prêt à transformer vos conversations ?',
    'cta.subtitle': 'Rejoignez des milliers d\'équipes qui utilisent déjà Nerai pour travailler plus intelligemment et efficacement.',
    'cta.startTrial': 'Essai gratuit',
    'cta.requestDemo': 'Demander une démo',
    'cta.notice': 'Aucune carte de crédit requise • Essai gratuit de 14 jours • Annulation à tout moment',

    // Contact Form
    'contact.title': 'Entrer en contact',
    'contact.interested': 'Je suis intéressé par',
    'contact.demo': 'Demander une démo',
    'contact.sales': 'Parler aux ventes',
    'contact.support': 'Obtenir du support',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.company': 'Entreprise (Optionnel)',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Votre nom complet',
    'contact.emailPlaceholder': 'votre@email.com',
    'contact.companyPlaceholder': 'Nom de votre entreprise',
    'contact.messagePlaceholder': 'Parlez-nous de vos besoins...',
    'contact.sending': 'Envoi...',
    'contact.send': 'Envoyer le message',
    'contact.thankYou': 'Merci !',
    'contact.received': 'Nous avons reçu votre message et vous répondrons bientôt.',

    // Language Selector
    'language.english': 'English',
    'language.french': 'Français',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('nerai-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('nerai-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}