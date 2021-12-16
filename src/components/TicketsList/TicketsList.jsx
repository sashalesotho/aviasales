import React from 'react';

import classes from './TicketsList.module.scss';

import Ticket from '../Ticket/Ticket';

const TicketList = () => (
  <ul className={classes['ticket-list']} type='none'>
	  <li className={classes['ticket-list-item']}>
		  <Ticket />
		  <Ticket />
		  <Ticket />
		  <Ticket />
		  <Ticket />
	  </li>
  </ul>
);

export default TicketList;