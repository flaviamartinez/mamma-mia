import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.customHeader}>
      <h1>Pizzeria Mamma Mia</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  )
}

export default Header
