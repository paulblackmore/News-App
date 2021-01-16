import React from 'react';
import classes from './SidePanel.module.css';

const countries = [
	'ae', 
	'ar', 
	'at', 
	'au', 
	'be', 
	'bg', 
	'br', 
	'ca', 
	'ch', 
	'cn', 
	'co'
]

const SidePanel = () => {

	return(
    <div className={classes.container}>
			<input 
				placeholder="Search articles..."
			/>
			<select name="countries">
				{countries.map((country, index) => 	{
					return(
						<option 
							key={index} 
							value={country}
						>{country}</option>
					)
				})}
			</select>
			<button 
				className={classes.btn}
			>Headlines</button>
		</div>
	)
}

export default SidePanel;
