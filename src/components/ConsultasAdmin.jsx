import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { FiRefreshCw } from 'react-icons/fi';

export const ConsultasAdmin = () => {
    const [consultas, setConsultas] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchConsultas = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('consultas')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error cargando consultas:', error);
        } else {
            setConsultas(data);
        }
        setLoading(false);
    };

    const toggleEstado = async (id, estadoActual) => {
        const nuevoEstado = estadoActual === 'pendiente' ? 'contestada' : 'pendiente';

        const { error } = await supabase
            .from('consultas')
            .update({ estado: nuevoEstado })
            .eq('id', id);

        if (error) {
            console.error('Error actualizando estado:', error);
        } else { // traigo las consultas con el nuevo estado si se modifico y sino con el estado que estaba
            setConsultas(prev => prev.map(c => (c.id === id ? { ...c, estado: nuevoEstado } : c)));
        }
    };

    useEffect(() => {
        fetchConsultas();
    }, []);

    if (loading) return <div className="p-8 flex justify-center items-center text-center text-slate-700 py-40 gap-3">
            <FiRefreshCw className="animate-spin h-6 w-6 text-secondary" />
            <span>Cargando consultas...</span>
        </div>

    return (
        <div className=" min-h-screen">
            {/* encabezado */}
            <div className="mb-8 font-heading mt-10">
                <h1 className="text-2xl sm:text-3xl font-bold font-heading text-secondary">
                    Panel de Consultas
                </h1>
                <p className="text-sm text-slate-700 mt-1 pl-1">
                    Total: {consultas.length} consultas
                </p>
            </div>

            {/* grid tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {consultas.map((c) => (
                    <div key={c.id} className="h-100 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                        <div>
                            {/* fecha y estado */}
                            <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                                <span className="text-xs sm:text-sm text-slate-600 font-medium">
                                    {new Date(c.created_at).toLocaleDateString('es-AR')}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    c.estado === 'pendiente' 
                                        ? 'bg-amber-100 text-amber-800' 
                                        : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                    {c.estado === 'pendiente' ? 'Pendiente' : 'Contestada'}
                                </span>
                            </div>

                            {/* datos de contacto  */}
                            <div className="mt-4">
                                <h3 className="text-lg font-bold text-slate-900 truncate">
                                    {c.nombre}
                                </h3>
                                <p className="text-sm text-slate-600 mt-0.5 truncate">
                                    {c.email}
                                </p>
                                <p className={`text-sm mt-0.5 ${c.telefono ? 'text-slate-500' : 'text-slate-400 italic'}`}>
                                    {c.telefono || 'Sin teléfono'}
                                </p>
                            </div>
                        </div>

                        {/* caja de mensaje  */}
                        <div className="my-3 flex-1 flex flex-col bg-slate-100 p-3.5 rounded-xl border border-slate-200 text-sm overflow-hidden">
                            <p className="text-slate-800 mb-1.5 font-medium">
                                <span className="font-bold text-slate-800">Servicio:</span> {c.servicio}
                            </p>
                            <div className="overflow-y-auto pr-1 text-slate-600 leading-relaxed whitespace-normal flex-1 font-body ">
                                {c.mensaje}
                            </div>
                        </div>

                        {/* Botón de acción*/}
                        <div className="flex justify-end pt-1">
                            <button onClick={() => toggleEstado(c.id, c.estado)} className="text-xs sm:text-sm font-semibold hover:underline cursor-pointer bg-primary hover:bg-secondary transition-all duration-300 rounded-md p-3">
                                Marcar como {c.estado === 'pendiente' ? 'contestada' : 'pendiente'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};