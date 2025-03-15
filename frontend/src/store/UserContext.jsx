import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(true)

  const logout = () => {
    setToken(false)
  }

  const stateGlobal = {
    token,
    logout
  }

  return <UserContext.Provider value={stateGlobal}>{children}</UserContext.Provider>
}

export default UserContextProvider
