import React, { useState } from 'react';

function Signin(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function emailHandler(event){
		setEmail(event.target.value);
	}

	function passwordHandler(event){
		setPassword(event.target.value);
	}

	const onSubmitSignin = () =>{
			fetch('http://localhost:5000/Signin', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: email,
					password: password
				})
			})
			.then(response=> response.json())
			.then(user => {
				if (user.id) {
					props.loadUser(user);
					props.onRouteChange('home');
				}
			})	
	}
	return(
		<article className="mw6 center br2 pa3 pa4-ns b--black-10 shadow-5">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input onChange={emailHandler}
			       	 	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			       	 	type="email" name="email"  />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input onChange={passwordHandler}
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="password" name="password"  />
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={onSubmitSignin}
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in" />
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={()=>props.onRouteChange('Register')} 
			      className="f6 link dim black db pointer">Register</p>
			    </div>
			  </div>
			</main>
		</article>	
	);
}

export default Signin;