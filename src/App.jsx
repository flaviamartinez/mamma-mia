import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './layouts/Home'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app-container'>
      <div className='nav-wrapper'>
        <Navbar />
      </div>
      <div className='home-wrapper'>
        <Home />
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </main>
  )
}

export default App
