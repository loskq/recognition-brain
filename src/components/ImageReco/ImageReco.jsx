import React from 'react';
import './ImageReco.css'

function ImageReco(props) {
	return(
		<div className='ma4 mt0'>
			<p className='f3'>
				{'This Magic Brain will detect anything in ur pics. Try it.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-1'>
					<input 
						onChange={props.onInputChange}		
						className='f4 pa2 w-70 center' type='text' />
					<button 
					onClick={props.onSubmit}
					className='w-30 grow f4 link ph3 pv2 dib black bg-light-blue'>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageReco;