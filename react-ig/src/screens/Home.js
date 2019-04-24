import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAllPosts from '../actions/user';
import Uploader from '../components/Uploader';

class Home extends Component {
  componentDidMount() {
    const {
      match: { params },
      dispatch,
      user,
    } = this.props;
    if (user) {
      dispatch(getAllPosts());
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    return <div>{isAuthenticated && <Uploader {...this.props} />}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.auth.user,
  isAuthenticated: state.auth.user !== null,
});
export default connect(mapStateToProps)(Home);
