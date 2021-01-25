const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  token: "",
};
const loginUser = (state = initialState, action) => {
  let payload = null;
  if (localStorage.getItem("auth-admin") !== null) {
    payload = JSON.parse(localStorage.getItem("auth-admin"));
    // const {token, user} = JSON.parse(payload);
  }

  switch (action.type) {
    case "USER_LOGIN":
      return Object.assign({}, state, {
        user: action.payload.data,
        token: action.payload.accessToken,
        isAuthenticated: true,
        isLoading: false,
      });

    case "IS_USER_LOGIN":
      if (payload !== null) {
        return Object.assign({}, state, {
          user: payload.data,
          token: payload.accessToken,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        return Object.assign({}, state, {
          isLoading: false,
        });
      }

    case "LOGOUT":
      return Object.assign({}, state, {
        isAuthenticated: false,
        user: null,
        token: "",
      });

    default:
      return state;
  }
};
export default loginUser;
