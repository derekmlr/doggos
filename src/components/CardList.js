import React from 'react';
import Card from './Card';

import './CardList.css';

const CardList = ({ doggos }) => {
	if (!doggos) {
		throw new Error('No dogs were found. :(');
	}
	return (
		<div className="CardList-container">
			{
				doggos.map((dog, i) => {
					return (
						<Card 
							key={i}
							id={dog.id}
							name={dog.name}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;