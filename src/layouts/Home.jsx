import Header from '../components/Header.jsx'
import CardPizza from '../components/CardPizza.jsx'
import pepperoni from '../assets/img/pizza_pepperoni.jpg'
import margarita from '../assets/img/pizza_margarita.jpeg'
import espanola from '../assets/img/pizza_espanola.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='card-container'>
        <CardPizza cardImg={pepperoni} cardTitle="Pizza Pepperoni" cardDescription="Mozzarella, Pepperoni, Orégano" cardPrice={8000}/>
        <CardPizza cardImg={margarita} cardTitle="Pizza Margarita" cardDescription="Mozzarella, Orégano" cardPrice={5000}/>
        <CardPizza cardImg={espanola} cardTitle="Pizza Española" cardDescription="Mozzarella, Pepperoni, Orégano" cardPrice={12000}/>
      </div>
    </div>
  )
}

export default Home