import { USER_LOGIN, USER_LOGOUT } from "./types";

export const loginUser = (username: string, password: string) => ({
  type: USER_LOGIN,
  payload: {
    username,
    password,
  },
});

export const logoutUser = () => ({
  type: USER_LOGOUT,
});
