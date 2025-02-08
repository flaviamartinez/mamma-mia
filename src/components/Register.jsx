import React, { useState } from 'react'
import Swal from 'sweetalert2'

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
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>

      <p>Email</p>
      <input type='email' name='email' placeholder='Enter your email' value={users.email} onChange={handleChange} />

      <p>Password</p>
      <input type='password' name='password' value={users.password} placeholder='Enter your password' onChange={handleChange} />

      <p>Confirm Password</p>
      <input type='password' name='confirmPassword' placeholder='Confirm your password' value={users.confirmPassword} onChange={handleChange} />

      <button type='submit'>Register</button>
    </form>
  )
}

export default Register
