import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import classes from './App.module.scss';
import Tabs from '../Tabs/Tabs';
import TicketList from '../TicketsList/TicketsList';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../img/Logo.svg';

const App = ({ getSearchId, getTickets }) => {
	useEffect(() => {
		getSearchId().then((res) => {
			getTickets(res);
		});
	}, [getSearchId, getTickets]);

	return (
  <div className={classes.container}>
	  <header>
		  <img className={classes.logo} src={logo} alt="logo" />
	  </header>
	  <main>
		  <Sidebar />
		  <section className={classes.tickets} >
			  <Tabs />
			  <TicketList />
		  </section>
		{/* <button className={classes.btn} type="button">
      ПОКАЗАТЬ ЕЩЁ
		</button> */}
	  </main>	  
  </div>
)}

App.propTypes = {
	getSearchId: PropTypes.func.isRequired,
	getTickets: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
	const { getSearchId, getTickets } = bindActionCreators(actions, dispatch);
	return { getSearchId, getTickets };
}

export default connect(null, mapDispatchToProps)(App);