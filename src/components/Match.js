import React from 'react';
import Date from './Date';

function Match(props) {
	return (
		<div className='match'>
			<a href={props.matchUrl} value={props.competion}>
				<img src={props.imgUrl} alt={props.title} />
			</a>
			<p>{props.title}</p>
			<p className='date'>
				<Date date={props.date} />
			</p>
		</div>
	);
}

export default Match;
