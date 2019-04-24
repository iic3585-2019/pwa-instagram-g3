import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
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
