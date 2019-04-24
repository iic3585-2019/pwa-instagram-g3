import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/auth';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(signOut());
  }

  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <ul className="nav flex-column top-padded">
        {isAuthenticated ? (
          <div>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                {user.name}
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink onClick={this.onClick} to="/logout" className="nav-link">
                Logout
              </NavLink>
            </li>
          </div>
        ) : (
          <div>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Register
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.user !== null,
    user: state.auth.user,
  };
}

export default connect(mapStateToProps)(Sidebar);
