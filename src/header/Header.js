import React from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">aulNEWS</a>
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>{' '}
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  News <span className="sr-only">(current)</span>
                </Link>{' '}
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/profile">
                  Profile <span className="sr-only">(current)</span>
                </Link>{' '}
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/signup">
                  Sign Up <span className="sr-only">(current)</span>
                </Link>{' '}
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/signin">
                  Sign In <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" onClick={this.props.postSignout}>
                  Sign Out <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>

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

export default Header;
