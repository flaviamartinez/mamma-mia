import CartItem from '../components/CartItem'
import styles from './Cart.module.css'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext'

const Cart = () => {
  const { cart, total, updateCart, removeItem } = useContext(CartContext)

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
