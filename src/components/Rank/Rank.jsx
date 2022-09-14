import React from 'react';

function Rank(props) {
	return(
		<div className='black f3'>
			<div>
				{ props.name + `, ur current entry count is...`}
			</div>
			<div className='white f1'>
				{props.entries}
			</div>
		</div>
	);
}

export default Rank;