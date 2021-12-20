const initialState = {
	filter: {
		showAll: false,
		withoutTrans: false,
		oneTrans: false,
		twoTrans: false,
		threeTrans: false,
	},
	cheapestTab: true,
}

const reducer = (state = initialState, action) => {
	const newState = {...state};

	switch (true) {
		case action.type === 'ALL' && newState.filter.showAll:
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
			newState.filter.showAll = false;
			newState.filter.withoutTrans = !newState.filter.withoutTrans;
			return newState;

		case action.type === 'ONE':
			newState.filter.showAll = false;
			newState.filter.oneTrans = !newState.filter.oneTrans;
			return newState;

		case action.type === 'TWO':
			newState.filter.showAll = false;
			newState.filter.twoTrans = !newState.filter.twoTrans;
			return newState;

		case action.type === 'THREE':
			newState.filter.showAll = false;
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