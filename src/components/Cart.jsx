import { pizzaCart } from '../assets/data/pizzas'
import CartItem from './CartItem'
import styles from './Cart.module.css'
import { useState, useEffect } from 'react'

const initialTotal = pizzaCart.reduce((acc, item) =>
  acc + (Number(item.count) * Number(item.price))
, 0)

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

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

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + (Number(item.count) * Number(item.price))
      , 0)
    // console.log(newTotal)
    setTotal(newTotal)
    // console.log('Estado del carrito actualizado:', cart)
  }, [cart])

  return (
    <div className={styles.customCart}>
      <h2>Detalles del pedido:</h2>
      <div className={styles.itemsContainer}>
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
      <h2>Total: ${total.toLocaleString('es-CL')}</h2>
      <button className={styles.customButton}>Pagar</button>
    </div>
  )
}

export default Cart
