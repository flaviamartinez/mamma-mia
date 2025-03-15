import styles from './App.module.css'
import Navbar from './layouts/Navbar'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import AppRoutes from './routes/AppRoutes.jsx'
import AppProviders from './store/AppProviders.jsx'

function App () {
  return (
    <BrowserRouter>
      <AppProviders>
        <main className={styles.appContainer}>
          <div className={styles.navbarWrapper}>
            <Navbar />
          </div>
          <div className={styles.homeWrapper}>
            <AppRoutes />
          </div>
          <div className={styles.footerWrapper}>
            <Footer />
          </div>
        </main>
        <Toaster richColors position='bottom-right' />
      </AppProviders>
    </BrowserRouter>
  )
}

export default App
