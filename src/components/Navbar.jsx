import React from 'react';

function Navbar({ links }) {
	return (
		<>
			<nav>
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<a href={link.path}>{link.text}</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
