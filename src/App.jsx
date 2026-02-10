import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home";
import Services from "./pages/Servicespage/Services";
import Booking from "./pages/Booking"
import Footer from '../src/components/layout/Footer'
function App() {

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Booking />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
