import React from 'react';
import classes from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return(
    <div className={classes.container}>
      <div className={classes.burger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default BurgerMenu;