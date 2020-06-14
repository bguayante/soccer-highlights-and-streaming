import React from 'react';
import DropDown from './DropDown'


const Filters = props => {
    return (
			<div>
				<DropDown
					className='dropdown'
					dropdownHandler={props.dropdownHandler}
					matches={props.matches}
					dropdownValues={props.dropdownValues}
				/>
			</div>
		);
};

export default Filters;