import './Button.css'

const Button = ({ textButton, displayButton }) => {
  if (!displayButton) {
    return null
  }
  return (
    <button className='custom-button'>
      {textButton}
    </button>
  )
}

export default Button
