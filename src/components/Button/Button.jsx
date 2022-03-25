import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTicketsCount } from '../../redux/actions';
import classes from './Button.module.scss';

const Button = ({ ticketsCount, updateTicketsCount }) => {
  const onClick = () => {
    const count = ticketsCount + 5;
    updateTicketsCount(count);
  };

  return (
    <button className={classes.btn} type="button" onClick={onClick}>
      ПОКАЗАТЬ ЕЩЁ
    </button>
  );
};

const mapStateToProps = ({ ticketCount }) => ({
  ticketCount,
});

const mapDispatchToProps = (dispatch) => ({
  updateTicketsCount: (newCount) => dispatch(updateTicketsCount(newCount)),
});

Button.defaultProps = {
  ticketsCount: 5,
};

Button.propTypes = {
  updateTicketsCount: PropTypes.func.isRequired,
  ticketsCount: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
