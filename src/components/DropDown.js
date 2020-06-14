import React from 'react';

const DropDown = (props) => {
	return (
		<div className='dropdown'>
			<select className='dropdown-content' name='league'>
				<option>Select Competition</option>

				{props.dropdownValues.map((comp) => (
					<option key={comp} value={comp} className='dropdown-option'>
						{comp}
					</option>
				))}
			</select>
			<button className='filter-button' onClick={props.dropdownHandler}>Filter</button>
		</div>
	);
};

export default DropDown;
