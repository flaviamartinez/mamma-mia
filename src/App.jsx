import './App.css'
import Navbar from './layouts/Navbar'
import Home from './layouts/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'

function App () {
  return (
    <main className='app-container'>
      <div className='nav-wrapper'>
        <Navbar />
      </div>
      <div className='home-wrapper'>
        {/* <Home /> */}
        {/* <Register /> */}
        <Login />
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </main>
  )
}

export default App
