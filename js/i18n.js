/**
 * Internationalization (i18n) module for reserva.lo
 * Handles language toggle and translations
 */

const translations = {
  es: {
    // Navigation
    'nav.features': 'Funciones',
    'nav.howItWorks': 'Cómo funciona',
    'nav.pricing': 'Precios',
    'nav.cta': 'Empezar gratis',

    // Hero
    'hero.label': 'Reservas para pequeños negocios',
    'hero.title': 'Reservas simples.',
    'hero.titleAccent': 'Clientes felices.',
    'hero.subtitle': 'El sistema de reservas que tu negocio necesita. Sencillo para ti, conveniente para tus clientes. Sin complicaciones.',
    'hero.cta.primary': 'Empezar gratis',
    'hero.cta.secondary': 'Ver cómo funciona',
    'hero.quote': 'Desde que usamos reserva.lo, las llamadas para reservar bajaron un 80%. Mis clientes reservan cuando quieren.',
    'hero.author': 'María González',
    'hero.authorRole': 'Salón de belleza Luna',

    // Features
    'features.label': 'Funciones',
    'features.title': 'Todo lo que necesitas para gestionar reservas',
    'features.subtitle': 'Herramientas diseñadas para pequeños negocios que quieren crecer sin complicarse.',

    'features.booking.title': 'Reservas 24/7',
    'features.booking.text': 'Tus clientes pueden reservar en cualquier momento, desde cualquier dispositivo. Sin llamadas, sin esperas.',

    'features.reminders.title': 'Recordatorios automáticos',
    'features.reminders.text': 'Reduce las ausencias hasta un 60% con recordatorios por SMS y email. Tus clientes nunca olvidarán su cita.',

    'features.brand.title': 'Tu marca',
    'features.brand.text': 'Personaliza colores, logo y dominio. Tu página de reservas se ve como una extensión natural de tu negocio.',

    // How it works
    'howItWorks.label': 'Cómo funciona',
    'howItWorks.title': 'Empieza a recibir reservas en 5 minutos',
    'howItWorks.subtitle': 'Configurar tu sistema de reservas es más fácil de lo que imaginas.',

    'howItWorks.step1.title': 'Configura',
    'howItWorks.step1.text': 'Define tus servicios, horarios y disponibilidad. Personaliza tu página.',

    'howItWorks.step2.title': 'Comparte',
    'howItWorks.step2.text': 'Comparte tu link de reservas en redes, WhatsApp o tu web. Donde tú quieras.',

    'howItWorks.step3.title': 'Gestiona',
    'howItWorks.step3.text': 'Recibe reservas instantáneamente. Gestiona todo desde un panel simple.',

    // Pricing
    'pricing.label': 'Precios',
    'pricing.title': 'Planes simples, sin sorpresas',
    'pricing.subtitle': 'Elige el plan que mejor se adapte a tu negocio. Cancela cuando quieras.',

    'pricing.essential.name': 'Esencial',
    'pricing.essential.price': '19',
    'pricing.essential.period': '/mes',
    'pricing.essential.description': 'Todo lo básico para empezar a recibir reservas online.',
    'pricing.essential.feature1': 'Reservas ilimitadas',
    'pricing.essential.feature2': 'Página de reservas personalizada',
    'pricing.essential.feature3': 'Recordatorios por email',
    'pricing.essential.feature4': 'Soporte por email',
    'pricing.essential.cta': 'Empezar gratis',

    'pricing.pro.name': 'Profesional',
    'pricing.pro.price': '39',
    'pricing.pro.period': '/mes',
    'pricing.pro.description': 'Para negocios que quieren la experiencia completa.',
    'pricing.pro.feature1': 'Todo de Esencial',
    'pricing.pro.feature2': 'Recordatorios por SMS',
    'pricing.pro.feature3': 'Múltiples empleados',
    'pricing.pro.feature4': 'Integración con Google Calendar',
    'pricing.pro.feature5': 'Dominio personalizado',
    'pricing.pro.feature6': 'Soporte prioritario',
    'pricing.pro.cta': 'Empezar gratis',
    'pricing.pro.badge': 'Recomendado',

    'pricing.note': '14 días gratis. Sin tarjeta de crédito.',

    // CTA Section
    'cta.title': 'Empieza a recibir reservas hoy',
    'cta.subtitle': 'Únete a cientos de negocios que ya simplifican sus reservas con reserva.lo',
    'cta.button': 'Crear mi cuenta gratis',

    // Footer
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.contact': 'Contacto',
    'footer.copy': '© 2025 reserva.lo. Todos los derechos reservados.'
  },

  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.howItWorks': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.cta': 'Start free',

    // Hero
    'hero.label': 'Booking for small businesses',
    'hero.title': 'Simple bookings.',
    'hero.titleAccent': 'Happy customers.',
    'hero.subtitle': 'The booking system your business needs. Simple for you, convenient for your customers. No complications.',
    'hero.cta.primary': 'Start free',
    'hero.cta.secondary': 'See how it works',
    'hero.quote': 'Since we started using reserva.lo, booking calls dropped 80%. My clients book whenever they want.',
    'hero.author': 'María González',
    'hero.authorRole': 'Luna Beauty Salon',

    // Features
    'features.label': 'Features',
    'features.title': 'Everything you need to manage bookings',
    'features.subtitle': 'Tools designed for small businesses that want to grow without complications.',

    'features.booking.title': '24/7 Bookings',
    'features.booking.text': 'Your customers can book anytime, from any device. No calls, no waiting.',

    'features.reminders.title': 'Automatic reminders',
    'features.reminders.text': 'Reduce no-shows by up to 60% with SMS and email reminders. Your customers will never forget their appointment.',

    'features.brand.title': 'Your brand',
    'features.brand.text': 'Customize colors, logo and domain. Your booking page looks like a natural extension of your business.',

    // How it works
    'howItWorks.label': 'How it works',
    'howItWorks.title': 'Start receiving bookings in 5 minutes',
    'howItWorks.subtitle': 'Setting up your booking system is easier than you think.',

    'howItWorks.step1.title': 'Configure',
    'howItWorks.step1.text': 'Define your services, schedules and availability. Customize your page.',

    'howItWorks.step2.title': 'Share',
    'howItWorks.step2.text': 'Share your booking link on social media, WhatsApp or your website. Anywhere you want.',

    'howItWorks.step3.title': 'Manage',
    'howItWorks.step3.text': 'Receive bookings instantly. Manage everything from a simple dashboard.',

    // Pricing
    'pricing.label': 'Pricing',
    'pricing.title': 'Simple plans, no surprises',
    'pricing.subtitle': 'Choose the plan that best fits your business. Cancel anytime.',

    'pricing.essential.name': 'Essential',
    'pricing.essential.price': '19',
    'pricing.essential.period': '/month',
    'pricing.essential.description': 'Everything basic to start receiving online bookings.',
    'pricing.essential.feature1': 'Unlimited bookings',
    'pricing.essential.feature2': 'Custom booking page',
    'pricing.essential.feature3': 'Email reminders',
    'pricing.essential.feature4': 'Email support',
    'pricing.essential.cta': 'Start free',

    'pricing.pro.name': 'Professional',
    'pricing.pro.price': '39',
    'pricing.pro.period': '/month',
    'pricing.pro.description': 'For businesses that want the complete experience.',
    'pricing.pro.feature1': 'Everything in Essential',
    'pricing.pro.feature2': 'SMS reminders',
    'pricing.pro.feature3': 'Multiple employees',
    'pricing.pro.feature4': 'Google Calendar integration',
    'pricing.pro.feature5': 'Custom domain',
    'pricing.pro.feature6': 'Priority support',
    'pricing.pro.cta': 'Start free',
    'pricing.pro.badge': 'Recommended',

    'pricing.note': '14-day free trial. No credit card required.',

    // CTA Section
    'cta.title': 'Start receiving bookings today',
    'cta.subtitle': 'Join hundreds of businesses already simplifying their bookings with reserva.lo',
    'cta.button': 'Create my free account',

    // Footer
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.copy': '© 2025 reserva.lo. All rights reserved.'
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
