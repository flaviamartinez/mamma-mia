import styles from './App.module.css'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <main className={styles.appContainer}>
        <div className={styles.navWrapper}>
          <Navbar />
        </div>
        <div className={styles.homeWrapper}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
