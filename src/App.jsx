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
      </main>
    </>
  )
}

export default App
