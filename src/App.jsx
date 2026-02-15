import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home";
import Services from "./pages/Servicespage/Services";
import BookingContent from "./pages/Bookin/BookingContent/BookingForm/BookingContent"
import Footer from '../src/components/layout/Footer'

function App() {

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<BookingContent />} />

        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
