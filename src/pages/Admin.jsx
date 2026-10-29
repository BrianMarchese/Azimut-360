import { useState } from 'react';
import { ConsultasAdmin } from '../components/ConsultasAdmin';
import { ValoracionesAdmin } from '../components/ValoracionesAdmin';


export const Admin = () => {
  const [tabActiva, setTabActiva] = useState('consultas')

  return (
    <div className="p-6 font-body container-site py-40 min-h-screen">

        {/* Selector de pestañas */}
        <div className="inline-flex rounded-lg bg-slate-200 p-1">
          <button
            onClick={() => setTabActiva('consultas')}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition hover:cursor-pointer font-heading ${
              tabActiva === 'consultas'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Consultas
          </button>
          <button
            onClick={() => setTabActiva('resenas')}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition hover:cursor-pointer font-heading ${
              tabActiva === 'resenas'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Valoraciones / Reseñas
          </button>
        </div>

      {/* Renderizado condicional según pestaña */}
      {tabActiva === 'consultas' ? <ConsultasAdmin /> : <ValoracionesAdmin />}
    </div>
  )
}