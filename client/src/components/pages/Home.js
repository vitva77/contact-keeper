import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const contactContext = useContext(ContactContext);
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	const { contacts } = contactContext;

	return (
		<div className="grid-2">
			<div>
				<ContactForm />
			</div>
			<div>
				<h2>My Contacts List</h2>
				{contacts !== null && contacts.length === 0 ? '' : <ContactFilter />}
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
