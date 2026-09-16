import { FiClock, FiGlobe, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi"
import { LuBadgeCheck } from "react-icons/lu"

export const Footer = () => {
    return (
        <footer className="bg-[#101719] pt-20 pb-5 text-white">
            <div className="container-site grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {/* LOGO */}
                <div>
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
                    <p className="mt-5 text-[12px] leading-4 text-white/60 font-body">Servicio profesional de agrimensura con precisión, tecnología y compromiso para proyectos que dejan huella.</p>
                    {/* MAPEO DE ICONOS PARA NO REPETIR CODIGO */}
                    <div className="mt-5 flex gap-2">
                        {[FiInstagram, FiLinkedin, FiGlobe, FiMessageCircle].map((Icono, i) => <a key={i} href="#contacto" aria-label="Red social" className="grid h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm transition hover:border-secondary hover:text-secondary">
                            <Icono />
                        </a>)}
                    </div>
                </div>
                { /* ENLACES */ }
                <div>
                    <div>
                        <h3 className="text-sm font-extrabold font-heading">Enlaces rápidos</h3>
                        <div className="mt-4 space-y-2 font-body">
                            <a href="#inicio" className="block text-[12px] text-white/60 transition hover:text-secondary">
                                Inicio
                            </a>
                            <a href="#servicios" className="block text-[12px] text-white/60 transition hover:text-secondary">
                                Servicios
                            </a>
                            <a href="#nosotros" className="block text-[12px] text-white/60 transition hover:text-secondary">
                                Nosotros
                            </a>
                            <a href="#proceso" className="block text-[12px] text-white/60 transition hover:text-secondary">
                                Proceso
                            </a>
                            <a href="#proyectos" className="block text-[12px] text-white/60 transition hover:text-secondary">
                                Proyectos
                            </a>
                            <a href="#faq" className="block text-[12px] text-white/60 transition hover:text-secondary">
                                FAQ
                            </a>
                        </div>
                    </div>
                </div>
                {/*  CONTACTO */}
                <div>
                    <h3 className="text-sm font-extrabold font-heading">Contacto</h3>
                    <div className="mt-4 space-y-3 text-sm leading-4 text-white/65 font-body">
                        <p className="flex gap-2"><FiPhone className="text-primary" />+54 341 123 4567</p>
                        <p className="flex gap-2"><FiMail className="text-primary" />info@azimut360.com</p>
                        <p className="flex gap-2"><FiMapPin className="text-primary" />Av. San Martín 1234<br />Rosario, Santa Fe</p>
                        <p className="flex gap-2"><FiClock className="text-primary" />Lunes a Viernes<br />8:00 a 18:00 hs</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-extrabold font-heading">Profesionales matriculados</h3>
                    <div className="mt-5 flex items-center gap-3 rounded-lg border border-white/10 p-3"><LuBadgeCheck className="text-4xl text-primary" />
                        <p className="text-sm leading-4 text-white/65 font-body">Colegio de Ingenieros Civiles de Rosario<br />
                            <b className="text-white">Mat. 12345</b>
                        </p>
                    </div>
              </div>
            </div>
            <div className="container-site mt-10 border-t border-white/10 pt-5 text-center text-sm text-white/45 font-body">
                © {new Date().getFullYear()} Azimut 360 Agrimensura. Todos los derechos reservados.
            </div>
        </footer>
    )
}