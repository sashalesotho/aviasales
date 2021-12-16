import React from 'react';
import classes from './Ticket.module.scss';
import S7logo from '../../img/S7Logo.svg';

const Ticket = () => (
 <ul className={classes.ticket} type='none'>
	 <li className={classes.price}>
		 <p>13 400 Р </p>
	 </li>
	 <li className={classes.container}>
		 <img className={classes.img} src={S7logo} alt='logo S7' />
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>MOW – HKT</p>
		 <p className={classes.value}>10:45 – 08:00</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>В ПУТИ</p>
		 <p className={classes.value}>21ч 15м</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>2 ПЕРЕСАДКИ</p>
		 <p className={classes.value}>HKG, JNB</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>MOW – HKT</p>
		 <p className={classes.value}>11:20 – 00:50</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>В ПУТИ</p>
		 <p className={classes.value}>13ч 30м</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>1 ПЕРЕСАДКА</p>
		 <p className={classes.value}>HKG</p>
	 </li>
 </ul>
);

export default Ticket;