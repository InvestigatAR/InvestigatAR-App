const USER_SESSION_INITIAL_STATE = {
  current: undefined,
};

export const userSessionReducer = (
  state = USER_SESSION_INITIAL_STATE,
  action: any,
) => {
  let {current} = state;

  switch (action.type) {
    case 'SET_USER_SESSION':
      current = action.payload;

      const newUserState = {current};

      return newUserState;
    default:
      return state;
  }
};
