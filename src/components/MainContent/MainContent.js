import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import classes from './MainContent.module.css';


const MainContent = ({ isOpen, toggleMenu }) => {
	return(
    <div className={classes.container}>
			{!isOpen && 
				<div className={classes.menu} onClick={toggleMenu}>
					<BurgerMenu />
				</div>
			}
		</div>
	)
}

export default MainContent;
