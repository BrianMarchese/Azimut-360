import { FiFileText, FiMapPin } from "react-icons/fi"
import { LuDraftingCompass, LuGrid2X2, LuMapPinned, LuRadar, LuRuler, LuUserRoundCheck } from "react-icons/lu"
import { motion } from "framer-motion"

const servicios = [
  { icon: LuRuler, title: 'Mensuras', text: 'Mensuras urbanas y rurales con planos aprobados y certificados por profesionales matriculados.' },
  { icon: LuGrid2X2, title: 'Subdivisiones', text: 'Proyecto y mensura de subdivisiones, fraccionamientos y unificaciones de inmuebles.' },
  { icon: LuMapPinned, title: 'Relevamientos topográficos', text: 'Relevamientos planimétricos y altimétricos para proyectos de ingeniería y construcción.' },
  { icon: FiMapPin, title: 'Amojonamientos', text: 'Colocación y verificación de mojones para deslindes y materialización de linderos.' },
  { icon: FiFileText, title: 'Estado parcelario', text: 'Informe y certificaciones de estado parcelario y dominio para trámites y escrituras.' },
  { icon: LuRadar, title: 'Georreferenciación', text: 'Georreferenciación de inmuebles con GPS diferencial y sistemas GNSS de alta precisión.' },
  { icon: LuUserRoundCheck, title: 'Asesoramiento técnico', text: 'Asesoramiento legal, técnico y normativo en proyectos de agrimensura y catastro.' },
  { icon: LuDraftingCompass, title: 'Planos y documentación', text: 'Elaboración de planos, croquis y documentación técnica para diversos organismos.' },
]



export const Services = () => {
    return (
        <section id="servicios" className="py-20 font-body ">
            <div className="container-site">
                <motion.div className="font-heading" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}  transition={{ duration: 0.6, ease: "easeOut" }}>
                    <p className="text-secondary uppercase tracking-[.12em] font-bold">Servicios</p>
                    <h2 className="text-2xl font-extrabold max-w-sm">Soluciones integrales en agrimensura</h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-7">
                    {
                        servicios.map(({ icon: Icon, title, text }) => (
                            <motion.div key={title} className="flex min-h-38.5 rounded-xl border border-slate-200/90 gap-4 p-5 transition hover:-translate-y-1 hover:border-secondary/50 hover:shadow-lg" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
                                <Icon className="text-3xl shrink-0 text-secondary" />
                                <div>
                                    <p className="mb-2 font-extrabold">{ title }</p>
                                    <p className="text-sm text-slate-600">{ text }</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}