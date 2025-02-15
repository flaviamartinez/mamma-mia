import { useState } from 'react'
import styles from './CartItem.module.css'

const CartItem = ({ id, name, price, initialCount, img, updateCart, removeItem }) => {
  const [count, setCount] = useState(initialCount)

  const add = () => {
    setCount((prev) => prev + 1)
    updateCart(id, 1)
  }

  const remove = () => {
    if (count > 1) {
      setCount((prev) => prev - 1)
      updateCart(id, -1)
    } else {
      setCount(0)
      removeItem(id)
    }
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt={`${name} image`} className={styles.productImg} />
      </div>
      <p className={styles.name}>Pizza {name}</p>
      <p>${price.toLocaleString('es-CL')}</p>
      <button className={styles.customButton} onClick={remove}>-</button>
      <p className={styles.count}>{count}</p>
      <button className={styles.customButton} onClick={add}>+</button>
    </div>
  )
}

export default CartItem
