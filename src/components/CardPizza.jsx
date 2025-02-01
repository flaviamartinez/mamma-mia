import './CardPizza.css'

const CardPizza = ( {name, price, ingredients, img }) => {
  return (
	<div className="custom-card">
    <div className='img-container'>
      <img src={img} alt={`${name} image`} className='card-img' />
    </div>
    <div className='description-container'>
        <h2 className='title'>Pizza {name}</h2>
        <div className='ingredients-container'>
          <p>Ingredientes:</p>
          <p>🍕{ingredients.join(", ")}</p>
        </div>
        <h3 className='price'>{`Precio: $${price.toLocaleString('es-CL')}`}</h3>
        <div className='button-container'>
          <button className='custom-card-button'>Ver Más 👀</button>
          <button className='custom-card-button'>Añadir 🛒</button>
        </div>
    </div>
  </div>
  )
}

export default CardPizza