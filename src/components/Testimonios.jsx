import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { motion } from "framer-motion"

export const Testimonios = () => {
  const [resenas, setResenas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResenas = async () => {
      const { data, error } = await supabase
        .from('valoraciones')
        .select('*')
        .eq('visible', true)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setResenas(data);
      }
      setLoading(false);
    };

    fetchResenas();
  }, []);

  // Si no hay ninguna reseña activa para mostrar, no renderiza la sección vacía
  if (!loading && resenas.length === 0) return null;

  return (
    <section id="testimonios" className="py-20">
      <div className="container-site">
        {/* Encabezado */}

            <motion.div className='font-heading' initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}  transition={{ duration: 0.6, ease: "easeOut" }}>
                <p className="text-secondary uppercase tracking-[.12em] font-bold">Testimonios</p>
                <p className="text-2xl font-extrabold max-w-sm">La opinión de quienes confían en nosotros</p>
            </motion.div>

            {loading ? (
                <div className="text-center text-slate-600 text-sm py-12">
                    Cargando testimonios...
                </div> ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
                    {resenas.map((resena) => (
                        <motion.div key={resena.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between font-body" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
                            <div>
                                <div className="text-secondary/80 font-serif text-5xl leading-none select-none mb-2">
                                    “
                                </div>
                                <p className="text-slate-700 leading-relaxed italic">
                                    {resena.comentario}
                                </p>
                            </div>

                            {/* Pie con inicial y autor */}
                            <div className="pt-4 mt-6 border-t border-slate-300 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary font-heading font-bold text-sm flex items-center justify-center shrink-0 uppercase">
                                    {resena.autor.trim().charAt(0)}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-slate-900 text-sm truncate">
                                        {resena.autor}
                                    </h3>
                                    <span className="text-xs text-slate-500 block">
                                        Cliente del estudio
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>
        )}
      </div>
    </section>
  );
};