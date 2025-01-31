import'./Button.css'

const Button = ( {iconButton, textButton, displayButton} ) => {
	if (!displayButton) {
		return null;
	  }
  return (
	<button>
		{iconButton && (
			<img
				src={iconButton}
				alt={`${textButton} icon`}
				className="button-icon"
			/>
		)}
		{textButton}
	</button>
  )
}

export default Button