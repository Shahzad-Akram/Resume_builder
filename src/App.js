import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import { NavBar } from './components/NavBar';

// Pages
import { Home } from './pages/Home';
import { SignIn } from './pages/Log/SignIn';
import { SignUp } from './pages/Log/SignUp';
import { Profile } from './pages/profile/Profile';

import { Questions } from './pages/profile/Questions';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/questions' component={Questions} />
      </Switch>
    </Router>
  );
}

export default App;
