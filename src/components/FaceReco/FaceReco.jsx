import React from 'react';

function FaceReco(props) {
	return(
		<div className='center ma'>
			<div className='absolute mt2'>
				<img alt='' src={props.imageUrl} width='500px' height='auto'/>
			</div>
		</div>
	);
}

export default FaceReco;