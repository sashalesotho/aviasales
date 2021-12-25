import React from 'react';
import PropTypes from 'prop-types';
import classes from './Ticket.module.scss';

const Ticket = ({ to, from, price, carrier }) => {

	const zeroPlus = (time) => {
		if (time < 10) {
			return `0${time}`;
		}
		return time;
	}

	const timeConvert = (time) => {
		const hours = Math.floor(time / 60);
		const min = Math.round(hours * 60);
		return `${zeroPlus(hours)}ч ${zeroPlus(min)}м`;
	}
	const  transConvert = (trans) => {
		if (trans.length === 1) {
			return 'Пересадка';
		}
		if (trans.length === 0) {
			return 'Пересадок'
		}
		return 'Пересадки'
	}

	const arrivalTime = (ticketFrom, ticketTo) => {
		const hoursFrom = new Date(ticketFrom).getHours();
		const minFrom = new Date(ticketFrom).getMinutes();
		const fromMsec = Date.parse(new Date(ticketFrom)) + ticketTo * 1000 * 60;
		const toHours = new Date(fromMsec).getHours();
		const toMin = new Date(fromMsec).getMinutes();
		return `${zeroPlus(hoursFrom)}:${zeroPlus(minFrom)} - ${zeroPlus(toHours)}:${zeroPlus(toMin)}`;
	}

	return (
 <ul className={classes.ticket} type='none'>
	 <li className={classes.price}>
		 <p>{`${price} Р`}</p>
	 </li>
	 <li className={classes.container}>
		 <img className={classes.img} src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>{to.toFrom}</p>
		 <p className={classes.value}>{arrivalTime(to.date, to.duration)}</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>В ПУТИ</p>
		 <p className={classes.value}>{timeConvert(to.duration)}</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>{`${to.transfers.length} ${transConvert(to.transfers)}`}</p>
		 <p className={classes.value}>{to.transfers.join(' ,')}</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>{from.toFrom}</p>
		 <p className={classes.value}>{arrivalTime(from.date, from.duration)}</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>В ПУТИ</p>
		 <p className={classes.value}>{timeConvert(from.duration)}</p>
	 </li>
	 <li className={classes.item}>
		 <p className={classes.attr}>{`${from.transfers.length} ${transConvert(from.transfers)}`}</p>
		 <p className={classes.value}>{from.transfers.join(', ')}</p>
	 </li>
 </ul>
)};

Ticket.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	to: PropTypes.object.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	from: PropTypes.object.isRequired,
	price: PropTypes.string.isRequired,
	carrier: PropTypes.string.isRequired,
}

export default Ticket;