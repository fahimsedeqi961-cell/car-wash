import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App
