import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>Tu cuenta</h1>
      <p>Usuario: jane.doe@gmail.com</p>
      <button className={styles.logoutButton}>Cerrar sesión</button>
    </div>
  )
}

export default Profile
