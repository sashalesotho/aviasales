import React from 'react';
import classes from './Tabs.module.scss';
import { connect } from 'react-redux';
import cn from 'classnames';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import PropTypes from 'prop-types';


const Tabs = ({cheapest, fastest, cheapestTab}) => {
	const cheapestTabCn = cn(classes['button'], {
		[classes['button-selected']]: cheapestTab,
	})
	const fastestTabCn = cn(classes['button'], {
		[classes['button-selected']]: !cheapestTab,
	})

	return (
  <div className={classes.container}>
	  <button className={cheapestTabCn} type='button' onClick={cheapest}>
	  Самый дешевый
	  </button>
	  <button className={fastestTabCn} type='button' onClick={fastest}>
	  Самый быстрый
	  </button>
	  <button className={classes.button} type='button'>
	  Оптимальный
	  </button>
  </div>
);
}

Tabs.propTypes = {
	cheapestTab: PropTypes.bool.isRequired,
	cheapest: PropTypes.func.isRequired,
	fastest: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	cheapestTab: state.cheapestTab,
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);