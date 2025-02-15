import styles from './Navbar.module.css'
import Button from '../components/Button'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className={styles.customNav}>
      <p>Pizzeria Mamma Mia</p>
      <div className={styles.btnWrapper}>
        <div className={styles.btnProfileWrapper}>
          <Button textButton='🍕 Home' displayButton />
          <Button textButton='🔓 Profile' displayButton={token} />
          <Button textButton='🔒 Logout' displayButton={token} />
          <Button textButton='🔐 Login' displayButton={!token} />
          <Button textButton='🔐 Register' displayButton={!token} />
        </div>
        <div>
          <Button textButton={`🛒 $ ${total.toLocaleString('es-CL')}`} displayButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
