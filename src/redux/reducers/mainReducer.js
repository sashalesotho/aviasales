const initialState = { 
	loading: true, 
	ticketsToShow: 10,
	searchId: null,
	tickets: [],
	cheapestTab: true,
	fastestTab: false,
	optimalTab: false,
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
		newState.fastestTab = false;
		newState.optimalTab = false;
		return newState;
 
	case action.type === 'FASTEST':
		newState.cheapestTab = false;
		newState.fastestTab = true;
		newState.optimalTab = false;
		return newState;

	case action.type === 'OPTIMAL':
		newState.cheapestTab = false;
		newState.fastestTab = false;
		newState.optimalTab = true;
		return newState;
 
	  default:
		 return state;
	}
 };
 
 export default reducer;
 