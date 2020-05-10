import React from 'react';
import Date from './Date'


function Match(props) {
    
    return (
		<div className='match'>
			<img src={props.imgUrl} alt='match thumbnail' />
            <p>{props.title}</p>
            <p className='date'><Date date={props.date}/></p>
		</div>
	);
}

export default Match;
