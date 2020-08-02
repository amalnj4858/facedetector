import React from 'react';

const Inputform = ({onChange,onSubmit}) => {
	return(
		<div className='tc dib w-60' id ='input'>
		<input id ='userInput' className = 'w-75 pa1 ma1 ' onChange={onChange}/>
		<button className = 'w-20 pa1 ma1 br3 pointer grow' onClick = {onSubmit} > Detect </button>
		</div>);
	}

export default Inputform;