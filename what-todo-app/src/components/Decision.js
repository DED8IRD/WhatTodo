import React from 'react';

const Decision = (props) => {
	return (
		<button 
      className='block-btn'
			onClick={props.chooseRandom}
			disabled={(props.empty)}
		>
			Decide
		</button>
	)
}

export default Decision
