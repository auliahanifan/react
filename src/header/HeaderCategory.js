import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  postSignout = () => {
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
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand">SearchNow</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // value={this.state.value}
                onChange={this.props.searchChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default connect(
  'email, full_name, is_login',
  actions,
)(Header);
