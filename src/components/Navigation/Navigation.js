import React from 'react';

const Navigation = ({onclick,linktext1,linktext2,refresh}) => {
	return(
	<div style = {{display  : 'flex',justifyContent : 'flex-end'}}>
	<div className = 'link f3 pa3 ma3 pointer underline dim' onClick={()=>onclick('register')}>
	{linktext1}
	</div>
	<div className = 'link f3 pa3 ma3 pointer underline dim' onClick={()=>onclick('signin')}>
	{linktext2}
	</div>
	</div>);
}

export default Navigation;