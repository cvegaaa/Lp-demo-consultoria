import sitio from '@/data/sitio.json';
import { CalendarClock, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function CTA() {
  const c = sitio.datos_contacto_placeholder;
  return (
    <section id="contacto" className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-bronce-500/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-navy-700/30 blur-3xl" />

      <div className="container-base relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-eyebrow text-bronce-300 mb-5">Hablemos</p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-crema-50 sm:text-4xl">
              {sitio.cta_principal}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-crema-100/70">
              Cuéntenos su caso y le responderemos con una propuesta clara.
              La primera consulta es el punto de partida para entender su
              situación y definir el camino a seguir.
            </p>
            <a
              href={`https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              <CalendarClock className="h-4 w-4" />
              {sitio.cta_principal}
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Contacto icon={Phone} label="Teléfono" valor={c.telefono} />
            <Contacto icon={Mail} label="Correo" valor={c.email} />
            <Contacto icon={MapPin} label="Dirección" valor={c.direccion} />
            <Contacto icon={Clock} label="Horario" valor={c.horario} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto({
  icon: Icon,
  label,
  valor,
}: {
  icon: typeof Phone;
  label: string;
  valor: string;
}) {
  return (
    <div className="rounded-xl border border-navy-700/60 bg-navy-900/50 p-6">
      <Icon className="h-5 w-5 text-bronce-400" strokeWidth={1.5} />
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-bronce-300/80">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-crema-100/90">{valor}</p>
    </div>
  );
}
