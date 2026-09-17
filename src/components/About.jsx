import { FiCheck } from "react-icons/fi"
import { motion } from "framer-motion"

const ticks = [
    {
        name: "Profesionales matriculados"
    },
    {
        name: "Cumplimiento de plazos"
    },
    {
        name: "Tecnología de última generación"
    },
    {
        name: "Confidencialidad y seriedad"
    },
    {
        name: "Calidad y precisión garantizada"
    },
    {
        name: "Atención personalizada"
    },
    
]


export const About = () => {
    return (
        <section id="nosotros" className="py-20">
            <div className="container-site grid items-center gap-2 md:grid-cols-2">
                <motion.img src="./nosotros.png" alt="imagen provincia santa fe" className="w-125 min-h-78 rounded-xl object-cover shadow-lg bg-slate-700 lg:mx-1" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}  transition={{ duration: 0.6, ease: "easeOut" }} />
                <motion.div className="relative py-4 lg:px-4 md:px-5" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}  transition={{ duration: 0.6, ease: "easeOut" }}>
                    <p className="text-secondary uppercase tracking-[.12em] font-bold font-heading">Sobre nosotros</p>
                    <p className="font-extrabold text-2xl font-heading">Experiencia, tecnología y compromiso</p>
                    <p className="relative mt-4 max-w-3xl text-md text-slate-600 font-body">En Azimut 360 brindamos servicios de agrimensura con un enfoque profesional, ético y orientado a resultados. Combinamos experiencia en campo con tecnología de precisión para garantizar información confiable que respalda cada decisión.</p>
                    <div className="relative mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {
                            ticks.map((tick) => (
                                <div key={tick.name} className="flex items-center gap-2 font-semibold font-body">
                                    <span className="grid h-4 w-4 items-center justify-center rounded-full bg-secondary text-white">
                                        <FiCheck />
                              +      </span>
                                    { tick.name }
                                </div>
                            ))
                        }
                    </div>
                </motion.div>

            </div>

        </section>
    )
}