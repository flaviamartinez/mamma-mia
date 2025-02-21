import React, { useEffect, useState } from 'react'
import styles from './Pizza.module.css'

const Pizza = () => {
  const [pizza, setPizza] = useState([])

  const getPizza = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas/p001')
    const data = await res.json()
    return setPizza(data)
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <div className={styles.pizzaContainer}>
      <div className={styles.imgContainer}>
        <img src={pizza.img} alt={`${pizza.name} image`} />
      </div>
      <p>Pizza {pizza.name}</p>
      <p>{pizza.price}</p>
      <p>{pizza.desc}</p>
      <div>
        <p>🍕 Ingredientes:</p>
        <ul>
          {pizza.ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>))}
        </ul>
      </div>
      <button>Añadir 🛒</button>
    </div>
  )
}

export default Pizza
