import React, { useState } from 'react'
import Swal from 'sweetalert2'
import styles from './Register.module.css'

const Register = () => {
  const [users, setUsers] = useState(
    {
      email: '',
      password: '',
      confirmPassword: ''
    }
  )

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password, confirmPassword } = users
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      Swal.fire({
        title: 'Todos los campos son obligatorios',
        icon: 'error'
      })
      return
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Las contraseñas no coinciden',
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

    setUsers({ email: '', password: '', confirmPassword: '' })
  }
  return (
    <form onSubmit={handleSubmit} className={styles.registerForm}>
      <h2>Register</h2>
      <div className={styles.inputContainer}>
        <p>Email</p>
        <input type='email' name='email' placeholder='Enter your email' value={users.email} onChange={handleChange} />
      </div>
      <div className={styles.inputContainer}>
        <p>Password</p>
        <input type='password' name='password' value={users.password} placeholder='Enter your password' onChange={handleChange} />
      </div>
      <div className={styles.inputContainer}>
        <p>Confirm Password</p>
        <input type='password' name='confirmPassword' placeholder='Confirm your password' value={users.confirmPassword} onChange={handleChange} />
      </div>

      <button type='submit' className={styles.registerBtn}>Register</button>
    </form>
  )
}

export default Register
