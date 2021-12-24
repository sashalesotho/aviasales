import { nanoid } from 'nanoid';

export const all = () => ({ type: 'ALL' });
export const none = () => ({ type: 'NONE' });
export const one = () => ({ type: 'ONE' });
export const two = () => ({ type: 'TWO' });
export const three = () => ({ type: 'THREE' });
export const cheapest = () => ({ type: 'CHEAPEST' });
export const fastest = () => ({ type: 'FASTEST' });

export const showMore = () => ({ type: 'SHOW_MORE_TICKETS' });
export const setRestTicketsError = () => ({ type: 'GET_REST_TICKETS_ERROR' });
export const setSearchIdError = () => ({ type: 'SET_SEARCH_ID_ERROR' });
export const setTicketsError = () => ({ type: 'SET_TICKETS_ERROR' });

export const setSearchId = (payload) => ({ type: 'SEARCH_ID', payload});
export const setTickets = (payload) => ({ type: 'TICKETS', payload });
export const setRestTickets = (payload) => ({ type: 'REST_TICKETS', payload });

// eslint-disable-next-line consistent-return
export const getSearchId = () => async (dispatch) => {
	let resp = await fetch('https://front-test.beta.aviasales.ru/search');
	if (resp.ok) {
	resp = await resp.json();
	dispatch(setSearchId(resp.searchId));
	return resp.searchId;
	}
	dispatch(setSearchIdError());
};

export const getTickets = (srcId) => async (dispatch) => {
	let resp = await fetch(`https://front-test.beta.aviasales.ru/searchId=${srcId}`);
	resp = await resp.json();
	if (resp.ok) {
		resp = await resp.json();
	const respWithId = resp.tickets.map((item) => {
		// eslint-disable-next-line no-param-reassign
		item.id = nanoid();
		return item;
	})
	dispatch(setTickets(respWithId));
} else dispatch(setTicketsError())
}

export const getRestTickets = (srcId) => async (dispatch) => {
	const restTickets = [];
	for (let i = false; i !== true; ) {
	  // eslint-disable-next-line no-await-in-loop
	  let response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${srcId}`);
	  if (response.ok) {
		 if (response.stop === true) {
			break;
		 }
		 // eslint-disable-next-line no-await-in-loop
		 response = await response.json();
		 response = response.tickets.map((el) => {
			// eslint-disable-next-line no-param-reassign
			el.id = nanoid();
			return el;
		 });
		 restTickets.push(...response);
	  } else {
		 dispatch(setRestTicketsError());
		 break;
	  }
	}
	dispatch(setRestTickets(restTickets));
 };
 

// function addTodo(text) {
// 	return {
// 	  type: ADD_TODO,
// 	  text
// 	}
//  }
