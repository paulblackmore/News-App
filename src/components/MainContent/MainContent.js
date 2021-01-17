import React, { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Article from '../Article/Article';
import classes from './MainContent.module.css';

const MainContent = ({ isOpen, toggleMenu, articles, limit, handleLimit }) => {
	const [index, setIndex] = useState(0);

	const handleIndex = (index) => setIndex(index);

	return(
    <div className={classes.container}>
			<header>
				{!isOpen && 
					<div className={classes.menu} onClick={toggleMenu}>
						<BurgerMenu />
					</div>
				}
				<div className={classes.pagination}>
					<input
						value={limit} 
						onChange={handleLimit} 
					/>
					{articles.length > 0 && articles.map((array, i) => {
						if (index === i) return;
						return(
							<button 
								key={i}
								onClick={() => handleIndex(i)}
							>{i + 1}</button>
						)
					})}
				</div>
			</header>
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
