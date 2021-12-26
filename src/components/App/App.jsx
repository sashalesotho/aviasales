import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Alert, Spin } from 'antd';
import * as actions from '../../redux/actions';
import classes from './App.module.scss';
import Tabs from '../Tabs/Tabs';
import TicketList from '../TicketsList/TicketsList';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../img/Logo.svg';

const App = ({ getSearchId, getTickets, getMoreTickets, showMoreTickets, loading, searchIdErr, ticketsErr }) => {
	useEffect(() => {
		getSearchId().then((res) => {
			getTickets(res);
			getMoreTickets(res);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
  <div className={classes.container}>
	  <header>
		  <img className={classes.logo} src={logo} alt="logo" />
	  </header>
	  {searchIdErr ? (
		  <Alert message='не удалось получить ID поиска' type='error' showIcon closable />
	  ) : (
		<main>
		<Sidebar />
		<section className={classes.tickets} >
			<Tabs />
			{ticketsErr ? <Alert message='произошла ошибка при запросе данных' type='error' showIcon closable /> :  <TicketList />}
			{loading ? (
 					<Spin size="large" className={classes.spin} />
			) : (
				<button className={classes.btn} type="button" onClick={showMoreTickets}>
      			ПОКАЗАТЬ ЕЩЁ
				</button>
			)} 
		  </section>
	  </main>	 
	  )} 
  </div>
)}

App.propTypes = {
	getSearchId: PropTypes.func.isRequired,
	getTickets: PropTypes.func.isRequired,
	getMoreTickets: PropTypes.func.isRequired,
	showMoreTickets: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	searchIdErr: PropTypes.bool.isRequired,
	ticketsErr: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.mainReducer.loading,
	moreTicketsErr: state.errorReducer.moreTicketsErr,
	searchIdErr: state.errorReducer.searchIdErr,
	tickets: state.mainReducer.tickets,
})

const mapDispatchToProps = (dispatch) => {
	const { getSearchId, getTickets, getMoreTickets, showMoreTickets } = bindActionCreators(actions, dispatch);
	return { getSearchId, getTickets, getMoreTickets, showMoreTickets };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);