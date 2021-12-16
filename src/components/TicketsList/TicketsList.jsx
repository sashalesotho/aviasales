import React from 'react';
import classes from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketList = () => (
  <ul className={classes.list} type='none'>
	  <li className={classes.items}>
		  <Ticket />
		  <Ticket />
		  <Ticket />
		  <Ticket />
		  <Ticket />
	  </li>
  </ul>
);

export default TicketList;