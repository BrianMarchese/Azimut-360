import { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { LuDraftingCompass } from "react-icons/lu";
import { motion } from "framer-motion"

const faqsData = [
  {
    id: 1,
    question: "¿Qué es una mensura y para qué sirve?",
    answer: "Es el trabajo técnico que determina, mide y representa legalmente los límites, dimensiones y superficie de un inmueble."
  },
  {
    id: 2,
    question: "¿Cuánto tiempo tarda un trabajo de mensura?",
    answer: "Depende de la complejidad y del organismo interviniente. Luego de una primera consulta brindamos un plazo estimado concreto."
  },
  {
    id: 3,
    question: "¿Necesito estar presente durante el relevamiento?",
    answer: "No siempre. Podemos coordinar el acceso y mantenerte informado durante todo el proceso."
  },
  {
    id: 4,
    question: "¿Qué documentación necesito para iniciar una mensura?",
    answer: "Por lo general se requiere el título de propiedad inscripto, antecedentes catastrales y DNI del titular. Nosotros nos encargamos de las gestiones."
  },
  {
    id: 5,
    question: "¿Cuánto tiempo demora la entrega de un plano?",
    answer: "Un trabajo estándar suele completarse entre 10 y 20 días hábiles, incluyendo los tiempos de visado en el catastro local."
  },
  {
    id: 6,
    question: "¿Qué información necesito para solicitar un servicio?",
    answer: "La ubicación del inmueble, una breve descripción del objetivo y, si tenés, antecedentes o documentación catastral."
  }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section id="faq" className="py-20">
            <motion.div className="container-site" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
                {/* Encabezado */}
                <div className="font-heading">
                    <p className="text-secondary uppercase tracking-[.12em] font-bold">Preguntas frecuentes</p>
                    <h2 className="text-2xl font-extrabold max-w-sm">Resolvemos tus dudas</h2>
                </div>

                {/* Lista */}
                <div className="space-y-3 mt-7 ">
                    {faqsData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        
                        return (
                            <div key={faq.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                {/* Botón pregunta */}
                                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                                    <span>{faq.question}</span>
                                    <FiChevronDown className={`w-5 h-5 text-secondary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Respuesta */}
                                {isOpen && (
                                    <div className="px-4 pb-4 pt-1 text-slate-600 text-[15px] border-t border-slate-100">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </motion.div>

            <div className="py-20">
                <div className="container-site flex flex-col items-center justify-between gap-5 md:flex-row bg-secondary py-6 text-white">
                    <div className="flex items-center gap-5">
                        <LuDraftingCompass className="text-6xl" />
                        <div>
                            <p className="text-2xl font-extrabold leading-[1.1] font-heading">¿Tenés un proyecto?<br />Estamos listos para ayudarte</p>
                            <p className="mt-2 text-sm font-body">Contanos tu idea y te enviaremos una propuesta a medida.</p>
                        </div>
                    </div>
                    <a href="#contacto" className="inline-flex items-center gap-3 rounded-md bg-white px-6 py-3 text-xs font-extrabold text-secondary shadow-lg font-body">
                        Solicitar presupuesto ahora
                        <FiArrowRight />
                    </a>
                </div>
            </div>
        </section>
    )
}