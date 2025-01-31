import './CardPizza.css'

const CardPizza = ( {cardImg, cardTitle, cardDescription, cardPrice }) => {
  return (
	<div className="custom-card">
    <div className='img-container'>
      <img src={cardImg} alt={`${cardTitle} image`} className='card-img' />
    </div>
    <h2>{cardTitle}</h2>
    <p>Ingredientes:</p>
    <p>{cardDescription}</p>
    <h3>{`Precio: $${cardPrice}`}</h3>
    <div className='button-container'>
      <button>Ver Más</button>
      <button>Añadir</button>
    </div>
  </div>
  )
}

export default CardPizza