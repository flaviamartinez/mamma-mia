import React, { useState } from 'react'
import Swal from 'sweetalert2'
import styles from './Login.module.css'

const Login = () => {
  const [users, setUsers] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = users

    if (!email || !password) {
      Swal.fire({
        title: 'Todos los campos son obligatorios',
        icon: 'error'
      })
      return
    }

    if (password.length < 6) {
      Swal.fire({
        title: 'Contraseña debe tener al menos 6 caracteres',
        icon: 'error'
      })
      return
    }

    Swal.fire({
      title: 'Registro exitoso',
      icon: 'success'
    })

    setUsers({ email: '', password: '' })
  }
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2>Login</h2>

      <div className={styles.inputContainer}>
        <p>Email</p>
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          value={users.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <p>Password</p>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          value={users.password}
          onChange={handleChange}
        />
      </div>

      <button type='submit' className={styles.loginBtn}>Login</button>
    </form>
  )
}

export default Login
