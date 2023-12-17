import React from 'react';
import './styles/Header.css';
import Navbar from './Navbar';

function Header() {
	const links = [
		{ text: 'Home', path: '/' },
		{ text: 'Teams', path: '/teams' },
		{ text: 'Matches', path: '/matches' },
		{ text: 'About', path: '/about' },
		{ text: 'Contact', path: '/contact' }
	];
	return (
		<>
			<header>
				<Navbar links={links} />
			</header>
		</>
	);
}

export default Header;
