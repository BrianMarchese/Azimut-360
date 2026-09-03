import { useState } from 'react';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/15 border-white/10 font-heading">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <img className="h-10 w-10 sm:h-12 sm:w-12 object-contain" src="/logo.png" alt="logo azimut 360" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg sm:text-xl tracking-tight leading-tight">
                Azimut 360
              </span>
              <span className="text-primary text-[9px] sm:text-[10px] tracking-[0.22em] font-semibold uppercase">
                Agrimensura
              </span>
            </div>
          </a>

          {/* Navegación Desktop flex para aparecer los items y hidden para ocultarlos */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-200 text-sm font-medium transition-colors duration-400 hover:text-secondary py-1">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón Desktop  */}
          <div className="hidden lg:block ">
            <a href="#contacto" className="flex items-center gap-2 bg-primary hover:bg-secondary text-slate-950 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-400">
              Solicitar presupuesto
              <FiArrowRight className="text-base" />
            </a>
          </div>

          {/* Botón hamburguesa */}
          <button
            type="button" onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="lg:hidden bg-black/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 mt-3">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-secondary hover:bg-slate-900/60 transition-colors">
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a href="#contacto" onClick={() => setIsOpen(false)} className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-secondary text-slate-950 font-semibold px-4 py-3 rounded-lg text-sm transition">
              Solicitar presupuesto
              <FiArrowRight className="text-base" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};