import './Navbar.css'
import Button from './Button'
import homeIcon from '../assets/icons/pizza.png'
import profileIcon from '../assets/icons/profile.png'
import logoutIcon from '../assets/icons/logout.png'
import loginIcon from '../assets/icons/register.png'
import registerIcon from '../assets/icons/register.png'
import totalIcon from '../assets/icons/cart.png'

const Navbar = () => {
	const total = 25000;
	const token = false;



  return (
	<nav>
		<p>Pizzeria Mamma Mia</p>
		<Button iconButton={homeIcon} textButton="Home" displayButton= {true}/>
		<Button iconButton={profileIcon} textButton="Profile" displayButton={token}/>
		<Button iconButton={logoutIcon} textButton="Logout" displayButton={token}/>
		<Button iconButton={loginIcon} textButton="Login" displayButton={!token}/>
		<Button iconButton={registerIcon} textButton="Register" displayButton={!token}/>
		<Button iconButton={totalIcon} textButton={`$${total}`} displayButton={true}/>

	</nav>
  )
}

export default Navbar