import axios from "axios";

function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export const loginUser = (dispatch, data) => {
  setAuthorizationToken(data.accessToken);

  localStorage.setItem("auth-admin", JSON.stringify(data));

  dispatch({
    type: "USER_LOGIN",
    payload: data,
  });
};
export const isLoggedIn = (dispatch) => {
  dispatch({
    type: "IS_USER_LOGIN",
  });
};

export const logOut = (dispatch) => {
  localStorage.clear();

  dispatch({
    type: "LOGOUT",
  });
};
