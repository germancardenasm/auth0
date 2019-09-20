import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul>
				<li className='navbar__navitem'>
					<NavLink to='/' exact>
						HOME
					</NavLink>
				</li>
				<li className='navbar__navitem'>
					<NavLink to='/profile'>PROFILE</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
