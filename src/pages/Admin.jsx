import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConsultasAdmin } from '../components/ConsultasAdmin';
import { ValoracionesAdmin } from '../components/ValoracionesAdmin';
import { FiLogOut } from 'react-icons/fi';
import { supabase } from '../services/supabase';


export const Admin = () => {
  const [tabActiva, setTabActiva] = useState('consultas')

  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="p-6 font-body container-site py-40 min-h-screen">

      {/* Selector de pestañas */}
      <div className="flex items-center justify-between gap-4 mb-8">
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

        <button onClick={handleLogout} className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-3.5 py-2 rounded-lg transition cursor-pointer">
          <FiLogOut className="w-4 h-4" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
      {/* Renderizado condicional segun pestaña */}
      {tabActiva === 'consultas' ? <ConsultasAdmin /> : <ValoracionesAdmin />}
    </div>
  )
}