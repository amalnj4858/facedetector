import React from 'react';

const Clear = ({clickClear}) => {
	return(
		<button onClick={clickClear} className='pa1 grow br3 w-10 pointer' > Clear </button>
	);
}

export default Clear;