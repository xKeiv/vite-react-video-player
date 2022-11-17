import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from "./components/organisms/Navbar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
