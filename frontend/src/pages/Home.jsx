import Header from '../components/Header.jsx'
import CardPizza from '../components/CardPizza.jsx'
import styles from './Home.module.css'
// import { pizzas } from '../assets/data/pizzas.js'
import { useState, useEffect } from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const getPizzas = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      return setPizzas(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.cardContainer}>
        {pizzas.map((pizza) => (<CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} desc={pizza.desc} />))}
      </div>
    </div>
  )
}

export default Home
