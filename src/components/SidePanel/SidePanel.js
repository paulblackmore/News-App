import React, { useState, useEffect } from 'react';
import { getHeadlines } from '../../service/service';
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

const SidePanel = ({ isOpen, toggleMenu }) => {
	const [search, setSearch] = useState('');
	const [country, setCountry] = useState('au');

	useEffect(() => {
		getHeadlines(country)
	}, [country])

	const searchArticles = (event) => setSearch(event.target.value);
	const selectCountry = (event) => setCountry(event.target.value);

	return !isOpen ? null : (
    <div className={classes.container}>
			<div className={classes.header}>
				<button onClick={toggleMenu}>Close menu</button>
			</div>
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
		</div>
	)
}

export default SidePanel;
