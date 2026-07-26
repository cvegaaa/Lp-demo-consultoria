# Consultores Profesionales — Plantilla de landing page

Plantilla de landing page genérica para el sector de **consultores profesionales**
(abogados, notarías pequeñas, contadores, consultores financieros y de negocio).
Lista para clonar, personalizar y desplegar para un cliente real de este mismo sector.

## Qué es esta plantilla

Una página de presentación de una sola vista, en español, con secciones de hero,
enfoque, servicios, testimonios y contacto. Todo el contenido editable del sitio
se encuentra centralizado en un único archivo:

```
src/data/sitio.json
```

Ahí se definen el nombre genérico, el eslogan, los servicios, el problema que se
aborda, el llamado a la acción principal y los datos de contacto placeholder.

## Cómo personalizarla para un cliente real

1. Edite `src/data/sitio.json` y reemplace:
   - `nombre_generico` por el nombre comercial del cliente.
   - `eslogan_sugerido` por la propuesta de valor del negocio.
   - `servicios` por los servicios reales que ofrece.
   - `datos_contacto_placeholder` por teléfono, WhatsApp, correo, dirección y horario reales.
2. (Opcional) Reemplace las imágenes del hero en `src/components/Hero.tsx` por
   fotografías propias del cliente.
3. Reemplace los testimonios de ejemplo en `src/components/Testimonios.tsx` por
   reseñas reales (elimine la nota de "ejemplo").

## Cómo desplegarla

Requisitos: Node.js 18+.

```bash
npm install
npm run build      # genera la carpeta dist/
```

Luego puede publicar la carpeta `dist/` en cualquier hosting estático
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

Para previsualizar en desarrollo:

```bash
npm run dev
```

## Estructura del proyecto

```
src/
├── data/
│   └── sitio.json          # Configuración centralizada (editar aquí)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problema.tsx
│   ├── Servicios.tsx
│   ├── Testimonios.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Créditos

Demo diseñada por [Vegora](https://www.vegora.com.co).
