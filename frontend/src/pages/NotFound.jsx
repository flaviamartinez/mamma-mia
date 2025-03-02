import React from 'react'
import Button from '../components/Button'
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img src='../src/assets/icons/error.png' alt='' className={styles.icon} />
      </div>
      <h2 className={styles.title}>404 - Oops... Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <Link to='/' className={styles.homeButton}>Volver al inicio</Link>
    </div>
  )
}

export default NotFound
