import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signUp } from '../actions/auth';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  submitButton: {
    alignSelf: 'flex-start',
  },
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      isHealthPro: false,
      rut: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]:
        event.target.name !== 'isHealthPro' ? event.target.value : !this.state.isHealthPro,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(signUp(this.state, this.props.history));
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter your name. Ex: Jonh Doe"
          />
        </div>
        <div className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Signup);
