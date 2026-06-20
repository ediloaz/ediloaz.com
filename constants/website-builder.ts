/** Configuración del cotizador modular "Arma tu Sitio Web a tu Medida" */

export const WA_PHONE = "50686523185";

export const BUILDER_META = {
  title: "Arma tu Sitio Web a tu Medida",
  subtitle:
    "Paga solo por lo que necesitas. Sin mensualidades. Escoge tus características y recibe tu presupuesto al instante por WhatsApp.",
  heroPriceSuffix: "sin mensualidades",
  contactName: "Ediloaz",
} as const;

export const BUILDER_PRICES = {
  essentialPackage: 47_900,
  /** Con renovación de dominio .com (si compró dominio propio) */
  maintenanceAnnualWithDomain: 40_000,
  /** Solo hosting + SSL (sin dominio propio comprado) */
  maintenanceAnnualBase: 30_000,
  multimediaLimitMb: 500,
  deliveryWeeks: 1,
  revisionRounds: 2,
} as const;

/** Sufijo del subdominio gratuito, ej: minegocio.ediloaz.com */
export const SUBDOMAIN_BASE = "ediloaz.com";

export const SITE_BASE = {
  stepTitle: "Una sola página — tu landing a medida",
  title: "La base de tu sitio",
  summaryLabel: "Base del sitio (1 página)",
  description:
    "Incluido siempre en tu cotización. Si eliges solo esto, tu web es una landing page personalizada: todo lo esencial en un solo scroll.",
  onePageCallout: {
    title: "1 sola página · tipo landing page",
    detail: "Inicio, productos o servicios, galería y contacto en un scroll. ¿Quieres páginas separadas? Las agregás en los siguientes pasos.",
  },
  priceLabel: "Incluido siempre",
  subdomainNote:
    "La base se entrega bajo un subdominio gratuito (ejemplo: tuempresa.ediloaz.com).",
  chips: [
    {
      label: "Una página completa",
      detail: "Inicio, resumen de servicios, galería básica (4-6 fotos), contacto y mapa simple — todo en un solo scroll.",
    },
    {
      label: "WhatsApp flotante",
      detail: "Tus clientes te contactan con un solo clic.",
    },
    {
      label: "Diseño responsive",
      detail: "Tu web se ve impecable en celular, tablet y computadora.",
    },
    {
      label: "Panel de administración",
      detail: "Editá textos y fotos vos mismo, sin depender de nadie.",
    },
    {
      label: "Hosting + SSL 1 año",
      detail: "Alojamiento y certificado de seguridad incluidos el primer año.",
    },
    {
      label: "Te encuentran en internet",
      detail: "Tu web preparada desde el día uno para que quien busca online llegue a tu negocio, no a la competencia.",
    },
    {
      label: "Redes sociales",
      detail: "Enlaces a Facebook, Instagram y tus perfiles.",
    },
  ],
} as const;

export type DomainOptionId = "subdomain" | "new-domain" | "existing-domain";

export interface DomainOption {
  id: DomainOptionId;
  label: string;
  description: string;
  price: number;
  example?: string;
}

export const DOMAIN_OPTIONS: DomainOption[] = [
  {
    id: "subdomain",
    label: "Mantener Subdominio Gratuito",
    description: "Mi web será minegocio.ediloaz.com",
    price: 0,
    example: "minegocio.ediloaz.com",
  },
  {
    id: "new-domain",
    label: "Quiero comprar un Dominio Propio Nuevo",
    description: "Quiero mi propia dirección .com (ejemplo: minegocio.com)",
    price: 10_000,
  },
  {
    id: "existing-domain",
    label: "Ya tengo mi propio Dominio",
    description: "Quiero usar un dominio que ya compré en otro proveedor",
    price: 5_000,
  },
];

export interface ExtraPageOption {
  id: string;
  defaultName: string;
  title: string;
  description: string;
  price: number;
  /** Texto del badge cuando price es 0 (ej. regalía) */
  freeLabel?: string;
  warning?: string;
}

export const BRIDGE_SITE_BASE = {
  title: "¿Solo la landing page te alcanza?",
  body: "Podés quedarte con una sola página, o seguir bajando para agregar más páginas y funciones extra.",
  waCta: "Cotizar por WhatsApp",
} as const;

export const HERO_BADGES = [
  "Sin mensualidades",
  "Panel de administración",
  "WhatsApp integrado",
  "Te encuentran en internet",
  "100% responsivo",
] as const;

export const HERO_CTAS = {
  whatsapp: "Quiero mi web por WhatsApp",
  configurator: "Ver opciones y precios",
} as const;

export const WA_CTAS = {
  step1: "Cotizar la base por WhatsApp",
  summary: "Pedir mi web por WhatsApp",
  sticky: "Escribir por WhatsApp",
  showcase: "Quiero una web como estas",
} as const;

export const WA_TRUST = {
  hero: "Te respondemos en minutos · Sin compromiso",
  underCta: "Sin compromiso · Respuesta rápida",
} as const;

