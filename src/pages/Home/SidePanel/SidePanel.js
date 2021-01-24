import React from 'react';
import { countries, categories } from '../../../data/defaultData';
import classes from './SidePanel.module.css';

const SidePanel = ({ viewState, viewActions }) => {
	const { isOpen  } = viewState;

	return !isOpen ? null : (
    <div className={classes.container}>
			<div className={classes.header}>
				<button onClick={viewActions.toggleMenu}>Close menu</button>
			</div>
			<input 
				placeholder="Search articles..."
				onChange={viewActions.searchArticles}
			/>
			<select name="countries" onChange={viewActions.selectCountry}>
				{countries.map((country, index) => 	{
					return(
						<option 
							key={index} 
							value={country}
						>{country}</option>
					)
				})}
			</select>
			<select name="categories" onChange={viewActions.selectCategory}>
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
