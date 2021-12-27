import { nanoid } from 'nanoid';

const ALL = 'ALL';
const NONE = 'NONE';
const ONE = 'ONE';
const TWO = 'TWO';
const THREE = 'THREE';
const CHEAPEST = 'CHEAPEST';
const FASTEST = 'FASTEST';
const OPTIMAL = 'OPTIMAL';
const SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS';
const MORE_TICKETS_ERROR = 'MORE_TICKETS_ERROR';
const SEARCH_ID_ERROR = 'SEARCH_ID_ERROR';
const TICKETS_ERROR = 'TICKETS_ERROR';
const SEARCH_ID = 'SEARCH_ID';
const TICKETS = 'TICKETS';
const MORE_TICKETS = 'MORE_TICKETS';

export const all = () => ({ type: ALL });
export const none = () => ({ type: NONE });
export const one = () => ({ type: ONE });
export const two = () => ({ type: TWO });
export const three = () => ({ type: THREE });
export const cheapest = () => ({ type: CHEAPEST });
export const fastest = () => ({ type: FASTEST });
export const optimal = () => ({ type: OPTIMAL });

export const showMoreTickets = () => ({ type: SHOW_MORE_TICKETS });

export const setMoreTicketsErr = () => ({ type: MORE_TICKETS_ERROR });
export const setSearchIdErr = () => ({ type: SEARCH_ID_ERROR });
export const setTicketsErr = () => ({ type: TICKETS_ERROR });

export const setSearchId = (payload) => ({ type: SEARCH_ID, payload });
export const setTickets = (payload) => ({ type: TICKETS, payload });
export const setMoreTickets = (payload) => ({ type: MORE_TICKETS, payload });

// eslint-disable-next-line consistent-return
export const getSearchId = () => async (dispatch) => {
  let res = await fetch(`https://front-test.beta.aviasales.ru/search`);
  if (res.ok) {
    res = await res.json();
    dispatch(setSearchId(res.searchId));
    return res.searchId;
  }
  dispatch(setSearchIdErr());
};

export const getTickets = (srcId) => async (dispatch) => {
  let res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${srcId}`);
  if (res.ok) {
    res = await res.json();
    const resWithId = res.tickets.map((item) => {
      // eslint-disable-next-line no-param-reassign
      item.id = nanoid();
      return item;
    });
    dispatch(setTickets(resWithId));
  } else dispatch(setTicketsErr());
};

export const getMoreTickets = (srcId) => async (dispatch) => {
  const moreTickets = [];
  for (let i = false; i !== true; ) {
    // eslint-disable-next-line no-await-in-loop
    let response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${srcId}`);
    if (response.ok) {
      if (response.stop === true) {
        break;
      }
      // eslint-disable-next-line no-await-in-loop
      response = await response.json();
      response = response.tickets.map((item) => {
        // eslint-disable-next-line no-param-reassign
        item.id = nanoid();
        return item;
      });
      moreTickets.push(...response);
    } else {
      dispatch(setMoreTicketsErr());
      break;
    }
  }
  dispatch(setMoreTickets(moreTickets));
};
