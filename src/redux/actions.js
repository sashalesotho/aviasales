import { nanoid } from 'nanoid';

export const all = () => ({ type: 'ALL' });
export const none = () => ({ type: 'NONE' });
export const one = () => ({ type: 'ONE ' });
export const two = () => ({ type: 'TWO' });
export const three = () => ({ type: 'THREE' });
export const cheapest = () => ({ type: 'CHEAPEST' });
export const fastest = () => ({ type: 'FASTEST' });

export const setSearchId = (payload) => ({ type: 'SEARCH_ID', payload});
export const getSearchId = () => async (dispatch) => {
	let res = await fetch(`https://front-test.beta.aviasales.ru/search`);
	res = await res.json();
	dispatch(setSearchId(res.searchId));
	return res.searchId;
};

export const setTickets = (payload) => ({ type: 'TICKETS', payload });
export const getTickets = (id) => async (dispatch) => {
	let res = await fetch(`https://front-test.beta.aviasales.ru/searchId=${id}`);
	res = await res.json();
	const resWithIds = res.tickets.map((item) => {
		item.id = nanoid();
		return item;
	})
	dispatch(setTickets(resWithIds));
}

// function addTodo(text) {
// 	return {
// 	  type: ADD_TODO,
// 	  text
// 	}
//  }
