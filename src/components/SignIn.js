import React from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';

const is_login = JSON.parse(localStorage.getItem('is_login'));

class SignIn extends React.Component {
  state = { username: '', password: '' };
  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postLogin = () => {
    const { email, password } = this.state;
    const data = {
      email: email,
      password: password,
    };
    const self = this;
    axios
      .post('https://auliapoint.free.beeceptor.com/login', data)
      .then(function(response) {
        console.log(response.data);
        if (response.data.hasOwnProperty('api_key')) {
          localStorage.setItem('api_key', response.data.api_key);
          localStorage.setItem('is_login', true);
          localStorage.setItem('full_name', response.data.full_name);
          localStorage.setItem('email', response.data.email);
          self.props.history.push('/profile');
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    // console.log(is_login);
    if (is_login !== null) {
      return <Redirect to={{ pathname: '/profile' }} />;
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => this.changeInput(e)}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={e => this.changeInput(e)}
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => this.postLogin()}
          >
            Submit
          </button>
        </form>
      );
    }
  }
}

export default withRouter(SignIn);
