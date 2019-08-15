import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import HeaderBase from '../header/HeaderBase';
// import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
import Category from './Category';
import News from './News';
import { store } from '../store';
import { connect } from 'unistore/react';
import { actions } from '../store';

// import { Redirect } from 'react-router-dom';

// const is_login = JSON.parse(localStorage.getItem('is_login'));

class Routing extends React.Component {
  postSignOut = () => {
    // const self = this;
    console.log(this.props.is_login);
    this.props.setLogin(false);
    console.log(this.props.is_login);
    // localStorage.setItem('is_login', null);

    // return <Redirect to={{ pathname: '/' }} />;
    // self.props.history.push('/');
  };

  render() {
    return (
      <Router>
        <HeaderBase searchChange="" />
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/signin" component={SignIn} />
          <Route path="/category/:source_name" component={Category} />

          <Route path="/signup" component={SignIn} />
          <Route path="/profile" component={Profile} />
          {/* <Route path ="/signup" component= {}/> */}
        </Switch>
      </Router>
    );
  }
}

export default connect(
  'is_login',
  actions,
)(Routing);
