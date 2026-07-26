import sitio from '@/data/sitio.json';
import { Scale, Calculator, LineChart, Briefcase, FileSearch } from 'lucide-react';

const iconos = [Scale, Calculator, LineChart, Briefcase, FileSearch];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-navy-950 py-24 sm:py-32">
      <div className="container-base">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-bronce-300 mb-5">Áreas de práctica</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-crema-50 sm:text-4xl">
            Servicios que cubren cada frente de su negocio
          </h2>
          <p className="mt-5 text-base leading-relaxed text-crema-100/70">
            Desde lo legal y notarial hasta lo contable y financiero, un solo
            equipo con criterio para acompañar cada decisión importante.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sitio.servicios.map((s, i) => {
            const Icon = iconos[i % iconos.length];
            return (
              <article
                key={s.titulo}
                className="group relative overflow-hidden rounded-xl border border-navy-700/60 bg-navy-900/60 p-8 transition-all duration-300 hover:border-bronce-500/50 hover:bg-navy-800/60"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-bronce-500/10 text-bronce-400 transition-colors group-hover:bg-bronce-500/20">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-crema-50">
                  {s.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-crema-100/70">
                  {s.descripcion}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-bronce-500 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
