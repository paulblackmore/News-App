import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Article from '../Article/Article';
import classes from './MainContent.module.css';

const MainContent = ({ isOpen, toggleMenu, articles }) => {

	return(
    <div className={classes.container}>
			{!isOpen && 
				<div className={classes.menu} onClick={toggleMenu}>
					<BurgerMenu />
				</div>
			}
			{articles.length > 0 && articles.map((article, index) => {
				return(
					<Article 
						key={index} 
						article={article} 
					/>
				)
			})}
		</div>
	)
}

export default MainContent;
