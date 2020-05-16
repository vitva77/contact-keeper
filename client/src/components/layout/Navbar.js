import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	return (
		<div className="navbar bg-primary">
			<h1>
				<FontAwesomeIcon icon={faIdCardAlt} /> {title}
			</h1>
			<ul>
				<li>
					<NavLink exact to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
			</ul>
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
