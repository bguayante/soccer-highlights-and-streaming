import React from 'react';

const MoviePlayer = (props) => {
	let iFrame = () => {
	  return (
	    {__html: props.embed}
	  )
	}

	return (
		<div className='videoPlayer'>
			<div dangerouslySetInnerHTML={iFrame()} />
		</div>
	);
};

export default MoviePlayer;
