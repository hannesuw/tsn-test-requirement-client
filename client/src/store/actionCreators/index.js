import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADING,
  SET_USER,
  SET_USER_LOADING,
  SET_USER_ERROR,
} from "../actionTypes";
import { baseUrl } from "../../apis/http";

const setUsers = (payload) => {
  return { type: SET_USERS, payload };
};

const setUsersLoading = (payload) => {
  return { type: SET_USERS_LOADING, payload };
};

const setUsersError = (payload) => {
  return { type: SET_USERS_ERROR, payload };
};

export const setUser = (payload) => {
  return { type: SET_USER, payload };
};

const setUserLoading = (payload) => {
  return { type: SET_USER_LOADING, payload };
};

const setUserError = (payload) => {
  return { type: SET_USER_ERROR, payload };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(setUsersLoading(true));
    dispatch(setUsersError(null));
    try {
      const { data: users } = await baseUrl.get("/users");
      dispatch(setUsers(users));
    } catch (err) {
      dispatch(setUsersError(err));
    } finally {
      dispatch(setUsersLoading(false));
    }
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    dispatch(setUserLoading(true));
    dispatch(setUserError(null));
    try {
      const { data: user } = await baseUrl.get(`/users/${id}`);
      dispatch(setUser(user));
    } catch (err) {
      dispatch(setUserError(err));
    } finally {
      dispatch(setUserLoading(false));
    }
  };
};

export const createUser = (formData) => {
  return async () => {
    try {
      const { data: user } = await baseUrl.post(`/users`, formData);
      return user;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getStore) => {
    const { users } = getStore();
    try {
      const { data } = await baseUrl.delete(`/users/${id}`);
      const newData = users.filter((user) => user._id !== data._id);
      dispatch(setUsers(newData));
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

export const editUser = (id, formData) => {
  return async () => {
    try {
      const { data } = await baseUrl.put(`/users/${id}`, formData);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };
};
