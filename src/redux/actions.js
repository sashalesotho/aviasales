
import apiService from '../services/apiService';

export const UPDATE_SORT_TABS = 'UPDATE_SORT_TABS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const UPDATE_SEARCH_ID = 'UPDATE_SEARCH_ID';
export const UPDATE_TICKETS_LIST = 'UPDATE_TICKETS_LIST';
export const UPDATE_TICKETS_COUNT = 'UPDATE_TICKETS_COUNT';
export const TOGGLE_STOP = 'TOGGLE_STOP';
export const TICKETS_ERROR = 'TICKETS_ERROR';


export const updateSortTabs = (newSortTabs) => ({
	type: UPDATE_SORT_TABS,
	payload: newSortTabs,
});

export const updateFilters = (newFilters) => ({
	type: UPDATE_FILTERS,
	payload: newFilters,
});

export const updateSearchId = (searchId) => ({
	type: UPDATE_SEARCH_ID,
	payload: searchId,
})

export const updateTicketsList = (ticketsList) => ({
	type: UPDATE_TICKETS_LIST,
	payload: ticketsList,
})

export const updateTicketsCount = (newCount) => ({
	type: UPDATE_TICKETS_COUNT,
	payload: newCount,
})

export const toggleStop = (value) => ({
	type: TOGGLE_STOP,
	payload: value,
})

export const ticketsError = (error) => ({
	type: TICKETS_ERROR,
	payload: error,
})

export const getTicketsList = (searchId) => ((dispatch) => {
	apiService.getTickets(searchId).then((res) => {
		dispatch(updateTicketsList(res.tickets));
		if (res.stop) {
			dispatch(toggleStop(res.stop));
		}
	})
})

