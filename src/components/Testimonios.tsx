import { Star } from 'lucide-react';

const testimonios = [
  {
    texto: 'Llegamos buscando ordenar la contabilidad y nos quedamos por la claridad con que explican cada decisión. Hoy tomamos mejor rumbo.',
    autor: 'Cliente del sector comercio',
    rol: 'Testimonio de ejemplo',
  },
  {
    texto: 'La asesoría notarial fue ágil y precisa. Se notan los años de experiencia en cada detalle del trámite.',
    autor: 'Cliente del sector inmobiliario',
    rol: 'Testimonio de ejemplo',
  },
  {
    texto: 'La revisión fiscal nos dio tranquilidad ante un proceso de auditoría. Informes claros y respuestas oportunas.',
    autor: 'Cliente del sector servicios',
    rol: 'Testimonio de ejemplo',
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="bg-crema-100 py-24 sm:py-32">
      <div className="container-base">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mb-5">Lo que dicen quienes confían en nosotros</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-navy-900 sm:text-4xl">
            Experiencia que se traduce en tranquilidad
          </h2>
          <p className="mt-4 text-sm italic text-navy-500">
            Testimonios de ejemplo — se reemplazan con reseñas reales del negocio.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl border border-crema-200 bg-crema-50 p-8 shadow-sm"
            >
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-bronce-500 text-bronce-500" />
                ))}
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-navy-700">
                “{t.texto}”
              </blockquote>
              <figcaption className="mt-6 border-t border-crema-200 pt-4">
                <p className="font-serif text-sm font-medium text-navy-900">{t.autor}</p>
                <p className="text-xs text-bronce-600">{t.rol}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
