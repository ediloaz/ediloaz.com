# Componentes Reutilizables

Este directorio contiene componentes compartidos que mantienen la consistencia visual y funcional en todo el sitio.

## 📦 Componentes Disponibles

### Navbar
Barra de navegación superior con:
- Logo con gradiente
- Enlaces de navegación principales
- Botón destacado para CV
- Menú móvil responsive
- Efecto glassmorphism con backdrop blur
- Posición fija (sticky)

**Uso:**
```tsx
import { Navbar } from "@/components";

export default function MiPagina() {
  return (
    <>
      <Navbar />
      {/* Tu contenido aquí */}
    </>
  );
}
```

### Footer
Pie de página con:
- Información del desarrollador
- Enlaces de navegación
- Enlaces a redes sociales
- Diseño en grid responsive (3 columnas en desktop)

**Uso:**
```tsx
import { Footer } from "@/components";

export default function MiPagina() {
  return (
    <>
      {/* Tu contenido aquí */}
      <Footer />
    </>
  );
}
```

### PageLayout
Wrapper completo que incluye:
- Navbar fijo en la parte superior
- Footer en la parte inferior
- Fondo con gradiente consistente
- Padding automático (pt-20) para compensar el navbar fijo
- Soporte para className personalizado

**Uso:**
```tsx
import { PageLayout } from "@/components";

export default function MiPagina() {
  return (
    <PageLayout>
      {/* Tu contenido aquí */}
    </PageLayout>
  );
}
```

**Con className personalizado:**
```tsx
<PageLayout className="custom-styles">
  {/* Tu contenido */}
</PageLayout>
```

## 🎨 Esquema de Colores

El sitio usa la siguiente paleta de colores:

- **Primario (Azul):** `blue-600` / `blue-700`
- **Secundario (Púrpura):** `purple-600` / `purple-700`
- **Acento (Esmeralda):** `emerald-600` - para Medium
- **Neutrales:** `zinc-50` a `zinc-950`
- **Gradientes:** Combinaciones de azul y púrpura

## 📱 Responsive Design

Todos los componentes están optimizados para:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🌙 Dark Mode

Todos los componentes soportan dark mode automáticamente usando las clases de Tailwind:
- `dark:bg-zinc-900`
- `dark:text-zinc-200`
- etc.

## 🔗 Enlaces de Navegación

Los componentes incluyen enlaces a:
- `/` - Inicio
- `/about-me` - Sobre Mí
- `/projects` - Proyectos
- `/contact` - Contacto
- `/cv` - Curriculum Vitae

## 🎯 Mejores Prácticas

1. **Usa PageLayout** para páginas nuevas para mantener consistencia automática
2. **Usa Navbar + Footer** individualmente si necesitas más control sobre el layout
3. **Mantén los colores** de la paleta establecida para consistencia visual
4. **Respeta los espaciados** (pt-20 después del Navbar fijo)

