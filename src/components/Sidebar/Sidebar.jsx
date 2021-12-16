import React from 'react';
import classes from './Sidebar.module.scss';

const Sidebar = () => (
  <form className={classes.sidebar}>
	  <fieldset className={classes.filter}>
		  <legend className={classes.legend}>
		  Количество пересадок
		  </legend>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' />
			  <span className={classes.check} />
			  <p>Все</p>
		  </label>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' />
			  <span className={classes.check} />
			  <p>Без пересадок</p>
		  </label>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' />
			  <span className={classes.check} />
			  <p>1 пересадка</p>
		  </label>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' />
			  <span className={classes.check} />
			  <p>2 пересадки</p>
		  </label>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' />
			  <span className={classes.check} />
			  <p>3 пересадки</p>
		  </label>
		  
	  </fieldset>
  </form>
);

export default Sidebar;