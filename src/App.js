import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Components
import { NavBar } from "./components/NavBar";

// Pages
import { Home } from "./pages/Home";
import { SignIn } from "./pages/Log/SignIn";
import { SignUp } from "./pages/Log/SignUp";
import { Profile } from "./pages/profile/Profile";
import ProtectedRoutes from "./HOC/ProtectedRoutes";

import { Questions } from "./pages/profile/Questions";

function App() {
  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoutes>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/questions" component={Questions} />
        </ProtectedRoutes>
      </Switch>
    </Router>
  );
}

export default App;
