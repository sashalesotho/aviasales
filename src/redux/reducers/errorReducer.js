const initialState = {
  ticketsErr: false,
  moreTicketsErr: false,
  searchIdErr: false,
};

const errorReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (true) {
    case action.type === 'TICKETS_ERROR':
      newState.ticketsErr = true;
      return newState;

    case action.type === 'SEARCH_ID_ERROR':
      newState.searchIdErr = true;
      return newState;

    case action.type === 'MORE_TICKETS_ERROR':
      newState.moreTicketsErr = true;
      return newState;

    default:
      return state;
  }
};
export default errorReducer;
