import React from 'react';

const Scroll = (props) => {
	return (
		<div className="tc" style={{ overflow:'scroll', height:'calc(100vh - 203px)'}}>
			{props.headerHeight}
			{props.children}
		</div>
	);
}

export default Scroll;