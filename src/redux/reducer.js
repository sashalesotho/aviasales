const initialState = {
	filter: {
		checkAll: false,
		withoutTrans: false,
		oneTrans: false,
		twoTrans: false,
		threeTrans: false,
	},
	cheapestTab: true,

	searchId: null,

	tickets: [],
}

const reducer = (state = initialState, action) => {
	const newState = {...state};

	switch (true) {
		case action.type === 'TICKETS':
			newState.tickets = action.payload;
			return newState;

		case action.type === 'SEARCH_ID':
			newState.searchId = action.payload;
			return newState;

		case action.type === 'ALL' && newState.filter.checkAll:
			for (const key in newState.filter) {
				if (key) {
					newState.filter[key] = false;
				}
			}
			return newState;

		case action.type === 'ALL':
			for (const key in newState.filter) {
				if (key) {
					newState.filter[key] = true;
				}
			}
			return newState;
		
		case action.type === 'NONE':
			newState.filter.checkAll = false;
			newState.filter.withoutTrans = !newState.filter.withoutTrans;
			return newState;

		case action.type === 'ONE':
			newState.filter.checkAll = false;
			newState.filter.oneTrans = !newState.filter.oneTrans;
			return newState;

		case action.type === 'TWO':
			newState.filter.checkAll = false;
			newState.filter.twoTrans = !newState.filter.twoTrans;
			return newState;

		case action.type === 'THREE':
			newState.filter.checkAll = false;
			newState.filter.threeTrans = !newState.filter.threeTrans;
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
}

export default reducer;