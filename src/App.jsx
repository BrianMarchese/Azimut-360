import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Admin } from "./pages/Admin"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
