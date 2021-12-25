import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import classes from './Sidebar.module.scss';
import * as actions from '../../redux/actions';

const Sidebar = ({ checkAll, withoutTrans, oneTrans, twoTrans, threeTrans, all, none, one, two, three }) => {
	const getClass = (check) => cn(classes['visible-check'], {
		[classes['visible-checked']]: check,
	})
	return (
  <form className={classes.sidebar}>
	  <fieldset className={classes.filter}>
		  <legend className={classes.legend}>
		  Количество пересадок
		  </legend>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' onClick={all}/>
			  <span className={getClass(checkAll)} />
			  <p>Все</p>
		  </label>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' onClick={none}/>
			  <span className={getClass(withoutTrans)} />
			  <p>Без пересадок</p>
		  </label>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' onClick={one}/>
			  <span className={getClass(oneTrans)} />
			  <p>1 пересадка</p>
		  </label>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' onClick={two}/>
			  <span className={getClass(twoTrans)} />
			  <p>2 пересадки</p>
		  </label>
		  <label className={classes.label}>
			  <input className={classes.box} type='checkbox' name='all' id='' onClick={three}/>
			  <span className={getClass(threeTrans)} />
			  <p>3 пересадки</p>
		  </label>
		  
	  </fieldset>
  </form>)
};

Sidebar.propTypes = {
	checkAll: PropTypes.bool.isRequired,
	withoutTrans: PropTypes.bool.isRequired,
	oneTrans: PropTypes.bool.isRequired,
	twoTrans: PropTypes.bool.isRequired,
	threeTrans: PropTypes.bool.isRequired,
	all: PropTypes.func.isRequired,
	none: PropTypes.func.isRequired,
	one: PropTypes.func.isRequired,
	two: PropTypes.func.isRequired,
	three: PropTypes.func.isRequired,
 };

const mapStateToProps = (state) => ({
	checkAll: state.filter.checkAll,
	withoutTrans: state.filter.withoutTrans,
	oneTrans: state.filter.oneTrans,
	twoTrans: state.filter.twoTrans,
	threeTrans: state.filter.threeTrans,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);