const initialState = {
	filter: {
		all: false,
		withoutTrans: false,
		oneTrans: false,
		twoTrans: false,
		threeTrans: false,
	},
	cheapest: true,
}

const reducer = (state = initialState, action) => {
	const newState = {...state};

	switch (true) {
		case action.type === 'ALL' && newState.filter.all:
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

		default:
				return state;
	}
}

export default reducer;