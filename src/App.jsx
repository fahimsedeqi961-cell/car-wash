import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App