export const WA_MESSAGES = {
  quick: `Hola ${BUILDER_META.contactName}, vi tu anuncio y quiero cotizar mi sitio web (desde ₡${BUILDER_PRICES.essentialPackage.toLocaleString("es-CR")}). ¿Cuál es el siguiente paso?`,
  baseOnly: `Hola ${BUILDER_META.contactName}, me interesa la base del sitio (₡${BUILDER_PRICES.essentialPackage.toLocaleString("es-CR")}). ¿Cuál es el siguiente paso?`,
  showcase: `Hola ${BUILDER_META.contactName}, vi tu portafolio y quiero una web profesional. ¿Cuál es el siguiente paso?`,
} as const;

export function buildWaLink(message: string): string {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

export const MODULE_INCLUDES = {
  title: "Incluido en cada página",
  items: [
    {
      icon: "✏️",
      label: "Nombre personalizado",
      example: "Productos → Habitaciones",
      detail: "Adaptas el nombre de cada página al iniciar.",
    },
    {
      icon: "⚙️",
      label: "Panel de administración",
      example: "Editás vos mismo",
      detail: "Actualizá textos, fotos y contenido sin soporte externo.",
    },
  ],
} as const;

export const EXTRA_PAGES_SECTION = {
  title: "Agregá páginas a tu sitio",
  description: "Más espacio para contar tu historia.",
} as const;

export const ADVANCED_FEATURES_SECTION = {
  title: "Potenciá tu sitio",
  description: "Herramientas técnicas con integraciones listas para usar.",
} as const;

export const SUMMARY_LABELS = {
  pages: "Páginas a tu medida",
  features: "Funcionalidades premium",
} as const;

/** Capturas en public/armar-mi-web/showcase/ — 16:9, recomendado 1280×720 px o 1600×900 px (.png o .webp) */
export const SHOWCASE_SECTION = {
  title: "Sitios reales que ya entregamos",
  description:
    "Negocios locales con web profesional de Ediloaz. El tuyo puede verse incluso mejor.",
} as const;

export interface ShowcaseSite {
  id: string;
  name: string;
  niche: string;
  highlight: string;
  url: string;
  image: string;
}

export const SHOWCASE_SITES: ShowcaseSite[] = [
  {
    id: "alma-libre",
    name: "Alma Libre Studio",
    niche: "Yoga & bienestar · San José",
    highlight: "Servicios, testimonios y reservas por WhatsApp",
    url: "https://alma-libre-studio.ediloaz.com/",
    image: "/armar-mi-web/showcase/alma-libre-studio.png",
  },
  {
    id: "calculadora-laboral",
    name: "Calculadora Laboral",
    niche: "Calculadora Laboral · CR",
    highlight: "Aplicación web a la medida, con 8 calculadoras laborales",
    url: "https://calculadora-laboral.ediloaz.com/",
    image: "/armar-mi-web/showcase/calculadora-laboral.jpg",
  },
  {
    id: "octane",
    name: "Octane Mecánica",
    niche: "Taller automotriz · Escazú",
    highlight: "Galería antes/después y cotización vía WhatsApp",
    url: "https://octane.ediloaz.com/",
    image: "/armar-mi-web/showcase/octane-mecanica.jpg",
  },
  
  {
    id: "presagio",
    name: "Presagio",
    niche: "Experiencias & picnic · Puriscal",
    highlight: "Experiencias, galería, y reservaciones",
    url: "https://presagio.ediloaz.com/",
    image: "/armar-mi-web/showcase/presagio.jpg",
  },
  {
    id: "jgconextions",
    name: "JG CONEXTIONS",
    niche: "Reparación & servicios IT · Heredia y Puriscal",
    highlight: "Servicios, trabajos realizados y contacto por WhatsApp",
    url: "https://www.jgconextions.com/",
    image: "/armar-mi-web/showcase/jgconextions.png",
  },
];

export const DOMAIN_STEP = {
  deferHint:
    "¿No tenés claro el dominio todavía? No te quedes acá pensándolo — podés definirlo después. Seguí configurando tu web.",
  subdomainInputLabel: "Nombre deseado (opcional)",
  subdomainInputHint: `Quedaría como tu-nombre.${SUBDOMAIN_BASE}`,
  newDomainInputLabel: "Dominio deseado (opcional)",
  newDomainInputHint: "Dominio .com incluido en el precio. Lo confirmamos al iniciar.",
  existingDomainInputLabel: "Tu dominio (opcional — podés indicarlo después)",
} as const;

export function getMaintenanceAnnualPrice(hasPurchasedDomain: boolean): number {
  return hasPurchasedDomain
    ? BUILDER_PRICES.maintenanceAnnualWithDomain
    : BUILDER_PRICES.maintenanceAnnualBase;
}

export function getMaintenanceAnnualText(hasPurchasedDomain: boolean): string {
  const price = getMaintenanceAnnualPrice(hasPurchasedDomain);
  if (hasPurchasedDomain) {
    return `Después del primer año, pagás una anualidad fija de ${formatCRC(price)} que cubre hosting, SSL y renovación de dominio .com. ¡Sin sorpresas mensuales!`;
  }
  return `Después del primer año, pagás una anualidad fija de ${formatCRC(price)} que cubre hosting y SSL. ¡Sin sorpresas mensuales!`;
}

export function getMaintenanceAnnualSummary(hasPurchasedDomain: boolean): string {
  const price = getMaintenanceAnnualPrice(hasPurchasedDomain);
  if (hasPurchasedDomain) {
    return `Anualidad fija de ${formatCRC(price)}/año (hosting, SSL y dominio .com). Sin mensualidades.`;
  }
  return `Anualidad fija de ${formatCRC(price)}/año (hosting y SSL). Sin mensualidades.`;
}

export function getMaintenanceAnnualTooltip(hasPurchasedDomain: boolean): string {
  return `${getMaintenanceAnnualText(hasPurchasedDomain)} Precios indicados no incluyen IVA.`;
}

export const EXTRA_PAGES: ExtraPageOption[] = [
  {
    id: "products",
    defaultName: "Productos",
    title: "Catálogo de productos",
    description: "Listado con fotos, descripciones, precios y WhatsApp en cada ítem.",
    price: 10_000,
    warning: "Sin pasarela de pago ni carrito (no es e-commerce).",
  },
  {
    id: "services",
    defaultName: "Servicios",
    title: "Servicios",
    description: "Cada servicio con detalle, fotos y botón de WhatsApp.",
    price: 10_000,
  },
  {
    id: "portfolio",
    defaultName: "Portafolio",
    title: "Portafolio / proyectos",
    description: "Tus mejores trabajos con galerías y descripciones.",
    price: 10_000,
  },
  {
    id: "testimonials",
    defaultName: "Testimonios",
    title: "Testimonios",
    description: "Opiniones de clientes que generan confianza.",
    price: 10_000,
  },
  {
    id: "gallery",
    defaultName: "Galería",
    title: "Galería",
    description: "Fotos organizadas en álbumes o categorías.",
    price: 10_000,
  },
  {
    id: "faq",
    defaultName: "Preguntas Frecuentes",
    title: "Preguntas frecuentes",
    description: "Resolvé dudas comunes y ahorrá tiempo de soporte.",
    price: 5_000,
  },
  {
    id: "promotions",
    defaultName: "Promociones",
    title: "Promociones",
    description: "Ofertas y descuentos vigentes, bien presentados.",
    price: 5_000,
  },
  {
    id: "contact",
    defaultName: "Contacto",
    title: "Contacto",
    description: "Teléfono, redes sociales, correo y mapa con tu ubicación.",
    price: 5_000,
  },
  {
    id: "about",
    defaultName: "Sobre nosotros",
    title: "Sobre nosotros",
    description: "Historia, misión y visión con espacio dedicado.",
    price: 0,
    freeLabel: "Regalía",
    warning: "Regalía incluida: puedes escoger esta página sin costo adicional.",
  },
];

export interface AdvancedFeatureOption {
  id: string;
  title: string;
  description: string;
  price: number;
  warning?: string;
}

export const ADVANCED_FEATURES: AdvancedFeatureOption[] = [
  {
    id: "contact-pro",
    title: "Contacto Pro",
    description:
      "Incluye todo lo de Contacto, más formulario avanzado para captar clientes del tráfico de internet y protección anti-spam.",
    price: 10_000,
  },
  {
    id: "blog",
    title: "Blog",
    description: "Publicá artículos ilimitados y haz que más personas lleguen a tu web desde internet.",
    price: 15_000,
  },
  {
    id: "bookings",
    title: "Reservaciones (Cal.com)",
    description: "Tus clientes agendan citas solos según tu disponibilidad.",
    price: 25_000,
    warning: "Trabaja de la mano con Cal.com, con una cuenta activa en su plataforma.",
  },
];

export const HIDDEN_DETAILS = [
  "Las páginas adicionales (excepto la página de inicio) se pueden editar desde el panel de administración.",
  "Soporte y ediciones posteriores se cotizan por aparte según tus necesidades.",
  `Entrega final en ${BUILDER_PRICES.deliveryWeeks} semana (previa entrega de todo tu contenido), con ${BUILDER_PRICES.revisionRounds} rondas de revisiones incluidas.`,
  `Mantenimiento anual: anualidad fija de ₡${BUILDER_PRICES.maintenanceAnnualBase.toLocaleString("es-CR")}/año (hosting + SSL) o ₡${BUILDER_PRICES.maintenanceAnnualWithDomain.toLocaleString("es-CR")}/año si incluye renovación de dominio .com comprado con nosotros.`,
  `El sitio web puede alcanzar hasta un máximo de ${BUILDER_PRICES.multimediaLimitMb} MB en multimedia (fotos e imágenes).`,
  "Todos los precios indicados no incluyen IVA.",
] as const;

export function formatCRC(amount: number): string {
  return `₡${amount.toLocaleString("es-CR")}`;
}

export function formatCRCShort(amount: number): string {
  if (amount >= 1000 && amount % 1000 === 0) {
    return `CRC ${amount / 1000}k`;
  }
  return `CRC ${amount.toLocaleString("es-CR")}`;
}
