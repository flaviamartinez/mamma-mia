import styles from './Navbar.module.css'
import Button from '../components/Button'
import { CartContext } from '../store/CartContext'
import { useContext } from 'react'
import { UserContext } from '../store/UserContext'

const Navbar = () => {
  const { total } = useContext(CartContext)
  const { token } = useContext(UserContext)
  const isAuthenticated = !!token

  return (
    <nav className={styles.customNav}>
      <p>Pizzeria Mamma Mia</p>
      <div className={styles.btnWrapper}>
        <div className={styles.btnProfileWrapper}>
          <Button btnid='home' textButton='🍕 Home' to='/' displayButton />
          <Button btnid='profile' textButton='🔓 Profile' to='/profile' displayButton={isAuthenticated} />
          <Button btnid='logout' textButton='🔒 Logout' displayButton={isAuthenticated} />
          <Button btnid='login' textButton='🔐 Login' to='/login' displayButton={!isAuthenticated} />
          <Button btnid='register' textButton='🔐 Register' to='/register' displayButton={!isAuthenticated} />
        </div>
        <div>
          <Button textButton={`🛒 $ ${total.toLocaleString('es-CL')}`} to='/cart' displayButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
