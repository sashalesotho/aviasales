const initialState = {
	filter: {
		checkAll: false,
	},
	tabCheap: true,
}

const reducer = (state = initialState, actions) => {
	const newState = {...state};

	switch (true) {
		case actions.type === 'ALL' && newState.filter.checkAll:
			for (const key in newState.filter) {
				if (key) {
					newState.filter[key] = false;
				}
			}

			return newState;

		case actions.type === 'ALL':
			for (const key in newState.filter) {
				if (key) {
					newState.filter[key] = true;
				}
			}

			default:
				return state;
	}
}

export default reducer;