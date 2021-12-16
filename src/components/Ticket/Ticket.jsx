import React from 'react';

import classes from './Ticket.module.scss';

import S7logo from '../../img/S7logo .svg';

const Ticket = () => (
 <ul className={classes.ticket} type='none'>
	 <li className={classes['ticket-price']}>
		 <p>13 400 Р </p>
	 </li>
	 <li className={classes['ticket-img-container']}>
		 <img className={classes['ticket-img']} src={S7logo} alt='logo S7' />
	 </li>
	 <li className={classes['ticket-item']}>
		 <p className={classes['ticket-item-attr']}>MOW – HKT</p>
		 <p className={classes['ticket-item-value']}>10:45 – 08:00</p>
	 </li>
	 <li className={classes['ticket-item']}>
		 <p className={classes['ticket-item-attr']}>В ПУТИ</p>
		 <p className={classes['ticket-item-value']}>21ч 15м</p>
	 </li>
	 <li className={classes['ticket-item']}>
		 <p className={classes['ticket-item-attr']}>2 ПЕРЕСАДКИ</p>
		 <p className={classes['ticket-item-value']}>HKG, JNB</p>
	 </li>
	 <li className={classes['ticket-item']}>
		 <p className={classes['ticket-item-attr']}>MOW – HKT</p>
		 <p className={classes['ticket-item-value']}>11:20 – 00:50</p>
	 </li>
	 <li className={classes['ticket-item']}>
		 <p className={classes['ticket-item-attr']}>В ПУТИ</p>
		 <p className={classes['ticket-item-value']}>13ч 30м</p>
	 </li>
	 <li className={classes['ticket-item']}>
		 <p className={classes['ticket-item-attr']}>1 ПЕРЕСАДКА</p>
		 <p className={classes['ticket-item-value']}>HKG</p>
	 </li>
 </ul>
);

export default Ticket;