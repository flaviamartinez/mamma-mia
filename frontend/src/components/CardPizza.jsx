import styles from './CardPizza.module.css'

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className={styles.customCard}>
      <div className={styles.imgContainer}>
        <img src={img} alt={`${name} image`} className={styles.cardImg} />
      </div>
      <div className={styles.descriptionContainer}>
        <h2 className={styles.title}>Pizza {name}</h2>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.ingredientsContainer}>
          <p>🍕 Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>))}
          </ul>
        </div>
        <h3 className={styles.price}>{`Precio: $${price.toLocaleString('es-CL')}`}</h3>
        <div className={styles.buttonContainer}>
          <button className={styles.customCardButton}>Ver Más 👀</button>
          <button className={styles.customCardButton}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
