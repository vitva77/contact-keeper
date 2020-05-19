import React, { Fragment, useContext } from 'react';

import AuthContext from '../../context/auth/authContext';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	const authContext = useContext(AuthContext);

	const { isAuthenticated, logout, user } = authContext;

	const onLogout = (e) => {
		e.preventDefault();

		logout();
	};

	const authLinks = (
		<Fragment>
			<li>Hello, {user && user.name}</li>
			<li>
				<a href="#!" onClick={onLogout}>
					Logout
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			{/* <li>
				<NavLink exact to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/about">About</NavLink>
			</li> */}
			<li>
				<NavLink to="/register">Register</NavLink>
			</li>
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<FontAwesomeIcon icon={faIdCardAlt} /> {title}
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
	title: 'Contact Keeper'
};

export default Navbar;
