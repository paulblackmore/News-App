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

const categories = [
	'business',
	'entertainment',
	'general',
	'health',
	'science',
	'sports',
	'technology'
]

const SidePanel = ({ isOpen, toggleMenu, searchArticles, selectCountry, selectCategory }) => {
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
			<select name="categories" onChange={selectCategory}>
				{categories.map((category, index) => 	{
					return(
						<option 
							key={index} 
							value={category}
						>{category}</option>
					)
				})}
			</select>
		</div>
	)
}

export default SidePanel;
