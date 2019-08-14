import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from '../header/Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
import News from './News';
import { Redirect } from 'react-router-dom';

// const is_login = JSON.parse(localStorage.getItem('is_login'));

class Routing extends React.Component {
  postSignOut = () => {
    // const self = this;
    localStorage.removeItem('is_login');
    // localStorage.setItem('is_login', null);

    // return <Redirect to={{ pathname: '/' }} />;
    // self.props.history.push('/');
  };

  render() {
    return (
      <Router>
        <Header searchChange="" postSignOut={this.postSignOut()} />
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignIn} />
          <Route path="/profile" component={Profile} />
          {/* <Route path ="/signup" component= {}/> */}
        </Switch>
      </Router>
    );
  }
}

export default Routing;
