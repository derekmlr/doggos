import React from 'react';

const SearchBox = ({ searchValue, searchChange }) => {
	return (
		<div>
			<input
				className="pa3 ba mb4 br3 w-30"
				type="search"
				placeholder="Filter by dog name..."
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;