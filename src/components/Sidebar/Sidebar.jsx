import React from 'react';

import classes from './Sidebar.module.scss';

const Sidebar = () => (
  <form className={classes.filter}>
	  <fieldset className={classes['filter-set']}>
		  <legend className={classes['filter-title']}>
		  Количество пересадок
		  </legend>
		  <label className={classes['filter-label']}>
			  <input className={classes['filter-box']} type='checkbox' name='all' id='' />
			  <span className={classes['filter-check']} />
			  <p>Все</p>
		  </label>
		  <label className={classes['filter-label']}>
			  <input className={classes['filter-box']} type='checkbox' name='all' id='' />
			  <span className={classes['filter-check']} />
			  <p>Без пересадок</p>
		  </label>
		  <label className={classes['filter-label']}>
			  <input className={classes['filter-box']} type='checkbox' name='all' id='' />
			  <span className={classes['filter-check']} />
			  <p>1 пересадка</p>
		  </label>
		  <label className={classes['filter-label']}>
			  <input className={classes['filter-box']} type='checkbox' name='all' id='' />
			  <span className={classes['filter-check']} />
			  <p>2 пересадки</p>
		  </label>
		  <label className={classes['filter-label']}>
			  <input className={classes['filter-box']} type='checkbox' name='all' id='' />
			  <span className={classes['filter-check']} />
			  <p>3 пересадки</p>
		  </label>
		  
	  </fieldset>
  </form>
);

export default Sidebar;