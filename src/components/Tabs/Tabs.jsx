import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import classes from './Tabs.module.scss';

const Tabs = ({ cheapest, fastest, optimal, cheapestTab, fastestTab, optimalTab }) => {
  const cheapestTabCn = cn(classes.button, {
    [classes['button-selected']]: cheapestTab,
  });
  const fastestTabCn = cn(classes.button, {
    [classes['button-selected']]: fastestTab,
  });
  const optimalTabCn = cn(classes.button, {
    [classes['button-selected']]: optimalTab,
  });

  return (
    <div className={classes.container}>
      <button className={cheapestTabCn} type="button" onClick={cheapest}>
        Самый дешевый
      </button>
      <button className={fastestTabCn} type="button" onClick={fastest}>
        Самый быстрый
      </button>
      <button className={optimalTabCn} type="button" onClick={optimal}>
        Оптимальный
      </button>
    </div>
  );
};

Tabs.propTypes = {
  cheapestTab: PropTypes.bool.isRequired,
  fastestTab: PropTypes.bool.isRequired,
  optimalTab: PropTypes.bool.isRequired,
  cheapest: PropTypes.func.isRequired,
  fastest: PropTypes.func.isRequired,
  optimal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cheapestTab: state.cheapestTab,
  fastestTab: state.fastestTab,
  optimalTab: state.optimalTab,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
