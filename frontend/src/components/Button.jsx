import styles from './Button.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/UserContext'
import { useContext } from 'react'

const Button = ({ btnid, textButton, displayButton, to }) => {
  const { logout } = useContext(UserContext)

  if (!displayButton) {
    return null
  }

  const handleClick = () => {
    if (btnid === 'logout') {
      logout()
    }
  }

  return (
    <Link to={to} className={styles.customButton} onClick={handleClick}>
      {textButton}
    </Link>
  )
}

export default Button
