import styles from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({ textButton, displayButton, to }) => {
  if (!displayButton) {
    return null
  }
  return (
    <Link to={to} className={styles.customButton}>
      {textButton}
    </Link>
  )
}

export default Button
