const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
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
  },
  {
    timestamps: true, // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  },
);

PostSchema.virtual('posts', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'post',
  justOne: false,
  options: { sort: { updatedAt: -1 } },
});

PostSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Post', PostSchema);
