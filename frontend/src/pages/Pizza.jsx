import React, { useEffect, useState } from 'react'
import styles from './Pizza.module.css'
import { useParams, useNavigate } from 'react-router-dom'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const getPizza = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
      if (!res.ok) {
        throw new Error('Error: Pizza not found')
      }
      const data = await res.json()
      return setPizza(data)
    } catch (e) {
      console.error(e)
      navigate('/not-found', { replace: true })
    }
  }

  useEffect(() => {
    getPizza()
  }, [])

  if (!pizza) {
    return
  }

  return (
    <div className={styles.pizzaContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.imgPizza} src={pizza.img} alt={`${pizza.name} image`} />
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.title}>Pizza {pizza.name}</p>
        <p className={styles.desc}>{pizza.desc}</p>
        <div className={styles.ingredientsContainer}>
          <p>🍕 Ingredientes: {pizza.ingredients.join(', ')}</p>
        </div>
        <button className={styles.customButton}>Añadir <p className={styles.price}>{`$ ${pizza.price.toLocaleString('es-CL')}`}</p></button>
      </div>
    </div>
  )
}

export default Pizza
