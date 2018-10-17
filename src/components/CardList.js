import React from 'react';
import Card from './Card';

const CardList = ({ doggos }) => {
	if (!doggos) {
		throw new Error('No dogs were found. :(');
	}
	return (
		<div>
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