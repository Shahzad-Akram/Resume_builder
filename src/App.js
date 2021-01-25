import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import { NavBar } from './components/NavBar';

// Pages
import { ProfileView } from './pages/view/ProfileView';
import { SignIn } from './pages/Log/SignIn';
import { SignUp } from './pages/Log/SignUp';
import { Profile } from './pages/profile/Profile';

import { Questions } from './pages/profile/Questions';
import { QuestionsView } from './pages/view/QuestionsView';
import { Admin } from './pages/profile/Admin';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ProfileView} />
        <Route exact path='/questions-view' component={QuestionsView} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/questions' component={Questions} />
      </Switch>
    </Router>
  );
}

export default App;
