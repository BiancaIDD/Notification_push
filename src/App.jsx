import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Notification from './components/Notification/Notification'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App
