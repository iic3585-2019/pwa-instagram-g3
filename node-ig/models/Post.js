const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
  },
  text: {
    type: String,
  },
  img: {
    type: String,
  },
  likes: [{
    type: Schema.Types.ObjectId, ref: 'Like',
  }],
});

module.exports = mongoose.model('Post', PostSchema);
