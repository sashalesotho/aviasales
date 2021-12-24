import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketList = ({ tickets }) => {
	const priceConvert = (price) => {
		let newPrice = price.toString();

		if (+newPrice >= 100000) {
			newPrice = newPrice.split('');
			const num = newPrice.splice(0, 3);
			newPrice = [...num, ' ', ...newPrice];
			return newPrice.join('');
		}

		if (+newPrice >= 10000) {
			newPrice = newPrice.split('');
			const num = newPrice.splice(0, 2);
			newPrice = [...num, ' ', ...newPrice];
			return newPrice.join('');
		}

		return price;
	}
	const ticketCreate = tickets.map((item) => {
		const ticketInfo = {
			carier: item.carier,
			id: item.id,
			price: priceConvert(item.price),
			to: {
				toFrom: `${item.segments[0].origin} - ${item.segments[0].destination}`,
				date: item.segments[0].date,
				duration: item.segments[0].duration,
				transfers: item.segments[0].stops,
			},
			from: {
				toFrom: `${item.segments[1].origin} - ${item.segments[1].destination}`,
				date: item.segments[1].date,
				duration: item.segments[1].duration,
				transfers: item.segments[1].stops,
			}
		};
		return (
			<Ticket 
				carier={ticketInfo.carier}
				to={ticketInfo.to}
				from={ticketInfo.from}
				key={ticketInfo.id}
				price={ticketInfo.price}
			/>
		)
	})

	return (
  <ul className={classes.list} type='none'>
	  <li className={classes.items}>
		  {ticketCreate}
	  </li>
  </ul>
)}

TicketList.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
	tickets: state.tickets,
})

export default connect(mapStateToProps)(TicketList);