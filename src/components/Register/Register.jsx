import React, {useState} from 'react';

function Register(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	function nameHandler(event){
		setName(event.target.value);
	}

	function emailHandler(event){
		setEmail(event.target.value);
	}

	function passwordHandler(event){
		setPassword(event.target.value);
	}

	function onSubmitSignin() {
		fetch('http://localhost:5000/Register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password
			})
		})
		.then(response=> response.json())
		.then(user => {
			if (user) {
				props.loadUser(user)
				props.onRouteChange('home')
			}
		})
	}

	return(
		<article className="mw6 center br2 pa3 pa4-ns b--black-10 shadow-5">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input onChange={nameHandler}
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input onChange={emailHandler}
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input onChange={passwordHandler}
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div>
			      <input onClick={onSubmitSignin}
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
			    </div>
			  </div>
			</main>
		</article>	
	);
}

export default Register;