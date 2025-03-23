import React, { useContext, useEffect } from 'react'
import styles from './Profile.module.css'
import { UserContext } from '../store/UserContext'

const Profile = () => {
  const { fetchProfile, profile, logout } = useContext(UserContext)

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <div className={styles.profileContainer}>
      {profile
        ? (
          <>
            <h1 className={styles.title}>Tu Perfil</h1>
            <p>Usuario: {profile}</p>
            <button className={styles.logoutButton} onClick={logout}>Cerrar sesión</button>
          </>
          )
        : (
          <p>Debes iniciar sesión para ver tu perfil.</p>
          )}
    </div>
  )
}

export default Profile
