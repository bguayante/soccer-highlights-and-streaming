import React from 'react';
import Match from './Match'

function FullMatchList(props) {
	return (
		<section>
			<div className='movies-grid'>
				{props.matches.map((match) => (
					<Match imgUrl={match.thumbnail} title={match.title} date={match.date} matchUrl={match.url} key={match.url} />
				))}
			</div>
		</section>
	);
}

export default FullMatchList;
