import styles from './App.module.css'
import Navbar from './layouts/Navbar'
import Home from './layouts/Home'
import Footer from './components/Footer'
// import Register from './components/Register'
// import Login from './components/Login'
// import Cart from './components/Cart'
import Pizza from './components/Pizza'

function App () {
  return (
    <main className={styles.appContainer}>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
      <div className={styles.homeWrapper}>
        {/* <Home /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Cart /> */}
        <Pizza />
      </div>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}

export default App
