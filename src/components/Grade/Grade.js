import React from 'react';

class Grade extends React.Component{

	constructor(props){
		super(props);
	}
	render(){
	return(
		<div className = 'tc ba bw1 pa1 dib br3' id ='rank'>
			<div className = ' tc'>
				<p className='f4 pa1'> {`Hey ${this.props.name}... Your current number of entries is :`} </p>
				<p className='f2 pa1'> {`#${this.props.submits}`} </p>
			</div>
		</div>
	);
  }
}

export default Grade;