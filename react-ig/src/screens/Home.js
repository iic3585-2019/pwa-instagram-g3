import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts, sendPost } from '../actions/user';
import Uploader from '../components/Uploader';
import Post from '../components/Post';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { hidden: true };
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
    this._onClick = this._onClick.bind(this);
  }

  handleSubmit(data) {
    const { dispatch } = this.props;
    dispatch(sendPost(data));
  }

  _onClick() {
    this.setState(prevState => ({
      hidden: !prevState.hidden,
    }));
  }

  render() {
    const { isAuthenticated } = this.props;
    const { hidden } = this.state;
    return (
      <div>
        <button type="button" className="btn btn-light" onClick={this._onClick}>
          {hidden ? 'Share Post' : 'Cancel'}
        </button>
        <div style={{ display: hidden ? 'none' : '' }}>
          {isAuthenticated && <Uploader handleSubmit={this.handleSubmit} {...this.props} />}
        </div>
        <h1>Posts</h1>
        <div className="flex-grid">
          {this.props.posts && this.props.posts.map(post => <Post post={post} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.data,
  user: state.auth.user,
  isAuthenticated: state.auth.user !== null,
});
export default connect(mapStateToProps)(Home);
