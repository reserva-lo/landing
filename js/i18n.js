/**
 * Internationalization (i18n) module for reservit.co
 * Handles language toggle and translations
 */

const translations = {
  es: {
    // Navigation
    'nav.features': 'Funciones',
    'nav.howItWorks': 'Cómo funciona',
    'nav.pricing': 'Precios',
    'nav.cta': 'Empieza gratis',

    // Hero
    'hero.label': 'Reservas simples. Clientes felices.',
    'hero.title': 'Gestiona tus clientes',
    'hero.titleAccent': 'sin complicarte.',
    'hero.subtitle': 'Coge las reservas, responde a tus clientes y se acuerda de cada uno — por los canales que ya usas. Y cuando quieras cambiar algo, se lo dices y ya está.',
    'hero.cta.primary': 'Empieza gratis',
    'hero.cta.secondary': 'Ver cómo funciona',
    'hero.quote': 'Desde que usamos reservit.co, las llamadas para reservar bajaron un 80%. Mis clientes reservan cuando quieren.',
    'hero.author': 'María González',
    'hero.authorRole': 'Salón de belleza Luna',

    // Features
    'features.label': 'Funciones',
    'features.title': 'Todo lo que necesitas para llevar tu negocio, sin complicarte.',
    'features.subtitle': 'Herramientas diseñadas para pequeños negocios que quieren crecer sin complicarse.',

    'features.booking.title': 'Reservas a cualquier hora',
    'features.booking.text': 'Reserva desde el móvil, sin llamadas ni esperas.',

    'features.remembers.title': 'Se acuerda de tus clientes por ti',
    'features.remembers.text': 'Cuando alguien llama o escribe, ya sabes quién es, cuándo vino y qué pidió.',

    'features.together.title': 'Todo en la misma conversación',
    'features.together.text': 'El WhatsApp y el teléfono de tu negocio, en un solo sitio. Se acabó buscar en tres apps.',

    'features.noleak.title': 'No se te escapa nadie',
    'features.noleak.text': 'El que preguntó y no volvió, la reserva a medias: el sistema te avisa para recuperarlo.',

    'features.reminders.title': 'Recordatorios automáticos',
    'features.reminders.text': 'Avisos por WhatsApp o email; menos ausencias.',

    'features.mobile.title': 'Míralo todo desde el móvil',
    'features.mobile.text': 'Quién viene hoy, huecos libres, la agenda del día: de un vistazo, estés donde estés.',

    // How it works
    'howItWorks.label': 'Cómo funciona',
    'howItWorks.title': 'Empieza a recibir reservas en 5 minutos',
    'howItWorks.subtitle': 'Configurar tu sistema de reservas es más fácil de lo que imaginas.',

    'howItWorks.step1.title': 'Configura',
    'howItWorks.step1.text': 'Define tus servicios, horarios y disponibilidad. Personaliza tu página.',

    'howItWorks.step2.title': 'Comparte',
    'howItWorks.step2.text': 'Comparte tu link de reservas en redes, WhatsApp o tu web. Donde tú quieras.',

    'howItWorks.step3.title': 'Lleva el día a día sin esfuerzo',
    'howItWorks.step3.text': 'Recibe reservas al instante, mira quién viene, y cambia lo que quieras diciéndoselo o desde el panel de siempre.',

    // Pricing
    'pricing.label': 'Precios',
    'pricing.title': 'Plan de precios simple, sin sorpresas',

    'pricing.essential.name': 'Esencial',
    'pricing.essential.price': '19',
    'pricing.essential.period': '/mes',
    'pricing.essential.description': 'Todo lo básico para empezar a recibir reservas online.',
    'pricing.essential.feature1': 'Reservas ilimitadas',
    'pricing.essential.feature2': 'Página de reservas personalizada',
    'pricing.essential.feature3': 'Notificaciones por email',
    'pricing.essential.feature4': 'Soporte por email',
    'pricing.essential.cta': 'Empieza gratis',

    'pricing.pro.name': 'Profesional',
    'pricing.pro.price': '39',
    'pricing.pro.period': '/mes',
    'pricing.pro.description': 'Para negocios que quieren la experiencia completa.',
    'pricing.pro.feature1': 'Todo de Esencial',
    'pricing.pro.feature2': 'Notificaciones por SMS',
    'pricing.pro.feature3': 'Múltiples empleados',
    'pricing.pro.feature4': 'Integración con Google Calendar',
    'pricing.pro.feature5': 'Dominio personalizado',
    'pricing.pro.feature6': 'Soporte prioritario',
    'pricing.pro.feature7': 'Asistente inteligente por WhatsApp',
    'pricing.pro.cta': 'Empieza gratis',
    'pricing.pro.badge': 'Recomendado',

    'pricing.premium.name': 'Premium',
    'pricing.premium.price': '99',
    'pricing.premium.period': '/mes',
    'pricing.premium.description': 'Que nadie se quede sin respuesta, y tú lleva el negocio hablándole.',
    'pricing.premium.feature1': 'Todo lo de Profesional, con reservas por widget ilimitadas',
    'pricing.premium.feature2': 'El teléfono se coge solo: un agente contesta, reconoce al cliente y te deja todo anotado. Varios idiomas. (100 reservas por voz/mes incluidas.)',
    'pricing.premium.feature3': 'Gestiona hablándole: dile lo que quieres ("abre los sábados hasta las 2") y lo hace, confirmando antes de aplicar.',
    'pricing.premium.feature4': 'Respuesta automática por WhatsApp e Instagram',
    'pricing.premium.feature5': 'Recuperación automática de ausencias y seguimientos',
    'pricing.premium.feature6': 'Soporte prioritario',
    'pricing.premium.cta': 'Empieza gratis',

    'pricing.note': '15 días gratis. Sin tarjeta de crédito.',

    // CTA Section
    'cta.title': 'Empieza a recibir reservas hoy',
    'cta.subtitle': 'Únete a cientos de negocios que ya simplifican sus reservas con reservit.co',
    'cta.button': 'Crear mi cuenta gratis',

    // Footer
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.'
  },

  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.howItWorks': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.cta': 'Start free',

    // Hero
    'hero.label': 'Simple bookings. Happy customers.',
    'hero.title': 'Manage your customers',
    'hero.titleAccent': 'without the hassle.',
    'hero.subtitle': 'Takes bookings, answers your customers and remembers each one — through the channels you already use. And when you want to change something, you just say it.',
    'hero.cta.primary': 'Start free',
    'hero.cta.secondary': 'See how it works',
    'hero.quote': 'Since we started using reservit.co, booking calls dropped 80%. My clients book whenever they want.',
    'hero.author': 'María González',
    'hero.authorRole': 'Luna Beauty Salon',

    // Features
    'features.label': 'Features',
    'features.title': 'Everything you need to run your business, without the hassle.',
    'features.subtitle': 'Tools designed for small businesses that want to grow without complications.',

    'features.booking.title': 'Bookings any time',
    'features.booking.text': 'Book from the phone, no calls, no waiting.',

    'features.remembers.title': 'It remembers your customers for you',
    'features.remembers.text': 'When someone calls or writes, you already know who they are, when they came and what they ordered.',

    'features.together.title': 'Everything in one conversation',
    'features.together.text': "Your business's WhatsApp and phone in one place. No more digging through three apps.",

    'features.noleak.title': 'Nobody slips through',
    'features.noleak.text': 'The one who asked and never returned, the half-finished booking: the system nudges you to win them back.',

    'features.reminders.title': 'Automatic reminders',
    'features.reminders.text': 'Alerts by WhatsApp or email; fewer no-shows.',

    'features.mobile.title': 'See it all from your phone',
    'features.mobile.text': "Who's coming today, free slots, the day's schedule: at a glance, wherever you are.",

    // How it works
    'howItWorks.label': 'How it works',
    'howItWorks.title': 'Start receiving bookings in 5 minutes',
    'howItWorks.subtitle': 'Setting up your booking system is easier than you think.',

    'howItWorks.step1.title': 'Configure',
    'howItWorks.step1.text': 'Define your services, schedules and availability. Customize your page.',

    'howItWorks.step2.title': 'Share',
    'howItWorks.step2.text': 'Share your booking link on social media, WhatsApp or your website. Anywhere you want.',

    'howItWorks.step3.title': 'Run the day-to-day effortlessly',
    'howItWorks.step3.text': "Get bookings instantly, see who's coming, and change whatever you want by telling it — or from the usual dashboard.",

    // Pricing
    'pricing.label': 'Pricing',
    'pricing.title': 'Simple pricing, no surprises',

    'pricing.essential.name': 'Essential',
    'pricing.essential.price': '19',
    'pricing.essential.period': '/month',
    'pricing.essential.description': 'Everything basic to start receiving online bookings.',
    'pricing.essential.feature1': 'Unlimited bookings',
    'pricing.essential.feature2': 'Custom booking page',
    'pricing.essential.feature3': 'Email notifications',
    'pricing.essential.feature4': 'Email support',
    'pricing.essential.cta': 'Start free',

    'pricing.pro.name': 'Professional',
    'pricing.pro.price': '39',
    'pricing.pro.period': '/month',
    'pricing.pro.description': 'For businesses that want the complete experience.',
    'pricing.pro.feature1': 'Everything in Essential',
    'pricing.pro.feature2': 'SMS notifications',
    'pricing.pro.feature3': 'Multiple employees',
    'pricing.pro.feature4': 'Google Calendar integration',
    'pricing.pro.feature5': 'Custom domain',
    'pricing.pro.feature6': 'Priority support',
    'pricing.pro.feature7': 'Intelligent WhatsApp assistant',
    'pricing.pro.cta': 'Start free',
    'pricing.pro.badge': 'Recommended',

    'pricing.premium.name': 'Premium',
    'pricing.premium.price': '99',
    'pricing.premium.period': '/mo',
    'pricing.premium.description': "So no one's left unanswered — and you run the business by talking to it.",
    'pricing.premium.feature1': 'Everything in Professional, with unlimited widget bookings',
    'pricing.premium.feature2': 'The phone answers itself: an agent picks up, recognises the customer and logs everything. Multiple languages. (100 voice bookings/mo included.)',
    'pricing.premium.feature3': 'Manage it by talking to it: say what you want ("open Saturdays until 2") and it does it, confirming before applying.',
    'pricing.premium.feature4': 'Automatic replies on WhatsApp and Instagram',
    'pricing.premium.feature5': 'Automatic no-show recovery and follow-ups',
    'pricing.premium.feature6': 'Priority support',
    'pricing.premium.cta': 'Start free',

    'pricing.note': '15-day free trial. No credit card required.',

    // CTA Section
    'cta.title': 'Start receiving bookings today',
    'cta.subtitle': 'Join hundreds of businesses already simplifying their bookings with reservit.co',
    'cta.button': 'Create my free account',

    // Footer
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.'
  }
};

