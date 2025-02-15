import styles from './Button.module.css'

const Button = ({ textButton, displayButton }) => {
  if (!displayButton) {
    return null
  }
  return (
    <button className={styles.customButton}>
      {textButton}
    </button>
  )
}

export default Button
