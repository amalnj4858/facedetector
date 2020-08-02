import React from 'react';

const Detectionbox = ({url,bounds,isClicked}) => {
	if(!isClicked)
	return(
		<div className='bound dib'>
			<img src = {url} width = '500px' height = 'auto' id ='detectedImage'  />
			 
		</div>
	);
	else
		return(
			<div className='bound dib'>
			<img src = {url} width = '500px' height = 'auto' id ='detectedImage'  />
			<div className='bounding-box' style = {{top:bounds.topRow,bottom:bounds.bottomRow,left:bounds.leftCol,right:bounds.rightCol}} > </div> 
			</div>
		);
}

export default Detectionbox;