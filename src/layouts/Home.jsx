import Header from '../components/Header.jsx'
import CardPizza from '../components/CardPizza.jsx'
import './Home.css'
import { pizzas } from '../assets/data/pizzas.js'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='card-container'>
        {pizzas.map((pizza) => (<CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} />))}
      </div>
    </div>
  )
}

export default Home
