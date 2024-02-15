import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../redux/types/actionTypes";
import { loginUser, logoutUser } from "../redux/actions/UserAction";

function UserProfile() {
  const user = useSelector((state: { user: UserState }) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser("gulnarHagverdiyeva", "123456"));
  };

  const handleLogut = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      {user.isLogged ? (
        <>
          <p>Welcome , {user.username}</p>
          <button onClick={handleLogut}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Logoin</button>
      )}
    </div>
  );
}

export default UserProfile;
