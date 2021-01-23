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
	'co',
	'cu',
	'cz', 
	'de',
	'eg',
	'fr',
	'gb',
	'gr', 
	'hk',
	'hu',
	'id',
	'ie',
	'il',
	'in',
	'it',
	'jp',
	'kr', 
	'lt', 
	'lv',
	'ma',
	'mx',
	'my',
	'ng',
	'nl',
	'no',
	'nz',
	'ph',
	'pl',
	'pt',
	'ro',
	'rs',
	'ru',
	'sa',
	'se',
	'sg',
	'si',
	'sk',
	'th',
	'tr',
	'tw',
	'ua',
	'us',
	've',
	'za'
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

const SidePanel = ({ state, actions }) => {
	const { isOpen  } = state;
	const { toggleMenu, searchArticles, selectCountry, selectCategory } = actions;

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
