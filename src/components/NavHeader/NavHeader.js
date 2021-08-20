import { NavLink } from 'react-router-dom'
import './NavHeader.scss'
const NavHeader = () => {
  return(
		<header>
		<div className="warper">
			<div className="logo-ares">
				<h2>MyOnlineMentor</h2>
			</div>
			<nav>
				<ul>
					<li><NavLink activeClassName="active" to="/users" exact>Home</NavLink></li>
					<li><NavLink activeClassName="active" to="/user-form" exact>Add User</NavLink></li>
				</ul>
			</nav>
		</div>
	</header>
	)
}

export default NavHeader;