import React, { useState, useEffect } from 'react';
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
	const [search, setSearch] = useState('');
	const [country, setCountry] = useState('au');

	const searchArticles = (event) => {
		setSearch(event.target.value)
	}

	const selectCountry = (event) => {
		setCountry(event.target.value)
	}

	return(
    <div className={classes.container}>
			<input 
				placeholder="Search articles..."
				onChange={searchArticles}
			/>
			<select name="countries" onChange={selectCountry}>
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
