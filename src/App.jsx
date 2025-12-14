import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Why from "./pages/Why"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/why" element={<Why />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>


  )
}

export default App
