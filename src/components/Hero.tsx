import sitio from '@/data/sitio.json';
import { CalendarClock, ArrowRight } from 'lucide-react';

const imagenes = [
  'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

import { useEffect, useState } from 'react';

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % imagenes.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Fondo con transiciones */}
      <div className="absolute inset-0">
        {imagenes.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover animate-slow-zoom"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
      </div>

      <div className="container-base relative z-10 flex min-h-screen flex-col justify-center pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-bronce-300 mb-6 animate-fade-up">
            Asesoría profesional integral
          </p>
          <h1 className="font-serif text-4xl font-medium leading-[1.1] text-crema-50 sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {sitio.nombre_generico}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-crema-100/90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {sitio.eslogan_sugerido}. Criterio técnico y trato cercano para resolver
            sus asuntos legales, contables y financieros con la confianza que su
            negocio merece.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={`https://wa.me/${sitio.datos_contacto_placeholder.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <CalendarClock className="h-4 w-4" />
              {sitio.cta_principal}
            </a>
            <a href="#servicios" className="group inline-flex items-center gap-2 text-sm font-semibold text-crema-50">
              Conozca nuestros servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Indicadores */}
          <div className="mt-12 flex gap-2">
            {imagenes.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Imagen ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === idx ? 'w-10 bg-bronce-400' : 'w-5 bg-crema-100/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
