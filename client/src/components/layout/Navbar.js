import React, { Fragment, useContext } from 'react';

import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';

import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	const contactContext = useContext(ContactContext);
	const authContext = useContext(AuthContext);

	const { clearContacts } = contactContext;
	const { isAuthenticated, logout, user } = authContext;

	const onLogout = (e) => {
		e.preventDefault();

		logout();
		clearContacts();
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
				<Link to="/" className="brand">
					<FontAwesomeIcon icon={faIdCardAlt} /> {title}
				</Link>
			</h1>
			<ul>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
			</ul>
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
