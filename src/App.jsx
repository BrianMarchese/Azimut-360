import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Admin } from "./pages/Admin"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Login } from "./pages/Login"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/login" element={ <Login /> } />
          <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
          }
      />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
