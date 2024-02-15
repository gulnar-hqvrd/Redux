import { act } from "react-dom/test-utils";
import { USER_LOGIN, USER_LOGOUT } from "../actions/types";
import { UserState } from "../types/actionTypes";

const initialState: UserState = {
  username: "",
  password: "",
  isLogged: false,
  loading: true,
};

const UserReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        isLogged: action.payload.isLogged,
        loading: false,
      };

    case USER_LOGOUT:
      return {
        ...state,
        username: "",
        password: "",
        isLogged: false,
        loading: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
