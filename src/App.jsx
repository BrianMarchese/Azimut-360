import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { FAQ } from "./components/FAQ"
import { FloatButtonWhatsapp } from "./components/FloatButtonWhatsapp"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Proceso } from "./components/Proceso"
import { Proyectos } from "./components/Proyectos"
import { Services } from "./components/Services"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Proceso />
        <Proyectos />
        <FAQ />
        <Contact />
        <FloatButtonWhatsapp />
      </main>
      <Footer />
    </>
  )
}

export default App
