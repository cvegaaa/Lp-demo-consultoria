import sitio from '@/data/sitio.json';
import { Quote } from 'lucide-react';

export default function Problema() {
  return (
    <section id="enfoque" className="bg-crema-50 py-24 sm:py-32">
      <div className="container-base">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="section-eyebrow mb-5">Nuestro enfoque</p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-navy-900 sm:text-4xl">
              De los referidos a una presencia que genera confianza
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <Quote className="h-10 w-10 text-bronce-500/40" />
            <p className="mt-4 text-lg leading-relaxed text-navy-700">
              {sitio.problema_tipo}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-navy-700">
              Por eso acompañamos a despachos y consultorías a construir una
              imagen profesional sólida en línea: para que cada nuevo cliente
              encuentre autoridad, claridad y un camino sencillo para dar el
              primer paso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