/**
 * Get user's preferred language
 * Priority: URL param > localStorage > browser language > default (es)
 */
function getPreferredLanguage() {
  // Check URL param
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && ['es', 'en'].includes(urlLang)) {
    return urlLang;
  }

  // Check localStorage
  const storedLang = localStorage.getItem('reservalo-lang');
  if (storedLang && ['es', 'en'].includes(storedLang)) {
    return storedLang;
  }

  // Check browser language
  const browserLang = navigator.language.slice(0, 2);
  if (['es', 'en'].includes(browserLang)) {
    return browserLang;
  }

  // Default to Spanish
  return 'es';
}

/**
 * Set the current language
 */
function setLanguage(lang) {
  if (!['es', 'en'].includes(lang)) {
    console.warn(`Invalid language: ${lang}`);
    return;
  }

  // Store preference
  localStorage.setItem('reservalo-lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all translatable elements
  updateTranslations(lang);

  // Update language toggle buttons
  updateLanguageToggle(lang);
}

/**
 * Update all elements with data-i18n attribute
 */
function updateTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[lang]?.[key];

    if (translation) {
      // Check if element has an aria-label to update
      if (element.hasAttribute('data-i18n-aria')) {
        const ariaKey = element.getAttribute('data-i18n-aria');
        const ariaTranslation = translations[lang]?.[ariaKey];
        if (ariaTranslation) {
          element.setAttribute('aria-label', ariaTranslation);
        }
      }

      // Update text content
      element.textContent = translation;
    }
  });
}

/**
 * Update language toggle button states
 */
function updateLanguageToggle(lang) {
  const buttons = document.querySelectorAll('.lang-toggle__btn');

  buttons.forEach(button => {
    const buttonLang = button.getAttribute('data-lang');

    if (buttonLang === lang) {
      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.classList.remove('is-active');
      button.setAttribute('aria-pressed', 'false');
    }
  });
}

/**
 * Initialize language toggle functionality
 */
function initLanguageToggle() {
  const buttons = document.querySelectorAll('.lang-toggle__btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

/**
 * Initialize i18n system
 */
function initI18n() {
  const preferredLang = getPreferredLanguage();
  setLanguage(preferredLang);
  initLanguageToggle();
}

// Export for use in other modules
window.i18n = {
  init: initI18n,
  setLanguage,
  getPreferredLanguage,
  translations
};
