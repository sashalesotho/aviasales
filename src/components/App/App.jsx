import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './App.module.scss';
import Tabs from '../Tabs/Tabs';
import TicketsList from '../TicketsList/TicketsList';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../img/Logo.svg';
import 'antd/dist/antd.css';
import apiService from '../../services/apiService';
import { getTicketsList, updateSearchId, ticketsError } from '../../redux/actions';
import Loader from '../Loader';

class App extends Component {
  componentDidMount() {
    const { updateSearchId, getTicketsList, ticketsError } = this.props;
    apiService
      .getSearchId()
      .then((searchId) => {
        updateSearchId(searchId);
        getTicketsList(searchId);
      })
      .catch((err) => {
        ticketsError(err);
      });
  }

  componentDidUpdate(prevProps) {
    const { error, isStop, ticketsList, getTicketsList, searchId } = this.props;
    if (prevProps.ticketsList !== ticketsList && error === null && isStop === false) {
      getTicketsList(searchId);
    }
  }

  render() {
    const { error } = this.props;
    return (
      <div className={classes.container}>
        <header>
          <img className={classes.logo} src={logo} alt="logo" />
        </header>
        <main>
          {!error ? <Loader /> : null}
          <Sidebar />
          <section className={classes.tickets}>
            <Tabs />
            <TicketsList />
          </section>
        </main>
      </div>
    );
  }
}

App.defaultProps = {
  ticketsList: [],
  error: false,
  isStop: false,
  searchId: '',
};

App.propTypes = {
  ticketsList: PropTypes.arrayOf(PropTypes.object),
  updateSearchId: PropTypes.func.isRequired,
  getTicketsList: PropTypes.func.isRequired,
  ticketsError: PropTypes.func.isRequired,
  error: PropTypes.bool,
  isStop: PropTypes.bool,
  searchId: PropTypes.string,
};

const mapStateToProps = ({ error, isStop, searchId, ticketsList }) => ({ error, isStop, searchId, ticketsList });

const mapDispatchToProps = (dispatch) => ({
  getTicketsList: (ticketsList) => dispatch(getTicketsList(ticketsList)),
  updateSearchId: (searchId) => dispatch(updateSearchId(searchId)),
  ticketsError: (error) => dispatch(ticketsError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
