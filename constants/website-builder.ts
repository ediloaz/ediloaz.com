/** Configuración del cotizador modular "Arma tu Sitio Web a tu Medida" */

export const WA_PHONE = "50686523185";

export const BUILDER_META = {
  title: "Arma tu Sitio Web a tu Medida",
  subtitle:
    "Paga solo por lo que necesitas. Sin suscripciones mensuales obligatorias. Escoge tus características y recibe tu presupuesto al instante por WhatsApp.",
  contactName: "Ediloaz",
} as const;

export const BUILDER_PRICES = {
  essentialPackage: 50_000,
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

export const ESSENTIAL_PACKAGE = {
  title: "Paquete Esencial",
  description:
    "Tu base digital: diseño moderno, una sola página con todo lo esencial y lista para recibir clientes.",
  subdomainNote:
    "El paquete Esencial se entrega bajo un subdominio gratuito (ejemplo: tuempresa.ediloaz.com).",
  chips: [
    {
      label: "Diseño responsive",
      detail: "Tu web se ve impecable en celular, tablet y computadora.",
    },
    {
      label: "Una página completa",
      detail: "Inicio, resumen de servicios, galería básica (4-6 fotos), contacto y mapa simple — todo en un solo scroll.",
    },
    {
      label: "Hosting + SSL 1 año",
      detail: "Alojamiento y certificado de seguridad incluidos el primer año.",
    },
    {
      label: "SEO de arranque",
      detail: "Configuración inicial para que Google empiece a indexarte.",
    },
    {
      label: "WhatsApp flotante",
      detail: "Tus clientes te contactan con un solo clic.",
    },
    {
      label: "Redes sociales",
      detail: "Enlaces a Facebook, Instagram y tus perfiles.",
    },
    {
      label: "Panel de administración",
      detail: "Editá textos y fotos vos mismo, sin depender de nadie.",
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
    price: 20_000,
  },
  {
    id: "existing-domain",
    label: "Ya tengo mi propio Dominio",
    description: "Quiero usar un dominio que ya compré en otro proveedor",
    price: 10_000,
  },
];

export interface ExtraPageOption {
  id: string;
  defaultName: string;
  title: string;
  description: string;
  price: number;
  warning?: string;
}

export const BRIDGE_ESSENTIAL_ONLY = {
  title: "¿Te alcanza con lo esencial?",
  body: "Podés quedarte solo con el Paquete Esencial: un sitio de una sola página, directo y profesional. O seguí con los pasos 3 y 4 para un sitio web aún más completo.",
} as const;

export const MODULE_INCLUDES = {
  title: "Todas las opciones incluyen",
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
  description: "Más espacio para contar tu historia. Ideal para PYMES, profesionales, artistas y emprendedores.",
} as const;

export const ADVANCED_FEATURES_SECTION = {
  title: "Potenciá tu sitio",
  description: "Herramientas técnicas con integraciones listas para usar.",
} as const;

/** Capturas en public/armar-mi-web/showcase/ — recomendado 1200×750 px (.png o .webp) */
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
    id: "octane",
    name: "Octane Mecánica",
    niche: "Taller automotriz · Escazú",
    highlight: "Galería antes/después y cotización vía WhatsApp",
    url: "https://octane.ediloaz.com/",
    image: "/armar-mi-web/showcase/octane-mecanica.png",
  },
  {
    id: "presagio",
    name: "Presagio",
    niche: "Experiencias & picnic · Puriscal",
    highlight: "Experiencias, galería, y reservaciones",
    url: "https://presagio.ediloaz.com/",
    image: "/armar-mi-web/showcase/presagio.png",
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
    return `Después del primer año, solo pagarás una anualidad fija de aprox. ${formatCRC(price)} que cubre Hosting, SSL y renovación de dominio .com. ¡Sin sorpresas mensuales!`;
  }
  return `Después del primer año, solo pagarás una anualidad fija de aprox. ${formatCRC(price)} que cubre Hosting y SSL. ¡Sin sorpresas mensuales!`;
}

export const EXTRA_PAGES: ExtraPageOption[] = [
  {
    id: "about",
    defaultName: "Sobre nosotros",
    title: "Sobre nosotros",
    description: "Historia, misión y visión con espacio dedicado.",
    price: 10_000,
  },
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
    title: "Servicios en profundidad",
    description: "Cada servicio con detalle, fotos y botón de WhatsApp.",
    price: 10_000,
  },
  {
    id: "faq",
    defaultName: "Preguntas Frecuentes",
    title: "Preguntas frecuentes",
    description: "Resolvé dudas comunes y ahorrá tiempo de soporte.",
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
    title: "Galería extendida",
    description: "Fotos organizadas en álbumes o categorías.",
    price: 10_000,
  },
  {
    id: "promotions",
    defaultName: "Promociones",
    title: "Promociones",
    description: "Ofertas y descuentos vigentes, bien presentados.",
    price: 10_000,
  },
];

export interface AdvancedFeatureOption {
  id: string;
  title: string;
  description: string;
  price: number;
}

export const ADVANCED_FEATURES: AdvancedFeatureOption[] = [
  {
    id: "contact-pro",
    title: "Contacto Pro",
    description: "Formulario avanzado, anti-spam y mapa de Google Maps.",
    price: 15_000,
  },
  {
    id: "blog",
    title: "Blog",
    description: "Publicá artículos ilimitados para atraer tráfico desde Google.",
    price: 20_000,
  },
  {
    id: "bookings",
    title: "Reservaciones (Cal.com)",
    description: "Tus clientes agendan citas solos según tu disponibilidad.",
    price: 30_000,
  },
];

export const HIDDEN_DETAILS = [
  "Las páginas adicionales (excepto la página de inicio) se pueden editar desde el panel de administración.",
  "Soporte y ediciones posteriores se cotizan por aparte según tus necesidades.",
  `Entrega final en ${BUILDER_PRICES.deliveryWeeks} semana (previa entrega de todo tu contenido), con ${BUILDER_PRICES.revisionRounds} rondas de revisiones incluidas.`,
  `Mantenimiento anual: desde aprox. ₡${BUILDER_PRICES.maintenanceAnnualBase.toLocaleString("es-CR")}/año (hosting + SSL) o ₡${BUILDER_PRICES.maintenanceAnnualWithDomain.toLocaleString("es-CR")}/año si incluye renovación de dominio .com comprado con nosotros.`,
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
