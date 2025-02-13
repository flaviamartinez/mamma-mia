import { pizzaCart } from '../assets/data/pizzas'
import CartItem from './CartItem'
import './Cart.css'
import { useState, useEffect } from 'react'

const Cart = () => {
  const initialTotal = pizzaCart.reduce((acc, item) =>
    acc + (Number(item.count) * Number(item.price))
  , 0)

  const [total, setTotal] = useState(initialTotal)

  const [cart, setCart] = useState(pizzaCart)

  const updateCart = (id, change) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(item.count + change, 1) }
          : item
      ))
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + (Number(item.count) * Number(item.price))
      , 0)
    console.log(newTotal)
    setTotal(newTotal)
    console.log('Estado del carrito actualizado:', cart)
  }, [cart])

  return (
    <div className='custom-cart'>
      <h2>Detalles del pedido:</h2>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            initialCount={item.count}
            img={item.img}
            updateCart={updateCart}
            removeItem={removeItem}
          />
        ))}
      </div>
      <h2>Total: {total}</h2>
      <button>Pagar</button>
    </div>
  )
}

export default Cart
