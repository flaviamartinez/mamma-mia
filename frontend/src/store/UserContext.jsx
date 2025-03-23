import { createContext, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  const auth = async (email, password, route) => {
    try {
      const URL = `http://localhost:5000/api/auth/${route}`
      const payload = { email, password }
      const user = await axios.post(URL, payload)
      localStorage.setItem('token', user.data.token)
      setToken(user.data.token)
      localStorage.setItem('email', user.data.email)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.error
        })
      } else {
        console.log('Error de conexión con el servidor')
      }
    }
  }

  const fetchProfile = async () => {
    if (token) {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(res)
        setProfile(res.data.email)
        console.log(profile)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const stateGlobal = {
    token,
    profile,
    logout,
    auth,
    fetchProfile
  }

  return <UserContext.Provider value={stateGlobal}>{children}</UserContext.Provider>
}

export default UserContextProvider
