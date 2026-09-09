import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Services } from "./components/Services"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </>
  )
}

export default App
