import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import { FiRefreshCw, FiPlus, FiTrash2, FiEye, FiEyeOff, FiEdit2, FiX } from 'react-icons/fi'

export const ValoracionesAdmin = () => {
    const [valoraciones, setValoraciones] = useState([])
    const [loading, setLoading] = useState(true)
    const [guardando, setGuardando] = useState(false)
    const [editandoId, setEditandoId] = useState(null) // Guarda el ID si se está editando
    const [formData, setFormData] = useState({ autor: '', comentario: '' })

    // obtener todas las valoraciones
    const fetchValoraciones = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('valoraciones')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error cargando valoraciones:', error)
        } else {
            setValoraciones(data || [])
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchValoraciones()
    }, []);

    // iniciar y cancelar edicion
    const activarEdicion = (resena) => {
        setEditandoId(resena.id)
        setFormData({
            autor: resena.autor,
            comentario: resena.comentario
        });
    }

    const cancelarEdicion = () => {
        setEditandoId(null)
        setFormData({ autor: '', comentario: '' })
    }

    // guardar (crear nuevo o actualizar existente)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.autor.trim() || !formData.comentario.trim()) return

        setGuardando(true);

        if (editandoId) {
            // MODO EDICION
            const { error } = await supabase
                .from('valoraciones')
                .update({
                    autor: formData.autor.trim(),
                    comentario: formData.comentario.trim()
                })
                .eq('id', editandoId)

            if (error) {
                console.error('Error al actualizar reseña:', error)
                alert('No se pudo actualizar la reseña')
            } else {
                setValoraciones((prev) =>
                    prev.map((valoracion) =>
                        valoracion.id === editandoId
                            ? { ...valoracion, autor: formData.autor.trim(), comentario: formData.comentario.trim() }
                            : valoracion
                    )
                )
                cancelarEdicion()
            }
        } else {
            // MODO CREACION
            const { data, error } = await supabase
                .from('valoraciones')
                .insert([
                    {
                        autor: formData.autor.trim(),
                        comentario: formData.comentario.trim(),
                        visible: true
                    }
                ])
                .select();

            if (error) {
                console.error('Error al guardar reseña:', error);
                alert('Error al guardar la reseña');
            } else if (data) {
                setValoraciones((prev) => [data[0], ...prev]);
                setFormData({ autor: '', comentario: '' });
            }
        }

        setGuardando(false);
    };

    // alternar visibilidad
    const toggleVisibilidad = async (id, estadoVisible) => {
        const { error } = await supabase
            .from('valoraciones')
            .update({ visible: !estadoVisible })
            .eq('id', id);

        if (error) {
            console.error('Error actualizando visibilidad:', error);
        } else {
            // recorro el arreglo para cambiar la visibildiad a la tarjeta con id especifico
            setValoraciones((prev) =>
                prev.map((valoracion) => (valoracion.id === id ? { ...valoracion, visible: !estadoVisible } : valoracion))
            );
        }
    };

    // eliminar reseña
    const eliminarValoracion = async (id) => {
        if (!window.confirm('¿Seguro que querés eliminar esta reseña permanentemente?')) return

        const { error } = await supabase
            .from('valoraciones')
            .delete()
            .eq('id', id)

        if (error) {
            console.error('Error eliminando reseña:', error)
        } else {
            // traigo todas las reseñas que tengan el id diferente a la que se elimino
            setValoraciones((prev) => prev.filter((valoracion) => valoracion.id !== id))
            if (editandoId === id) {
                cancelarEdicion()
            }
        }
    };

    if (loading) {
        return (
            <div className="p-8 flex justify-center items-center text-center text-slate-700 py-40 gap-3">
                <FiRefreshCw className="animate-spin h-6 w-6 text-secondary" />
                <span>Cargando reseñas...</span>
            </div>
        );
    }

    return (
        <div className="font-body min-h-screen mt-7">
            {/* Encabezado */}
            <div className="mb-8 font-heading">
                <h1 className="text-2xl sm:text-3xl font-bold text-secondary">
                    Gestión de Reseñas y Testimonios
                </h1>
                <p className="text-sm text-slate-700 mt-1 pl-1">
                    Total: {valoraciones.length} reseñas registradas
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* formulario dinamico (alta / edicion) */}
                <div className={`bg-white p-6 rounded-2xl border shadow-sm h-fit transition ${
                    editandoId ? 'border-secondary ring-1 ring-secondary/30' : 'border-slate-200'
                }`}>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                            {editandoId ? (
                                <>
                                    <FiEdit2 className="text-secondary" /> Editar Reseña
                                </>
                            ) : (
                                <>
                                    <FiPlus className="text-secondary" /> Nueva Reseña
                                </>
                            )}
                        </h2>

                        {editandoId && (
                            <button onClick={cancelarEdicion} className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer">
                                <FiX /> Cancelar
                            </button>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                        <div>
                            <label className="font-semibold text-slate-700 block mb-1">
                                Autor / Cliente:
                            </label>
                            <input required type="text" placeholder="Ej: Arq. Carlos Gómez" value={formData.autor} onChange={(e) => setFormData({ ...formData, autor: e.target.value })} className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:border-secondary transition text-slate-800" />
                        </div>

                        <div>
                            <label className="font-semibold text-slate-700 block mb-1">
                                Testimonio / Comentario:
                            </label>
                            <textarea required rows="4" placeholder="Excelente trabajo con la mensura del terreno..." value={formData.comentario} onChange={(e) => setFormData({ ...formData, comentario: e.target.value })} className="w-full border border-slate-300 rounded-lg p-2.5 outline-none focus:border-secondary transition resize-none text-slate-800" />
                        </div>

                        <div className="flex gap-2">
                            <button type="submit" disabled={guardando} className="flex-1 text-xs sm:text-sm font-semibold cursor-pointer bg-primary hover:bg-secondary transition-all duration-300 rounded-md p-3 text-slate-900 disabled:opacity-50"
                            >
                                {guardando ? 'Guardando...' : editandoId ? 'Guardar Cambios' : 'Publicar Reseña'}
                            </button>

                            {editandoId && (
                                <button type="button" onClick={cancelarEdicion} className="px-3 py-3 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-600 hover:bg-slate-100 transition cursor-pointer" >
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* grilla reseñas */}
                <div className="lg:col-span-2">
                    {valoraciones.length === 0 ? (
                        <div className="bg-white p-8 rounded-2xl border border-dashed border-slate-300 text-center text-slate-500">
                            Aún no hay reseñas cargadas en el sistema.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {valoraciones.map((valoracion) => (
                               // Como se muestra la card si esta visible o no la reseña 
                                <div key={valoracion.id} className={`h-75 p-5 rounded-2xl border shadow-sm flex flex-col justify-between transition ${
                                        editandoId === valoracion.id
                                            ? 'border-secondary ring-2 ring-secondary/20 bg-slate-50'
                                            : valoracion.visible
                                            ? 'bg-white border-slate-200'
                                            : 'bg-slate-50 border-slate-300/60 opacity-70'
                                    }`}
                                    >

                                    {/* fecha y estado */}
                                    <div>
                                        <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                                            <span className="text-xs sm:text-sm text-slate-600 font-medium">
                                                {new Date(valoracion.created_at).toLocaleDateString('es-AR')}
                                            </span>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    valoracion.visible
                                                        ? 'bg-emerald-100 text-emerald-800'
                                                        : 'bg-slate-200 text-slate-600'
                                                }`}
                                            >
                                                {valoracion.visible ? 'Visible en web' : 'Oculta'}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mt-3 truncate">
                                            {valoracion.autor}
                                        </h3>
                                    </div>

                                    {/* contenedor comentario */}
                                    <div className="my-2 flex-1 flex flex-col bg-slate-100 p-3.5 rounded-xl border border-slate-200 text-sm overflow-hidden">
                                        <div className="overflow-y-auto pr-1 text-slate-700 leading-relaxed italic whitespace-normal flex-1">
                                            "{valoracion.comentario}"
                                        </div>
                                    </div>

                                    {/* acciones: editar, visibilidad y eliminar */}
                                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-auto shrink-0 text-xs sm:text-sm">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => activarEdicion(valoracion)} className="inline-flex items-center gap-1 font-semibold text-secondary hover:underline cursor-pointer transition" >
                                                <FiEdit2 className="w-3.5 h-3.5" /> Editar
                                            </button>

                                            <button onClick={() => toggleVisibilidad(valoracion.id, valoracion.visible)} className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-900 cursor-pointer transition" >
                                                { valoracion.visible ? (
                                                    <>
                                                        <FiEyeOff className="w-3.5 h-3.5" /> Ocultar
                                                    </>
                                                ) : (
                                                    <>
                                                        <FiEye className="w-3.5 h-3.5" /> Mostrar
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => eliminarValoracion(valoracion.id)} className="inline-flex items-center gap-1 font-semibold text-red-500 hover:text-red-700 hover:underline cursor-pointer transition" >
                                            <FiTrash2 className="w-3.5 h-3.5" /> Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};