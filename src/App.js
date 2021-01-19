import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components/Footer';

// Components
import { NavBar } from './components/NavBar';

// Pages
import { Home } from './pages/Home';
import { MarketPlace } from './pages/MarketPlace';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { SignIn } from './pages/Log/SignIn';
import { SignUp } from './pages/Log/SignUp';
import { Profile } from './pages/profile/Profile';
import { ProfileDetails } from './pages/profile/ProfileDetails';
import { ProfilePost } from './pages/profile/ProfilePost';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* <Route exact path='/home' component={Home} />
        <Route exact path='/market' component={MarketPlace} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/contact' component={ContactUs} /> */}
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/' component={Profile} />
        <Route exact path='/profileDetails' component={ProfileDetails} />
        <Route exact path='/profilePost' component={ProfilePost} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
