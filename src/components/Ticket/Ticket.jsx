import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Ticket.module.scss';

const Ticket = ({ ticket, filterItems }) => {
  const { price, carrier, segments } = ticket;

  const ticketTo = segments[0];
  const ticketFrom = segments[1];

  const transfNumb = (num, arr) => {
    switch (num) {
      case 0:
        return arr.find((el) => el.name === '0').label;
      case 1:
        return arr.find((el) => el.name === '1').label;
      case 2:
        return arr.find((el) => el.name === '2').label;
      case 3:
        return arr.find((el) => el.name === '3').label;
      default:
        return '';
    }
  };

  const transfTo = transfNumb(ticketTo.stops.length, filterItems);

  const transfFrom = transfNumb(ticketFrom.stops.length, filterItems);

  const arrivalDate = (date1, min) => {
    const date2 = new Date(date1);
    date2.setMinutes(date2.getMinutes() + min);
    return date2;
  };

  const departTo = new Date(ticketTo.date);
  const arrivalTo = arrivalDate(departTo, ticketTo.duration);
  const departFrom = new Date(ticketFrom.date);
  const arrivalFrom = arrivalDate(departFrom, ticketFrom.duration);

  const timeConvert = (date) => {
    /* eslint-disable array-callback-return */
    /* eslint-disable consistent-return */
    const arrSrts = [String(date.getHours()), String(date.getMinutes())].map((el) => {
      if (el.length === 2) {
        return el;
        /* eslint-disable no-else-return */
      } else if (el.length === 1) {
        /* eslint-disable prefer-template */
        return '0' + el;
      } else if (el.length === 0) {
        return '00' + el;
      }
    });
    return arrSrts.join(':');
  };

  const depTimeTo = timeConvert(departTo);
  const arrivTimeTo = timeConvert(arrivalTo);
  const depTimeFrom = timeConvert(departFrom);
  const arrivTimeFrom = timeConvert(arrivalFrom);

  const travelTime = (time) => {
    let strTime = '';
    /* eslint-disable no-bitwise */
    const hours = (time / 60) ^ 0;

    if (hours) {
      let minutes = time % 60;
      if (minutes < 10) minutes = `0${minutes}`;
      strTime = `${hours}ч ${minutes}м`;
    } else {
      strTime = `${time}м`;
    }
    return strTime;
  };

  const travelTimeTo = travelTime(ticketTo.duration);
  const travelTimeFrom = travelTime(ticketFrom.duration);

  const transfToStr = ticketTo.stops.join(', ');
  const transfFromStr = ticketFrom.stops.join(', ');

  const priceConvert = (num) => String(num).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  const strPrice = priceConvert(price);

  const logoUrl = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <ul className={classes.ticket} type="none">
      <li className={classes.price}>
        <p>{strPrice}</p>
      </li>
      <li className={classes.container}>
        <img className={classes.img} src={logoUrl} alt={carrier} />
      </li>
      <li className={classes.item}>
        <p className={classes.attr}>
          {ticketTo.destination} - {ticketTo.origin}
        </p>
        <p className={classes.value}>
          {depTimeTo} - {arrivTimeTo}
        </p>
      </li>
      <li className={classes.item}>
        <p className={classes.attr}>В ПУТИ</p>
        <p className={classes.value}>{travelTimeTo}</p>
      </li>
      <li className={classes.item}>
        <p className={classes.attr}>{transfTo}</p>
        <p className={classes.value}>{transfToStr}</p>
      </li>
      <li className={classes.item}>
        <p className={classes.attr}>
          {ticketFrom.destination} - {ticketFrom.origin}
        </p>
        <p className={classes.value}>
          {depTimeFrom} - {arrivTimeFrom}
        </p>
      </li>
      <li className={classes.item}>
        <p className={classes.attr}>В ПУТИ</p>
        <p className={classes.value}>{travelTimeFrom}</p>
      </li>
      <li className={classes.item}>
        <p className={classes.attr}>{transfFrom}</p>
        <p className={classes.value}>{transfFromStr}</p>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ filterItems }) => ({ filterItems });

Ticket.defaultProps = {
  filterItems: [],
};

Ticket.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.object),
  /* eslint-disable react/forbid-prop-types */
  ticket: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Ticket);
