import React from 'react';

class SignIn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			enteredEmail : '',
			enteredPassword : '',
			result : ''
		}
	}

	onEmailChange = (event)=> {
		this.setState({enteredEmail : event.target.value});
	}

	onPasswordChange = (event)=> {
		this.setState({enteredPassword : event.target.value});
	}

	onButtonClick = ()=>{
		if(this.state.enteredEmail.length ==0 || this.state.enteredPassword.length ==0)
			alert('Email or Password cannot be left blank!');
		else
		fetch('https://immense-harbor-45058.herokuapp.com/signin',{
			method : 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				email : this.state.enteredEmail,
				password : this.state.enteredPassword
			})
		}).then(info=> info.json()).then(data=>{
			if(data== 'wrong creds'){
				alert('wrong password or id');
				}
			else
				{
			     this.props.onLoad(data);
				 this.props.onclick('main');
				}				
	})				
}

	render(){
	return(
		<div className = 'tc'>
			    <main class="pa4 ba bw1 br3 shadow-5 dib ma5">
			  <form class="measure center">
			    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
			      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
			      <div class="mt3">
			        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input onChange = {this.onEmailChange}  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div class="mv3">
			        <label class="db fw6 lh-copy f6" for="password">Password</label>
			        <input onChange = {this.onPasswordChange}  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div class="">
			      <input class="b ph3 pv2 input-reset ba bw1 br2 b-- bg-transparent grow dim pointer f6 dib" onClick={this.onButtonClick} type="button" value="Sign in"/>
			    </div>
			    <div class="lh-copy mt3">
			      <a class="f6 link dim black db pointer" onClick = {()=>this.props.onclick('register')} >Register!</a>
			    </div>
			  </form>
			</main>
		</div>
		);
	}
}


export default SignIn;