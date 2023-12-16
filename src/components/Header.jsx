import React from 'react';
import './Header.css';

function Header() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#teams">Teams</a>
						</li>
						<li>
							<a href="#matches">Matches</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
