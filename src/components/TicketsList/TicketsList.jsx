import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import classes from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketList = ({
  tickets,
  checkAll,
  withoutTrans,
  oneTrans,
  twoTrans,
  threeTrans,
  cheapestTab,
  fastestTab,
  optimalTab,
  ticketsToShow,
}) => {
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
  };

  const createList = (toShow) => {
    const sortTickets = () => {
      const sortByPrice = (value1, value2) => value1.price - value2.price;

      const sortByDuration = (value1, value2) =>
        value1.segments[0].duration +
        value1.segments[1].duration -
        (value2.segments[0].duration + value2.segments[1].duration);

      const sortByBoth = (value1, value2) =>
        value1.price +
        12.5 * (value1.segments[0].duration + value1.segments[1].duration) -
        (value2.price + 12.5 * (value2.segments[0].duration + value2.segments[1].duration));

      switch (true) {
        case cheapestTab:
          return tickets.sort(sortByPrice);
        case fastestTab:
          return tickets.sort(sortByDuration);
        case optimalTab:
          return tickets.sort(sortByBoth);
        default:
          return tickets;
      }
    };

    let filtered = sortTickets(tickets).filter((item) => {
      const withoutStop = withoutTrans ? 0 : null;
      const oneStop = oneTrans ? 1 : null;
      const twoStop = twoTrans ? 2 : null;
      const threeStop = threeTrans ? 3 : null;

      const arr = [checkAll, withoutStop, oneStop, twoStop, threeStop];
      const result = arr.reduce((acc, checkItem) => {
        if (checkItem === true && acc === false) {
          acc = checkItem;
          return acc;
        }
        if (checkItem === 0 && acc === false) {
          acc = item.segments[0].stops.length === checkItem && item.segments[1].stops.length === checkItem;
          return acc;
        }
        if (checkItem === 1 && acc === false) {
          acc = item.segments[0].stops.length === checkItem && item.segments[1].stops.length === checkItem;
          return acc;
        }

        if (checkItem === 2 && acc === false) {
          acc = item.segments[0].stops.length === checkItem && item.segments[1].stops.length === checkItem;
          return acc;
        }

        if (checkItem === 3 && acc === false) {
          acc = item.segments[0].stops.length === checkItem && item.segments[1].stops.length === checkItem;
          return acc;
        }
        return acc;
      }, false);
      return result;
    });

    filtered = filtered
      .map((item) => {
        const info = {
          carrier: item.carrier,
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
          },
        };
        const ticket = (
          <li className={classes.item} key={info.id}>
            <Ticket carrier={info.carrier} to={info.to} from={info.from} key={info.id} price={info.price} />
          </li>
        );
        return ticket;
      })
      .slice(0, toShow);

    if (filtered.length === 0) {
      return (
        <li>
          <Alert
            className={classes.alert}
            message="Рейсов, подходящих под заданные фильтры, не найдено"
            type="info"
            showIcon
          />
        </li>
      );
    }
    return filtered;
  };

  return (
    <ul className={classes.list} type="none">
      {createList(ticketsToShow)}
    </ul>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  checkAll: PropTypes.bool.isRequired,
  withoutTrans: PropTypes.bool.isRequired,
  oneTrans: PropTypes.bool.isRequired,
  twoTrans: PropTypes.bool.isRequired,
  threeTrans: PropTypes.bool.isRequired,
  cheapestTab: PropTypes.bool.isRequired,
  fastestTab: PropTypes.bool.isRequired,
  optimalTab: PropTypes.bool.isRequired,
  ticketsToShow: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.mainReducer.tickets,
  checkAll: state.filter.checkAll,
  withoutTrans: state.filter.withoutTrans,
  oneTrans: state.filter.oneTrans,
  twoTrans: state.filter.twoTrans,
  threeTrans: state.filter.threeTrans,
  cheapestTab: state.mainReducer.cheapestTab,
  fastestTab: state.mainReducer.fastestTab,
  optimalTab: state.mainReducer.optimalTab,
  ticketsToShow: state.mainReducer.ticketsToShow,
});

export default connect(mapStateToProps)(TicketList);
