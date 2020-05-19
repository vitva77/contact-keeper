import React, { Fragment, useContext, useEffect } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <p className="text-center">No new contacts added yet</p>;
	}

	return (
		// <Fragment>
		// 	{contacts !== null && !loading ? (
		// 		<TransitionGroup>
		// 			{filtered !== null ? (
		// 				filtered.map((contact) => (
		// 					<CSSTransition key={contact._id} timeout={300} classNames="item">
		// 						<ContactItem contact={contact} />
		// 					</CSSTransition>
		// 				))
		// 			) : (
		// 				contacts.map((contact) => (
		// 					<CSSTransition key={contact._id} timeout={300} classNames="item">
		// 						<ContactItem contact={contact} />
		// 					</CSSTransition>
		// 				))
		// 			)}
		// 		</TransitionGroup>
		// 	) : (
		// 		<Spinner />
		// 	)}
		// </Fragment>
		<Fragment>
			{contacts !== null && !loading ? (
				<Fragment>
					{filtered !== null ? (
						filtered.map((contact) => <ContactItem key={contact._id} contact={contact} />)
					) : (
						contacts.map((contact) => <ContactItem key={contact._id} contact={contact} />)
					)}
				</Fragment>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Contacts;
