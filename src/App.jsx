import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </a>
      </div>
      <h1>Thare bhai Vikash kundu ki personal website. Stay tuned for updates &#9829;</h1>
    </>
  )
}

export default App
