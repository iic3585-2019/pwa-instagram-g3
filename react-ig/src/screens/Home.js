import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts, sendPost } from '../actions/user';
import Uploader from '../components/Uploader';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  handleSubmit(data) {
    const { dispatch } = this.props;
    dispatch(sendPost(data));
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>{isAuthenticated && <Uploader handleSubmit={this.handleSubmit} {...this.props} />}</div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.auth.user,
  isAuthenticated: state.auth.user !== null,
});
export default connect(mapStateToProps)(Home);
