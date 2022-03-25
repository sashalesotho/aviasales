import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-top-loading-bar';
import classes from './Loader.module.scss';

const Loader = ({ isStop, ticketsList }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isStop) {
      setCount(count + 4);
    } else {
      setCount(100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStop, ticketsList]);

  return (
    <div className={classes.loader}>
      <LoadingBar className={classes.bar} progress={count} color="#2196f3" />
    </div>
  );
};

const mapStateToProps = ({ isStop, ticketsList }) => ({ isStop, ticketsList });

Loader.defaultProps = {
  ticketsList: [],
};
Loader.propTypes = {
  isStop: PropTypes.bool.isRequired,
  ticketsList: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Loader);
