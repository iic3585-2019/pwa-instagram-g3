const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
  },
  img: {
    type: String,
  },
});

PostSchema.virtual('posts', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'post',
  justOne: false,
  options: { sort: { updatedAt: -1 } },
});

PostSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Post', PostSchema);
