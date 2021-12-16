import React from 'react';
import classes from './App.module.scss';
import Tabs from '../Tabs/Tabs';
import TicketList from '../TicketsList/TicketsList';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../img/Logo.svg';

const App = () => (
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
);

export default App;