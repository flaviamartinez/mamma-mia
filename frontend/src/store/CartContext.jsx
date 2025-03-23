import { createContext, useState, useEffect, useMemo } from 'react'
import { pizzaCart } from '../assets/data/pizzas'
import { toast } from 'sonner'
import axios from 'axios'
import Swal from 'sweetalert2'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const initialTotal = useMemo(() => pizzaCart.reduce((acc, item) =>
    acc + (Number(item.count) * Number(item.price))
  , 0), [])

  const [cart, setCart] = useState([])

  const [total, setTotal] = useState(initialTotal)

  const updateCart = (id, change) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: item.count + change }
          : item
      ))
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateTotal = () => {
    const newTotal = cart.reduce((acc, item) => acc + (Number(item.count) * Number(item.price))
      , 0)
    setTotal(newTotal)
  }

  const addItem = (id, name, price, img) => {
    const findItem = cart.find(pizza => pizza.id === id)
    if (findItem) {
      updateCart(id, 1)
    } else {
      const newItem = { id, name, price, count: 1, img }
      setCart(prevCart => [...prevCart, newItem])
    }
    toast.success(`Pizza ${name} añadida al carro`, { duration: 2000 })
  }

  const checkout = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/checkouts',
        { cart },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )

      if (res.status === 200) {
        Swal.fire({
          title: 'Pago exitoso',
          icon: 'success'
        })
        setCart([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    updateTotal()
  }, [cart])

  const stateGlobal = {
    cart,
    total,
    updateCart,
    removeItem,
    updateTotal,
    addItem,
    checkout
  }

  return <CartContext.Provider value={stateGlobal}>{children}</CartContext.Provider>
}

export default CartContextProvider
