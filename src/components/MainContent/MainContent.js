import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import classes from './MainContent.module.css';


const MainContent = () => {
	return(
    <div className={classes.container}>
			<BurgerMenu />
		</div>
	)
}

export default MainContent;
