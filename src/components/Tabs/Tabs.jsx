import React from 'react';
import classes from './Tabs.module.scss';
import { connect } from 'react-redux';
import cn from 'classnames';

import * as actions from '../../redux/actions';


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
	  Самый дешевый, {cheapestTab}
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

const mapStateToProps = (state) => ({
	cheapestTab: state.cheapestTab,
})

export default connect(mapStateToProps, actions)(Tabs);