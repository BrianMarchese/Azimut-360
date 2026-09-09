import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Proceso } from "./components/Proceso"
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
      </main>
    </>
  )
}

export default App
