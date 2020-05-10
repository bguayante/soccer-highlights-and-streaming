import React from 'react';

function Date(props) {
	let date = props.date;
	let splitDate = date.split('-');
	let year = splitDate[0];
	let month = splitDate[1];
	let getDay = splitDate[2].split('T');
	let day = getDay[0];

	if (month === '01') {
		month = 'Jan';
	} else if (month === '02') {
		month = 'Feb';
	} else if (month === '03') {
		month = 'March';
	} else if (month === '04') {
		month = 'April';
	} else if (month === '05') {
		month = 'May';
	} else if (month === '06') {
		month = 'June';
	} else if (month === '07') {
		month = 'July';
	} else if (month === '08') {
		month = 'Aug';
	} else if (month === '09') {
		month = 'Sept';
	} else if (month === '10') {
		month = 'Oct';
	} else if (month === '11') {
		month = 'November';
	} else if (month === '12') {
		month = 'December';
	}

	let formattedDate = `${month} ${day} ${year}`;

	return <p className='date'>{formattedDate}</p>;
}

export default Date;
