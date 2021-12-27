const initialState = {
  checkAll: true,
  withoutTrans: true,
  oneTrans: true,
  twoTrans: true,
  threeTrans: true,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (true) {
    case action.type === 'ALL' && newState.checkAll:
      for (const key in newState) {
        if (key) {
          newState[key] = false;
        }
      }
      return newState;

    case action.type === 'ALL':
      for (const key in newState) {
        if (key) {
          newState[key] = true;
        }
      }
      return newState;

    case action.type === 'NONE':
      newState.checkAll = false;
      newState.withoutTrans = !newState.withoutTrans;
      return newState;

    case action.type === 'ONE':
      newState.checkAll = false;
      newState.oneTrans = !newState.oneTrans;
      return newState;

    case action.type === 'TWO':
      newState.checkAll = false;
      newState.twoTrans = !newState.twoTrans;
      return newState;

    case action.type === 'THREE':
      newState.checkAll = false;
      newState.threeTrans = !newState.threeTrans;
      return newState;

    default:
      return state;
  }
};

export default reducer;
