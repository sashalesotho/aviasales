import React from 'react';

import classes from './Filters.module.scss';

const Filters = () => (
  <div className={classes['tabs-container']}>
	  <button className={classes['tabs-button']} type='button'>
	  Самый дешевый
	  </button>
	  <button className={classes['tabs-button']} type='button'>
	  Самый быстрый
	  </button>
	  <button className={classes['tabs-button']} type='button'>
	  Оптимальный
	  </button>
  </div>
);

export default Filters;