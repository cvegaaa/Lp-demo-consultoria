import sitio from '@/data/sitio.json';

export default function Footer() {
  const c = sitio.datos_contacto_placeholder;
  return (
    <footer className="bg-navy-950 border-t border-navy-800 py-12">
      <div className="container-base">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5 text-crema-50">
            <span className="grid h-8 w-8 place-items-center rounded-sm bg-bronce-500 font-serif text-base font-semibold text-navy-950">
              C
            </span>
            <span className="font-serif text-base font-medium">
              {sitio.nombre_generico}
            </span>
          </div>

          <div className="text-center text-xs text-crema-100/50 md:text-right">
            <p className="text-crema-100/70">{c.direccion}</p>
            <p className="mt-1">
              {c.telefono} · {c.email}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-800 pt-6 text-center">
          <p className="text-xs text-crema-100/40">
            Demo diseñada por{' '}
            <a
              href="https://www.vegora.com.co"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-bronce-400 transition-colors hover:text-bronce-300"
            >
              Vegora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
