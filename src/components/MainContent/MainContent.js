import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Article from '../Article/Article';
import classes from './MainContent.module.css';

const MainContent = ({ isOpen, toggleMenu, articles, handleLimit }) => {

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
						placeholder="Results to page"
						onChange={handleLimit} 
					/>
					<button>Back</button>
					<button>Next</button>
				</div>

			</header>
			<section>
				{articles.length > 0 && articles.map((article, index) => {
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
