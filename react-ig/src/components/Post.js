import React from 'react';

const styles = {
  postUser: {
    fontWeight: 'bold',
  },
  info: {
    margin: 2,
  },
};

const Post = ({ post, onClick }) => (
  <div className="col">
    <p style={{ ...styles.postUser, ...styles.info }}>{post.user.name}</p>
    <p style={styles.info}>{post.createdAt}</p>
    <img src={require(`../static/images/${post.img}`)} />
  </div>
);

export default Post;
