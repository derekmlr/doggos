import React from 'react';

const Card = ({ id, name, breed }) => {
	return (
		<div className="tc grow bg-black white br3 pa2 ma2 dib bw2">
			<img src={`img/dog${id}.jpeg`} alt={name} />
			<div>
				<h2>{name}</h2>
			</div>
		</div>
	);
}

export default Card;