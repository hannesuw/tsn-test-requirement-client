import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADING,
  SET_USER,
  SET_USER_LOADING,
  SET_USER_ERROR,
} from "../actionTypes";

const intialState = {
  users: [],
  usersLoading: true,
  usersError: null,
  user: {},
  userLoading: true,
  userError: null,
};

export const rootReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };

    case SET_USERS_LOADING:
      return { ...state, usersLoading: payload };

    case SET_USERS_ERROR:
      return { ...state, usersError: payload };

    case SET_USER:
      return { ...state, user: payload };

    case SET_USER_LOADING:
      return { ...state, userLoading: payload };

    case SET_USER_ERROR:
      return { ...state, userError: payload };

    default:
      return state;
  }
};
