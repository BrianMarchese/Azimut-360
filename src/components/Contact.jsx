import { FiArrowRight, FiClock, FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi"
import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from '@emailjs/browser';

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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    // Si se modifica algun campo lo obtengo trayendo la demas data con ...
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    // Manejo el envio del formulario con la data que necesita
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Parámetros que coinciden con las variables de EmailJS
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey)

            /* ACA VA LOGICA SUPABASE */

            setStatus({
                success:true,
                message: "¡Consulta enviada con éxito! Nos pondremos en contacto a la brevedad."
            })

            // Limpiar formulario
            setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        } catch (error) {
            console.error('Error al enviar la consulta:', error);
            setStatus({ 
                success: false, 
                message: 'Hubo un error al enviar la consulta. Por favor, intentalo de nuevo.' 
            });
        } finally {
            setLoading(false);
        }
    }

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
                <form action="" onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
                    <label className="text-sm font-bold">
                        Nombre completo
                        <input required name="name" autoComplete="name" value={formData.name} onChange={handleChange} className="field mt-2" placeholder="Tu nombre" />
                    </label>
                    <label className="text-sm font-bold font-heading">
                        Email
                        <input required name="email" autoComplete="email" type="email" value={formData.email}  onChange={handleChange} className="field mt-2 font-body" placeholder="tu@email.com" />
                    </label>
                    <label className="text-sm font-bold font-heading">
                        Teléfono
                        <input name="phone" autoComplete="tel" inputMode="tel" value={formData.phone} onChange={handleChange} className="field mt-2" placeholder="341-247-5843" />
                    </label>
                    <label className="text-sm font-bold font-heading">
                        Servicio de interés
                        <select name="service" value={formData.service} onChange={handleChange} className="field mt-2">
                        <option value="" disabled>Seleccioná un servicio</option>{services.map(service => <option key={service.title}>{service.title}</option>)}</select>
                    </label>
                    <label className="text-sm font-bold sm:col-span-2 font-heading">
                        Mensaje
                        <textarea required name="message" value={formData.message} onChange={handleChange} className="field mt-2 min-h-25 resize-none font-body" placeholder="Contanos acerca de tu proyecto..." />
                    </label>
                    <div className="flex items-center gap-4 sm:col-span-2">
                        {
                            status && status.success ? (
                                <p className={`text-sm font-medium p-3 rounded-md ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {status.message}
                                </p>
                            ) : (
                                <button 
                                    className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-md bg-secondary px-5 py-3 text-[13px] font-extrabold text-white outline-none motion-safe:transition motion-safe:hover:-translate-y-0.5 hover:bg-primary disabled:opacity-50" 
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Enviando consulta...' : 'Enviar consulta'} 
                                    <FiArrowRight />
                                </button>
                            )
                        }

                    </div>
                </form>

            </div>
        </motion.section>
    )
}