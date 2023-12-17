import React from 'react';
import './styles/Card.css';

function Card({ title, home, away, score }) {
	const matchResult = score ? `${home} ${score} ${away}` : `${away} - ${home}`;

	return (
		<>
			<div className="Card">
				<h2>{title}</h2>
				<h1>{matchResult}</h1>
			</div>
		</>
	);
}

export default Card;
