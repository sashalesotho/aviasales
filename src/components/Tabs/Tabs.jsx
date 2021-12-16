import React from 'react';
import classes from './Tabs.module.scss';

const Tabs = () => (
  <div className={classes.container}>
	  <button className={classes.button} type='button'>
	  Самый дешевый
	  </button>
	  <button className={classes.button} type='button'>
	  Самый быстрый
	  </button>
	  <button className={classes.button} type='button'>
	  Оптимальный
	  </button>
  </div>
);

export default Tabs;