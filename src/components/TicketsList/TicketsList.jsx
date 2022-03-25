import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import Button from '../Button';
import classes from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketsList = ({ ticketsList, filterItems, sortTabs, error, ticketsCount }) => {
  const selectedFilters = filterItems
    .map((item) => (item.isCheck ? Number(item.name) : null))
    .filter((el) => el !== null);

  const sortValue = sortTabs.find((el) => el.isActive).name;

  const newTicketsList = ticketsList.map((el) => {
    const dur = el.segments[0].duration + el.segments[1].duration;
    el.dur = dur;

    const durAndPrice = el.dur + el.price;
    el.durAndPrice = durAndPrice;
    return el;
  });
  /* eslint-disable array-callback-return */
  /* eslint-disable consistent-return */
  const filteredArr = newTicketsList.filter((item) => {
    const sumTransfTo = item.segments[0].stops.length;
    const sumTransfFrom = item.segments[1].stops.length;

    if (selectedFilters.includes(sumTransfTo) && selectedFilters.includes(sumTransfFrom)) {
      return item;
    }
  });

  const sortArr = (arr, strName) => {
    switch (strName) {
      case 'cheapest':
        arr.sort((ticket1, ticket2) => (ticket1.price > ticket2.price ? 1 : -1));
        break;
      case 'fastest':
        arr.sort((ticket1, ticket2) => (ticket1.dur > ticket2.dur ? 1 : -1));
        break;
      case 'optimal':
        arr.sort((ticket1, ticket2) => (ticket1.durAndPrice > ticket2.durAndPrice ? 1 : -1));
        break;
      default:
        return [];
    }
    return arr;
  };

  const list = sortArr(filteredArr, sortValue).map((item, i) => {
    if (i < ticketsCount) {
      /* eslint-disable react/no-array-index-key */
      return <Ticket key={i} ticket={item} />;
    }
  });

  const errorNoTickets =
    !filteredArr.length && !error ? (
      <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" closable />
    ) : null;

  const errorAlert = error ? <Alert message="Error!" type="warning" closable /> : null;

  const buttonShowMore = filteredArr.length ? <Button /> : null;

  return (
    <ul className={classes.list} type="none">
      {list}
      {errorNoTickets}
      {errorAlert}
      {buttonShowMore}
    </ul>
  );
};

TicketsList.defaultProps = {
  ticketsList: [],
  error: null,
};
TicketsList.propTypes = {
  ticketsList: PropTypes.arrayOf(PropTypes.object),
  filterItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortTabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* eslint-disable react/forbid-prop-types */
  error: PropTypes.object,
  ticketsCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({ ticketsList, filterItems, sortTabs, error, ticketsCount }) => ({
  ticketsList,
  filterItems,
  sortTabs,
  error,
  ticketsCount,
});

export default connect(mapStateToProps)(TicketsList);
