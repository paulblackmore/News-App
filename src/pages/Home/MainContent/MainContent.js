import React, { useState } from 'react';
import BurgerMenu from '../../../components/BurgerMenu/BurgerMenu';
import Article from '../../../components/Article/Article';
import classes from './MainContent.module.css';

const MainContent = ({ isOpen, viewActions, articles }) => {
	const [index, setIndex] = useState(0);

	const handleIndex = (index) => setIndex(index);

	return(
    <div className={classes.container}>
			<div className={classes.header}>
				{!isOpen && 
					<div className={classes.menu} onClick={viewActions.toggleMenu}>
						<BurgerMenu />
					</div>
				}
				<div className={classes.pagination}>
					<span>{`Page ${index + 1}`}</span>
					<div>
						{articles.length > 0 && articles.map((_, i) => {
							if (index === i) return null;
							return(
								<button 
									key={i}
									onClick={() => handleIndex(i)}
								>{`Page ${i + 1}`}</button>
							)
						})}
					</div>
				</div>
			</div>
			<section>
				{articles.length > 0 && articles[index].map((article, index) => {
					return(
						<Article 
							key={index} 
							article={article} 
						/>
					)
				})}
			</section>
		</div>
	)
}

export default MainContent;
