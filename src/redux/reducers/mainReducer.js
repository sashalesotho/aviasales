const initialState = { 
	loading: true, 
	ticketsToShow: 10,
	searchId: null,
	tickets: [],
	cheapestTab: true,
 };
 
 const reducer = (state = initialState, action) => {
	const newState = { ...state };
 
	switch (true) {
	  
	  case action.type === 'SHOW_MORE_TICKETS':
		 newState.ticketsToShow += 5;
		 return newState;
 
	  case action.type === 'MORE_TICKETS':
		 newState.tickets.push(...action.payload);
		 newState.loading = false;
		 return newState;
 
	  case action.type === 'TICKETS':
		 newState.tickets = action.payload;
		 return newState;
 
	  case action.type === 'SEARCH_ID':
		 newState.searchId = action.payload;
		 return newState;
 
	  case action.type === 'CHEAPEST':
		 newState.cheapestTab = true;
		 return newState;
 
	  case action.type === 'FASTEST':
		 newState.cheapestTab = false;
		 return newState;
 
	  default:
		 return state;
	}
 };
 
 export default reducer;
 