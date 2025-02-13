import { useState } from 'react'
import './CartItem.css'

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
    <div className='product-container'>
      <div className='img-container'>
        <img src={img} alt={`${name} image`} className='product-img' />
      </div>
      <p>{name}</p>
      <p>{price}</p>
      <button className='custom-button' onClick={remove}>-</button>
      <p>{count}</p>
      <button className='custom-button' onClick={add}>+</button>
    </div>
  )
}

export default CartItem
