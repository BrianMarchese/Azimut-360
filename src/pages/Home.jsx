import { Hero } from "../components/Hero"
import { Services } from "../components/Services"
import { About } from "../components/About"
import { Proceso } from "../components/Proceso"
import { Proyectos } from "../components/Proyectos"
import { FAQ } from "../components/FAQ"
import { Contact } from "../components/Contact"
import { FloatButtonWhatsapp } from "../components/FloatButtonWhatsapp"
import { Testimonios } from "../components/Testimonios"

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Proceso />
      <Proyectos />
      <Testimonios />
      <FAQ />
      <Contact />
      <FloatButtonWhatsapp />
    </>
  )
}