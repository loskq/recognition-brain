import React from 'react';

const Nav =(props)=> {
	if (props.signIn)  {
		return(
		<nav style={{display: 'flex', justifyContent: 'flex-end' }}>
			<p onClick={()=> props.onRouteChange('Signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav> 
	); 
	} else {
		return(
	<nav style={{display: 'flex', justifyContent: 'flex-end' }}>
		<p onClick={()=> props.onRouteChange('Signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
		<p onClick={()=> props.onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
	</nav>
	);
	}	
	
}

export default Nav;