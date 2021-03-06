import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

import { useEffect } from "react";
import { isLoggedIn } from "../actions";
// import Navigationbar from '../components/Navigation/Navbar/Navbar';

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const history = useHistory();

  //   const isOrderPage = history.location.pathname !== '/order';

  //   const isCheckout = history.location.pathname === '/cart-checkout';

  useEffect(() => {
    if (!isAuthenticated) {
      isLoggedIn(dispatch);
    }
  }, [isAuthenticated, dispatch]);

  if (isLoading) return "loading";

  return (
    <>
      {isAuthenticated && !isLoading ? (
        <>
          <div className=" container-fluid p-3 overflow-auto h-100vh">
            {children}
          </div>
        </>
      ) : (
        <>
          <Redirect to="/sign-in" />
        </>
      )}
    </>
  );
};
export default ProtectedRoutes;
