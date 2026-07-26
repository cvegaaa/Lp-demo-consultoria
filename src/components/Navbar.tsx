import sitio from '@/data/sitio.json';
import { Menu, X, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [abierta, setAbierta] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#enfoque', label: 'Enfoque' },
    { href: '#testimonios', label: 'Clientes' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/20' : 'bg-transparent'
      }`}
    >
      <nav className="container-base flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 text-crema-50">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-bronce-500 font-serif text-lg font-semibold text-navy-950">
            C
          </span>
          <span className="font-serif text-lg font-medium tracking-tight">
            {sitio.nombre_generico}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-crema-100/80 transition-colors hover:text-bronce-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${sitio.datos_contacto_placeholder.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noreferrer"
          className="hidden btn-primary md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          {sitio.cta_principal}
        </a>

        <button
          onClick={() => setAbierta(!abierta)}
          className="text-crema-50 md:hidden"
          aria-label="Abrir menú"
        >
          {abierta ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {abierta && (
        <div className="border-t border-navy-800 bg-navy-950/98 backdrop-blur-md md:hidden">
          <ul className="container-base flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAbierta(false)}
                  className="block py-3 text-sm font-medium text-crema-100/90 hover:text-bronce-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${sitio.datos_contacto_placeholder.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-3 w-full"
              >
                {sitio.cta_principal}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
