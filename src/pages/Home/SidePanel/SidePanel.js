import React from 'react';
import { countries, categories } from '../../../data/defaultData';
import classes from './SidePanel.module.css';

const SidePanel = ({ state, actions }) => {
	const { isOpen  } = state;

	return !isOpen ? null : (
    <div className={classes.container}>
			<div className={classes.header}>
				<button onClick={actions.toggleMenu}>Close menu</button>
			</div>
			<input 
				placeholder="Search articles..."
				onChange={actions.searchArticles}
			/>
			<select name="countries" onChange={actions.selectCountry}>
				{countries.map((country, index) => 	{
					return(
						<option 
							key={index} 
							value={country}
						>{country}</option>
					)
				})}
			</select>
			<select name="categories" onChange={actions.selectCategory}>
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
