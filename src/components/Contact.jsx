import { FiArrowRight, FiClock, FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi"
import { motion } from "framer-motion"

const services = [
  { title: 'Mensura' },
  { title: 'Subdivisiones'},
  { title: 'Relevamiento topográfico'},
  { title: 'Amojonamiento'},
  { title: 'Estado parcelario'},
  { title: 'Georreferenciación'},
  { title: 'Planos y documentación'},
]


export const Contact = () => {
    return (
        <motion.section id="contacto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }}>
            <div className="container-site grid md:grid-cols-2 gap-8 pb-20">
                <div className="font-heading">
                    <p className="text-secondary uppercase tracking-[.12em] font-bold">Servicios</p>
                    <h2 className="text-2xl font-extrabold max-w-sm">Soluciones integrales en agrimensura</h2>
                    <p className="mt-4 max-w-md text-sm leading-5 text-slate-600 font-body">Completá el formulario y nos pondremos en contacto a la brevedad para brindarte la mejor solución.</p>
                    {/* ICONOS CON DATOS */ }
                    <div className="mt-7 grid md:grid-cols-2 gap-5">
                        <div className="flex gap-3">
                            <FiMessageCircle className="text-xl text-secondary" />
                            <div>
                                <p className="font-bold font-heading">WhatsApp</p>
                                <p className="mt-1 leading-4 text-slate-600">+54 341 123 4567</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FiPhone className="text-xl text-secondary" />
                            <div>
                                <p className="font-bold">Teléfono</p>
                                <p className="mt-1 leading-4 text-slate-600">+54 341 765 4321</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FiMail className="text-xl text-secondary" />
                            <div>
                                <p className="font-bold">Email</p>
                                <p className="mt-1 leading-4 text-slate-600">info@azimut360.com</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FiMapPin className="text-xl text-secondary" />
                            <div>
                                <p className="font-bold">Dirección</p>
                                <p className="mt-1 leading-4 text-slate-600 font-body">Av. San Martín 1234, Rosario, Santa Fe</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FiClock className="text-xl text-secondary" />
                            <div>
                                <p className="font-bold">Horario de atención</p>
                                <p className="mt-1 leading-4 text-slate-600">Lunes a Viernes · 8:00 a 18:00 hs</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FORMULARIO */}
                <form action="" className="grid gap-3 sm:grid-cols-2">
                    <label className="text-sm font-bold">
                        Nombre completo
                        <input required name="name" autoComplete="name" className="field mt-2" placeholder="Tu nombre" />
                    </label>
                    <label className="text-sm font-bold font-heading">
                        Email
                        <input required name="email" autoComplete="email" type="email" className="field mt-2 font-body" placeholder="tu@email.com" />
                    </label>
                    <label className="text-sm font-bold font-heading">
                        Teléfono
                        <input name="phone" autoComplete="tel" inputMode="tel" className="field mt-2" placeholder="341-247-5843" />
                    </label>
                    <label className="text-sm font-bold font-heading">
                        Servicio de interés
                        <select name="service" className="field mt-2" defaultValue="">
                        <option value="" disabled>Seleccioná un servicio</option>{services.map(service => <option key={service.title}>{service.title}</option>)}</select>
                    </label>
                    <label className="text-sm font-bold sm:col-span-2 font-heading">
                        Mensaje
                        <textarea required name="message" className="field mt-2 min-h-25 resize-none font-body" placeholder="Contanos acerca de tu proyecto..." />
                    </label>
                    <div className="flex items-center gap-4 sm:col-span-2">
                        <button className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-md bg-secondary px-5 py-3 text-[13px] font-extrabold outline-none motion-safe:transition motion-safe:hover:-translate-y-0.5 hover:bg-primary" type="submit">
                            Enviar consulta 
                            <FiArrowRight />
                        </button>
                    </div>
                </form>

            </div>
        </motion.section>
    )
}