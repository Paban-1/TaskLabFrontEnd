import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import TestCompo from "./components/testCompo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestCompo/>
    </>
  )
}

export default App
