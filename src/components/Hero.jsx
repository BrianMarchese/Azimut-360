import { FiArrowRight, FiShield, FiTarget, FiCheck, FiAward, FiFileText, FiClock, FiMapPin } from 'react-icons/fi';

export const Hero = () => {
  return (
      <div className="relative font-body">
        <section id="inicio" className="relative pt-32 pb-20 sm:pb-24 lg:pb-40 lg:px-5">
          {/* Imagen de fondo y degradado */}
          <img src="/hero-img.png" alt="imagen hero" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 container-site px-5">
            <div className="max-w-2xl text-white">
              
              <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[.15em] text-primary">
                Agrimensura de precisión
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.18] text-white font-heading">
                Precisión y confianza en servicios de agrimensura
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-200">
                Soluciones profesionales en mensuras, relevamientos y asesoramiento para proyectos que requieren exactitud, cumplimiento y tranquilidad.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row">
                <a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40">
                  Conocer servicios <FiArrowRight />
                </a>
              </div>

              {/* insignias */}
              <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-4 pt-4 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 items-center justify-center rounded-full border border-secondary/60 text-primary">
                    <FiShield />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Profesionales Matriculados</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="grid h-9 md:w-11 w-9 items-center justify-center rounded-full border border-secondary/60 text-primary">
                    <FiTarget />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Tecnología de última generación</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 items-center justify-center rounded-full border border-secondary/60 text-primary">
                    <FiCheck />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Compromiso con la precisión</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* barra flotante */ }
        <div className='relative z-20 max-w-7xl -mt-12 sm:-mt-14 container-site'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-xl bg-white shadow-xl border border-slate-100 '>
              <div className='flex flex-col items-center justify-center gap-3 px-5 py-6'>
                  <FiAward className='text-4xl text-primary'/>
                  <div className='text-secondary text-2xl font-extrabold'>+10</div>
                  <div className='text-sm font-semibold text-slate-600'>Años de experiencia</div>
              </div>

              <div className='flex flex-col items-center justify-center gap-3 px-5 py-6 border-t border-slate-200 sm:border-l sm:border-t-0'>
                  <FiFileText className='text-4xl text-primary'/>
                  <div className='text-secondary text-2xl font-extrabold'>+100</div>
                  <div className='text-sm font-semibold text-slate-600'>Proyectos realizados</div>
              </div>

              <div className='flex flex-col items-center justify-center gap-3 px-5 py-6 border-t border-slate-200 sm:border-l sm:border-t-0 '>
                  <FiClock className='text-4xl text-primary'/>
                  <div className='text-secondary text-xl font-extrabold'>24 hs</div>
                  <div className='text-sm font-semibold text-slate-600'>Tiempo de respuesta</div>
              </div>
              
              <div className='flex flex-col items-center justify-center gap-3 px-5 py-6 border-t border-slate-200 sm:border-l sm:border-t-0'>
                  <FiMapPin className='text-4xl text-primary'/>
                  <div className='text-secondary text-2xl font-extrabold'>+20</div>
                  <div className='text-sm font-semibold text-slate-600'>Zonas de cobertura</div>
              </div>
          </div>
      </div>
    </div>
      
  );
};