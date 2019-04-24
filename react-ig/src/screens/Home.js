import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAllPosts from '../actions/user';

class Home extends Component {
  componentDidMount() {
    const {
      match: { params },
      dispatch,
    } = this.props;
    dispatch(getAllPosts());
  }

  render() {
    return (
      <div>
        <p>Hello from home</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});
export default connect(mapStateToProps)(Home);
