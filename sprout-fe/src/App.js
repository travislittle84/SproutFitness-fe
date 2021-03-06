import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import Dashboard from './components/dashb';
import DisplayProfile from './components/coachprofile/displayProfile/DisplayProfile';
import CoachDetails from './components/coachprofile/CoachDetails';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import NotFound from './components/layout/NotFound';
import ForgotPassword from './components/auth/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword'


function App() {
  return (
    <div className="App">
      <header className="App-header header-nav">
        <Navbar />
      </header>
       <div className="Site-content">
      <Switch>
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={SignupForm} />
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/profile' component={DisplayProfile} />
        <Route exact path='/edit-profile' component={CoachDetails} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route exact path='/reset-password/:token' component={ResetPassword} />
        <Route component={NotFound} />
      </Switch>
      </div>
      <Footer />
    </div>
  )
}


export default App


